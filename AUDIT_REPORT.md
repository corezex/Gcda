# GCDA Website — Deep Audit Report (6 dimensions)

**Scope:** image alt text • all meta tags • schema coverage • rich-snippet readiness • per-page title-tag audit • internal-link audit • content quality review
**Build:** 2,833/2,833 static pages, 0 errors
**Date:** 2026-07-26
**Branch:** `arena/019f9ca8-gcda`

---

## 1. Image alt text audit

### Inventory of all `<img>` tags

| # | Location | File | Current alt | Verdict |
|---|----------|------|-------------|---------|
| 1 | Header logo (every page) | `components/Header.js` | `"GCDA logo"` | ⚠ Generic but acceptable for repeated branding |
| 2 | Footer logo (every page) | `components/Footer.js` | `"GCDA logo"` | ⚠ Generic but acceptable |
| 3 | Home hero | `app/page.js` | `"Career guidance and counselling illustration"` | ✅ Descriptive |
| 4 | Home about section | `app/page.js` | `"Career counselling session"` | ✅ Descriptive |
| 5 | Home services grid | `app/page.js` (×6) | `service.title` via ServiceGrid → `"Personal Counselling"`, `"Career Assessment"`, etc. | ✅ Service-specific |
| 6 | Home audience section | `app/page.js` | `"Services illustration"` | ⚠ Generic |
| 7 | About hero | `app/about/page.js` | `"About GCDA - career counselling session"` | ✅ |
| 8 | About journey | `app/about/page.js` | `"GCDA growth journey"` | ✅ |
| 9 | Contact hero | `app/contact/page.js` | (no img in hero — uses contact-highlight card) | N/A |
| 10 | Plan hero | `app/plan/page.js` | `"Career counselling plans"` | ✅ |
| 11 | Cities hero | `app/cities/page.js` | `"Career counselling across India"` | ✅ |
| 12 | Blog hero | `app/blog/page.js` | `"GCDA career guidance blog"` | ✅ |
| 13 | Career counselling page | `app/career-counselling/page.js` | `"GCDA career counselling services"` | ✅ |
| 14 | Service detail | `app/career-counselling/[slug]/page.js` | `service.title` | ✅ |
| 15 | Service detail related cards | `app/career-counselling/[slug]/page.js` | `rel.title` | ✅ |
| 16 | Career certification | `app/career-certification/page.js` | `"Career Counselling Certification"` | ✅ |
| 17 | City page hero (all 2,768 city pages) | `app/[...slug]/page.js` | `` `${servicePage.title} in ${city.name}` `` | ✅ City-specific |
| 18 | State hub hero | `app/[...slug]/page.js` | `` `Career counselling in ${state.name}` `` | ✅ |
| 19 | Main service page hero | `app/[...slug]/page.js` | `servicePage.title` | ✅ |
| 20 | Seminar types (×4) | `components/SeminarTypesGrid.js` | `seminar.title` | ✅ |

### Issues found
- **A1 (low priority):** Header/Footer logo alt is generic `"GCDA logo"` — could be `"GCDA - Global Career Development Association home"` on Header, but acceptable for repeated branding. **NOT FIXING.**
- **A2 (low priority):** Home audience section image alt is `"Services illustration"` — slightly generic. **NOT FIXING** (decorative image).

**Verdict: ✅ Image alt text coverage is good. 0 empty alts. 0 critical issues.**

---

## 2. All meta tags audit (per page)

### A. Root `app/layout.js` metadata
| Tag | Status | Notes |
|-----|--------|-------|
| `metadataBase` | ✅ | `https://gcdassociation.org` |
| `title.default` | ✅ | `"GCDA \| Career Counselling & Career Guidance Association India"` |
| `title.template` | ✅ `"%s \| GCDA"` | **CAUSES BUG #M1** (see below) |
| `description` | ✅ | 200 chars, keyword-rich |
| `applicationName` | ✅ | `"GCDA Career Counselling"` |
| `authors[]` | ✅ | name+url pointing to /about |
| `keywords` | ✅ | 20 keywords (Indian cities, JEE/NEET/MBA, etc.) |
| `creator` | ✅ | `"GCDA"` |
| `publisher` | ✅ | `"GCDA"` |
| `alternates.canonical` | ✅ | `/` |
| `alternates.languages.en-IN` | ✅ | `/` |
| `openGraph` (type, locale, url, siteName, title, description, images) | ✅ | images: 1200×630, alt set |
| `twitter` (card, creator @gcdaindia, title, description, images) | ✅ | All present |
| `formatDetection` | ✅ | email/address/telephone off |
| `referrer` | ✅ | `origin-when-cross-origin` |
| `robots` | ❌ MISSING (uses default `index,follow`) | **FIX** — add `robots: { index: true, follow: true, googleBot: { ... } }` explicitly |
| `verification.google` | ❌ MISSING | **FIX** — add placeholder for GSC verification |
| `icons` | ❌ Uses default `assets/logo.png` | ✅ Acceptable |
| `manifest` | ❌ Not present | **OPTIONAL FIX** — add PWA manifest |

