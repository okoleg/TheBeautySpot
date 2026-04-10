# Design System — The Beauty Spot

A complete reference of every visual decision in the landing page.

---

## 1. Brand Colors

| Token        | Hex / Value                        | Usage                              |
|--------------|------------------------------------|------------------------------------|
| Pink         | `#FF66C4`                          | Primary accent, buttons, icons     |
| Pink light   | `#ff99d6`                          | Gradient end color, soft accents   |
| Pink alpha 8 | `rgba(255, 102, 196, 0.08)`        | Hero radial overlay                |
| Pink alpha 10| `rgba(255, 102, 196, 0.10)`        | Card hover border                  |
| Pink alpha 15| `rgba(255, 102, 196, 0.15)`        | Card hover shadow                  |
| Pink alpha 40| `rgba(255, 102, 196, 0.40)`        | Card hover border                  |
| Black        | `#000000`                          | Stats/footer background, headings  |
| White        | `#ffffff`                          | Page background, card backgrounds  |
| Neutral 400  | `#9ca3af` (Tailwind `neutral-400`) | Body text, subtitles               |
| Neutral 500  | `#6b7280` (Tailwind `neutral-500`) | Nav links, card descriptions       |
| Neutral 700  | `#374151` (Tailwind `neutral-700`) | Contact values                     |
| Neutral 900  | `#171717` (Tailwind `neutral-900`) | About section mid-gradient         |
| Border gray  | `#e2e2e2`                          | Default card border                |

---

## 2. Typography

| Element              | Size               | Weight | Color          | Notes                               |
|----------------------|--------------------|--------|----------------|-------------------------------------|
| Nav links            | `16px` (text-base) | 400    | neutral-500    | Hover → `#FF66C4`; hidden on mobile |
| Hero h1              | `48px–72px`        | 700    | `#000`         | `text-5xl md:text-7xl`, `tracking-tight` |
| Hero h1 gradient     | same as h1         | 700    | pink→pink-light| `linear-gradient(90deg, #FF66C4, #ff99d6)` clipped to text |
| Hero subtitle        | `18px` (text-lg)   | 400    | neutral-400    | `max-w-lg`, `leading-relaxed`       |
| Section eyebrow      | `12px` (text-xs)   | 700    | `#FF66C4`      | `letter-spacing: 3px`, `uppercase`  |
| Section h2           | `36px` (text-4xl)  | 700    | `#000` or white| `tracking-tight`                    |
| Stats heading        | `24–30px`          | 700    | white          | `text-2xl md:text-3xl`              |
| Stats number         | `48px` (text-5xl)  | 700    | `#FF66C4`      | `tracking-tight`                    |
| Stats label          | `14px` (text-sm)   | 400    | white 50%      | `tracking-widest`, `uppercase`      |
| Service card title   | `18px` (text-lg)   | 600    | `#000`         |                                     |
| Service card body    | `14px` (text-sm)   | 400    | neutral-500    | `leading-relaxed`                   |
| About body           | `18px` (text-lg)   | 400    | neutral-400    | `leading-relaxed`                   |
| About quote          | `16px` (text-base) | 400    | neutral-500    | `italic`, centered                  |
| Contact label        | `12px` (text-xs)   | 700    | `#FF66C4`      | `letter-spacing: 2px`, `uppercase`  |
| Contact value        | `16px` (text-base) | 400    | neutral-700    | Hover → `#FF66C4`                   |
| Footer copyright     | `14px` (text-sm)   | 400    | neutral-500    | centered                            |
| Font family (headings) | Jura            | 400/600/700 | —         | via `@fontsource/jura`              |
| Font family (body)   | Montserrat         | 400–700 | —             | via `@fontsource/montserrat`        |

---

## 3. Spacing & Layout

| Area              | Padding / Margin                           |
|-------------------|--------------------------------------------|
| Nav               | `px-4 py-3 md:px-8 md:py-5`               |
| Hero              | `pt-28 pb-32 px-6`, `min-h-[600px]`        |
| Stats             | `py-16 px-6`                               |
| Services section  | `py-24 px-6`                               |
| About section     | `py-24 px-6`                               |
| Contact section   | `py-24 px-6`                               |
| Service card      | `p-8` (32px all sides)                     |
| Contact card      | `px-8 py-7`                                |
| Max content width | `max-w-5xl` = `1024px`                     |
| Hero max subtitle | `max-w-lg` = `512px`                       |

---

## 4. Buttons

| Property       | Value                                  |
|----------------|----------------------------------------|
| Background     | `#FF66C4`                              |
| Text color     | `#ffffff`                              |
| Font           | Jura, semibold, uppercase              |
| Border radius  | `9999px` (fully rounded)               |
| Hover state    | `translateY(-2px)`, pink shadow        |
| Transition     | `transform 0.2s, box-shadow 0.2s`      |

