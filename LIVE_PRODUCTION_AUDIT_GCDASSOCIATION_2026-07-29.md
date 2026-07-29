# GCDA Live Production Audit
## Domain audited: https://gcdassociation.org/
**Date:** 2026-07-29  
**Compared against local repo:** `/home/user/Gcda`

---

## 1. Audit methodology

This audit is based on:

1. **Live production page review** on `https://gcdassociation.org/`
2. **Live sitemap review** to confirm production URL inventory and route families
3. **Local code review** to inspect schema, metadata generation, interlinking logic, and page templates
4. **Local build verification** to confirm the current codebase can compile cleanly for production

### Live production pages checked directly
- `/`
- `/about`
- `/contact`
- `/plan`
- `/career-counselling`
- `/career-counselling/career-assessment`
- `/career-counselling/stream-selection-guidance`
- `/career-counselling/degree-selection-guidance`
- `/career-certification`
- `/cities`
- `/maharashtra`
- `/delhi/career-counsellor-new-delhi`
- `/psychometric-test-for-students`
- `/blog`
- `/blog/how-to-choose-stream-after-10th-2027`

### Important limitation
Some checks on **all schema for all pages** are based on the **local code templates**, because the raw production HTML is not fully crawlable from the sandbox through normal HTTP tools. However, the live page content sampled is clearly aligned to those templates, so the template-level schema analysis is still valid for production readiness.

---

## 2. Production route inventory

From the live sitemap and the matching local build structure, the production site currently includes these major URL families:

### Core pages
- Home
- About
- Contact
- Plan
- Career Counselling hub
- Career Certification
- Cities hub
- Legal pages
- Author page

### Service detail pages
- Personal Counselling
- Career Assessment
- Workshops & Seminars
- Stream Selection Guidance
- Degree Selection Guidance
- Guidance for Working Professionals

### Service main pages
- `/career-counselling-seminar`
- `/stream-selection-guidance`
- `/degree-selection-guidance`
- `/guidance-for-working-professionals`

### Local architecture
- 36 state / UT hub pages
- 438 cities
- 8 city-service variants per city pattern
- ~3,500+ local service URLs

### Blog architecture
- 80 blog posts
- blog index
- paginated blog archive

### Support pages
- psychometric test
- online counselling
- near me
- best counselling in India
- counselling for parents
- aptitude test
- counselling vs aptitude
- online vs offline
- how to become counsellor
- counsellor salary
- qualification page

**Conclusion:** the live production site is now a large, indexable, multi-layer SEO system — not just a brochure site.

---

## 3. SEO audit

## 3.1 What is strong

### A. Domain alignment is correct
All inspected templates and metadata are aligned to:
- `https://gcdassociation.org`

This is correct for canonical, OG, Twitter, sitemap, and schema references in the local code.

### B. Production has strong route breadth
The site has enough route depth to support:
- core commercial SEO
- local SEO
- topical authority SEO
- support-query SEO

### C. Key money pages are in place
Live production currently has strong base pages for:
- career counselling
- plans and pricing
- stream selection
- degree selection
- career assessment
- certification
- local city pages

### D. Metadata is generally controlled
From live page checks:
- homepage title is clean
- plan page title is strong
- support page titles are strong
- blog titles are strong
- key service titles are strong

### E. Internal linking is much stronger than earlier
Production now links users between:
- home → services
- service pages → plan / contact
- support pages → services / plans / blogs
- certification → support pages
- cities/state/city-service pages → related service content

---

## 3.2 SEO issues still visible on production

### Issue 1: Some internal navigation/UI fixes are still not live
You already noted the mobile menu scroll fix is not yet live. That means production is slightly behind the latest branch for menu behaviour.

### Issue 2: Some text extraction / inline spacing still looks compressed
Examples visible in live page extraction:
- homepage: `98% satisfied clients50K+ career sessionsOnline + in-person`
- certification page: `Hybrid online + in-personBachelor's degree eligiblePractice-ready certification`
- blog index: `80 published guidesPage 1 of 47 categories`
- city page hero proof: `Online sessions across New Delhi· In-person in New Delhi· 50K+ career sessions delivered`

