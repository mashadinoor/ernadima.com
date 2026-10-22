# External JavaScript modules

Browser-side JavaScript has been moved out of Astro component markup and into `src/scripts/`.
Astro local `<script src="...">` references process and bundle these TypeScript modules; they are not raw inline scripts.

Modules:
- `client-logos.ts`: temporary skeleton shimmer for placeholder client wordmarks.
- `navbar.ts`: mobile navigation interactions.
- `portfolio-images.ts`: portfolio card image reveal/error behavior.
- `portfolio-detail-images.ts`: detail cover and gallery image reveal/error behavior.
- `testimonials-marquee.ts`: testimonial marquee hover speed behavior.

After merging, run `npm run build` and test the homepage, mobile navigation, portfolio listing, and a project detail page.
