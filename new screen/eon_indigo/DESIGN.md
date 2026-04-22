# Design System Specification: The Digital Concierge

## 1. Overview & Creative North Star: "The Digital Concierge"
This design system is built to transcend the utility of a standard booking tool, moving into the realm of high-end hospitality. Our Creative North Star is **The Digital Concierge**: an experience that feels anticipatory, quiet, and profoundly authoritative. 

To achieve this, we reject the "template" look of rigid grids and heavy borders. Instead, we embrace **Soft Minimalism**—a style characterized by generous white space, intentional asymmetry, and editorial-grade typography. We use overlapping elements and varying surface depths to guide the user’s eye, making the complex task of scheduling feel as effortless as a conversation in a luxury hotel lobby.

---

## 2. Color Strategy & Tonal Architecture
Color is used as a functional tool for hierarchy rather than mere decoration. The palette is anchored by a sophisticated Deep Indigo, supported by a rich range of neutral surfaces.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through background color shifts. 
- A `surface_container_low` section sitting on a `surface` background provides all the separation required. 
- Use the tonal difference between `surface` (#fcf8ff) and `surface_container` (#f0ecf9) to create natural breaks in content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to define importance:
- **Level 0 (Base):** `surface` or `surface_container_lowest`.
- **Level 1 (Cards/Content):** `surface_container_low` or `surface_container`.
- **Level 2 (Floating/Interactive):** `surface_container_high` or `highest`.
By nesting a `surface_container_lowest` card inside a `surface_container_high` section, you create a "recessed" look that adds tactile quality without visual noise.

### The "Glass & Gradient" Rule
To elevate CTAs and floating navigation:
- **Glassmorphism:** For floating headers or mobile navigation bars, use semi-transparent `surface` colors with a 20px-30px backdrop-blur.
- **Signature Textures:** Main Action buttons or Hero sections should utilize a subtle linear gradient transitioning from `primary` (#3525cd) to `primary_container` (#4f46e5). This adds "soul" and a sense of light hitting a physical object.

---

## 3. Typography: Editorial Authority
We utilize a dual-font strategy to balance character with legibility.

- **The Voice (Manrope):** Used for `display`, `headline`, and `title` scales. Manrope’s geometric yet warm nature provides an editorial feel. Large `display-lg` (3.5rem) headers should be used with tight tracking (-2%) to create a "Signature" brand moment.
- **The Engine (Inter):** Used for `body` and `label` scales. Inter is chosen for its exceptional readability in functional contexts (dates, times, prices).

**Hierarchy Principle:** Use extreme scale contrast. A `display-sm` headline paired with a `label-md` category tag creates a sophisticated, modern layout that feels intentional rather than "default."

---

## 4. Elevation & Depth: Tonal Layering
We move away from traditional drop shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking" surface tokens. Placing a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f5f2ff) background creates a soft, natural lift.
- **Ambient Shadows:** Where a shadow is required (e.g., a floating "Book Now" bar), use extra-diffused values. 
    - *Shadow Color:* Tint the shadow with the `on_surface` color (#1b1b24) at 4-6% opacity.
    - *Blur:* Use 40px - 60px blur for a soft, ambient glow that mimics natural light.
- **The "Ghost Border":** If a container requires more definition for accessibility, use the `outline_variant` (#c7c4d8) at **10% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Background using the `primary` to `primary_container` gradient. Large radius `xl` (3rem) for a pill shape. High-contrast `on_primary` (#ffffff) text.
- **Secondary:** `surface_container_highest` background with `primary` text. No border.
- **Tertiary:** Ghost style. No background; `primary` text only. Used for less critical actions like "Cancel" or "View Details."

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Implementation:** Separate list items using 12px or 16px of vertical white space. For cards, use the `md` (1.5rem) or `lg` (2rem) roundedness scale. 
- **Booking Cards:** Use `surface_container_low` with an `xl` corner radius. Group the "Time" and "Service" using typography scale differences rather than a line.

### Form Inputs
- **Style:** Minimalist. A simple `surface_container` background with `none` or `sm` (0.5rem) radius for a slightly sharper, professional look. 
- **States:** On focus, the background shifts to `surface_container_high` and the `primary` color appears only as a 2px bottom-indicator or caret.

### Appointment Chips
- **Selection:** Use `primary_container` for selected states and `surface_container_high` for unselected. Corners should always be `full` (9999px) to indicate interactivity.

### Contextual Components for SmartBook
- **The "Time-Scroller":** A horizontal sequence of `surface_container` chips for selecting slots, utilizing a subtle "Glassmorphism" fade on the right edge to indicate more content.
- **Floating Summary Bar:** A `surface` container with a 15% opacity `primary_container` tint, anchored to the bottom of the mobile screen with an ambient shadow and `xl` top-corner radius.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use asymmetrical margins (e.g., 24px left, 32px right) for headline sections to create an editorial, "Uber-esque" look.
- **Do** lean heavily on the `xl` (3rem) corner radius for main containers to convey softness and approachability.
- **Do** use `on_surface_variant` for secondary information to create a clear visual hierarchy.

### Don’t:
- **Don’t** use pure black (#000000) for text. Always use `on_surface` (#1b1b24) to maintain the "Deep Indigo" tonal depth.
- **Don’t** use standard 1px dividers. If separation is failing, increase the spacing or shift the background tone.
- **Don’t** crowd the interface. If a screen feels "busy," remove a container and increase the white space between elements.