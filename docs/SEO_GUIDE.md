# Local SEO Guide

For the complete technical implementation, environment behavior, content standards, validation rules, and deployment workflow, see [Google Search Implementation and Rules](./GOOGLE_SEARCH_IMPLEMENTATION.md).

The website now provides crawlable HTML, unique metadata, canonical URLs, structured data, a sitemap, local Needham copy, and useful service FAQs. The production build is indexable. Development builds deliberately use `noindex` and block crawlers so the two Firebase environments do not compete in search results.

## Priority search topics

Use these phrases naturally in service descriptions, Google Business Profile services, posts, photo captions, and future articles. Do not repeat them unnaturally or create duplicate pages that target the same phrase.

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
- beauty salon near Needham Heights
- facial near Wellesley MA
- lash extensions near Newton MA

Needham should remain the primary location. Nearby-city terms should appear only where they read naturally and accurately describe the service area.

## Google Search Console

1. Add and verify the final public domain after it is connected. Until then, the production Firebase host can be added as a URL-prefix property.
2. Submit `/sitemap.xml` in Search Console.
3. Inspect the homepage and each service URL, confirm that Google can crawl the page, and request indexing after the production SEO release.
4. Review Page indexing, Core Web Vitals, Enhancements, and Manual actions monthly.
5. Use the Performance report to compare queries, pages, clicks, impressions, click-through rate, and average position. Record a baseline before changing page copy again.

## Google Business Profile

1. Verify that the business name is exactly **The Beauty Spot**, without extra keywords.
2. Keep this contact information identical on the website, Google, Square, Instagram, and directory listings:
   - 123 Highland Ave, Floor 3, Needham, MA 02494
   - +1 617-319-2254
3. Select the most accurate primary category offered by Google and add only relevant secondary categories.
4. Add every current service with a clear description and booking or contact destination. Mark Laser Hair Removal as coming soon until appointments are actually available.
5. Add the Square appointment URL as the booking link and the website as the main link.
6. Upload fresh, well-lit photos of the exterior, entrance, treatment rooms, team, and completed work. Keep adding new real photos throughout the year.
7. Publish short updates about seasonal specials, new services, team members, and appointment availability.
8. Ask satisfied clients for honest Google reviews after appointments. Reply to every review in a personal, professional way without inserting repetitive keyword lists.

## Website content roadmap

The service pages already target distinct search needs. Add new content only when it answers a real client question and can remain accurate.

1. Expand the strongest service pages with preparation, aftercare, candidacy, contraindications, expected timing, and original before-and-after photos with client permission.
2. Add individual treatment sections when enough original information exists. Good candidates include DMK Enzyme Therapy, Glo2Facial, buccal facial massage, lash lifts, K-Tip extension consultations, and LPG Endermologie.
3. Publish useful local guides such as preparing for a first facial, choosing lash styles, K-Tip extension care, or what to expect from LPG treatment. Link each guide to its relevant service page.
4. Keep pricing, hours, team biographies, service availability, and booking links current. Remove claims immediately when a service changes.
5. Add descriptive text alternatives to every future meaningful image and compress large photos before publishing.

## Local authority

- Keep the same name, address, and phone number everywhere the business appears online.
- Complete accurate profiles on reputable local and beauty-industry directories rather than submitting to large numbers of low-quality directories.
- Seek relevant local mentions from Needham organizations, wedding vendors, photographers, wellness businesses, and community publications when a real relationship or collaboration exists.
- Link between related service and specialist pages so visitors and search engines can understand the site structure.

## Measurement

The production environment includes the configured Google Analytics measurement ID. The site records booking, phone, directions, Instagram, and successful contact-form events. Review these with Search Console once a month and compare:

- organic visits and engaged sessions
- calls, booking clicks, direction clicks, and contact submissions from organic traffic
- service pages that gain or lose impressions
- search terms with high impressions but low click-through rate
- mobile Core Web Vitals

Make one group of meaningful changes at a time and compare at least four weeks of data. Local rankings also depend on Google Business Profile relevance, distance, and prominence, so website edits alone cannot guarantee a position.

## Custom domain migration later

When `thebeautyspotma.com` is ready to move, map it to the production Firebase project, set `VITE_SITE_URL` in `.env.production` to the preferred HTTPS domain, rebuild, and redeploy. Then add the domain property in Search Console, submit the new sitemap URL, confirm every canonical uses the custom domain, and redirect all alternate hosts to the preferred host.