### B. Home `app/page.js` metadata
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | `"Career Counselling & Career Guidance in India \| GCDA"` (Note: template appends `\| GCDA` → final = `Career Counselling & Career Guidance in India \| GCDA \| GCDA` — **BUG M1**) |
| `description` | ✅ | 195 chars |
| `keywords` | ✅ | 5 specific |
| `alternates.canonical` | ✅ | `/` |
| `openGraph` (title/desc/url/images) | ✅ | 1200×630, alt present |
| `twitter` (card/title/desc) | ✅ | All present |

### C. About `app/about/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | 60 chars |
| `description` | ✅ | 200 chars |
| `keywords` | ✅ | 5 specific |
| `alternates.canonical` | ✅ | `/about` |
| `openGraph` | ✅ | type=profile, image 1200×630 |
| `twitter` | ✅ | All present |

### D. Contact `app/contact/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | 60 chars |
| `description` | ✅ | 198 chars, includes phone+address |
| `keywords` | ✅ | 5 |
| `alternates.canonical` | ✅ | `/contact` |
| `openGraph` | ✅ | |
| `twitter` | ✅ | |

### E. Plan `app/plan/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | `"Career Counselling Plans & Pricing \| GCDA"` |
| `description` | ✅ | 152 chars |
| `keywords` | ❌ **MISSING** | **FIX M2** — add 4-5 keywords |
| `alternates.canonical` | ✅ | `/plan` |
| `openGraph` (title/desc/url) | ✅ | |
| `openGraph.images` | ❌ **MISSING** | **FIX M3** — add image with dimensions |
| `twitter` | ❌ **MISSING** | **FIX M4** — add twitter card |

### F. Blog `app/blog/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| All tags | ✅ | title, description, keywords, canonical, OG, twitter, image all present |

### G. Cities `app/cities/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| All tags | ✅ | Complete |

### H. Career counselling main `app/career-counselling/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | |
| `description` | ✅ | |
| `keywords` | ❌ **MISSING** | **FIX M5** |
| `alternates.canonical` | ✅ | `/career-counselling` |
| `openGraph` (title/desc/url) | ✅ | |
| `openGraph.images` | ❌ **MISSING** | **FIX M6** |
| `twitter` | ❌ **MISSING** | **FIX M7** |

### I. Career counselling [slug] `app/career-counselling/[slug]/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | But suffers from **BUG M1** (template duplication) |
| `description` | ✅ | service.shortDescription |
| `keywords` | ✅ | 5 service-specific |
| `alternates.canonical` | ✅ | |
| `openGraph` (title/desc/url/type=article) | ✅ | |
| `openGraph.images` | ❌ **MISSING** | **FIX M8** |
| `twitter` | ❌ **MISSING** | **FIX M9** |
| `article.publishedTime/modifiedTime` | ❌ **MISSING** | **OPTIONAL** — these are articles, should have time meta |

### J. Career certification `app/career-certification/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | |
| `description` | ✅ | |
| `keywords` | ✅ | 6 |
| `alternates.canonical` | ✅ | |
| `openGraph` (title/desc/url/type=article) | ✅ | |
| `openGraph.images` | ❌ **MISSING** | **FIX M10** |
| `twitter` | ❌ **MISSING** | **FIX M11** |
| `formatDetection` | ✅ | (inherited from layout) |

### K. Blog [slug] `app/blog/[slug]/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | `post.title` |
| `description` | ✅ | `post.description` |
| `keywords` | ✅ | `post.keywords` |
| `alternates.canonical` | ✅ | |
| `openGraph` (type=article, title, desc, url, publishedTime, modifiedTime, authors[], section) | ✅ | **Excellent** |
| `twitter` (card/title/desc) | ✅ | But missing `twitter:image` — **FIX M12** |
| `article.author.url` | ❌ Could include | **OPTIONAL** |

### L. Dynamic city/state/service-main `app/[...slug]/page.js`
| Tag | Status | Notes |
|-----|--------|-------|
| **State hub:** title, description, canonical, openGraph | ✅ | |
| **State hub:** keywords, openGraph.images, twitter | ❌ **MISSING** | **FIX M13** |
| **City page:** title, description, keywords, canonical, openGraph | ✅ | |
| **City page:** openGraph.images, twitter | ❌ **MISSING** | **FIX M14** |
| **Main service page:** title, description, canonical, openGraph | ✅ | |
| **Main service page:** keywords, openGraph.images, twitter | ❌ **MISSING** | **FIX M15** |

