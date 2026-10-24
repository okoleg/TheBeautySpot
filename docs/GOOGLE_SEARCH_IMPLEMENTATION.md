# Google Search Implementation and Rules

## Purpose

This document records how The Beauty Spot website is prepared for Google Search and local search. It explains what has been implemented, which rules future changes must follow, how development differs from production, and which tasks still require access to Google accounts.

The primary search location is **Needham, Massachusetts**. The primary business information is:

- Business name: The Beauty Spot
- Address: 123 Highland Ave, Floor 3, Needham, MA 02494
- Phone: +1 617-319-2254
- Instagram: `@thebeautyspot_ma`
- Booking provider: Square Appointments

## Release history

- `v0.22.0` / commit `b5401dd` is the website checkpoint immediately before the SEO implementation.
- `v0.23.0` / commit `d50d6bb` contains the initial complete SEO implementation.
- Both tags and commits are stored in the GitHub repository.
- The SEO release was deployed to the development Firebase environment for testing.
- Production was intentionally left unchanged until an explicit production deployment request.

## Environments and indexing

### Development

- URL: `https://thebeautyspot-3e54c.web.app`
- Site URL is defined by `VITE_SITE_URL` in `frontend/.env.development`.
- Every page receives `noindex,nofollow,noarchive`.
- `robots.txt` contains `Disallow: /`.
- Development must never be submitted to Google Search Console for public indexing.
- Development exists for review and testing without competing with production in Google results.

### Production

- Firebase URL: `https://thebeautyspotma-af603.web.app`
- Site URL is defined by `VITE_SITE_URL` in `frontend/.env.production`.
- Public pages receive `index,follow,max-image-preview:large`.
- `robots.txt` allows crawling and points to the production sitemap.
- Production contains the configured Google Analytics measurement ID.
- When the custom domain is connected, `VITE_SITE_URL` must be changed to the preferred HTTPS custom domain before rebuilding and deploying.

### Environment rule

Never copy a development build into production or a production build into development. Always run the build command for the intended environment immediately before deployment:

```bash
# Development
cd frontend
npm run build

# Production
cd frontend
npm run build:production
```

The current project workflow deploys normal feature work to development. Production is deployed only after the owner explicitly requests it.

## Crawlable pages

The site generates complete HTML for search engines instead of sending an empty JavaScript shell. The following pages are pre-rendered during every build:

- Homepage
- Specials
- Skin Care
- Lashes
- Brows
- Body Care
- Makeup
- Hair Extensions
- Laser Hair Removal
- All seven specialist profile pages
- Branded 404 page

The route list is maintained in `frontend/src/routes.tsx`. Any new public service or specialist route must be included in this centralized route system so it is pre-rendered and added to the sitemap.

Pre-rendering is implemented by:

- `frontend/src/entry-server.tsx`
- `frontend/scripts/prerender.mjs`
- the `build` and `build:production` scripts in `frontend/package.json`

## Page metadata

Metadata is generated in `frontend/src/seo.ts` and inserted into the initial HTML during pre-rendering. Client-side navigation also updates the same metadata.

Every indexable page must have exactly one:

- HTML `<title>`
- meta description
- canonical URL
- robots directive
- Open Graph title
- Open Graph description
- Open Graph URL
- Open Graph image
- Twitter title
- Twitter description
- Twitter image
- visible `<h1>`

### Title rules

- Use a unique title for every page.
- Describe the actual page content first.
- Include `Needham, MA` when it reads naturally.
- Include `The Beauty Spot` where space permits.
- Keep titles concise and useful. Do not repeat the same keyword several times.
- Do not use promotional punctuation or all-uppercase keyword lists.

Examples:

- `Beauty Salon in Needham, MA | The Beauty Spot`
- `Facials & Skin Care in Needham, MA | The Beauty Spot`
- `Lash Extensions & Lash Lifts in Needham, MA | The Beauty Spot`

### Description rules

- Every description must accurately summarize its page.
- Mention the primary service and Needham location naturally.
- Use actual services and treatment names.
- Avoid unverified promises, guaranteed results, and repetitive keyword lists.
- Keep descriptions concise enough to be useful in search results.

### Canonical rules

- Every public page must point to its preferred production URL.
- Canonicals must never mix the development and production hosts.
- When the custom domain launches, all production canonicals must change to that domain in one release.
- Redirect alternate hosts and retired URLs to the preferred URL whenever possible.

## Structured data

JSON-LD structured data is generated in `frontend/src/seo.ts`.

### Local business

The homepage and applicable detail pages identify the business as a `BeautySalon` and include:

- business name
- website URL
- logo and image
- phone number
- price range
- complete postal address
- Needham service area
- opening hours
- Instagram profile
- Google Maps destination

### Services

Every service page includes `Service` structured data with:

- service name
- page description
- canonical URL
- service image
- Needham service area
- The Beauty Spot as the provider

### Specialists

Every specialist page includes `Person` structured data with:

- specialist name
- role
- biography summary
- portrait
- profile URL
- specialties
- The Beauty Spot as the workplace

### FAQs

Service pages include visible frequently asked questions and matching `FAQPage` structured data. The structured answer must always match text visible to website visitors.

### Structured-data rules

- Structured data must describe visible and accurate page content.
- Never add ratings, review totals, prices, credentials, or services that cannot be verified.
- Update address, hours, phone, team, and services in structured data whenever the visible website changes.
- Validate generated JSON-LD after changes. Dollar signs and other special characters must remain unchanged.
- Structured data can help Google understand the business but does not guarantee a rich result or ranking.

## Sitemap and crawler rules

The build generates:

- `/sitemap.xml`
- `/robots.txt`

The production sitemap contains the homepage, eight service pages, and seven specialist pages. A new indexable route must appear once in the sitemap using its canonical URL.

Do not add these to the sitemap:

- redirect URLs
- 404 pages
- hash links such as `/#services`
- development URLs
- duplicate or retired pages

The production `robots.txt` allows crawling and provides the sitemap URL. Development blocks all crawling.

## Redirects and 404 behavior

Firebase Hosting uses clean URLs and serves real pre-rendered files. Unknown URLs return the branded `404.html` with an HTTP 404 response and a `noindex,follow` directive.

Permanent redirects currently cover:

- the retired combined Brows & Lashes treatment route
- the retired Prices page
- retired service URLs that now lead to the appropriate Square booking category

Redirect rules are stored in `firebase.json`.

### Redirect rules

- Use `301` for a page that has permanently moved.
- Redirect to the most relevant replacement, not automatically to the homepage.
- Avoid redirect chains.
- Update internal links so visitors normally reach the final URL directly.
- Keep valuable retired URLs redirected when external sites or old search results may still reference them.

## On-page local content

The homepage has a stable visible heading that identifies the business and location. Animated marketing phrases are supporting text rather than the main heading.

Each service page includes:

- a service-specific H1
- `Needham, MA`
- a useful local introduction
- actual treatment details
- service-specific FAQs
- booking or contact action
- links to all other service categories

The service SEO copy and FAQs are maintained in `frontend/src/serviceSeo.ts`.

### Content rules

- Write for clients first and use search phrases naturally.
- Keep Needham as the primary location.
- Mention nearby cities only when the business genuinely serves them and the sentence is useful.
- Do not create near-duplicate pages that only replace one city name with another.
- Do not hide SEO text or add blocks of keywords.
- Use original descriptions based on services actually offered.
- Mark unavailable services clearly. Laser Hair Removal remains `Coming Soon` until it can be booked.
- Keep pricing, durations, treatment availability, team roles, and credentials accurate.
- Use careful language for beauty-treatment outcomes and avoid medical or guaranteed-result claims.

## Target search topics

Primary topics:

- beauty salon Needham MA
- esthetician Needham MA
- facials Needham MA
- skin care Needham MA
- lash extensions Needham MA
- lash lift Needham MA
- brow lamination Needham MA
- eyebrow tinting Needham MA
- makeup artist Needham MA
- bridal makeup Needham MA
- LPG Endermologie Needham MA
- body sculpting Needham MA
- K-Tip hair extensions Needham MA
- hair extensions Needham MA

Secondary local topics may include Needham Heights, Wellesley, and Newton when they are relevant to real service-area content. These phrases are topics to answer, not a list to repeat on every page.

## Internal links

- The homepage links to every service and specialist page.
- Every service detail page links back to all services and to the other seven service categories.
- Every specialist page links to related services and other specialist profiles.
- Booking actions link to Square, except Hair Extensions, which directs visitors to the contact form for consultation.
- Navigation links to homepage sections must use root-based URLs such as `/#services` so they work from detail pages.

### Internal-link rules

- Use descriptive labels such as `View all services`, `Read profile`, or the service name.
- Avoid generic labels when a clearer destination can be named.
- Check that each new page is reachable through normal links and is not orphaned.
- Keep the service order consistent: Specials, Skin Care, Lashes, Brows, Body Care, Makeup, Hair Extensions, Laser Hair Removal.

## Images and social previews

- Every service and specialist page has a relevant social-sharing image.
- Meaningful visible images require accurate alternative text.
- Decorative images may use an empty alternative value.
- Keep images compressed and correctly sized to protect page speed.
- Do not replace image URLs with third-party temporary links.
- Continue using versioned local image URLs when replacing an asset under the same filename so visitors receive the new image after deployment.
- Add real, original treatment and studio photography whenever possible.

## Analytics and conversions

