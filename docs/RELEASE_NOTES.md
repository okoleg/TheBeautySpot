# Release Notes

---

## v0.23.0 — 2026-10-24

### Added
- Added pre-rendered HTML for the homepage, all eight service pages, all seven specialist pages, and the 404 page so search engines receive complete page content without waiting for JavaScript.
- Added unique page titles, descriptions, canonical URLs, social-sharing metadata, and index controls for production and development.
- Added structured data for the local beauty salon, services, specialists, and service FAQs.
- Added a generated XML sitemap, production crawler rules, and development no-index protection.
- Added local Needham copy, a stable homepage heading, service-specific introductions, and useful FAQs based on the actual services offered.
- Added privacy-friendly event tracking hooks for booking, phone, directions, Instagram, and successful contact-form actions when the production Google Analytics ID is configured.

### Changed
- Replaced the Firebase single-page catch-all with clean pre-rendered routes and a real branded 404 page.
- Added permanent redirects for retired treatment and pricing URLs.
- Added an owner checklist for Google Search Console, Google Business Profile, reviews, citations, and ongoing search measurement.

---

## v0.22.0 — 2026-10-24

### Released
- Standardized all seven team-member cards into a responsive two-column mobile and four-column desktop grid using the same rounded image, white footer, shadow, and hover treatment as the service cards.
- Matched the desktop width of About Us, Our Team, and Meet Your Specialists to the Our Services container.
- Made the Why Us and Special Offers areas more compact while preserving their content and calls to action.
- Increased desktop service-card image height and kept service descriptions aligned consistently.
- Updated the main navigation to Services, About, Team, Visit, and Contact; increased its font size and adjusted desktop phone spacing.
- Replaced the service-detail “All services” text link with a prominent “View all services” button and moved it closer to the header.
- Restyled View Prices and View Current Specials as larger pink outlined buttons.
- Verified development and production builds, lint checks, and Firebase Hosting deployments during the update cycle.

---

## v0.21.0 — 2026-10-23

### Released
- Published the final eight-service order across the homepage and all related-service navigation: Specials, Skin Care, Lashes, Brows, Body Care, Makeup, Hair Extensions, and Laser Hair Removal.
- Replaced the service artwork with the supplied images for Specials, Skin Care, Lashes, Brows, Body Care, Makeup, Hair Extensions, and Laser Hair Removal.
- Added one centralized version to every local image URL so updated gallery, service, team, hero, modal, and logo images bypass stale browser caches after deployment.
- Expanded “More to explore” on every service page to show all seven other services in the same order, including the Laser Hair Removal “Coming soon” label.
- Updated Hair Extensions with installation pricing for full length and volume ($600), density and thickness ($400), and the temple area ($250); clarified that hair is purchased separately.
- Routed Hair Extensions consultation calls to the website contact form and removed Square booking links from that service page.
- Updated gallery cells 2 and 6 with the supplied static images while preserving the existing modal interaction.
- Verified the production build, lint checks, image integrity, cache versioning, service navigation, production contact configuration, and Firebase Hosting deployment.

---

## v0.20.0 — 2026-10-19

### Released
- Published the eight-service catalog and seven dedicated team profile pages to production, including responsive related-service and related-team navigation.
- Updated the homepage collage so cells 1, 3, 5, 7, and 9 play their assigned optimized MP4 videos in an accessible modal with controls.
- Updated cells 2, 4, 6, and 8 to open their full images in the same responsive modal style; cell 4 now uses the supplied DMK product image instead of its previous video.
- Generated matching video thumbnails from the selected frames and added versioned image URLs so browsers load the latest artwork immediately.
- Added pointer and keyboard interaction cues, Escape and backdrop closing, responsive media sizing, and explicit close controls.
- Removed all inactive development Hosting releases after receiving owner approval, leaving only the current development release and eliminating the accumulated storage overage.
- Verified production-mode builds, responsive team/service pages, collage media interactions, production contact configuration, and deployed asset availability.

---

## v0.19.0 — 2026-10-17