| Variant     | Padding (mobile)       | Padding (desktop)      |
|-------------|------------------------|------------------------|
| Small (nav) | `px-3 py-1.5`          | `px-[22px] py-[10px]`  |
| Large (CTA) | full padding           | full padding           |

---

## 5. Cards (`.card-glow`)

| Property    | Default                             | Hover                                    |
|-------------|-------------------------------------|------------------------------------------|
| Background  | `#ffffff`                           | `#ffffff`                                |
| Border      | `1px solid #e2e2e2`                 | `1px solid rgba(255,102,196,0.4)`        |
| Shadow      | `0 2px 12px rgba(0,0,0,0.07)`       | `0 16px 40px rgba(255,102,196,0.15)`     |
| Transform   | none                                | `translateY(-4px)`                       |
| Transition  | `transform 0.25s, box-shadow 0.25s, border-color 0.25s` | same        |
| Border radius | `16px`                            | `16px`                                   |

---

## 6. Navigation

| Property       | Value                                              |
|----------------|----------------------------------------------------|
| Position       | `sticky top-0 z-20`                                |
| Background     | transparent at top → `rgba(255,255,255,0.80)` on scroll |
| Backdrop blur  | always on (`backdrop-blur-md`)                     |
| Border bottom  | transparent at top → `rgba(255,102,196,0.10)` on scroll |
| Shadow         | none at top → `shadow-sm` on scroll                |
| Transition     | `background-color, border-color, box-shadow` only (not all — avoids animation artifacts) |

---

## 7. Section Backgrounds

| Section   | Background                                                              |
|-----------|-------------------------------------------------------------------------|
| Hero      | White page + background photos (3 on desktop, 1 on mobile) at `opacity-90` + subtle white gradient overlay |
| Stats     | `#000000`                                                               |
| Services  | `#ffffff`                                                               |
| About     | `linear-gradient(to bottom-right, #000, #171717, #000)`                 |
| Contact   | `#ffffff`                                                               |
| Footer    | `#000000`, inverted white logo                                          |

---

## 8. Hero Background Photos

| Breakpoint | Photos shown                              |
|------------|-------------------------------------------|
| Mobile     | `VikaIryna.jpg` only (full width)         |
| Desktop    | `Iryna.jpg` · `VikaIryna.jpg` · `Vika.jpg` (3 equal columns) |

Photos use `bg-cover bg-center`, `opacity-90`, positioned absolutely behind all content.

---

## 9. Animations

### `fade-up`
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fade-up 0.6s ease both;
```

### `float`
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
animation: float 6s ease-in-out infinite;
```

| Class        | Delay  |
|--------------|--------|
| `.delay-100` | 0.1s   |
| `.delay-200` | 0.2s   |
| `.delay-300` | 0.3s   |
| `.delay-400` | 0.4s   |

---

## 10. Gradient Text (`.text-gradient`)

```css
background: linear-gradient(90deg, #FF66C4, #ff99d6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
Applied to: "care & inspiration" span in the hero `<h1>`.

---

## 11. Section Structure

### Stats (black section)
- Eyebrow: "Why Us?"
- Heading: "Your favorite destination for beauty"
- Description paragraph
- Pink divider line
- Two stats side by side: 10+ Years · 7,000+ Happy Clients

### About (dark gradient section) — two-column on desktop
- Title block (full width, centered): eyebrow + h2
- Two equal columns: founders story paragraph | growth paragraph
- Italic quote centered below

### Contact
Four cards: Phone · Location · Hours · Instagram
- Address: 123 Highland Ave, Needham, MA 02494, Floor 3
- Hours: Mon–Fri 10am–7pm · Sat 10am–6pm · Sun closed

---

## 12. Grid & Responsive Breakpoints

| Component      | Mobile           | `sm` (640px+)  | `md` (768px+)       | `lg` (1024px+) |
|----------------|------------------|----------------|---------------------|----------------|
| Services grid  | 1 column         | 2 columns      | —                   | 4 columns      |
| About section  | 1 column         | —              | 2 columns           | —              |
| Hero h1        | `text-5xl` (48px)| —              | —                   | `text-7xl` (72px) |
| Nav links      | hidden           | —              | visible             | —              |
| Phone number   | hidden           | —              | visible             | —              |
| Sparkles       | hidden           | —              | visible             | —              |
| Hero photos    | 1 photo          | —              | 3 photos            | —              |

---

## 13. Design Versions

| Version | Name        | Description                              |
|---------|-------------|------------------------------------------|
| V1      | Pink Classic | Main design — white/pink/black, photo hero |
| V2      | Pink        | Identical to V1                          |
| V3      | Photo Hero  | Identical to V1                          |
| V4      | Bold Editorial | Stark black & white, sharp typography |
| V5      | Glam Gradient | Deep purple/pink dark theme            |

Versions switchable via `?v=1..5` URL param. Switcher: floating bottom-right pink button.
