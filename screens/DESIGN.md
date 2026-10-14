---
name: InstaHelp Real-Time Service Recovery
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#45464d'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
  currency-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

The design system embodies the high-velocity, high-accountability world of Tier-1 Indian on-demand consumer technology. It reconciles high-stress operational exceptions (cancellations, late technician arrivals, reassignments) with calm, authoritative, and automated reassurance. 

The aesthetic is precision-driven Corporate Modern with soft tactile refinement:
- **Atmosphere**: Crisp, surgical, and premium. The interface uses pure layered whites (`#FFFFFF`), subtle warm off-white canvas foundations (`#F9FAFB`), and hairline mechanical dividers (`#E5E7EB`).
- **Personality**: Proactive, empathetic, and decisive. The system avoids panic-inducing alerts, framing disruptions as active, intelligent recoveries governed by background AI.
- **Micro-metaphors**: Real-time radar reassignment pings, verified partner credential ribbons, transparent time-to-arrival deltas, and monetary adjustments highlighted with explicit Rupee (`₹`) precision.

## Colors

The palette balances deep enterprise-grade authority with real-time operational state signals:

- **Primary (`#0F172A`)**: Urban Company Midnight Navy. Anchors navigation headers, hero primary actions, and primary typography.
- **Secondary (`#059669` / Accent `#10B981`)**: Verified Emerald. Applied to successful AI auto-reassignments, technician background checks, guaranteed arrival locks, and wallet credit confirmations.
- **Tertiary (`#D97706` / Amber `#F59E0B`)**: Active Dispatch Amber. Signals live state changes—radar technician search, partner rerouting, and real-time transit delay buffers.
- **Destructive/Critical (`#DC2626` / `#EF4444`)**: Controlled Crimson. Reserved solely for terminal cancellations, payment failures, or hard service disruptions.
- **Neutrals & Surfaces**:
  - Main Canvas: `#F9FAFB` (Subtle Off-White)
  - Card & Container Surface: `#FFFFFF` (Pure White)
  - Subtle Borders & Dividers: `#E5E7EB`
  - Secondary Text / Metadata: `#6B7280`
  - High-Contrast Primary Text: `#111827`

## Typography

Typography prioritizes rapid scannability under motion and high sunlight contrast. Plus Jakarta Sans provides clean geometric legibility with modern, approachable humanist details.

- **Numerics & Currency**: Tabular numeric figures are mandatory for tracking metrics, ETAs (e.g., "12 mins"), and pricing/credits (`₹249 refunded`). The Indian Rupee symbol (`₹`) is rendered at the exact optical baseline and matching weight of the adjacent numerals.
- **Hierarchy Rules**: Critical disruption notices use `headline-md` in `#111827`. Service addresses (e.g., "100 Feet Rd, Indiranagar") and partner metadata strictly follow `body-md` and `label-md` pairings to maintain visual order.

## Layout & Spacing

The layout is built for real-time mobile app containers (360px–428px) scaling seamlessly to desktop operational cockpits and support resolution dashboards.

- **Grid Architecture**: Mobile uses a single-column, 4-column fluid system with `margin: 1rem` and `gutter: 1rem`. Desktop uses a 12-column layout capped at a maximum width of `1200px` centered, utilizing `margin-desktop: 2rem` and `gutter-desktop: 1.5rem`.
- **Rhythm & Structure**: Component stacking relies on `space-md` (12px) for related sub-items and `space-xl` (24px) for distinct card boundaries. Dynamic bottom sheets and floating action docks use safe-area insets (`env(safe-area-inset-bottom) + 1rem`).

## Elevation & Depth

Visual hierarchy uses clean structural borders paired with soft, low-intensity ambient shadows.

- **Level 0 (Flat)**: Background `#F9FAFB`, system banners, and passive dividers use no elevation, relying solely on `#E5E7EB` 1px strokes.
- **Level 1 (Cards & Modules)**: Service status modules, AI insight tiles, and technician identity cards use `#FFFFFF` background, a 1px border of `#E5E7EB`, and `box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Active Sheets & Floating Panels)**: Live tracking drawers, radar reassignment dialogs, and instant compensation alerts use `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modal Overlays & System Interrupts)**: Emergency partner switch prompts utilize `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)` combined with a frosted backdrop filter (`backdrop-blur: 4px; background: rgba(15, 23, 42, 0.4)`).

## Shapes

The design system standardizes on modern, consumer-friendly rounded geometry:
- **Base Containers & Cards**: `rounded-md` (0.5rem / 8px) to `rounded-lg` (1rem / 16px) for service cards, partner modules, and map overlays.
- **Pills & Badges**: Fully circular (`rounded-full` / 9999px) for live state indicators, verification badges, timing countdowns, and quick tags.
- **Form Controls & Action Bars**: `rounded-lg` (1rem / 16px) to match standard touch-target thumb ergonomically across iOS and Android.

## Components

### Buttons & Interactive Controls
- **Primary Action (InstaHelp Recovery)**: Deep Navy (`#0F172A`) filled button, text `#FFFFFF`, height 48px on mobile, `rounded-lg` (16px), font `label-lg`. Micro-press state scales to `0.98`.
- **Secondary Action (Accept Alternate / Compensation)**: Crisp White (`#FFFFFF`) with 1.5px solid `#0F172A` or `#E5E7EB`, text `#0F172A`.
- **Reassurance / Verified Action**: Filled Emerald (`#059669`) with white text, used when confirming new technician assignment.

### Status Chips & Pills
- **AI Matching Active**: Background `#FEF3C7`, text `#D97706`, border 1px solid `#FDE68A`. Preceded by a pulsing 6px amber indicator dot.
- **Verified Replacement Found**: Background `#ECFDF5`, text `#059669`, border 1px solid `#A7F3D0`. Accompanied by a shield checkmark icon.
- **Service Delayed / Cancelled**: Background `#FEF2F2`, text `#DC2626`, border 1px solid `#FECACA`.

### Cards & Recovery Modules
- **Partner Verification Card**: Contains partner avatar (48x48px, `rounded-full`), name, UC 5-star rating chip, completed jobs counter, and "Background Verified" green badge. Displays real-time transit distance (e.g., "Arriving in 14 mins to HSR Layout Sector 2").
- **Live Auto-Recovery Drawer**: Fixed bottom sheet displaying the three-step AI recovery loop: *Delay Detected → Scanning Nearby Fleet → Partner Reassigned*. Includes live countdown timer and instant wallet credit guarantee banner (`₹50 late credit automatically added`).

### Lists & Timelines
- Clean, left-rail operational timeline with step status nodes (completed in emerald green, active in pulsing amber, pending in muted gray `#E5E7EB`). Items structured with primary label, location tag (e.g., "Koramangala 4th Block Hub"), and tabular time-stamp.