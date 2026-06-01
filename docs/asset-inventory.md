# Orketech asset inventory

## Logo location in repo

All web logo files live in:

```text
public/logo/
```

Public URL pattern from the React app:

```text
/logo/<filename>
```

## Current production logo usage

- Navbar on dark background: `/logo/Logo_1_Orketech_invertido.png`
- Hero / dark section: `/logo/Logo_3_Orketech.png`
- Footer / secondary use: `/logo/Logo_4_Orketech.png`
- Favicon / app icon candidate: `/logo/Logo_2_Orketech.png`

## Existing full-size logo set

- `Logo_1_Orketech.png` — 1049x788 — full logo, blue, with tagline.
- `Logo_1_Orketech_invertido.png` — 1049x788 — full logo, white/inverted, with tagline.
- `Logo_2_Orketech.png` — 476x462 — blue circular K symbol.
- `Logo_3_Orketech.png` — 797x737 — blue circular K symbol + Orketech name.
- `Logo_4_Orketech.png` — 1045x371 — horizontal Orketech wordmark + tagline.

## Added Fernando Gajardo deliverables

Source folder:

```text
/Users/jhcarrillo/Documents/Trabajo/Independiente/Orketech/Web/Trabajo Fernando Gajardo/Entregables/Logos
```

Normalized files added to `public/logo/`:

- `Orketech_logo_blue_compact.png` — 209x218 — compact blue symbol + name.
- `Orketech_logo_white_compact.png` — 209x218 — compact white symbol + name.
- `Orketech_symbol_blue.png` — 209x218 — compact blue symbol only.
- `Orketech_symbol_white.png` — 209x218 — compact white symbol only.

## Recommendation

Keep the existing full-size logo files for current live placements because they have higher resolution and are already tuned for the layout.

Use the added compact deliverables for:

- dark-background overlays where a simple white symbol is needed;
- social/avatar/favicon experiments;
- compact cards or future sections where the current large logo files are oversized;
- source-of-truth traceability from Fernando Gajardo's delivered package.

Do not replace the current navbar/hero/footer logos without a visual review, because the compact deliverables are square and lower-resolution.
