# Ahmad Memos — مذكرات أحمد

Official static site for **Ahmad Memos / مذكرات أحمد** — *A Human Life Archive*.
Deployed via GitHub → Cloudflare Pages (automatic). Custom domain: ahmadmemos.com

## Identity-alignment & technical pass (this build)

**Brand (Identity Vol.03)**
- Palette remapped to the five official values: Charcoal `#1E1E1E`, Warm Ivory `#F4F0E8`, Leather Brown `#8B6B4A`, Aged Gold `#B89A5A`, Deep Forest `#445248`.
- Type set to the five OFL faces only: Fraunces (display), Hanken Grotesk (body), Amiri (Arabic quotes), IBM Plex Sans Arabic (wordmark/UI/Arabic body), IBM Plex Mono (metadata). Un-embedded commercial faces (Zarid Serif, Bukra) removed from the stacks.
- Wordmark set in IBM Plex Sans Arabic; **"Memos" now Leather Brown** per the guideline.

**Technical / SEO / performance**
- `lang="en"` → `lang="ar"` on every page (Arabic is primary).
- GA4 (G-X7SE8VPJG7) added to every page — previously homepage only.
- Homepage weight cut ~1.8MB → ~40KB: the three embedded photos externalised to `/assets/` with lazy-loading.
- `second-chance-thumb` recompressed 4MB PNG → ~170KB JPEG (refs updated).
- Hero photos recompressed (~1.3MB → ~0.67MB total).
- Added a visually-hidden `<h1>` on the homepage; Twitter card + font links added to `404.html`.
- `theme_color` / manifest aligned to `#1E1E1E`; manifest gains `start_url`, `lang`, `dir`.

## Open identity decisions (not changed automatically)
- **The Balanced Gesture symbol** in the logo lockup conflicts with Vol.03's "add no symbol — the name carries the identity." Kept as-is; remove the `.logo__sym` span if Vol.03 is final on this.
- Paper white: site uses `#F4F0E8` (Vol.03). Earlier boards used `#F1E9DB`. Change the `--bone` value if you prefer the warmer bone.
- Full RTL layout (`dir="rtl"` at root) is a deliberate redesign step, left for a dedicated pass.


## V6 — Living-archive evolution (this build)

**Audit performed first (homepage = single source of truth).** Findings: tokens/CSS were already unified across pages; nav/footer diffs were URL-only; the real inconsistency was *depth* — subpages were thin shells (~200–400 chars) that broke the cinematic continuity, and the 22KB CSS was duplicated inline in all 8 files (the mechanism by which drift happens).

**Unified design system**
- All shared CSS extracted to `assets/site.css` (single source of truth) + a V6 extension layer built strictly from existing tokens (hairlines, brass kickers, Amiri voice, reveal rhythm). All behavior unified in `assets/site.js`.
- Every page now: −22KB, cached once, impossible to drift.

**Homepage — cinematic narrative (hero untouched)**
- Emotional line added before the main CTA (per direction).
- New sections in the arc Arrival→Action: Featured Documentary (refined copy) → Latest Journey → Latest Journal (editorial statement) → Selected Frames (Leica-rhythm gallery from real photographs) → Start-here → About note → Contact.
- Footer upgraded: minimal nav + "A life being lived. A life being documented."

**Pages rebuilt from the homepage language (all real copy preserved)**
- **Films**: chapters of the archive — Chapter 01 · Second Chance, elegant next-chapters note.
- **Second Chance**: meta strip, film still, essay, "before you press play" moment.
- **Journal**: editorial coming-soon (large Amiri statement, honest note kept).
- **Travels**: documentary-journeys intro, Journey 01 (being documented), anatomy of a journey (overview/timeline/places/reflections/gallery/related).
- **About**: philosophy page — the official line, four principles of the archive.
- **Contact / 404**: same language, minimal.

**Seamless navigation**: soft page fade transitions (reduced-motion respected). New assets: `assets/frame-01..03.jpg` (cinematic crops of existing photographs — no generated imagery).
