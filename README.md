# GCDA Career Website

A multi-page Next.js website for **GCDA – Global Career Development Association** with full SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and Google AI Overviews optimization built in.

## What's included

- 6 primary pages: Home, About, Services, Plans, Contact, Blog
- 6 dedicated service detail pages
- **30 city pages** for all major Indian cities (Tier 1, 2, 3) at `/cities/[slug]` + a city hub at `/cities`
- **10 in-depth blog posts** at `/blog/[slug]` for topical authority and AEO
- Reused brand logo and downloaded website illustrations in `public/assets`
- Updated Mumbai office address
- Responsive navigation, breadcrumbs, testimonials, FAQs, and a working contact form flow

## Pages included (58 generated)

### Core
- `/`
- `/about`
- `/services`
- `/plans`
- `/contact`
- `/blog`

### Services
- `/services/personal-counselling`
- `/services/career-assessment`
- `/services/workshops-seminars`
- `/services/stream-selection-guidance`
- `/services/degree-selection-guidance`
- `/services/working-professionals-guidance`

### Cities (30)
- **Tier 1 (9):** Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Gurugram
- **Tier 2 (12):** Jaipur, Lucknow, Chandigarh, Indore, Coimbatore, Nagpur, Visakhapatnam, Bhopal, Surat, Bhubaneswar, Noida, Kochi, Thiruvananthapuram
- **Tier 3 (8):** Patna, Guwahati, Raipur, Ranchi, Dehradun, Mysuru, Vadodara, Varanasi

### Blog (10)
- `how-to-choose-the-right-stream-after-10th`
- `best-career-options-after-12th-commerce`
- `career-options-after-12th-science`
- `how-to-prepare-for-jee-main-while-in-12th`
- `career-after-btech-what-to-do-next`
- `career-options-after-graduation-in-india`
- `how-to-become-a-data-scientist-in-india`
- `career-options-for-working-professionals-in-india`
- `how-to-help-your-child-choose-a-career`
- `best-online-courses-and-certifications-for-career-growth`

## Optimization layer (built in)

### Technical SEO
- `metadataBase`, per-page `generateMetadata` with title template, unique descriptions, keywords, canonicals
- `lang="en-IN"` on `<html>`
- Dynamic `sitemap.xml` (50+ URLs) with `lastModified`, `changeFrequency`, tier-aware `priority`
- `robots.txt` with explicit allow for AI answer-engine crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
- Security + cache headers via `next.config.mjs`

### On-page SEO
- One `<h1>` per page, semantic heading hierarchy
- Internal linking hub-and-spoke across cities, services, blog
- Breadcrumbs (visual + JSON-LD) on every non-home page
- Image alt text on every image
- Mobile-first responsive design

### AEO (Answer Engine Optimization)
- `<AnswerBlock>` component on every long-form page (40–70 word direct answer)
- Machine-chunked content (H2/H3, bullets, tables)
- `FAQPage` schema on every page with FAQs
- `HowTo` schema on process/journey sections
- `Product` schema on each plan
- Definition-style opening paragraphs

### GEO (Generative Engine Optimization)
- `Organization` schema with `sameAs`, `knowsAbout`, `areaServed`
- `LocalBusiness` schema with geo coordinates
- `WebSite` schema with `SearchAction` (sitelinks search box)
- `ProfessionalService` schema on every city page
- `Article` schema on every blog post with full author/publisher/date metadata
- AI-crawler allow-list in `robots.txt`

### AI Overviews
- `FAQPage`, `HowTo`, `Article`, `Product`, `Service`, `Organization`, `LocalBusiness`, `BreadcrumbList` schemas
- 40–70 word direct answer passages at the top of long-form pages
- Citation-worthy statistics and structured frameworks
- Freshness signals via `datePublished` / `dateModified` on every blog post

## Brand / contact details used

- Address: **102, Citi Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053**
- Phone: **+91 91360 05039**
- Email: **gcda.career@gmail.com**
- WhatsApp CTA included
- Site URL: **https://gcdassociation.org**

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm install
npm run build
npm run start
```

## Add more cities or blog posts

- **City:** open `data/cities.js`, append a new object to the `cities` array. The new page is generated automatically.
- **Blog post:** open `data/blog.js`, append a new object to the `blogPosts` array using the existing structure. The new post is generated automatically.

## Notes

- Plan names, pricing, and plan features were kept aligned with the current site.
- Contact form uses a client-side `mailto:` flow plus WhatsApp CTA so it works without a backend.
- All schema is rendered server-side (React Server Components) so search engines and AI crawlers see the structured data on first load.
- See **`SEO-AEO-GEO.md`** for the full technical breakdown and next-step recommendations.
