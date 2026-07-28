---
name: Technical Blueprint
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#454558'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#757589'
  outline-variant: '#c5c4db'
  surface-tint: '#343dff'
  primary: '#0001bb'
  on-primary: '#ffffff'
  primary-container: '#0000ff'
  on-primary-container: '#b3b7ff'
  inverse-primary: '#bec2ff'
  secondary: '#626200'
  on-secondary: '#ffffff'
  secondary-container: '#e7e700'
  on-secondary-container: '#666600'
  tertiary: '#353535'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c4c4c'
  on-tertiary-container: '#bdbdbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#00006e'
  on-primary-fixed-variant: '#0000ef'
  secondary-fixed: '#eaea00'
  secondary-fixed-dim: '#cdcd00'
  on-secondary-fixed: '#1d1d00'
  on-secondary-fixed-variant: '#494900'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  grid-unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  border-width: 4px
  shadow-offset: 8px
---

## Brand & Style
This design system is a rigorous fusion of **Neobrutalism** and **Technical Drafting**. It targets power users, developers, and creators who value structural transparency and raw efficiency. The aesthetic evokes the "work-in-progress" energy of a blueprint or a mathematical proof, utilizing high-contrast outlines and a graph-paper background to establish a sense of precision and architectural intent.

The emotional response should be one of absolute clarity, unapologetic function, and industrial confidence. It rejects soft gradients and subtle shadows in favor of hard edges, solid offsets, and a bold, "ink-on-paper" tactile quality.

## Colors
The palette is rooted in a functional "Off-White" base that reduces eye strain compared to pure white, while maintaining the look of architectural vellum. 

- **Primary (Electric Blue):** Used for interactive states, key call-to-actions, and primary branding elements. It represents the "ink" of the blueprint.
- **Secondary (Bright Yellow):** Reserved for highlights, alerts, and high-visibility markers. It acts as the "highlighter" on the technical draft.
- **Background Grid:** The entire canvas is overlaid with a subtle 24px grid using thin Electric Blue lines. This is not just decorative; it provides the mathematical scaffolding for all layout decisions.
- **Borders & Shadows:** Absolute Black (#000000) is used for all structural lines and hard shadows to ensure maximum legibility and "pop."

## Typography
The typography system uses a mix of geometric grotesque and monospaced faces to reinforce the technical theme.

- **Headlines:** Space Grotesk provides a futuristic, high-impact feel. Use "Bold" or "700" weight for all headings to stand up against the heavy 4px borders.
- **Body:** Archivo Narrow is used for its space efficiency and high legibility in data-dense environments. It mimics the condensed lettering found on technical drawings.
- **Labels & Metadata:** Space Mono is used for small captions, technical data, and UI labels to provide a mechanical, "computed" appearance. 

All text should be rendered with high contrast against the background. Avoid grey text; use varying weights or sizes to establish hierarchy instead.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy where every element is aligned to the 24px blueprint grid. 

- **The 8px Rule:** All padding, margins, and component heights must be multiples of 8px. This ensures that borders always sit cleanly on the background grid lines.
- **Grid Alignment:** Cards and containers should ideally snap to the 24px grid lines. On desktop, content is centered within a maximum width of 1280px.
- **Breakpoints:**
  - **Mobile (<768px):** 4-column layout, 16px margins, 16px gutters. Hard shadows reduce to 4px offset.
  - **Tablet (768px - 1024px):** 8-column layout, 24px margins, 24px gutters. 
  - **Desktop (>1024px):** 12-column layout, 48px margins, 24px gutters.

## Elevation & Depth
Depth is communicated through **Hard Solid Shadows** rather than blurs or Z-axis lighting.

- **Static Elements:** All interactive containers (cards, buttons, inputs) feature a 4px solid black border.
- **Elevated State:** Elements "lift" by displaying a solid black offset shadow (8px down, 8px right). The shadow has 100% opacity.
- **Active/Pressed State:** When an element is clicked, it shifts 4px down and 4px right, and the shadow shrinks accordingly, simulating physical depression into the page.
- **Layering:** To separate layers (like modals), use a thick black border and a larger shadow offset (16px), but never use background blurs. Maintain the transparency of the blueprint grid where possible.

## Shapes
The shape language is strictly **Sharp (0px roundedness)**. 

Every element—from buttons and inputs to checkboxes and large modal containers—must have 90-degree corners. This reinforces the "technical draft" and "grid paper" aesthetic. Sharp corners align perfectly with the background grid, whereas rounded corners would break the mathematical purity of the system.

## Components

- **Buttons:** Large, bold containers with 4px borders. Use the Primary (Blue) for "Submit/Action" and Secondary (Yellow) for "Warning/Attention." Text must be Space Grotesk Bold. Every button has an 8px hard shadow that disappears on hover/click as the button moves to "fill" the shadow space.
- **Inputs:** White background (#FFFFFF) with a 4px black border. When focused, the border remains black, but the background shifts to the primary blue at 5% opacity. Labels should be Space Mono in all caps.
- **Cards:** Used to group content. They feature the 4px border and the 8px shadow. Header sections of cards are separated by a 4px horizontal black rule.
- **Chips/Tags:** Small rectangular boxes with a 2px black border. Use Primary or Secondary colors for the background to denote categories.
- **Checkboxes & Radios:** Strictly square. Checked states are filled with the Primary color and marked with a thick black "X" or "Internal Square" rather than a checkmark/circle.
- **Lists:** Items are separated by 4px black horizontal lines. Hovering over a list item fills it with the Secondary (Yellow) color.
- **Technical Readouts:** Special components for displaying data should use the Space Mono font and be framed in a "Drafting Box" (a container with crosshairs at the corners).