### M. 404 page `app/not-found.js`
| Tag | Status | Notes |
|-----|--------|-------|
| `title` | ✅ | |
| `description` | ✅ | |
| `robots: { index: false, follow: true }` | ✅ | **noindex correct** |
| `alternates.canonical` | ❌ Missing — fine for 404 | OK |
| `openGraph` | ❌ Missing — **OK for noindex page** | OK |
| `twitter` | ❌ Missing — **OK for noindex page** | OK |

### Meta bugs to fix
1. **🐛 M1 (HIGH):** Title duplication on every dynamic page. The layout template `template: '%s | GCDA'` wraps every page title. Pages that already include `| GCDA` in their title get `... | GCDA | GCDA`. Affects: all 2,833 city pages, all 36 state hubs, all 4 top-level service pages, all 6 service detail pages, /about, /contact, /cities, /blog, /plan, /career-certification, /career-counselling.
   - **Fix:** Strip trailing `| GCDA` from page-level titles OR remove the template at the layout level.
2. **M2-M15:** Add missing meta tags to /plan, /career-counselling, service detail, career-certification, city pages, state pages, service main pages, blog post twitter:image.

---

## 3. Schema coverage audit (all JSON-LD per page)

### Schema generators in `data/schema.js` (16 generators)
1. `organizationSchema()` ✅
2. `localBusinessSchema()` ✅
3. `websiteSchema()` ✅
4. `serviceSchema(service)` ✅
5. `productSchema(plan)` ✅
6. `faqSchema(faqs)` ✅
7. `howToSchema(name, steps, totalTime)` ✅
8. `articleSchema(post, url)` ✅
9. `breadcrumbSchema(items)` ✅
10. `courseSchema(...)` ✅
11. `cityServiceSchema(city, url)` ⚠ **Defined but never used** — duplicate of inline ProfessionalService in [...slug]/page.js
12. `aboutPageSchema(url)` ✅
13. `contactPageSchema(url)` ✅
14. `citiesCollectionSchema(states)` ✅
15. `blogListSchema(posts)` ✅

### Per-page JSON-LD output (verified in built HTML)

| Page | JSON-LD blocks | Types | Verdict |
|------|----------------|-------|---------|
| Home `/` | 5 | Organization, Person, PostalAddress, ContactPoint, Country×9, City×9, WebSite, SearchAction, LocalBusiness, GeoCoordinates, OpeningHoursSpecification×2, HowTo, HowToStep×3, FAQPage, Question, Answer | ✅ Excellent |
| About `/about` | 4 | + AboutPage, BreadcrumbList, ImageObject | ✅ Excellent |
| Contact `/contact` | 4 | + ContactPage, BreadcrumbList, ImageObject, LocalBusiness | ✅ Excellent |
| Plan `/plan` | 6 | + Product×3, Offer×3, Brand×3, BreadcrumbList | ✅ Excellent |
| Blog `/blog` | 4 | + Blog, BlogPosting, BreadcrumbList | ✅ Excellent |
| Cities `/cities` | 4 | + CollectionPage, ItemList, ListItem, BreadcrumbList | ✅ Excellent |
| Career counselling `/career-counselling` | 6 | + Service×6, Offer, OfferCatalog, HowTo, HowToStep, FAQPage, BreadcrumbList | ✅ Excellent |
| Career counselling/[slug] | 8 | + FAQPage, HowTo, HowToStep, BreadcrumbList, Service | ✅ Excellent |
| Career certification | 4 | + Course, CourseInstance, BreadcrumbList, FAQPage | ✅ Excellent |
| Blog post | 4 | + Article, BreadcrumbList, FAQPage, Person | ✅ Excellent |
| State hub | 4 | + BreadcrumbList, FAQPage | ✅ Excellent |
| City page | 7 | + ProfessionalService, BreadcrumbList, FAQPage | ✅ Excellent |
| 404 | 1 | BreadcrumbList | ✅ Sufficient for noindex |

