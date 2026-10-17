# Release Notes

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
