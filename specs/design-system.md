# Design System — The Beauty Spot

A complete reference of every visual decision in the landing page. Follow these steps in order to recreate the same design from scratch.

---

## 1. Brand Colors

| Token        | Hex / Value                        | Usage                              |
|--------------|------------------------------------|------------------------------------|
| Pink         | `#FF66C4`                          | Primary accent, buttons, icons     |
| Pink light   | `#ff99d6`                          | Gradient end color, soft accents   |
| Pink alpha 8 | `rgba(255, 102, 196, 0.08)`        | Nav border                         |
| Pink alpha 10| `rgba(255, 102, 196, 0.10)`        | Hero radial background             |
| Pink alpha 15| `rgba(255, 102, 196, 0.15)`        | Card hover shadow                  |
| Pink alpha 40| `rgba(255, 102, 196, 0.40)`        | Card hover border                  |
| Black        | `#000000`                          | Stats section background, headings |
| White        | `#ffffff`                          | Page background, card backgrounds  |
| Neutral 50   | `#f9fafb` (Tailwind `neutral-50`)  | —                                  |
| Neutral 400  | `#9ca3af` (Tailwind `neutral-400`) | Body text, subtitles               |
| Neutral 500  | `#6b7280` (Tailwind `neutral-500`) | Nav links, card descriptions       |
| Neutral 700  | `#374151` (Tailwind `neutral-700`) | Contact values                     |
| Neutral 900  | `#171717` (Tailwind `neutral-900`) | About section mid-gradient         |
| Border gray  | `#e2e2e2`                          | Default card border                |

---

## 2. Typography

| Element              | Size               | Weight | Color          | Tracking / Notes                    |
|----------------------|--------------------|--------|----------------|-------------------------------------|
| Nav logo             | `18px` (text-lg)   | 700    | `#000`         | `tracking-tight`                    |
| Nav links            | `14px` (text-sm)   | 400    | neutral-500    | Hover → `#FF66C4`                   |
| Hero eyebrow         | `12px` (text-xs)   | 700    | `#FF66C4`      | `letter-spacing: 3px`, `uppercase`  |
| Hero h1              | `48px–72px`        | 700    | `#000`         | `tracking-tight`, `leading-tight`, clamp via `text-5xl md:text-7xl` |
| Hero h1 gradient span| same as h1         | 700    | pink→pink-light| `linear-gradient(90deg, #FF66C4, #ff99d6)` clipped to text |
| Hero subtitle        | `18px` (text-lg)   | 400    | neutral-400    | `max-w: 512px`, `leading-relaxed`   |
| Section eyebrow      | `12px` (text-xs)   | 700    | `#FF66C4`      | `letter-spacing: 3px`, `uppercase`  |
| Section h2           | `36px` (text-4xl)  | 700    | `#000` or white| `tracking-tight`                    |
| Service card title   | `18px` (text-lg)   | 600    | `#000`         | —                                   |
| Service card body    | `14px` (text-sm)   | 400    | neutral-500    | `leading-relaxed`                   |
| Stats number         | `48px` (text-5xl)  | 700    | `#FF66C4`      | `tracking-tight`                    |
| Stats label          | `14px` (text-sm)   | 400    | white 50% opacity | `tracking-widest`, `uppercase`   |
| About body           | `18px` (text-lg)   | 400    | neutral-400    | `leading-relaxed`                   |
| About quote          | `16px` (text-base) | 400    | neutral-500    | `italic`                            |
| Contact label        | `12px` (text-xs)   | 700    | `#FF66C4`      | `letter-spacing: 2px`, `uppercase`  |
| Contact value        | `16px` (text-base) | 400    | neutral-700    | Hover → `#FF66C4`                   |
| Footer               | `14px` (text-sm)   | 400    | neutral-400    | centered                            |
| Font family          | `system-ui, 'Segoe UI', sans-serif` | — | — | No external font loaded            |

---

## 3. Spacing & Layout

| Area              | Padding / Margin                        |
|-------------------|-----------------------------------------|
| Nav               | `px-8 py-5` (32px / 20px)              |
| Hero              | `pt-28 pb-32 px-6` (112px / 128px / 24px) |
| Stats             | `py-14 px-6` (56px / 24px)             |
| Services section  | `py-24 px-6` (96px / 24px)             |
| About section     | `py-24 px-6`                           |
| Contact section   | `py-24 px-6`                           |
| Service card      | `p-8` (32px all sides)                 |
| Contact card      | `px-8 py-7` (32px / 28px)             |
| Max content width | `max-w-5xl` = `1024px`                 |
| Hero max subtitle | `max-w-lg` = `512px`                   |
| About max width   | `max-w-xl` = `576px`                   |

---

## 4. Buttons

All buttons use the same pill shape:

| Property       | Value                                  |
|----------------|----------------------------------------|
| Background     | `#FF66C4`                              |
| Text color     | `#ffffff`                              |
| Font weight    | 600 (semibold)                         |
| Border radius  | `9999px` (fully rounded — `rounded-full`) |
| Hover state    | `opacity: 0.80` (`hover:opacity-80`)   |
| Transition     | `transition-opacity`                   |

