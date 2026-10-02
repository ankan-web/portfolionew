# Portfolio Design System - Newspaper Theme

## Typography

### Font Families
| Font | Class | Usage | Source |
|------|-------|-------|--------|
| Caslon Display | `font-display` | Headlines, section titles, exhibit titles | Google Fonts / Local |
| Caslon Text | `font-text` | Body copy, descriptions, paragraphs | Google Fonts / Local |
| Franklin Gothic | `font-gothic` | Labels, navigation, metadata, uppercase | Google Fonts / Local |
| JetBrains Mono | `font-mono` | Code references, dates, exhibit IDs | Google Fonts / Local |

### Font Sizes (Pixel Values)
| Size | Usage |
|------|-------|
| `text-[10px]` | Stamp labels, code abbreviations |
| `text-[11px]` | Metadata, captions, labels, footer |
| `text-[11.5px]` | Small nav button text |
| `text-[12px]` | Stack row secondary text |
| `text-[13px]` | Stack row body text, career dates |
| `text-[14px]` | Hero CTA buttons |
| `text-[15px]` | Body text, career descriptions |
| `text-[16px]` | Form inputs, hero lead paragraph |
| `text-[17px]` | Exhibit descriptions |
| `text-[19px]` | Stack tool names |
| `text-[22px]` | Nav brand, some headings |
| `text-[24px]` | Career job titles |
| `text-[28px]` | Exhibit titles |
| `text-[30px]` | Mobile nav links, subheadings |
| `text-[32px]` | Contact section subheading |

### Responsive Clamp Values
| Clamp | Usage |
|-------|-------|
| `clamp(8px, 1.7vw, 14px)` | Sub-subtitle labels |
| `clamp(18px, 2vw, 23px)` | Hero quote/lede text |
| `clamp(22px, 2.3vw, 32px)` | Hero info grid values |
| `clamp(30px, 3.6vw, 46px)` | Featured exhibit title |
| `clamp(30px, 4vw, 46px)` | Section headings |
| `clamp(40px, 6.6vw, 86px)` | Hero headline |

### Font Weights
| Weight | Usage |
|--------|-------|
| `font-normal` | Headlines, display text |
| `font-medium` | Labels, metadata |
| `font-semibold` | Section labels, nav links |
| `font-bold` | Section headers, strong emphasis |
| `font-extrabold` | Tool names in exhibits |
| `font-black` | Stamp elements ("Confirmed", "Case Closed") |

### Line Heights
| Value | Usage |
|-------|-------|
| `leading-none` | Display numbers, hero headline |
| `leading-[0.9]` | Tight display |
| `leading-[1.02]` | Section headings |
| `leading-[1.06]` | Exhibit titles |
| `leading-[1.1]` | Career job titles |
| `leading-[1.4]` | Caption text |
| `leading-[1.5]` | General body text |
| `leading-[1.55]` | Body paragraphs, descriptions |
| `leading-[1.6]` | Dropcap paragraph text |

### Letter Spacing
| Value | Usage |
|-------|-------|
| `tracking-normal` | Default text |
| `tracking-[-0.02em]` | Hero headline |
| `tracking-[-0.015em]` | Section headings |
| `tracking-[-0.01em]` | Nav brand, exhibit titles |
| `tracking-[0.02em]` | Exhibit metadata |
| `tracking-[0.04em]` | Caption text |
| `tracking-[0.06em]` | Byline text |
| `tracking-[0.08em]` | Nav links, exhibit link text |
| `tracking-[0.1em]` | CTA buttons, section labels |
| `tracking-[0.12em]` | Section subtitles, metadata labels |
| `tracking-[0.14em]` | Stamp findings, exhibit labels |
| `tracking-[0.16em]` | Exhibit header labels |
| `tracking-[0.18em]` | Section category labels |
| `tracking-[0.2em]` | Hero subtitle spacing |
| `tracking-[0.3em]` | "Case Closed" stamp |

---

## Color Palette

### Primary Palette - "Ink" (Dark)
| Token | Description |
|-------|-------------|
| `bg-ink` | Primary dark background |
| `text-ink` | Primary text color |
| `border-ink` | Primary border color |
| `border-ink/10` | Very subtle ink border |
| `border-ink/25` | Light ink border |
| `border-ink/40` | Medium ink border |
| `border-ink/60` | Strong ink border |
| `bg-ink-soft` | Softer ink background |
| `text-ink-soft` | Secondary/muted text |
| `text-ink-faint` | Placeholder text |