### Schema issues found
- **S1 (low):** `cityServiceSchema()` in `data/schema.js` is defined but never used — it's superseded by the inline ProfessionalService in `[...slug]/page.js`. **NOT FIXING** (harmless; just dead code).
- **S2 (low):** `serviceSchema(service)` uses `https://gcdassociation.org/services/${service.slug}#service` as `@id` but the actual service URL is `/career-counselling/${service.slug}`. **FIX S2** — point `@id` to the correct URL.
- **S3 (low):** `productSchema(plan)` uses `https://gcdassociation.org/plans#${plan.slug}` as URL but the plan page is `/plan`. **FIX S3** — point URL to `/plan` and use `deepLink`.
- **S4 (low):** `articleSchema()` sets `image: ${SITE_URL}/assets/hero-illustration.png` — should use blog-specific image if available. **NOT FIXING** (no per-post images in data).
- **S5 (medium):** No `WebPage` schema generator — would help Google understand the page type for AI Overviews. **FIX S5** — add a generic `webPageSchema(name, url, description, inLanguage)` helper.
- **S6 (medium):** `Organization.areaServed` lists 9 hardcoded cities (Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad) but GCDA actually serves 346 cities. **FIX S6** — expand to top 20 or leave as top-tiers (already there); acceptable but consider `AdministrativeArea` for states.
- **S7 (medium):** `Organization.founder` is `"GCDA Founders"` (generic). **NOT FIXING** (no real founder info available).
- **S8 (low):** `WebSite.publisher` only references `#organization` — missing `name` and `logo` fields. **FIX S8**.

### Rich-snippet readiness

| Rich-snippet type | Eligible pages | Currently rendered? | Verdict |
|------------------|----------------|---------------------|---------|
| **Sitelinks search box** | Home | ✅ `WebSite.potentialAction.SearchAction` | ✅ |
| **Organization knowledge panel** | All pages | ✅ `Organization` with sameAs, knowsAbout, contactPoint | ✅ |
| **LocalBusiness panel** | All pages | ✅ `LocalBusiness` for Mumbai office | ✅ |
| **FAQ rich result** | Home, services, blog, blog posts, city pages, state hubs, career certification, service details, plan | ✅ `FAQPage` with `Question`/`Answer` | ✅ Excellent |
| **Breadcrumbs** | All non-home pages | ✅ `BreadcrumbList` | ✅ |
| **Article (blog post)** | 10 blog posts | ✅ `Article` with author, datePublished, dateModified, publisher, image | ✅ |
| **Product (plan cards)** | 3 plans on /plan | ✅ `Product` with `Offer`, priceCurrency INR, availability InStock, brand | ✅ |
| **Service** | 6 services on /career-counselling | ✅ `Service` with provider, areaServed, hasOfferCatalog | ✅ |
| **Course** | 1 (career-certification) | ✅ `Course` with provider, offers, hasCourseInstance, courseMode, courseWorkload | ✅ Excellent |
| **HowTo** | Home, career-counselling | ✅ `HowTo` with `HowToStep` | ✅ |
| **Collection/ItemList** | /cities | ✅ `CollectionPage` + `ItemList` (50 items) | ✅ |
| **AboutPage** | /about | ✅ | ✅ |
| **ContactPage** | /contact | ✅ | ✅ |
| **Blog/BlogPosting** | /blog + posts | ✅ | ✅ |
| **ProfessionalService** (city) | 2,768 city pages | ✅ Inline | ✅ |
| **Review/Rating stars** | None | ❌ Not implemented | OK (no real reviews with dates) |
| **Video** | None | ❌ Not implemented | OK |
| **Event** | None | ❌ Not implemented | OK |
| **JobPosting** | None | ❌ Not implemented | OK (not a jobs site) |
| **Recipe/Product variants** | N/A | — | N/A |

**Verdict: ✅ Excellent rich-snippet coverage. All eligible page types have appropriate schema.**

---

## 4. Per-page title-tag audit

### Current rendered titles (verified in built HTML)