| Button variant | Padding            | Font size |
|----------------|--------------------|-----------|
| Small (nav)    | `px-5 py-2.5`      | `14px`    |
| Large (CTA)    | `px-10–12 py-4`    | `16px`    |

---

## 5. Cards (`.card-glow`)

| Property            | Default state                          | Hover state                             |
|---------------------|----------------------------------------|-----------------------------------------|
| Background          | `#ffffff`                              | `#ffffff`                               |
| Border radius       | `16px`                                 | `16px`                                  |
| Border              | `1px solid #e2e2e2`                    | `1px solid rgba(255,102,196,0.4)`       |
| Box shadow          | `0 2px 12px rgba(0,0,0,0.07)`          | `0 16px 40px rgba(255,102,196,0.15)`    |
| Transform           | none                                   | `translateY(-4px)`                      |
| Transition          | `transform 0.25s, box-shadow 0.25s, border-color 0.25s` | same |

---

## 6. Navigation (`.nav-glass`)

| Property          | Value                                   |
|-------------------|-----------------------------------------|
| Background        | `rgba(255, 255, 255, 0.85)`             |
| Backdrop blur     | `blur(12px)`                            |
| Border bottom     | `1px solid rgba(255, 102, 196, 0.08)`  |
| Position          | `sticky top-0 z-index: 20`             |

---

## 7. Section Backgrounds

| Section   | Background                                                                 |
|-----------|----------------------------------------------------------------------------|
| Hero      | White + `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,102,196,0.1), transparent)` |
| Stats     | `#000000`                                                                  |
| Services  | `#ffffff`                                                                  |
| About     | `linear-gradient(to bottom-right, #000, #171717, #000)`                   |
| Contact   | `#ffffff`                                                                  |
| Footer    | `#ffffff` + `border-top: 1px solid #f5f5f5`                               |

---

## 8. Animations

### `fade-up` — entrance animation
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Usage */
animation: fade-up 0.6s ease both;
```
Applied to: hero eyebrow, h1, subtitle, CTA button — each with staggered delay (0.1s steps).

### `float` — floating sparkles
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
/* Usage */
animation: float 6s ease-in-out infinite;
```
Applied to: two `✦` sparkle characters in the hero, at `opacity: 0.20–0.25`.

### Animation delays
| Class       | Delay  |
|-------------|--------|
| `.delay-100`| 0.1s   |
| `.delay-200`| 0.2s   |
| `.delay-300`| 0.3s   |
| `.delay-400`| 0.4s   |

---

## 9. Gradient Text (`.text-gradient`)

```css
background: linear-gradient(90deg, #FF66C4, #ff99d6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
Applied to: "care & inspiration" span inside the hero `<h1>`.

---

## 10. Decorative Elements

| Element         | Style                                              | Position            |
|-----------------|----------------------------------------------------|---------------------|
| Sparkle `✦` #1  | `color: #FF66C4` at `opacity: 0.25`, `font-size: 20px`, `animate-float`         | Hero top-left area  |
| Sparkle `✦` #2  | `color: #FF66C4` at `opacity: 0.20`, `font-size: 18px`, `animate-float delay-300` | Hero bottom-right |
| Service icon `✦`| `color: #FF66C4`, `font-size: 20px`                | Top of each card    |
| Stats divider   | `width: 1px`, `height: 48px`, `background: rgba(255,255,255,0.10)` | Between stats |

---

## 11. Grid & Responsive Breakpoints

| Component      | Mobile (default) | `sm` (640px+)  | `lg` (1024px+)   |
|----------------|------------------|----------------|------------------|
| Services grid  | 1 column         | 2 columns      | 4 columns        |
| Hero h1        | `text-5xl` (48px)| —              | `text-7xl` (72px)|
| Nav links      | hidden           | —              | visible (md 768px+) |
| Sparkles       | hidden           | —              | visible (md+)    |

---

## 12. Step-by-Step Recreate Guide

1. **Start** — Vite + React + TypeScript. Install `tailwindcss` + `@tailwindcss/vite`. Add plugin to `vite.config.ts`. Put `@import "tailwindcss"` at top of `index.css`.

2. **Global reset** — `body { margin: 0 }`, `#root { width: 100% }`. No other globals.

3. **Nav** — `sticky`, `z-20`, glassmorphism background. Logo left, links center (hidden on mobile), pill button right.

4. **Hero** — Full-width centered column. Radial pink gradient overlay (absolute, pointer-events-none). Eyebrow label → large h1 with gradient span → subtitle → CTA button. Two floating `✦` sparkles positioned absolutely, hidden on mobile.

5. **Stats** — Black background, two stats side by side with a thin divider. Pink numbers, muted white labels.

6. **Services** — White background, eyebrow + h2 centered. Responsive grid of 4 cards using `.card-glow`.

7. **About** — Dark gradient background (`black → neutral-900 → black`). Centered text block, white heading, muted body, italic quote.

8. **Contact** — White background, eyebrow + h2. Three `.card-glow` cards side by side (wrapping on mobile). Large pink CTA button below.

9. **Footer** — Thin top border, centered muted text, `margin-top: auto` to push to bottom.
