# GCDA — Full Audit for SEO, AEO, GEO, AI Overviews (Language Pages Focus)
**Date:** 2026-07-27  
**Branches audited:** `arena/019f9ca8-gcda` (live on `gcda-ochre.vercel.app`) and `arena/019fa2fc-gcda` (working branch with full i18n)  
**Live URL checked:** https://gcda-ochre.vercel.app/ and https://gcda-ochre.vercel.app/hi , /hi/career-counselling etc.  
**Build:** 3,697 static pages (8 EN top-level + 128 locale top-level + 2,768 city x service + state hubs + 6 service details + 10 blogs)

---

## 1. Executive Summary

You have successfully added **17-language hreflang infrastructure** (commit d98bc45):

- 16 locale folders (`hi, bn, te, mr, ta, gu, kn, ml, pa, or, ur, ks, kok, as, mni, sat`) × 8 routes = **128 locale pages**
- Each locale page emits **35 hreflang tags** (`en, hi, bn... + en-IN, hi-IN... + x-default`)
- Sitemap includes 128 locale URLs with alternates
- `robots.txt` allows AI bots (GPTBot, PerplexityBot, ClaudeBot, etc.)

**Current gaps observed on live (gcda-ochre.vercel.app):**

1. **Partial translation:** Visiting `/hi` shows hero title translated to Hindi (`करियर काउंसलिंग जो भ्रम को स्पष्ट...`) but **all other sections remain English**:
   - Stats: `50k+ Counsellings` still English, should be Hindi
   - About GCDA cards: `Personalised guidance / Actionable planning` still English
   - `What we do / Core services...` still English
   - `Who we help` bullets English
   - `Our process / Discover / Decide / Develop` English
   - Testimonials English
   - FAQs English
   - CTA English
   - This is because `_HomeContent.js` uses `TRANSLATIONS[lang].home.*` for hero only, but `valuePoints, audience, journeySteps, siteFaqs, statsHome, testimonials` are imported from `data/site.js` which is EN-only.

2. **Services menu 404 on locale:**
   - Header dropdown now uses `localizePath()` → on `/hi`, it links to `/hi/career-counselling/personal-counselling`
   - But **no file exists** at `app/hi/career-counselling/[slug]/page.js`
   - Only `app/hi/career-counselling/page.js` exists (top-level)
   - Result: clicking any service detail from Hindi menu → **404 Not Found** (`/hi/career-counselling/personal-counselling` returns 404 page)
   - Same for `/bn/career-counselling/...`, `/ta/...`, etc.
   - Root EN works (`/career-counselling/personal-counselling` OK), locale breaks.

3. **Duplicate content risk:** Since locale pages reused EN component without full translation, Google sees 17 versions of same English content with different canonicals but identical body → could be flagged as doorway pages despite correct hreflang.

4. **No language switcher per your request** – removed, but also means no internal linking between language versions except hreflang tags (which is okay, but UX difficult).

5. **Topical service pages (`/career-counselling-seminar`, `/stream-selection-guidance` etc.) work on EN but `/hi/career-counselling-seminar` does NOT exist** – those are also missing in locale.

---

## 2. SEO Audit

### 2.1 Technical SEO — Good

| Item | Status | Notes |
|------|--------|-------|
| `metadataBase` | ✅ | `https://gcdassociation.org` set in root layout |
| Title template | ✅ | `%s | GCDA` – no duplication bug (fixed from earlier) |
| Canonical | ✅ | Each locale has `/hi`, `/hi/about` etc canonical |
| Hreflang | ✅ 90% | 35 tags per top-level page, includes region + x-default. **Bug:** locale service-detail, blog detail, city pages do NOT have hreflang (only top-level 8). Should add for completeness. |
| OpenGraph locale | ✅ after fix | After our i18n fix, `og:locale` = `hi_IN`, `ta_IN` etc. Before fix it was always `en_IN`. Still needs `<html lang>` dynamic – currently hardcoded `en-IN` in root layout, fixed only via client JS (not ideal for crawler). Should be server-rendered. |
| Sitemap | ✅ | 3k+ URLs, includes alternates for 128 locales. **Missing:** locale variants of city pages (44k would be huge) – intentional, but state hubs locale variants missing too. |
| Robots | ✅ | Allows `*`, explicitly allows GPTBot, PerplexityBot, ClaudeBot etc – good for GEO. |
| Image alt | ✅ | All images have descriptive alt (hero-illustration.png, career-2.png etc). |
| Heading hierarchy | ⚠️ | Home has multiple H1? Currently only 1 H1 per page (good). But some locale pages have H1 translated, H2/H3 English – inconsistent language. |
| Internal linking | ⚠️ | Locale pages link to localized paths via `localizePath()` (good) but those localized detail pages 404 – breaks internal link equity. |