### Added
- Added seven dedicated team profile pages under `/team/...`, using the service-page layout with shared header/footer, rounded portraits, full biographies, specialties, booking, and relevant service links.
- Made every homepage team card a full-card link with pink hover/focus outlines, a subtle lift, and Read profile arrows. Homepage cards now show concise introductions while profile pages retain the full supplied biographies.
- Added a bottom navigation gallery linking to all six other team members on each profile page.
- Centralized team content in `frontend/src/teamCatalog.tsx` and linked the Makeup page's specialist card to Marina Dvortsova's current profile.
- Verified all seven profiles at 1440px, 390px, and 320px, including image-area pointer clicks, keyboard Enter navigation, full biographies, direct reloads, and related-member links. Build and targeted lint checks pass. Deploy to development only.

---

## v0.18.5 — 2026-10-17

### Changed
- Updated team position seven to Marina Dvortsova with the supplied portrait, professional makeup artist role, and full biography.
- Preserved the shared rounded portrait styling. Deploy to development only.

---

## v0.18.4 — 2026-10-17

### Changed
- Updated team position six to Anastasia Karnei with the supplied portrait, licensed cosmetologist/hair extension specialist role, and complete biography.
- Preserved emphasis on Italian Hot Fusion (K-Tip) Hair Extensions and the existing rounded portrait styling. Deploy to development only.

---

## v0.18.3 — 2026-10-17

### Changed
- Updated team position five to Alexandra Konovalova with the supplied full biography and licensed esthetician role.
- Converted the supplied `IMG_0269.HEIC` portrait to JPEG for browser compatibility and kept the shared rounded portrait styling. Deploy to development only.

---

## v0.18.2 — 2026-10-17

### Changed
- Updated team position four to Halina Eismont with the supplied portrait, licensed esthetician role, and full biography.
- Moved her existing profile into that position and retained Hanna in the following position, avoiding a duplicate Halina profile.
- Kept the shared rounded portrait styling. Deploy to development only.

---

## v0.18.1 — 2026-10-17

### Changed
- Replaced the third team profile with Viktoriia Ziborov using the supplied portrait, licensed esthetician/Master Lash/Brow Artist role, and full description.
- Preserved the shared `rounded-2xl` portrait styling and team layout. Deploy to development only.

---

## v0.18.0 — 2026-10-17

### Changed
- Kept only Services Design 9: square image cards, white footers, and dark icon circles; removed the comparison component and original tall-card section.
- Added eight cards and individual pages for Specials, Lashes, Skin Care, Brows, Makeup, Body Care, Hair Extensions, and Laser.
- Split the existing brow/lash treatment data between separate pages and preserved the old combined URL as an alias to Brows.
- Added Specials category booking links. Hair Extensions and Laser use owner-approved overview content, existing salon imagery, contact links, and general Square booking links pending detailed service information.
- Updated the contact-form treatment choices to match the eight categories. Deploy to development only.
- Verified all eight pages, square-card proportions, image loading, separate brow/lash treatment lists, and overview/contact fallbacks at 1440px, 390px, and 320px; confirmed the live Square Specials category. Fixed narrow-screen counter overflow found during these checks.

---

## v0.17.0 — 2026-10-16

### Released
- Published all current website changes to both development and production using their respective email settings.
- Included service-photo cards, nine design comparisons, full-card hover/focus navigation, and four service detail pages.
- Removed the Prices page and menu item; pricing/package links and retired URLs now lead to Square, selecting the relevant category where available.
- Included the locally hosted service photos and documented the verified Square category links.
- Development and production builds and targeted lint checks pass. Previous browser checks cover pointer/keyboard navigation, responsive service pages, pricing links, retired URL redirects, and live Square category selection.
- Contact email delivery remains unverified after the previously recorded FormSubmit security challenge; this release does not change the email provider.

---

## v0.16.9 — 2026-10-16

### Changed
- Removed Prices from desktop/mobile navigation and deleted the internal Prices page.
- Routed pricing, package, and service-page booking links to Square with verified category selection for Brows, Lashes, Skin Care, Makeup, and Body Care.
- Redirected old Prices/service-menu URLs to Square, selecting a category when available. Kept the new service detail pages and full-card links.
- Live Square checks confirmed each category is selected and shown first. Deploy to development only.