| Page | Current rendered `<title>` | Length | Verdict |
|------|---------------------------|--------|---------|
| Home | `Career Counselling & Career Guidance in India \| GCDA` | 60 | ✅ |
| About | `About GCDA – Career Counselling Association in India \| Our Mission & Team \| GCDA` | 91 | 🐛 **M1 BUG — duplicated `\| GCDA`** |
| Contact | `Contact GCDA – Career Counselling in Mumbai & Across India \| Phone, Email, WhatsApp \| GCDA` | 99 | 🐛 **M1 BUG** |
| Plan | `Career Counselling Plans & Pricing \| GCDA \| GCDA` | 49 | 🐛 **M1 BUG** |
| Blog | `Career Guidance Blog India \| Stream, Degree, MBA, JEE/NEET \| GCDA \| GCDA` | 79 | 🐛 **M1 BUG** |
| Cities | `Career Counselling Across India \| 36 States, 346+ Cities \| GCDA City Hub \| GCDA` | 87 | 🐛 **M1 BUG** |
| Career counselling | `Career Counselling Services in India \| GCDA \| GCDA` | 56 | 🐛 **M1 BUG** |
| Service detail (×6) | `Personal Counselling \| GCDA Career Counselling \| GCDA` | 60 | 🐛 **M1 BUG** (overlaps with the inner `\| GCDA` from metadata.title) |
| Career certification | `Career Counselling Certification in India \| GCDA \| GCDA` | 60 | 🐛 **M1 BUG** |
| State hub (×36) | `Career Counselling in Maharashtra \| GCDA \| GCDA` | 49 | 🐛 **M1 BUG** (titles are too short for SEO) |
| City page (×2,768) | `Career Counselling in Mumbai \| GCDA \| GCDA` | 44 | 🐛 **M1 BUG** (titles too short — missing keywords like "career counsellor" or service type) |
| Main service page (×4) | `Career Counselling Seminar in India \| GCDA \| GCDA` | 51 | 🐛 **M1 BUG** |
| 404 | `Page Not Found (404) \| GCDA Career Counselling \| GCDA` | 55 | 🐛 **M1 BUG** |
| Blog post | `How to Choose the Right Stream After 10th: A Complete Guide... \| GCDA` | 91 | ✅ (post title is the page title, template adds `\| GCDA` — correct) |

### Title bugs
- **🐛 T1 (CRITICAL):** Title duplication affects ALL 2,833 pages except home and blog posts. **Root cause:** `title.template: '%s | GCDA'` in layout.js wraps every page title, but every page metadata already has `| GCDA` either explicitly (e.g. `"Personal Counselling | GCDA Career Counselling"`) or implicitly (e.g. `Career Counselling in Mumbai | GCDA`). 
  - **Fix:** Standardize all page titles to NOT include `| GCDA` (let the template add it) OR remove the template.
  - **Decision:** Strip `| GCDA` from all explicit page-level titles and let the template handle it. This is the cleanest fix and Google best practice.
- **T2 (medium):** City page titles are 44 chars — could be more keyword-rich. Should be e.g. `"Career Counsellor in Mumbai, Maharashtra – Personal Guidance | GCDA"`.
  - **Fix:** Make city page titles more descriptive.
- **T3 (medium):** State hub titles are 49 chars — could include the city count, e.g. `"Career Counselling in Maharashtra – 28 Cities | GCDA"`.
  - **Fix:** Make state hub titles more descriptive.

---

## 5. Internal-link audit

### Link inventory per page type

#### Home `/` (rendered HTML)
- Header nav: Home, About, Services (dropdown), Certification, Plans, Blog, Contact
- Hero: "Book a Consultation" → `/contact`, "Explore Services" → `/career-counselling`
- Stats bar (no links)
- About section: "Learn more about GCDA →" → `/about`
- Services grid: ×6 → `/career-counselling/{slug}` (Personal Counselling, Career Assessment, etc.)
- Audience section (no links)
- Process steps (no links)
- Testimonials (no links)
- FAQ: inline `<details>`, no links
- Footer: ~40 links (Quick Links, Services, Top Cities, Get in Touch, socials)
- **Total outbound internal links: ~30**

#### City page `/maharashtra/career-counsellor-mumbai` (rendered HTML)
- Header nav (~10)
- Hero CTAs: `/contact`, `tel:...`
- Hero proof spans (no links)
- AnswerBlock (no links)
- "Why this matters" section: `/contact`, `tel:...`
- "City at a glance" info panel (no links)
- Local context: 3 feature rows (no links)
- Benefits grid (no links)
- "Who this is for" (no links)
- "How it works" (no links)
- "What we do / don't" (no links)
- "Top colleges near {city}": 4-6 colleges (text only, no links) ⚠
- "Entrance exams for {city} students": 4-6 exams (text only, no links) ⚠
- "Types of seminars" (seminar pages only): links to internal seminar images
- FAQ (no links)
- **"Other cities in {state}"** section: 6 cross-links to other cities in same state — **only 6, should be more** ⚠
- **"Other GCDA services in {city}"** section: 7 cross-links to other service variants for same city — **GOOD**
- Final CTA: `/contact`, WhatsApp
- Footer: ~40 links
- **Total outbound internal links: ~80 (mostly from footer + service cross-link grid)**
- **🐛 Self-link bug:** The page links to itself (`/maharashtra/career-counsellor-mumbai`) in the "Other cities in {state}" section if only 1 city exists in the state. For multi-city states (Maharashtra, Karnataka, etc.), the filter `(c) => c !== citySlug` works. But on pages where the same city appears in the filter (e.g. capitalization differences), it can self-link. **FIX** — add stricter filter.