`frontend/src/analytics.ts` loads Google Analytics only when `VITE_GA_MEASUREMENT_ID` is configured. The production environment contains measurement ID `G-38V64FP891`.

Tracked actions include:

- booking clicks
- phone clicks
- directions clicks
- Instagram clicks
- successful contact-form submissions

### Analytics rules

- Do not put analytics credentials or service-account secrets in browser code.
- Treat the Google Analytics measurement ID as public configuration, not a private secret.
- Keep event names stable so reports remain comparable.
- Track successful form submission only after the form provider accepts the submission.
- Do not send message text or other sensitive form values to analytics.

## Google Search Console tasks

These actions require access to the business's Google account and cannot be completed by a website build alone:

1. Add and verify the final public domain after the custom domain is connected.
2. Until then, optionally add the production Firebase URL as a URL-prefix property.
3. Submit the production `/sitemap.xml`.
4. Inspect the homepage and every service page.
5. Confirm Google can crawl the pages and request indexing after production deployment.
6. Monitor indexing, Core Web Vitals, enhancements, security issues, and manual actions.
7. Review search queries, impressions, clicks, click-through rate, and average position monthly.

Do not submit the development Firebase URL because it is intentionally blocked from indexing.

## Google Business Profile tasks

1. Use the exact business name `The Beauty Spot` without adding search keywords to the name.
2. Keep the address and phone identical to the website.
3. Select the most accurate primary category available in Google Business Profile.
4. Add only relevant secondary categories.
5. Add all current services with accurate descriptions.
6. Keep Laser Hair Removal marked unavailable until it launches.
7. Add the Square booking link and website link.
8. Upload current exterior, entrance, studio, team, and treatment photos.
9. Publish useful updates for specials, new services, and team news.
10. Ask satisfied clients for honest reviews and reply professionally to every review.

Do not offer rewards in exchange for positive reviews and do not create reviews for clients.

## Local authority and citations

- Keep the business name, address, and phone identical across Google, Square, Instagram, and reputable directories.
- Correct outdated listings when found.
- Prefer accurate local and beauty-industry listings over large quantities of low-quality directory submissions.
- Seek legitimate mentions from Needham organizations, photographers, wedding vendors, wellness businesses, and local publications.
- Never buy large bundles of backlinks or participate in unrelated link exchanges.

## Future content opportunities

Add content only when there is enough original and accurate information to answer a client question. Useful future pages or guides may cover:

- preparing for a first facial
- DMK Enzyme Therapy
- Glo2Facial
- buccal facial massage
- choosing a lash style
- lash extension aftercare
- brow lamination preparation and aftercare
- K-Tip consultation and aftercare
- LPG Endermologie expectations
- bridal and event makeup planning

Each guide should link to the relevant service page and include original salon expertise. Avoid producing many short pages with nearly identical text.

## Validation before deployment

Run these checks for every SEO-affecting release:

```bash
cd frontend
npm run lint
npm run build
npm run build:production
```

Verify the generated files and live environment:

- each public page has one title, description, canonical, robots directive, and H1
- JSON-LD parses successfully
- production canonicals use only the production host
- development canonicals use only the development host
- production pages are indexable
- development pages are noindex and development `robots.txt` blocks crawling
- sitemap URLs are unique and complete
- direct detail-page requests return 200
- retired routes return the intended 301
- nonexistent routes return 404
- booking, phone, directions, contact, and internal navigation still work
- visible structured-data facts match the page

## Deployment workflow

1. Commit or tag a checkpoint before a large SEO change.
2. Implement and review the change in development.
3. Run lint and both environment builds.
4. Deploy the development build and verify live URLs.
5. Commit the completed release and update `docs/RELEASE_NOTES.md`.
6. Deploy production only after explicit owner instruction.
7. After production deployment, verify production metadata, sitemap, robots, redirects, 404s, and conversion actions.
8. Submit or recheck important URLs in Search Console when the release materially changes indexed content.

## Custom-domain migration

The custom-domain move is intentionally deferred. When it is ready:

1. Map the preferred custom domain to the production Firebase project.
2. Set `VITE_SITE_URL` in `frontend/.env.production` to the final HTTPS domain.
3. Rebuild the production site.
4. Confirm every canonical, social URL, structured-data URL, and sitemap entry uses the custom domain.
5. Redirect the Firebase and alternate domain hosts to the preferred host where Firebase configuration permits.
6. Add and verify the domain property in Google Search Console.
7. Submit the sitemap from the custom domain.
8. Inspect the homepage and service pages and monitor indexing during the migration.

## Ranking expectations

Technical SEO makes the site understandable and crawlable, but it cannot guarantee a ranking. Local visibility also depends on proximity to the searcher, Google Business Profile relevance, reviews, local prominence, competition, website quality, and time. Measure progress through qualified calls, bookings, directions, and contact submissions as well as ranking positions.