---

## v0.16.8 — 2026-10-16

### Added
- Added dedicated service pages at `/treatments/brows-lashes`, `/treatments/skin-care`, `/treatments/makeup`, and `/treatments/body`, with shared header/footer, photos, booking, and related services.
- Reused supplied treatment information and linked to the existing Prices page; added Naz's profile and contact/booking links on Makeup.
- Made all 40 cards across the current section and nine design comparisons full-card links, with pink hover/focus outlines, a subtle lift, and Explore treatments arrows.
- Verified pointer clicks across image areas, direct page reloads, keyboard Enter navigation, treatment details, and desktop/mobile layouts. Deploy to development only.
- Removed the specifically approved inactive development Hosting snapshot `df42a8c5104d3fd7` from April 14 to unblock deployment after reaching the storage quota; current live and production versions were preserved.

---

## v0.16.7 — 2026-10-16

### Released
- Published the latest service photo cards and all nine numbered design comparisons to production at the owner's explicit request.
- Included the current white translucent icon circles and the five tall/four square comparison layouts in the production build.
- Verified the production build retains `thebeautyspotma@gmail.com` as the contact recipient.

---

## v0.16.6 — 2026-10-16

### Added
- Added nine development-only service design comparisons after the current section: five tall-card variations and four square-card variations.
- Compared dark/white icon circles, no-icon layouts, photo overlays, and black/white footers, with numbered jump links.
- Retained the same service photos, descriptions, and existing Prices links. Production builds omit the comparison sections.

---

## v0.16.5 — 2026-10-16

### Changed
- Added locally stored service photos from the old website as backgrounds for Brows & Lashes, Facials & Skin Care, Makeup, and Body Care & LPG cards.
- Added dark gradient overlays, white text, and brand pink icons/links while preserving service descriptions and existing Prices links.
- Publish this update to development only pending explicit production approval.

---

## v0.16.4 — 2026-10-16

### Released
- Published the accumulated website updates to production and checked them into Git, including team profiles/portraits, header improvements, map directions, contact confirmation, and separate development/production settings.
- Matched all Team portrait corners to the group photo's `rounded-2xl` radius and published the shared brand pink palette.
- Verified the production build uses `thebeautyspotma@gmail.com`; development remains `okoleg@gmail.com`.
- Production build and targeted component lint checks pass. Prior desktop/mobile checks cover team portraits, brand colors, navigation, and the intercepted contact-form return flow.
- Email delivery remains unverified: the last real production submission encountered FormSubmit's Cloudflare security challenge. The new receiving address also requires its own activation.

---

## v0.16.3 — 2026-10-16

### Changed
- Standardized pink roles, labels, links, icons, focus/hover states, and prices to the brand pink `#FF66C4` throughout the homepage and Prices page.
- Reused shared Tailwind color tokens from `frontend/src/index.css` for brand pink and pale pink backgrounds; primary buttons use the same brand token.
- Deploy this change to development only; production publication requires an explicit owner request.

---

## v0.16.2 — 2026-10-16

### Changed
- Separated public contact recipients: development uses `okoleg@gmail.com`; production uses `thebeautyspotma@gmail.com`.
- Default builds use development settings; `npm run build:production` explicitly selects production settings.
- Production email activation is required for the new recipient after publication. Production publication remains an explicit owner action.

---

## v0.16.1 — 2026-10-16

### Added
- Added seven team profiles immediately after the existing Our Team introduction, using names, roles, portraits, and concise available bios from https://thebeautyspotma.com/.
- Featured founders Iryna and Viktoriia above a responsive gallery for Naz, Hanna, Halina, Inna, and Marianna, with pink accents and curved portrait frames.
- Stored portraits locally and checked image loading, content order, and layouts at 320px, 390px, and 1440px.

---

## v0.16.0 — 2026-10-16