### 2.2 On-page per language

- **Meta titles now localized** after our `data/i18n.js` fix: `/hi` title = `भारत में करियर काउंसलिंग और मार्गदर्शन | GCDA` – matches native. Before fix, it was English duplicate.
- **Meta description localized** similarly.
- **Body not fully localized:** As noted, only hero is translated. For true SEO, body should be >80% translated to avoid duplicate content penalty. Google's documentation says hreflang pages should have **substantially translated content**, not just meta.

### 2.3 Performance

- Build 3,697 pages ~90 sec – okay.
- Adding 16 × 3,500 city pages would be 56k pages – Vercel build would timeout, not recommended. Keeping top-level only localized is correct choice.

---

## 3. AEO — Answer Engine Optimization

**What AEO needs:**
- Direct answer block (40-70 words) at top
- FAQPage schema
- HowTo schema
- Q&A heading structure

**Current status:**

| Component | EN | Locale (/hi etc) | Gap |
|-----------|----|------------------|-----|
| `<AnswerBlock>` | ✅ Present on About, Plan, Cities, Career pages | ❌ Still English text even on /hi – should be translated | Needs translation |
| FAQPage schema | ✅ `faqSchema(siteFaqs)` on Home, Career pages | ❌ FAQ content English even on Hindi – not useful for Hindi answer engines | Translate FAQ data |
| HowTo schema | ✅ Present on Home journey | ⚠️ Steps English | Translate journeySteps |
| BreadcrumbList | ✅ Present | ✅ Works with localized path | Good |

**Recommendation:** Move `siteFaqs, journeySteps, valuePoints, audience` into `TRANSLATIONS[lang]` so AEO answers are in native language. Currently AEO signals are English-only even on Hindi pages, so Hindi answer engines will not cite.

---

## 4. GEO — Generative Engine Optimization

**GEO checks:**

- Organization schema with `sameAs`, `knowsAbout`, `areaServed` – ✅ present in root layout via `organizationSchema()`
- LocalBusiness schema – ✅ present
- WebSite schema with SearchAction – ✅ present
- ProfessionalService schema on city pages – ✅ present
- `knowsAbout` topical authority – ✅ includes JEE, NEET, MBA etc.
- AI crawler allow-list in robots – ✅ (GPTBot etc allowed)

**Gap for GEO with languages:**

- `organizationSchema()` and `localBusinessSchema()` are English-only. For Hindi GEO (e.g., user asks ChatGPT in Hindi "मुंबई में करियर काउंसलिंग"), having Hindi entity description would help. Currently JSON-LD is English.
- No `inLanguage` property in Article/Blog schema per locale.
- No `alternateName` in native script.

---

## 5. AI Overviews (Google AI Overviews / SGE)

Google AI Overviews pulls from:

1. Top organic ranking (requires technical SEO) – **Partial** due to duplicate content risk
2. Structured data (FAQPage, HowTo, Article) – **Present but English-only on locale pages**
3. Direct answer passages (40-70 words) – **Present but English-only**
4. Authoritative, citation-worthy stats – **Present (50k+, 5k+) but English**
5. Freshness signals – Blog has `datePublished`, `dateModified` ✅

**Current risk:** Hindi page `/hi` will NOT be cited in Hindi AI Overview because its answer block and FAQ are still English. Google will see mismatch between `og:locale=hi_IN` and body English → may ignore locale page and show EN version for Hindi query.

---

## 6. Language-specific Audit

### 6.1 Hreflang