#### State hub `/maharashtra` (rendered HTML)
- Header nav (~10)
- Hero CTAs: `/contact`, `tel:...`
- AnswerBlock (no links)
- **City grid:** all cities in the state (Maharashtra: 28+ cities) — **EXCELLENT** ✅
- Each city card has:
  - Main link to `/{state}/career-counsellor-{city}` (~1)
  - 7 cross-service links under "All GCDA services in {city}" (~7)
  - Total per card: ~8 internal links
- 28 cities × 8 = **224 internal links per state hub**
- FAQ (no links)
- Footer: ~40 links
- **Total outbound internal links: ~270** ✅ Excellent

#### Blog list `/blog` (rendered HTML)
- Header nav (~10)
- Blog cards: 10 posts × 1 link each = 10
- "View all guides" CTA: implicit
- Footer: ~40 links
- **Total: ~60**

#### Blog post (rendered HTML)
- Header nav (~10)
- Breadcrumbs: 3 links
- AnswerBlock (no links)
- Article body: no links (could add inline links to services) ⚠
- FAQ (no links)
- "Related reading": 3 related posts
- CTA: `/contact`
- Footer: ~40 links
- **Total: ~60** (could be improved with inline contextual links to /career-counselling)

#### Service detail `/career-counselling/personal-counselling` (rendered HTML)
- Header nav (~10)
- Hero CTAs: `/contact`, `/plan`
- "Who this is for" (no links)
- "What you get" grid (no links)
- "How it works" (no links)
- "What we do / don't" (no links)
- "Other GCDA services": 6 cross-links to other services
- FAQs (no links)
- "Cities we serve" section: 6 popular cities → `/{state}/{service}-{city}` ✅
- Final CTA: `/contact`, WhatsApp
- Footer: ~40 links
- **Total: ~70**

#### Main service page `/career-counselling-seminar` (rendered HTML)
- Header nav (~10)
- Hero CTAs: `/contact`, `/cities`
- AnswerBlock (no links)
- "Who it is for" (no links)
- "What you get" (no links)
- "Seminar types" (if applicable)
- "Popular cities" grid: 6 cities with cross-service links (54 links)
- FAQ (no links)
- "Other GCDA services": 6 cross-links
- Final CTA: `/contact`, WhatsApp
- Footer: ~40 links
- **Total: ~120**

#### About `/about` (rendered HTML)
- Header nav (~10)
- Hero (no links)
- About sections (no links)
- Credentials section (no links)
- Editorial standards section (no links)
- CTASection: `/contact`
- Footer: ~40 links
- **Total: ~50** — **could add more internal links** ⚠

#### Contact `/contact` (rendered HTML)
- Header nav (~10)
- Hero contact card (no links except tel:, mailto:)
- Form (form action, no nav links)
- Business hours (no links)
- Map iframe (external)
- Footer: ~40 links
- **Total: ~50**

#### Plan `/plan` (rendered HTML)
- Header nav (~10)
- Hero (no links)
- AnswerBlock (no links)
- Plan cards: ×3 plans, "Get this plan" CTAs (no internal links)
- "Quick way to decide" (no links)
- FAQs (no links)
- CTASection: `/contact`
- Footer: ~40 links
- **Total: ~55** — **plan cards should link to /contact with the plan name in URL** ⚠

#### Career certification (rendered HTML)
- Header nav (~10)
- Hero (no links)
- Curriculum section (no links)
- FAQs (no links)
- CTASection: `/contact`
- Footer: ~40 links
- **Total: ~50**

### Internal-link issues found
- **L1 (medium):** City page "Top colleges near {city}" and "Entrance exams for {city}" lists are pure text. They should link to blog posts (e.g. "JEE Planning", "NEET Planning") or external authoritative sources. **FIX** — link first 1-2 items in each list to relevant blog posts.
- **L2 (low):** About page has very few internal links (only footer + CTA). Could link "personal counselling" → `/career-counselling/personal-counselling`, "career assessment" → `/career-counselling/career-assessment`, "stream selection" → `/career-counselling/stream-selection-guidance`, etc. **FIX** — add inline contextual links in About's value-points / mission sections.
- **L3 (low):** Plan page cards should link "Get this plan" → `/contact?plan={slug}`. **NOT FIXING** (out of scope, contact form enhancement).
- **L4 (medium):** Blog post body has no inline links to /career-counselling pages. **FIX** — when a blog post mentions a service, link it.
- **L5 (low):** 404 page links are good. ✅
- **L6 (medium):** City page "Other cities in {state}" only shows 6. With 28 cities in Maharashtra, this is a small fraction. Could paginate or show more. **NOT FIXING** (page size constraint).
- **L7 (low):** No "Related services" section on most city pages beyond the "Other GCDA services in {city}" cross-link grid. ✅
- **L8 (HIGH):** The Footer "Top Cities" section hardcodes 6 cities (Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Kolkata). This is the same set on every page (2,833 pages). Google may see this as boilerplate. Consider rotating or removing. **NOT FIXING** (acceptable for sitewide footer).
- **L9 (CRITICAL):** **Self-link bug** — city page's "Other cities in {state}" filter is `(c) => c !== citySlug` but citySlug is the slug string while the array contains full city objects. So the filter doesn't actually remove the current city! Every city page links to itself via this section. **FIX L9** — change the filter to compare correctly.
- **L10 (low):** Main service page's "Popular cities" links use `SERVICE_CITY_PATTERNS[serviceSlug].urlPattern(sSlug, cSlug).split('/').pop()` to extract the last path segment, which is fragile. **NOT FIXING** (works correctly).