### Changed
- Configured `thebeautyspotma-af603` as production and `thebeautyspot-3e54c` as development using explicit Firebase CLI aliases.
- Deployed the full current website to https://thebeautyspotma-af603.web.app, including Prices, photos/videos, contact form, maps, and booking links.
- Verified Prices and navigation at 320–1440px widths, section anchors, and the form's request/confirmation behavior with intercepted requests. A real production-domain form test reached FormSubmit but received a Cloudflare HTTP 403 security challenge; delivery from this new domain remains unverified.
- Updated header labels to Services, Prices, About, Location & Hours, and Contact; enlarged the logo and added mobile calendar/Book and tap-to-call buttons.

---

## v0.15.6 — 2026-10-16

### Changed
- Split the shared desktop/mobile Contact link into Visit Us (address, hours, and map) and Contact Us (message form), including navigation from Prices.
- Replaced the map's arrow circle with a car icon and Driving directions label; Google Maps opens in driving mode.

---

## v0.15.5 — 2026-10-16

### Changed
- After returning from a successful contact submission, the thank-you message replaces all form fields and the Send message button.

---

## v0.15.4 — 2026-10-16

### Fixed
- Kept the original contact form from v0.15.0 with validation, optional phone/treatment, sending feedback, and inline confirmation.
- Removed the additional FormSubmit reCAPTCHA screen using its documented configuration; retained the hidden honeypot.
- A live test of the previous production form confirmed that clicking Send stopped at the provider's verification screen.
- After deployment, a real production submission was accepted and redirected to the site's inline confirmation without CAPTCHA or activation screens. Inbox receipt awaits recipient confirmation.

---

## v0.15.3 — 2026-10-16

### Changed
- Rolled back the contact-form confirmation modal, submitted-value restoration, and form lock.
- Restored the simple inline confirmation and normal enabled form after returning from the email provider.
- Removed the submission-state helper and regression script specific to the rolled-back feature.

---

## v0.15.2 — 2026-10-16

### Fixed
- Fixed real Send message clicks losing the submission ID when React updated the sending state. The return URL is now set in the browser's final form data, preserving the confirmation modal and submitted values after the provider returns.
- Added a browser regression script that uses actual pointer clicks and checks the completed-form lock, values, modal dismissal, refresh, and reopening. Email-provider redirects are intercepted in these UI tests.

---

## v0.15.1 — 2026-10-15

### What's New
- Replaced the inline contact-form confirmation with a modal.
- Preserved submitted values after returning from the email provider, disabled the completed form, and changed the button to "Message was submitted".
- Closing the modal keeps the form locked; refreshing or reopening the page enables a new message.
- Used one-time tab storage to restore values without placing personal details in the return URL; verified desktop/mobile behavior with mocked provider redirects.
- Excluded unused original MOV copies from Hosting deployments to reduce storage; removed two approved inactive April 14 Hosting snapshots after reaching the storage quota.

---

## v0.15.0 — 2026-10-15

### What's New
- Added a contact form below Find Us, matching the site's pink, black, and white design.
- Connected email submissions to the configured recipient through FormSubmit, with required name/email/message and optional phone/treatment.
- Added validation, duplicate prevention, sending feedback, and a return confirmation after the provider's spam check.
- Email delivery requires the recipient's one-time FormSubmit inbox activation; see `docs/contact-form.md`.

### Repository & validation
- Checked in all accumulated website updates, original photographs, collage sources, icons, and videos since v0.11.0.
- Added Git LFS tracking for original MOV videos; the website continues to use its compressed MP4 files.
- Production build passes. Desktop/mobile browser checks cover navigation, Prices, Find Us, and the contact form's native submission payload and return flow.
- Contact-form tests intercept provider requests; real email delivery remains unverified pending inbox activation. Local environment configuration is excluded from Git.

---

## v0.14.0 — 2026-10-15

### What's New
- Redesigned Find Us with a connected contact layout and thin dividers instead of separate cards, preserving the pink, black, and white palette.
- Kept the address, Floor 3, opening hours, phone, Instagram, and Square booking button.
- Added an embedded Google Map and directions links; verified desktop and mobile layouts.

---

## v0.13.0 — 2026-10-06