- **Correct:** `app/hi/page.js` canonical `/hi`, languages = `hreflangAlternates('/')` = 35 entries
- **Correct:** x-default points to EN `/`
- **Missing:** Service detail pages (`/career-counselling/[slug]`) do not have hreflang at all (they are under `/career-counselling/[slug]/page.js` which uses `hreflang`? Check – yes it has hreflang in some files but not locale versions)
- **Missing:** Blog post pages `/blog/[slug]` not localized – intentional per your "only top level" decision, okay.
- **Missing:** City pages not localized – intentional.

### 6.2 Translation completeness (checked live gcda-ochre.vercel.app/hi)

| Section | EN | /hi live | /hi after our latest build (local) |
|---------|----|----------|-----------------------------------|
| Hero eyebrow | Empowering careers since 2013 | Empowering careers since 2013 (should be 2013 से...) | Fixed: 2013 से... |
| Hero title | Career counselling that turns confusion... | करियर काउंसलिंग जो भ्रम को... ✅ translated | ✅ |
| Hero desc | From stream selection... | From stream selection... English ❌ | Fixed: Hindi desc |
| Hero proof | 98% satisfied clients | 98% satisfied clients ❌ | Fixed: Hindi proof |
| Stats | 50k+ Counsellings | English ❌ | Still English (statsHome from site.js) |
| About GCDA cards | Personalised guidance etc | English ❌ | Still English (valuePoints) |
| What we do | Core services... | English ❌ | Fixed headings, but cards still English? |
| Who we help bullets | School students... | English ❌ | Still English |
| Process steps | Discover/Decide/Develop | English ❌ | Still English |
| Testimonials | English | English | Still English |
| FAQs | English | English | Still English |
| CTA | Ready to shape... | English ❌ + Hindi? | Fixed CTA title Hindi |

**Conclusion:** We fixed hero + section headings + meta, but **~60% of page body still English** because data comes from `data/site.js` (valuePoints, audience, journeySteps, siteFaqs, testimonials, statsHome). For full translation, need to move those into `TRANSLATIONS`.

### 6.3 HTML lang and dir

- Root `app/layout.js` hardcodes `<html lang="en-IN">` – always English, even on `/hi`. We attempted client `HtmlLang.js` but removed per no-switcher cleanup. So crawler sees `lang=en-IN` even on Hindi page – **critical SEO bug**.
- Need server-side dynamic `<html lang>` based on pathname. Next.js 14: we can create `app/[lang]/layout.js` or middleware that sets header, or use `generateMetadata` to set `openGraph.locale` (we did) but html lang remains wrong.
- `dir` for RTL languages (`ur, ks`) – not set. Should be `rtl` for Urdu/Kashmiri pages.

### 6.4 Services menu 404

**Root cause:**

File `components/Header.js` does:
```js
localizeHref(`/career-counselling/${s.slug}`) // on /hi becomes /hi/career-counselling/personal-counselling
```

But filesystem:
```
app/career-counselling/[slug]/page.js exists -> /career-counselling/personal-counselling works
app/hi/career-counselling/page.js exists -> /hi/career-counselling works
app/hi/career-counselling/[slug]/page.js DOES NOT exist -> /hi/career-counselling/personal-counselling 404
```

Same for:
- `/hi/career-counselling-seminar` – does not exist (top-level service page not localized)
- `/hi/stream-selection-guidance` – missing
- `/hi/degree-selection-guidance` – missing
- `/hi/guidance-for-working-professionals` – missing
- `/hi/career-certification` exists (top-level) but `/hi/career-counselling/[slug]` missing

**Impact:**
- All locale dropdown links broken → bad UX, high bounce, lost link equity
- Googlebot crawling /hi will find 6 broken internal links per page → crawl budget waste

**Fix options (you said only top-level, so option A is consistent):**

- **Option A (respect "only top-level"):** Change Header on locale pages to NOT localize service detail links – i.e., keep them pointing to EN `/career-counselling/personal-counselling` even when on `/hi`. So Hindi user clicks service → goes to EN detail page (exists). Or hide dropdown on locale.
- **Option B (better UX, still top-level focus):** Create 6 × 16 = 96 locale service detail pages (`app/{lang}/career-counselling/[slug]/page.js`) that reuse EN content but with localized meta (similar to what we did for top-level). This is still top-level-ish, not city pages.
- **Option C (full):** Also create locale versions of the 4 topical service pages (`career-counselling-seminar` etc.) → 4 × 16 = 64 more pages.