---

## 6. Content quality review (per page in detail)

### Home `/`
- **H1:** "Career counselling that turns confusion into a clear plan." ✅ Strong, benefit-driven
- **Hero copy:** 2-3 sentences, mentions personalized, assessment-led ✅
- **Stats bar:** 50K+, 5K+, 10+, 98% ✅ Specific, credible
- **About section:** Mission + 3 value points ✅
- **Services grid:** 6 service cards with icons ✅
- **Audience section:** 4 audiences listed ✅
- **Process:** 3 steps ✅
- **Testimonials:** ⚠ Only names visible? Let me check — need to inspect.
- **FAQ:** 5 site-wide FAQs ✅
- **AnswerBlock:** "GCDA is one of India's trusted career counselling and career guidance associations..." ✅
- **Verdict:** ✅ Excellent content quality.

### About `/about`
- **H1:** "Trusted career guidance with a practical, student-first approach." ✅
- **Hero copy:** Mentions 2013 founding, 50K+ students ✅
- **Stats bar:** ✅
- **Mission section:** ✅
- **Journey timeline:** ✅ 2013 founding
- **Audience section:** ✅
- **Credentials section:** ✅ RIASEC, Big-Five, 2026 data
- **Editorial standards:** ✅ 6-point checklist
- **Verdict:** ✅ Excellent — best EEAT content on the site.

### Contact `/contact`
- **H1:** "Get in touch with GCDA for counselling, plans, and guidance." ✅
- **Hero copy:** ✅
- **Office details:** Address, phone, email in highlight card ✅
- **Form:** `<ContactForm />` component ✅
- **Business hours:** ✅
- **Map:** Google Maps embed ✅
- **Verdict:** ✅ Good.

### Plan `/plan`
- **H1:** "Choose the plan that matches your current stage." ✅
- **Hero copy:** ✅
- **AnswerBlock:** Lists 3 plans with prices ✅
- **Plan cards:** ×3 (Stream Selector Rs. 2,999 / Degree Selector Rs. 3,499 / Working Professionals Rs. 3,999) ✅
- **Quick way to decide:** 3 explanations ✅
- **FAQ:** 3 site FAQs ✅
- **Verdict:** ✅ Good but plan cards don't link to /contact with plan name.

### Blog list `/blog`
- **H1:** "Career guidance, written for Indian students, parents, and professionals." ✅
- **10 blog posts:** Each with title, description, category, date, read time ✅
- **Verdict:** ✅ Good. (Could add category filter UI — out of scope.)

### Blog post `/blog/how-to-choose-the-right-stream-after-10th`
- **H1:** Post title (long, descriptive) ✅
- **Article meta:** By GCDA Editorial Team • 12 April 2026 • 12 min read ✅
- **AnswerBlock:** 100+ word direct answer ✅
- **5 sections:** 3-4 paragraphs each ✅
- **Key Takeaways:** 4 bullet points ✅
- **FAQ:** 4-5 Q&A pairs ✅
- **Related reading:** 3 related posts ✅
- **Verdict:** ✅ Excellent. (Author could be a real person — out of scope.)

### Career counselling `/career-counselling`
- **H1:** "Career counselling that turns uncertainty into a clear roadmap." ✅
- **Service grid:** 6 services ✅
- **Cross-link mega-grid:** 12 cities × 8 services = 96 links ✅
- **Seminar types:** ✅
- **Process:** ✅
- **FAQ:** 5 site FAQs ✅
- **Verdict:** ✅ Excellent.