### Secondary Palette - "Paper" (Light/Warm)
| Token | Description |
|-------|-------------|
| `bg-paper` | Base paper background |
| `bg-paper-bright` | Brighter paper |
| `bg-paper-bright/85` | Semi-transparent bright paper |
| `bg-paper-warm` | Warm paper (hover states) |
| `bg-paper-deep/75` | Deep paper (tape elements) |
| `text-paper` | Paper text on dark backgrounds |
| `text-paper/60` | Muted paper text |
| `text-paper/70` | Footer text on dark background |
| `border-paper/25` | Light paper border |
| `border-paper/30` | Medium paper border |
| `border-paper/45` | Strong paper border |

### Accent Palette - "Stamp" (Red/Orange)
| Token | Description |
|-------|-------------|
| `border-stamp` | Stamp border |
| `text-stamp` | Stamp text color |
| `bg-stamp` | Stamp background |
| `border-stamp-bright` | Bright stamp border |
| `text-stamp-bright` | Bright stamp text |

### Explicit Hex Colors
| Color | Usage |
|-------|-------|
| `#16140f` | Very dark ink (near-black) |
| `#a6382c` | Stamp red |

---

## Layout System

### Grid Patterns
| Pattern | Usage |
|---------|-------|
| `grid grid-cols-1` | Mobile default |
| `grid grid-cols-2` | Hero info grid |
| `grid grid-cols-4` | Hero info grid at sm+ |
| `grid grid-cols-[1.15fr_0.85fr]` | Contact section |
| `grid grid-cols-[2.4fr_1fr_1fr_1.3fr]` | Stack table |
| `grid grid-cols-[170px_1fr_0.9fr]` | Career rows |

### Flexbox Patterns
| Pattern | Usage |
|---------|-------|
| `flex flex-col` | Article cards |
| `flex flex-row` | Navigation, footer |
| `flex flex-wrap` | Tag lists, CTA buttons |
| `flex items-center justify-between` | Nav bar |
| `flex items-baseline` | Section headers |

### Max Widths
| Value | Usage |
|-------|-------|
| `max-w-[1180px]` | Main content container |
| `max-w-[60ch]` | Body text measure |
| `max-w-[42ch]` | Narrow text column |
| `max-w-[34ch]` | Very narrow text column |
| `max-w-[30ch]` | Hero lede text |

### Container Pattern
```css
mx-auto px-5 sm:px-[30px] max-w-[1180px]
```

### Spacing Scale
| Padding | Usage |
|---------|-------|
| `p-[5px]` to `p-[26px]` | Component padding |
| `px-5` to `px-[30px]` | Container horizontal padding |
| `py-[76px]` | Section vertical padding |

| Margin | Usage |
|--------|-------|
| `mt-1` to `mt-20` | Top margins |
| `mb-1` to `mb-6` | Bottom margins |
| `mb-[30px]` | Section header bottom margin |

| Gap | Usage |
|-----|-------|
| `gap-[5px]` | Hamburger menu lines |
| `gap-[7px]` | Small component gaps |
| `gap-[18px]` | Form field gaps |
| `gap-[26px]` | Nav link gaps |

---

## Animations & Transitions

### Reveal Animation System
| Class | Description |
|-------|-------------|
| `rv` | Base reveal container |
| `rv-word` | Per-word staggered reveal |
| `rv-fade` | Fade-in reveal |
| `rv-settle` | Settle-in reveal |
| `rv-rule` | Horizontal rule reveal |
| `rv-develop` | Image/card development reveal |
| `rv-stampchild` | Stamp element child reveal |
| `rv-sketch` | SVG sketch path draw |

### Stagger Delays
- `--rv-delay:40ms` through `--rv-delay:360ms` (increments of 40ms)
- Applied via inline `style="--rv-delay:120ms"`

### Transition Classes
| Class | Duration | Usage |
|-------|----------|-------|
| `transition-colors duration-150` | 150ms | Nav links, CTA buttons |
| `transition-all duration-200` | 200ms | Hamburger menu, stamp elements |
| `transition-transform duration-200` | 200ms | Hamburger menu lines |
| `transition-opacity duration-150` | 150ms | Hamburger center line |
| `transition-transform duration-500 ease-out` | 500ms | Image hover scale |

