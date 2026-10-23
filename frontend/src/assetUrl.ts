export const ASSET_VERSION = '20261023-6'

/** Add one shared cache-busting version to local public assets. */
export function assetUrl(path: string) {
  if (!path.startsWith('/')) return path

  const [pathname, query = ''] = path.split('?')
  const params = new URLSearchParams(query)
  params.set('v', ASSET_VERSION)

  return `${pathname}?${params.toString()}`
}