You said "only do top level" – so Option A is safest for now. But we should document 404.

---

## 7. Recommendations — Prioritized

### P0 — Critical (fix before deploying to your domain)

1. **Fix html lang server-side**
   - Create `app/[lang]/layout.js` or middleware to return correct `lang` attribute.
   - Currently `<html lang="en-IN">` on all pages – fails WCAG and SEO. Should be `hi-IN` on `/hi`, `bn-IN` on `/bn`, etc.
   - Implement `app/hi/layout.js` that wraps with `<html lang="hi-IN">`? In Next.js app router, you need to use route groups `(locale)` pattern. Simplest: add `app/layout.js` logic to read pathname via headers? Actually Next.js doesn't give params in root. Better: create file `middleware.js` that sets `x-locale` header, and layout reads it via `headers()`. Or keep client fix but also add `<meta httpEquiv="Content-Language">`.

2. **Fix services menu 404 on locale**
   - Either: In `Header.js`, if `currentLang !== 'en'`, do NOT localize service detail slugs – keep `/career-counselling/${slug}` EN path.
   - Or: Generate `app/{lang}/career-counselling/[slug]/page.js` (96 pages) – I can do this quickly with same pattern as top-level locale pages.
   - You said only top-level, so recommend first approach for now + add comment.

3. **Complete translation for remaining body**
   - Move `valuePoints, audience, journeySteps, siteFaqs, statsHome` into `TRANSLATIONS[lang]` – currently only hero translated.
   - Without this, /hi page is 40% Hindi / 60% English → Google may treat as low-quality translation.

### P1 — Important for SEO/AEO/GEO

4. **Add `inLanguage` to JSON-LD**
   - In `getMetaForLang`, also return `inLanguage` and inject into `WebPage` schema, `Article` schema etc.

5. **Add RTL support**
   - For `ur, ks`, set `dir="rtl"` on html and add CSS `direction: rtl` for those locales.

6. **Sitemap: Add locale service-detail routes (option B)**
   - If you decide to create 96 locale service detail pages, add them to sitemap with hreflang.

7. **FAQ translation**
   - `siteFaqs` currently English only – translate for AEO in Hindi/Bengali etc.

### P2 — Enhancements

8. **Remove build-time duplication**
   - Currently `components/ServiceGrid.js` had old `/services/` path – fixed to `/career-counselling/` now.
   - Ensure no `/services` links remain.

9. **Image alt translation**
   - Alt text still English even on Hindi – translate alt for better SEO.

10. **Performance**
    - 3,697 pages is okay, but adding 96 locale service details is fine (3,793 total). Avoid adding city locale variants (44k).

---

## 8. Specific Checks for Your Live URL

**Checked URLs:**

- `/` – EN title correct, 35 hreflang tags ✅
- `/hi` – Title localized ✅, hero translated ✅ (after latest push), but stats/valuePoints English ❌, html lang still en-IN ❌
- `/hi/career-counselling` – Works, title localized, but links inside to `/hi/career-counselling/personal-counselling` → 404 ❌
- `/hi/career-counselling/personal-counselling` – 404 ❌ (no file)
- `/career-counselling-seminar` – Works EN ✅, `/hi/career-counselling-seminar` – 404 ❌
- `/hi/contact` – Works, form validation fixed, but form labels English ❌ (should be Hindi)
- `/sitemap.xml` – Includes 128 locale URLs ✅, but does NOT include locale service detail

---

## 9. Next Steps — What I'll Do When You Say "start code"

You asked not to start coding directly. When you say start, I will:

1. Fix `app/layout.js` to set html lang dynamically (without adding UI switcher) – using a small server component that reads locale from pathname via middleware.
2. Fix Header services 404 – make service detail links point to EN version when on locale (quick fix to respect "only top-level" rule).
3. Move `valuePoints, audience, journeySteps, siteFaqs, statsHome` into `TRANSLATIONS` so `/hi` becomes 90%+ Hindi.
4. Update `ContactForm` labels to use translations.
5. Re-build and verify 3,697 pages still OK.

Let me know if you want Option A (keep detail pages EN) or Option B (generate 96 locale detail pages). Option B is better for SEO but adds 96 pages.

**Awaiting your go-ahead.**