### What's New
- Removed the version selector everywhere and deleted versions 2–5. The site now uses the current V1 design only.
- Removed design-version parameters from navigation and cleaned up legacy version URLs while preserving section links.
- Kept the scroll-to-top button as an independent component.

---

## v0.12.8 — 2026-10-06

### What's New
- Removed active category and subsection highlights from Explore treatments and restored its previous styling.
- Treatment links still navigate to their sections.

---

## v0.12.7 — 2026-10-06

### What's New
- Added active category and subsection highlights to the Explore treatments menu on Prices.
- Highlights respond to clicked links and follow the current section while scrolling; the category buttons stay synchronized.

---

## v0.12.6 — 2026-10-06

### What's New
- Removed the Back to home link from Prices and reduced the space above the page title.

---

## v0.12.5 — 2026-10-06

### What's New
- Renamed About to About Us in the shared desktop and mobile navigation.
- Kept the navigation order: Services, Prices, About Us, Contact, with Book Now on the right.

---

## v0.12.4 — 2026-10-06

### What's New
- Fixed navigation from Prices to the landing-page Services, About, and Contact sections by scrolling to fragments after React renders the page.
- Shared fragment navigation also handles initial Prices section links and adjusts once page assets finish loading.
- Verified desktop and mobile navigation in Chrome, including the Photo Hero version and Prices category scrolling.

---

## v0.12.3 — 2026-10-06

### What's New
- Renamed the combined treatment menu page to Prices at `/prices` and added Prices to desktop and mobile navigation.
- Services now links to the services section on the landing page.
- Updated homepage treatment links and kept previous service-page URLs working through redirects to Prices.

---

## v0.12.2 — 2026-10-06

### What's New
- Extracted shared SiteHeader and SiteFooter components used by the homepage, Services page, and every design version.
- Added common Services, About, and Contact navigation with a mobile menu and the Square booking button.
- Preserved design-version selections when navigating between pages and offset homepage anchors below the sticky header.

---

## v0.12.1 — 2026-10-06

### What's New
- Combined Body Treatments, Brows & Lashes, and Skin Care into a single Services page.
- Category buttons and the treatment menu now scroll to sections on that page.
- Homepage links point to the matching sections; existing service-page URLs continue to work.

---

## v0.12.0 — 2026-10-05

### What's New
- Added Body Treatments, Brows & Lashes, and Skin Care pages using the supplied treatment menus, including prices, durations, packages, lash fills, and facial add-ons.
- Linked the new service pages from the main homepage.
- Updated booking buttons across all design versions and service pages to open the salon's Square appointments page.
- Built and published to Firebase Hosting at https://thebeautyspot-3e54c.web.app.

---

## v0.11.0 — 2026-04-11

### What's New
- Collage grid videos compressed from .MOV to .MP4 (video1: 30MB→4MB, video3: 84MB→15MB, video4: 425MB→16MB)
- Video modal now plays compressed MP4 files for faster load and mobile compatibility

---

## v0.10.0 — 2026-04-11

### What's New
- Added "Our Team" section with Team photo, centered title, professional bio text, and quote
- Team section uses two-column layout on desktop (photo left, text right), stacks on mobile

---

## v0.9.0 — 2026-04-11

### What's New
- Hero slideshow: each photo now has its own slogan with fade transition (no flicker/shift)
- Hero slideshow: interval increased to 6 seconds
- Hero dots: fixed size so container never shifts on active change
- Hero white box: fixed min-height with centered content to prevent layout shifts
- Hero: frosted strip and button spacing polished for both mobile and desktop
- Mobile: white box shifted lower, smaller font and tighter spacing

---

## v0.8.0 — 2026-04-11

### What's New
- Hero: frosted glass strip (white/50, backdrop-blur) spans full width of right column
- Hero: slideshow dots indicator — 3 clickable dots, active is pink, clicking resets auto-advance timer
- Hero: dots positioned between h1 and subtitle inside the frosted strip
- Special Offers: Instagram link with icon added below heading, follow-us copy added
- Special Offers: white bracket decorations outside card, square corners, black Book Now button

---