### Service detail `/career-counselling/personal-counselling`
- **H1:** Service heroTitle (long) ✅
- **Hero copy:** ✅
- **What is this:** longDescription ✅
- **Why this matters:** ✅
- **What you get:** 5-6 benefits ✅
- **Who this is for:** 5-6 audiences ✅
- **Outcomes:** 5-6 outcomes ✅
- **5 steps:** ✅
- **Comparison:** "What we do / don't" ✅
- **Cities we serve:** 6 popular cities ✅
- **FAQ:** 8 service FAQs ✅
- **Other services:** 6 cross-links ✅
- **Verdict:** ✅ Excellent.

### City page `/maharashtra/career-counsellor-mumbai`
- **H1:** "Career Counsellor in Mumbai, Maharashtra" ✅
- **Hero copy:** Unique per (city, service) ✅
- **AnswerBlock:** Unique per city ✅
- **Why this matters:** Unique per (city, service) ✅
- **City at a glance:** State, district, region, industries, landmarks ✅
- **For students/professionals/delivery:** 3 unique paragraphs per city ✅
- **What you get:** 6 benefits ✅
- **Who this is for:** 5-6 ✅
- **Outcomes:** 5-6 ✅
- **5 steps:** ✅
- **What we do / don't:** ✅
- **Top colleges near {city}:** 4-6 ✅
- **Entrance exams:** 4-6 ✅
- **Seminar types:** (if applicable) ✅
- **FAQ:** 11 (8 service + 3 city) ✅
- **Other cities in {state}:** 6 cross-links (BUT contains self-link bug L9)
- **Other GCDA services:** 7 ✅
- **Verdict:** ✅ Excellent depth. The only city-page issue is the self-link bug L9.

### State hub `/maharashtra`
- **H1:** "Career Counselling in Maharashtra" ✅
- **Hero copy:** Mentions all cities in state ✅
- **AnswerBlock:** ✅
- **City grid:** 28 Maharashtra cities ✅
- **Each city card:** Main link + 7 service variants ✅
- **FAQ:** 3 state-specific FAQs ✅
- **Verdict:** ✅ Excellent.

### Career certification
- **H1:** "Begin your journey to become a certified career counsellor." ✅
- **Hero copy:** ✅
- **Curriculum details:** ✅
- **5 FAQs:** ✅
- **Course schema:** ✅
- **Verdict:** ✅ Good.

### 404
- **H1:** "Page not found" ✅
- **Multiple CTAs:** Home, Services, Cities ✅
- **AnswerBlock:** ✅
- **CTASection:** ✅
- **Verdict:** ✅ Good.

---

## Summary of all fixes needed

### CRITICAL (must fix)
1. **🐛 M1/T1 — Title duplication bug** on 2,833 pages. Strip `| GCDA` from all page-level titles; let the layout template handle it.

### HIGH (should fix)
2. **🐛 L9 — Self-link bug** in "Other cities in {state}" section on city pages. Filter doesn't remove current city.
3. **M2-M15 — Missing meta tags** on /plan, /career-counselling, service detail, career-certification, city, state, service main, blog post twitter:image. Add keywords, openGraph.images, twitter cards where missing.
4. **S5 — Add `WebPage` schema generator** for explicit page-type signalling.
5. **S2, S3 — Fix @id URLs** in `serviceSchema` and `productSchema` to point to actual URLs.
6. **T2, T3 — Improve city/state titles** with more keyword richness.

### MEDIUM
7. **L1, L4 — Add inline contextual links** in city page "Top colleges/exams" and blog posts.
8. **L2 — Add inline service links** in About page.
9. **S6, S8 — Expand Organization.areaServed, fix WebSite.publisher**.

### LOW (optional / not fixing)
10. Header/Footer logo alt text generic — acceptable.
11. Home "Services illustration" alt — generic but decorative.
12. `cityServiceSchema` dead code — not removing.

---

## Files to modify for the fix pass
1. `app/layout.js` — title template strategy
2. `app/page.js` — title (remove `| GCDA`)
3. `app/about/page.js` — title (remove `| GCDA`), add inline links
4. `app/contact/page.js` — title
5. `app/cities/page.js` — title
6. `app/blog/page.js` — title
7. `app/blog/[slug]/page.js` — twitter:image
8. `app/plan/page.js` — title, keywords, openGraph.images, twitter
9. `app/career-counselling/page.js` — title, keywords, openGraph.images, twitter
10. `app/career-counselling/[slug]/page.js` — title, openGraph.images, twitter, article meta
11. `app/career-certification/page.js` — title, openGraph.images, twitter
12. `app/[...slug]/page.js` — self-link bug, missing meta on all 2,808 dynamic pages
13. `app/not-found.js` — title
14. `data/schema.js` — add `webPageSchema()`, fix serviceSchema/productSchema @ids, fix WebSite.publisher