### Hover Effects
| Effect | Description |
|--------|-------------|
| `hover:bg-paper-warm` | Work items warm on hover |
| `hover:bg-ink hover:text-paper` | Primary CTA buttons invert |
| `hover:bg-transparent hover:text-ink` | Secondary CTA buttons invert |
| `hover:-rotate-[8deg] group-hover:scale-100` | Stamp rotation/scale reveal |
| `group-hover:scale-[1.03]` | Image slight zoom on card hover |
| `hover:translate-x-1` | Right arrow translate |

---

## Special Styling Elements

### Newspaper Theme Decorations
| Element | Implementation |
|---------|---------------|
| **Tape strip** | `absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/75` |
| **Photo shadow** | `shadow-[0_2px_14px_rgba(22,20,15,0.14)]` |
| **Photo frame** | `border border-ink/25 bg-paper-bright p-2 pb-0` |
| **Photo inner border** | `border border-ink/40 bg-paper` |
| **SVG Sketch circle** | `stroke="#a6382c" stroke-width="3" stroke-linecap="round"` |
| **Rubber stamp effect** | `border-stamp border-[3px] rotate-[1deg]` with `[filter:url(#fm-rough)]` |
| **Dropcap** | `dropcap` class on first paragraph |
| **Left border quote** | `border-l-4 border-ink pl-[18px]` |
| **Section dividers** | `h-1 bg-ink` (rv-rule) |
| **Thick section separators** | `<hr class="border-0 border-t-4 border-ink"/>` |

### Image Treatment
- All project images: `grayscale contrast-[1.04] mix-blend-multiply`
- Hover effect: `transition-transform duration-500 ease-out group-hover:scale-[1.03]`
- Portrait: `mix-blend-multiply` (no grayscale)
- All images use `object-cover object-top` positioning

### Finding Badges (Stack Table)
| Badge Style | Classes |
|-------------|---------|
| Primary tool | `border-2 border-stamp text-stamp font-black -rotate-[1.5deg]` |
| Comfortable | `border-ink/60 text-ink rotate-[1deg]` |
| In training | `border-ink/60 text-ink rotate-[1deg]` |
| Trace amount | `border-ink/60 text-ink -rotate-[1deg]` |

---

## Responsive Design

### Breakpoints
| Breakpoint | Usage |
|------------|-------|
| **Default** | Mobile-first (single column) |
| **min-[460px]** | Shows "Hire him" button in nav |
| **min-[600px]** (sm:) | Two-column layouts |
| **min-[940px]** (md:) | Desktop nav, horizontal layouts |

### Responsive Patterns

**Navigation:**
- Mobile: Hamburger button with animated lines
- Mobile: Hidden dropdown menu
- Desktop (min-[940px]): Full horizontal nav with links + CTA

**Layout Shifts:**
- `grid-cols-1` → `min-[600px]:grid-cols-2` → `min-[600px]:grid-cols-4`
- `flex-col` → `min-[940px]:flex-row`
- `w-full` → `min-[940px]:w-[46%]`

**Visibility:**
- Stack table header: `hidden sm:grid`
- Mobile "Hire him": `hidden min-[460px]:inline-flex`

**Typography:**
- Section headings use responsive clamp values
- Subtitle tracking: `tracking-[0.2em]` → `sm:tracking-[0.42em]`

---

## Component Structure

### Navigation
```
<nav>
  Brand (Caslon Display)
  Desktop Links (Franklin Gothic)
  Mobile Hamburger (animated)
  Mobile Menu (dropdown)
</nav>
```

### Hero Section
```
<section>
  Newspaper masthead info
  Hero headline (responsive clamp)
  Lede paragraph with left border
  Byline
  CTA buttons
  Newspaper info grid (4 columns)
  Portrait image with tape
  Body copy with dropcap
</section>
```

### Works Section
```
<section>
  Section header with rule
  Article cards (repeated)
    - Image with tape decoration
    - Exhibit label (stamp)
    - Title and description
    - Tech tags
    - Footer with year and link
    - "Confirmed" stamp (hover)
</section>
```

### Stack Section
```
<section>
  Section header
  Table container
    - Header row (dark background)
    - Data rows with hover
    - Finding badges
</section>
```

### Career Section
```
<section>
  Section header
  Career entries
    - Date column
    - Title and company
    - Description
</section>
```

### Contact Section
```
<section>
  Section header
  Two-column layout
    - Form column
    - Aside column (contact info)
</section>
```

### Footer
```
<footer>
  "Case Closed" rubber stamp
  Copyright bar
  Social icons
</footer>
```