This may look acceptable visually, but for:
- machine readability
- copy polish
- snippet / AI extraction quality

it is not ideal.

### Issue 3: Duplicate geography wording still appears on live city pages
Example from live production:
- `GCDA delivers this service through secure online video sessions across New Delhi, New Delhi, and Delhi`

That is still awkward and should be cleaned.

### Issue 4: Service hub still uses “8 core services across 438 cities” text, but needs continued QA
This is now much better than before, but the local architecture still needs ongoing proof-reading for long-tail city pages.

### Issue 5: README / legacy docs still reference old `/services/` paths
This does not affect live SEO directly, but it shows some project documentation is outdated.

---

## 3.3 SEO verdict
The site is **strong enough structurally for production SEO**, but there are still **copy-polish issues in visible live content**, especially around:
- inline proof chips
- some city text
- some generated local wording

These are quality issues, not architecture failures.

---

## 4. AEO audit

AEO = whether the site is shaped to answer direct questions clearly.

## 4.1 What is strong

### A. Answer-first content exists
Strong examples visible live:
- pricing page answer framing
- assessment page explanation blocks
- support pages structured around direct questions
- blog posts with clear decision snapshots and FAQs

### B. Decision tables are used well
Live pages now contain useful, extractable tables on:
- plan/fees
- assessment comparisons
- certification pathing
- support pages

This is good for answer-engine extraction.

### C. FAQ coverage is broad
- homepage FAQs
- service page FAQs
- blog FAQs
- support page FAQs
- certification FAQs
- city page FAQs

This gives the site broad Q&A retrieval strength.

### D. Clear chunking of complex decisions
Examples:
- stream selection pages
- assessment pages
- plan page
- support pages

These all break content into short sections with decision-oriented headings.

---

## 4.2 AEO weaknesses

### Issue 1: Some city pages still feel more templated than answer-led
The city pages are useful, but some still read like scaled service pages rather than clean answer pages.

### Issue 2: Hero proof lines are not ideally extractable
The merged proof-chip text can weaken answer quality if LLMs or parsers flatten the content poorly.

### Issue 3: Not all pages answer “best / cost / online / near me” in the most direct possible wording
Some pages do this well; others still rely on body copy more than direct-answer structures.

---

## 4.3 AEO verdict
AEO is **good to strong overall**, especially on:
- support pages
- blog posts
- pricing page
- assessment page

It becomes weaker on some of the very large local page system where content must still be carefully quality-controlled.

---

## 5. GEO audit

GEO = whether the site is built to be discoverable and useful in generative search and local relevance contexts.

## 5.1 What is strong

### A. Massive local architecture
The biggest GEO strength of the site is its local footprint:
- state pages
- city pages
- city-service pages
- internal local linking

### B. Local context is present
City pages include:
- industries
- colleges
- exams
- local audience framing
- FAQs

### C. Support pages connect national queries back into service structure
This is good because GEO is not just about local pages — it is also about query families that generative systems can map to service intent.

### D. Organization + LocalBusiness + ProfessionalService structures exist in code
The local entity model is strong from a template standpoint.

---

## 5.2 GEO weaknesses

### Issue 1: Local copy still needs more manual polish
The structure is good, but if local text sounds generated or repetitive, that reduces perceived usefulness.

### Issue 2: No fully mature city-specific price differentiation
You correctly rejected the idea of making many thin city fees pages. Adding pricing into city pages was the right move. But GEO strength will now depend on how well those in-page sections are maintained.

### Issue 3: Business profile entity strengthening still has room to improve
The site would benefit from a fully consistent real-world business entity layer, especially:
- Google Business Profile linkage
- Bing business/profile setup
- stronger institutional proof where genuine

---

## 5.3 GEO verdict
GEO is **one of the strongest parts of the site** because of the local structure, but quality control on local copy remains extremely important.

---

## 6. AI Overviews audit

## 6.1 What is strong

### A. The site is well structured for AI extraction
Across the live pages and local templates, the site uses:
- answer-first passages
- comparison tables
- FAQ content
- modular headings
- article content with updated dates
- internal topical linking

