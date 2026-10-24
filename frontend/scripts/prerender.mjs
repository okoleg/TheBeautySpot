import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const frontendDir = new URL('..', import.meta.url).pathname
const distDir = join(frontendDir, 'dist')
const serverEntry = pathToFileURL(join(frontendDir, 'dist-ssr', 'entry-server.js')).href
const { render, publicRoutes } = await import(serverEntry)
const template = await readFile(join(distDir, 'index.html'), 'utf8')

const escapeAttribute = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const escapeJson = value => JSON.stringify(value).replaceAll('<', '\\u003c')

function replaceMeta(html, selector, value) {
  const [attribute, key] = selector
  const pattern = new RegExp(`<meta([^>]*${attribute}=["']${key}["'][^>]*)>`, 'i')
  return html.replace(pattern, match => match.replace(/content=["'][^"']*["']/i, `content="${escapeAttribute(value)}"`))
}

function pageHtml(pathname) {
  const { html: appHtml, seo } = render(pathname)
  let html = template.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`)
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(seo.title)}</title>`)
  html = replaceMeta(html, ['name', 'description'], seo.description)
  html = replaceMeta(html, ['name', 'robots'], seo.robots)
  html = replaceMeta(html, ['property', 'og:title'], seo.title)
  html = replaceMeta(html, ['property', 'og:description'], seo.description)
  html = replaceMeta(html, ['property', 'og:url'], seo.canonical)
  html = replaceMeta(html, ['property', 'og:image'], seo.image)
  html = replaceMeta(html, ['name', 'twitter:title'], seo.title)
  html = replaceMeta(html, ['name', 'twitter:description'], seo.description)
  html = replaceMeta(html, ['name', 'twitter:image'], seo.image)
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${escapeAttribute(seo.canonical)}" />`)
  if (seo.structuredData.length) {
    html = html.replace('</head>', () => `    <script id="seo-structured-data" type="application/ld+json">${escapeJson(seo.structuredData)}</script>\n  </head>`)
  }
  return { html, seo }
}

for (const route of publicRoutes) {
  const { html } = pageHtml(route)
  const output = route === '/' ? join(distDir, 'index.html') : join(distDir, `${route.slice(1)}.html`)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}

const notFound = pageHtml('/not-found').html
await writeFile(join(distDir, '404.html'), notFound)

const homeSeo = render('/').seo
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(route => `  <url><loc>${escapeAttribute(render(route).seo.canonical)}</loc></url>`).join('\n')}
</urlset>
`
await writeFile(join(distDir, 'sitemap.xml'), sitemap)

const robots = homeSeo.robots.startsWith('noindex')
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\n\nSitemap: ${homeSeo.canonical}sitemap.xml\n`
await writeFile(join(distDir, 'robots.txt'), robots)
await rm(join(frontendDir, 'dist-ssr'), { recursive: true, force: true })