## v0.7.0 — 2026-04-11

### What's New
- Hero left column: Instagram-style 3×3 collage grid from assets/collage photos
- Collage cells: hover effect enlarges both the container and image (scale + shadow)
- Collage visible on mobile (square aspect ratio cells) and desktop (fills container height)
- Special Offers section: card redesigned — square corners, white bracket decorations outside card, black Book Now button
- Special Offers: date range and bio text removed, phone number with icon kept
- Text content in hero right column moved to bottom of column so faces are unobstructed

---

## v0.6.0 — 2026-04-10

### What's New
- Hero section redesigned to two-column layout: left column empty, right column has photos + text
- Background photos cycle as a crossfade slideshow (3 photos, 4s interval, 1s fade transition)
- Background photos anchor to top (`bg-top`) so faces are always visible
- Hero section height set to full viewport (`min-h-screen`)
- Header border and shadow now always visible (not only on scroll)
- Contact cards changed to equal-size grid (4 columns desktop, 2 columns mobile)

---

## v0.5.0 — 2026-04-10

### What's New
- Hero section: background photos now at full opacity (90%), Boston MA label removed
- Stats section (V1 & V3): added "Why Us?" copy — eyebrow, heading, and descriptive paragraph from original site
- About section: expanded to two-column layout with full founders story from original site; title remains full-width centered
- Contact section: address updated to 123 Highland Ave, Needham, MA 02494, Floor 3
- Contact section: added Work Hours card (Mon–Fri 10am–7pm, Sat 10am–6pm, Sun closed)
- V3 renamed to "Photo Hero" — synced to latest V1 design

---

## v0.4.0 — 2026-04-10

### What's New
- 5 design versions selectable via floating switcher (bottom-right corner)
  - V1: Pink Classic (original)
  - V2: Soft & Minimal — cream/rose palette
  - V3: Dark Luxury — black & gold
  - V4: Bold Editorial — stark black & white, sharp typography
  - V5: Glam Gradient — deep purple/pink
- Version switcher uses `?v=1..5` URL params
- Self-hosted fonts (Jura, Montserrat via @fontsource) — no Google CDN
- Icons via react-icons (SVG, tree-shaken) — no icon font CDN
- Phone number in header — clickable to call, icon-only on mobile
- Footer redesigned — black background with inverted logo
- Shared data extracted to `src/data.ts`

---

## v0.3.0 — 2026-04-10

### What's New
- Logo converted from PNG to SVG (vector — crisp at any size)
- Three logo variants saved in `assets/logo/`: black SVG, pink SVG, original PNG
- Black SVG logo used in the header
- Favicon updated to pink circle with "THE BEAUTY SPOT." text
- Logo responsive sizing: smaller on mobile, larger on desktop
- Nav padding adjusted for mobile proportional spacing

---

## v0.2.0 — 2026-04-10

### What's New
- Deployed to Firebase Hosting — live at https://thebeautyspot-3e54c.web.app
- Added custom fonts: **Jura** (headings) and **Montserrat** (body) to match original site
- Unique styled CTA buttons with pink shadow, uppercase Jura font, lift-on-hover effect
- Sticky header with glass effect on scroll (backdrop blur + transparent when at top)
- Improved service & contact cards — visible border and shadow at rest, pink glow on hover
- Tailwind CSS v4 fully integrated

### Files Added
- `firebase.json` — Firebase Hosting configuration
- `.firebaserc` — Firebase project reference
- `docs/deployment.md` — Deployment guide

---

## v0.1.0 — 2026-04-09

### Initial Release
- Project folder structure: `frontend/`, `docs/`, `database/`, `specs/`
- Vite + React + TypeScript bootstrapped
- Tailwind CSS v4 configured
- Landing page built with sections: Hero, Stats, Services, About, Contact, Footer
- Brand colors: Pink `#FF66C4`, Black, White
- Animations: fade-up entrance, floating sparkles
- Glassmorphism nav
- Design system documented in `specs/design-system.md`
- Color palette documented in `specs/colors.md`
- GitHub repository: https://github.com/okoleg/TheBeautySpot