### B. Support pages are especially good for AI Overviews
The newly added pages such as:
- psychometric test
- aptitude test
- online counselling
- counselling vs aptitude
- qualification / salary / how to become counsellor

are well suited to AI-style retrieval because they are:
- narrow in query intent
- clearly structured
- comparison-friendly
- directly answerable

### C. Blog posts are in a much better shape than before
The 80-guide system is significantly stronger than the older scaled-blog structure.

---

## 6.2 AI Overviews weaknesses

### Issue 1: Citation density could still improve
Many pages would benefit from more:
- official references
- source-backed data points
- named frameworks
- external authority citations

### Issue 2: Some visual text flattening still hurts machine-readability
The merged proof-chip text may reduce extractability in some contexts.

### Issue 3: Highly templated local content remains a risk
LLM-facing systems often surface content that feels the most concrete and quoteable. Some local pages still need deeper editorial pass-through to become stronger AI-citation candidates.

---

## 6.3 AI Overviews verdict
The site is **well positioned** for AI Overviews compared to a typical small education site, especially because of:
- structured content
- support pages
- FAQs
- local architecture
- support-topic breadth

But it can still improve by increasing citation quality and reducing templated-feeling local copy.

---

## 7. Schema audit by template (based on local code templates aligned to live pages)

## Homepage
Expected schema stack:
- Organization
- WebSite
- LocalBusiness
- FAQPage
- HowTo

## About
Expected schema stack:
- Organization
- WebSite
- LocalBusiness
- BreadcrumbList
- AboutPage

## Contact
Expected schema stack:
- Organization
- WebSite
- LocalBusiness
- BreadcrumbList
- ContactPage

## Plan
Expected schema stack:
- Product (multiple plans)
- FAQPage
- BreadcrumbList
- WebPage

## Service detail pages
Expected schema stack:
- Service
- FAQPage
- BreadcrumbList
- WebPage
- HowTo
- ItemList
- Speakable/WebPage

## Service main pages
Expected schema stack:
- Service
- FAQPage
- BreadcrumbList
- WebPage
- Speakable/WebPage

## City pages
Expected schema stack:
- ProfessionalService
- FAQPage
- BreadcrumbList
- WebPage
- ItemList
- Speakable/WebPage

## Blog posts
Expected schema stack:
- Article
- FAQPage
- BreadcrumbList
- WebPage
- Person
- Speakable/WebPage

## Support pages
Expected schema stack:
- FAQPage
- BreadcrumbList
- WebPage
- ItemList
- Speakable/WebPage

## Certification
Expected schema stack:
- Course
- FAQPage
- BreadcrumbList

### Schema verdict
The schema architecture is broad and generally strong.
The main risk is not missing schema types — it is making sure content quality fully supports them.

---

## 8. Key live issues still visible

### High priority
1. **Mobile menu fix is not yet live** (already noted)
2. **Inline hero-proof/chip text still flattens poorly in extraction**
3. **Some city delivery wording is still awkward**
4. **Contact page quick-contact block is functionally okay, but very minimal after simplification**

### Medium priority
5. Add more citation-rich references on important blogs and support pages
6. Continue manual QA on top city pages
7. Improve team/person-level visible trust signals over time

### Low priority
8. Clean outdated internal project docs / README references

---

## 9. Final verdict

## SEO
**Strong foundation, production-ready, minor polish issues remain.**

## AEO
**Good to strong.** The site answers questions clearly, especially on support pages, plans, blogs, and assessment pages.

## GEO
**Strong.** The local architecture is one of the site’s biggest competitive advantages.

## AI Overviews
**Good potential.** The site is structured correctly, but content will perform even better with more citation depth and less templated-feeling local copy.

---

## 10. Go-live confidence

### Safe to go live on:
- `https://gcdassociation.org/`

### But before calling it “fully polished”, I would still want:
- the mobile menu fix deployed
- one more top-city local copy QA pass
- more citation/source strengthening on blogs/support pages over time

---

## 11. Bottom line
The project is **good enough to operate live on the production domain now**.
It is no longer a fragile SEO build. It is a large, structured, production-capable counselling site.

The remaining issues are mostly:
- polish
- citation depth
- local-copy quality control
- a few still-pending live deployment sync fixes
