# FitTrack Design Guidelines

## Design Approach
**Reference-Based Approach**: Adidas-inspired athletic design system with bold, geometric aesthetics and sporty professionalism. Drawing from Adidas' signature clean minimalism, high-contrast typography, and performance-focused visual language.

## Core Design Principles
- **Athletic Boldness**: Sharp, geometric layouts with no rounded corners
- **Performance Focus**: Clean, data-first visualization with minimal distractions
- **Dynamic Motion**: Purposeful animations that enhance, not distract
- **Premium Simplicity**: High contrast, bold typography, professional finish

---

## Typography

**Font Stack**: 
- Primary: "Montserrat" (Google Fonts - closest to Adineue PRO)
- Fallback: "Helvetica Neue", sans-serif

**Hierarchy**:
- **App Title/Headers**: 700-900 weight, uppercase, tracking-widest (letter-spacing), 2xl-4xl sizes
- **Section Titles**: 700 weight, uppercase, tracking-wide, xl-2xl sizes
- **Metric Values**: 800 weight, 3xl-5xl sizes for stats/numbers
- **Body Text**: 500-600 weight, normal case, base-lg sizes
- **Labels/Captions**: 600 weight, uppercase, xs-sm sizes, tracking-wide

---

## Color Palette

**Primary Colors**:
- **Black**: Background base (#000000)
- **Gray-900**: Secondary backgrounds (#0F172A / #111827)
- **Neon Blue**: Primary accent (#00FFFF / #06B6D4) - for charts, CTAs, highlights
- **White**: Text, borders (#FFFFFF)

**Usage**:
- Background gradients: `from-black to-gray-900`
- Chart lines: Neon blue gradients
- Text: White on dark backgrounds
- Borders/Dividers: Gray-700/Gray-800
- Hover states: Neon blue glow effects

---

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 (p-4, p-6, p-8, etc.)

**Grid Structure**:
- **Desktop**: 3-column grid for charts and stat cards
- **Mobile**: Single column stack
- **Container**: max-w-7xl with px-4 to px-8 padding
- **Section spacing**: py-12 to py-20

**Component Spacing**:
- Between sections: mb-12 to mb-20
- Card padding: p-6 to p-8
- Form elements: gap-4 to gap-6

---

## Component Library

### Header Component
- Full-width black background
- "FITTRACK" title: Uppercase, 3xl-4xl, 900 weight, tracking-widest
- Tagline "Track. Train. Triumph.": Uppercase, sm-base, 300 weight, neon blue accent
- Icon (dumbbell/shoe): 2xl size, neon blue color
- Layout: Centered, py-8

### Input Form
- **Container**: Dark gray-900 background, sharp corners (no border-radius), p-6 to p-8
- **Input Fields**: 
  - Black background with gray-800 border
  - White text, uppercase labels (xs-sm, 600 weight)
  - Sharp corners, focus state with neon blue border
  - 3 fields in single column on mobile, row on desktop
- **Save Button**: 
  - Neon blue background, black text, 600 weight, uppercase
  - Sharp corners, px-8 py-3
  - Hover: Scale effect + brightness increase
  - Success state: Brief checkmark animation

### Dashboard Charts
- **Container**: Grid layout (1 column mobile, 3 columns desktop)
- **Chart Cards**: 
  - Gray-900 background, sharp corners
  - p-6, subtle shadow (shadow-xl)
  - Chart title: Uppercase, lg-xl, 700 weight, mb-4
- **Charts**: 
  - Neon blue gradient lines/bars
  - White axis labels
  - Minimal gridlines (gray-800)
  - 250-300px height

### Stats Cards
- **Layout**: 3-card grid (stack on mobile)
- **Design**: 
  - Black background with gray-800 border (2px)
  - Sharp corners, p-6
  - Metric value: 4xl-5xl, 800 weight, white
  - Label: Uppercase, sm, 600 weight, neon blue
  - Hover: Subtle scale (1.02) + neon blue glow

### Reset Button
- Red-600 background (danger indicator)
- White text, uppercase, 700 weight
- Sharp corners, px-6 py-3
- Hover: Red-700 + scale effect
- Confirmation modal: Gray-900 background, centered, sharp corners, neon blue confirm button

---

## Animations

**Framer Motion Patterns**:
- **Page Load**: Header fades in from top (0.5s)
- **Cards/Charts**: Fade in + slide up (0.3s stagger)
- **Form Submit**: Success checkmark scale + fade (0.4s)
- **Button Hover**: Scale 1.05 (0.2s)
- **Modal**: Fade in background + slide down content (0.3s)
- **Stat Updates**: Number count-up animation (0.6s)

**Animation Timing**: Keep snappy - 0.2-0.5s durations, ease-out curves

---

## Visual Enhancements

**Shadows**: Subtle shadows on cards (shadow-xl) for depth on dark backgrounds

**Borders**: 1-2px solid borders in gray-800 for definition

**Gradients**: Background gradients from black to gray-900, chart line gradients with neon blue

**Hover Effects**: Scale transforms (1.02-1.05), neon blue glows, brightness adjustments

---

## Images

**No hero images required** - This is a data-focused dashboard application. Visual interest comes from:
- Bold typography
- Animated charts with neon blue gradients
- Geometric card layouts
- Icon usage (fitness-related icons from react-icons: FaDumbbell, GiRunningShoe, IoWater)

---

## Responsive Behavior

**Mobile (<768px)**:
- Stack all components vertically
- Full-width input fields
- Single-column chart grid
- Reduce font sizes (3xl → 2xl for titles)
- Maintain sharp corners and bold typography

**Desktop (≥768px)**:
- 3-column grid for charts and stats
- Horizontal input form layout
- Larger metric displays
- More generous spacing (p-8 vs p-6)