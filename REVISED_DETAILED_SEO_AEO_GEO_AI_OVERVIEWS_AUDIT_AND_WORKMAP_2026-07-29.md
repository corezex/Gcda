# GCDA Revised Detailed Audit + Work Map
## SEO / AEO / GEO / AI Overviews / Keyword-to-Page Mapping
**Date:** 2026-07-29  
**Site:** https://gcdassociation.org  
**Repo audited:** `corezex/Gcda`  
**Branch audited:** `arena/019fac48-gcda`

---

## 1. Why this revised report exists

This report replaces the earlier keyword-gap summary with a **more exact, page-by-page interpretation**.

The previous version mixed up two different situations:

1. **A keyword is not represented anywhere on the site**, and
2. **A keyword does not yet have an exact-match dedicated landing page, but the intent is already covered by an existing page**.

This revised audit fixes that.

The goal here is to answer two questions correctly:

- **What is already covered by the current website?**
- **What is truly missing vs. what only needs tighter optimization?**

---

## 2. Audit methodology

This revision is based on a **full crawl of the current built website**, not only a template read.

### Crawl scope
A local production build was generated and crawled via the sitemap.

### URLs audited
**3,645 URLs** total:
- home/root
- 1 about page
- 1 contact page
- 1 plans page
- 1 cities hub
- 1 career counselling hub
- 1 career certification page
- 6 service detail pages
- 4 top-level service main pages
- 36 state/UT pages
- 3,504 city-service pages
- 1 blog index
- 3 paginated blog pages
- 80 blog posts
- author page
- legal pages

### What was checked at crawl level
For every URL, the audit checked:
- title tag
- title length
- meta description length
- canonical tag
- H1 count
- primary H1 text
- JSON-LD / schema type presence
- breadcrumb-schema consistency

### Supporting review
In addition to the crawl, the audit also reviewed:
- route structure in `app/`
- keyword phrasing in key templates
- service and blog content sources in `data/`
- page intent vs. target keyword intent

---

## 3. Full crawl summary

## 3.1 URL inventory by type

| Page type | Count |
|---|---:|
| Home/root | 1 |
| About | 1 |
| Contact | 1 |
| Plan | 1 |
| Cities hub | 1 |
| Career counselling hub | 1 |
| Career certification | 1 |
| Service detail pages | 6 |
| Service main pages | 4 |
| State/UT hubs | 36 |
| City-service pages | 3,504 |
| Blog index | 1 |
| Blog pagination | 3 |
| Blog posts | 80 |
| Author page | 1 |
| Privacy / Terms / Refund | 3 |

Total crawled from sitemap: **3,645**

---

## 3.2 Crawl-level issue summary

### Good news
Across the full crawl:
- canonicals are present
- H1 counts are stable
- breadcrumb schema is now consistent
- the site is structurally much cleaner than before

### Remaining crawl-level issues found

| Issue | Count | Notes |
|---|---:|---|
| Missing canonical | 0 | good |
| H1 count not equal to 1 | 0 | good |
| Breadcrumb count issues | 1 | this is the root/home edge case from crawl classification, not a sitewide problem |
| Title > 60 chars | 2 | minor edge cases only |
| Meta description > 155 chars | 2 | only on service-main pages |

### The two overlong titles
1. `/guidance-for-working-professionals` — 62 chars  
2. `/kerala/career-counselling-certification-thiruvananthapuram` — 61 chars  

### The two overlong meta descriptions
1. `/degree-selection-guidance` — 179 chars  
2. `/stream-selection-guidance` — 159 chars  

**Conclusion:** The current site is **not suffering from widespread technical metadata problems**. Remaining issues are now isolated and manageable.

---

## 3.3 Average metadata quality by template

| Template | Count | Avg title len | Avg desc len | Max title | Max desc |
|---|---:|---:|---:|---:|---:|
| Blog posts | 80 | 43.4 | 119.0 | 52 | 139 |
| City-service | 3,504 | 40.5 | 108.5 | 61 | 129 |
| State hubs | 36 | 49.2 | 124.7 | 59 | 138 |
| Service detail | 6 | 48.0 | 130.2 | 55 | 150 |
| Service main | 4 | 55.5 | 151.5 | 62 | 179 |
| Blog index | 1 | 54 | 130 | 54 | 130 |
| Cities hub | 1 | 46 | 134 | 46 | 134 |
| Contact | 1 | 38 | 110 | 38 | 110 |
| Plan | 1 | 41 | 128 | 41 | 128 |
| Certification | 1 | 48 | 124 | 48 | 124 |

**Conclusion:** the main metadata tightening work should now focus on **service-main pages**, not the entire website.

---

## 4. Page-template audit

## 4.1 Home
### Status
Strong.

### What is good
- clear national positioning
- strong answer block
- FAQ / HowTo / organization-level schema
- clean metadata

### Remaining opportunity
The homepage already covers the broad category well, but it is not the best place to fully own modifiers like:
- online career counselling India
- career counsellor near me
- career counselling fees in India

These should be handled through tighter internal linking and/or supporting landing pages.

---

## 4.2 Career counselling hub
### URL
`/career-counselling`

### Status
Strong.

### What it already covers well
- national career counselling services
- multiple service variants
- broad commercial category intent

### Remaining opportunity
The hub is good for the core category, but it still does not explicitly own all of these modifiers as primary targets:
- online career counselling India
- career counsellor near me
- career counselling fees in India
- career counselling for parents

This is a **modifier coverage issue**, not a missing-core-page issue.

---

## 4.3 Service detail pages
### Example audited pages
- `/career-counselling/career-assessment`
- `/career-counselling/stream-selection-guidance`
- `/career-counselling/degree-selection-guidance`
- `/career-counselling/personal-counselling`

### Status
Strong overall.

### What is good
- keyword-first H1s are now in place
- answer block present
- FAQ present
- comparison structure present
- useful schema stack present

### Remaining issues
- two service-detail descriptions are right at the edge (150 chars) but still acceptable
- some buying-intent modifiers are covered only indirectly and should be pulled into headings/FAQ blocks more intentionally

**Important correction:** these pages already cover several of the keywords previously described as “missing”.

---

## 4.4 Service main pages
### Pages audited
- `/career-counselling-seminar`
- `/stream-selection-guidance`
- `/degree-selection-guidance`
- `/guidance-for-working-professionals`

### Status
Good, but this is the current weakest metadata template.

### Findings
- 2 of 4 service-main pages have overlong meta descriptions
- 1 of 4 service-main pages has an overlong title
- H1s are persuasive/marketing-led rather than always exact-match keyword-led

### Why this matters
These pages are important intent consolidators and should be cleaner for SEO than they currently are.

### Needed
- trim service-main meta descriptions
- tighten titles
- consider shifting H1s slightly closer to exact search intent

---

## 4.5 State hub pages
### Status
Strong.

### What is working
- local/state architecture is clear
- titles/descriptions are generally within range
- H1s are correct
- schema and item lists are present

### Remaining opportunity
State pages are structurally sound, but can be made stronger with more:
- state-specific exam language
- board-specific context
- local higher-education ecosystems
- stronger commercial sub-links into top cities / service modifiers

---

## 4.6 City-service pages
### Status
Very strong structurally.

### What is working
- huge local footprint
- titles and descriptions are mostly controlled
- H1s are correct
- schema stacks are rich
- internal linking is strong

### What is not yet fully owned
The base city intent is covered strongly:
- career counsellor in Mumbai
- career assessment in Pune
- stream selection in Delhi

But several local **modifiers** are not directly owned as primary targets:
- best career counsellor in `{city}`
- career counselling fees in `{city}`
- online career counselling in `{city}`
- psychometric test in `{city}`

That is a real distinction.

**Conclusion:** city coverage exists; modifier coverage is the gap.

---

## 4.7 Blog system
### Status
Healthy and much improved.

### What is good
- 80-guide curated system
- clean pagination
- blog metadata quality is strong
- titles and descriptions are well controlled
- answer-first format exists
- FAQ and article schema exist

### Remaining content-side issue
The blog is structurally good for SEO and AI extraction, but many posts would still become stronger if they included:
- more official source references
- more external citations to exam bodies / universities / regulators
- more named frameworks / stats with source backing

This is now less of a technical issue and more of a **citation-strength / EEAT issue**.

---

## 4.8 Plan page
### URL
`/plan`

### Current status
Good page, but under-leveraged for keyword intent.

### Current evidence from audit
- title: `Career Counselling Plans & Pricing | GCDA`
- H1: `Choose the plan that matches your current stage.`

### Correct interpretation
This page **already partially covers**:
- career counselling pricing
- career counselling cost India
- plans / pricing intent

### What it does not yet do strongly enough
It does not yet clearly behave like a dedicated national SEO page for:
- career counselling fees in India
- online career counselling charges
- career counselling cost in India

So this is **not a missing topic**, but it **does need stronger keyword shaping**.

---

## 4.9 Career certification page
### URL
`/career-certification`

### Current evidence from audit
- title: `Career Counselling Certification in India | GCDA`
- H1: `Begin your journey to become a certified career counsellor.`

### Correct interpretation
This page **already partially covers** the intent around:
- career counsellor course
- career counsellor certification
- becoming a certified career counsellor

### What it does not fully own yet
It does not yet behave like a pure editorial ranking page for:
- how to become a career counsellor in India
- qualification for career counsellor in India
- salary of career counsellor in India

So again: **partial coverage exists**, but the exact editorial query is not fully owned.

---

## 5. Corrected keyword-to-page mapping

This section is the most important correction in the report.

## 5.1 Keywords challenged earlier: corrected statuses

| Keyword / proposed page | Current best page | Correct status | Revised interpretation |
|---|---|---|---|
| `/career-counselling-online-india` | `/` + `/career-counselling` + city pages | Partial | Intent already exists across site; no exact national landing page |
| `/career-counsellor-near-me` | homepage + local city pages | Partial | Local-intent system exists; exact “near me” page absent |
| `/career-counselling-fees-india` | `/plan` | Partial | Already covered by pricing page, but not maximally optimized for “fees” intent |
| `/career-assessment-test-for-students` | `/career-counselling/career-assessment` | Strong | Existing page already covers the intent well |
| `/psychometric-test-for-students` | no exact current page | Weak / Missing | Adjacent assessment coverage exists, but exact phrase/intent is not owned |
| `/career-counselling-for-class-10` | `/career-counselling/stream-selection-guidance` | Strong | Existing page already covers class-10 stream decision intent |
| `/career-counselling-for-class-12` | `/career-counselling/degree-selection-guidance` | Strong | Existing page already covers class-12 / after-12th decision intent |
| `/how-to-become-career-counsellor-in-india` | `/career-certification` | Partial | Topic exists, but current page is product-led rather than pure editorial/query-led |
| top-city `best-career-counsellor-in-{city}` | existing city pages | Partial | Base city intent exists; “best” comparison modifier not directly owned |
| top-city `career-counselling-fees-in-{city}` | none | Missing | This is the clearest true gap |

---

## 5.2 Core commercial keyword map (corrected)

| Keyword cluster | Current best page | Status |
|---|---|---|
| career counselling India | `/` + `/career-counselling` | Strong |
| career guidance India | `/` + `/blog` | Strong |
| online career counselling India | `/career-counselling` + sitewide mentions | Partial |
| career counsellor near me | local city structure | Partial |
| career counselling fees in India | `/plan` | Partial |
| career counselling cost India | `/plan` | Partial |
| career assessment test for students | `/career-counselling/career-assessment` | Strong |
| aptitude test for students | `/career-counselling/career-assessment` | Strong/Partial |
| psychometric test for students | no exact target page | Weak / Missing |
| career counselling for class 10 | `/career-counselling/stream-selection-guidance` | Strong |
| career counselling for class 12 | `/career-counselling/degree-selection-guidance` | Strong |
| career counselling for working professionals | `/guidance-for-working-professionals` + service detail page + blogs | Strong |
| career counsellor course / certification | `/career-certification` | Strong/Partial depending on query nuance |
| how to become a career counsellor in India | `/career-certification` | Partial |

---

## 5.3 Local keyword map (corrected)

| Keyword cluster | Current coverage | Status |
|---|---|---|
| career counsellor in `{city}` | city-service pages | Strong |
| personal counselling in `{city}` | city-service pages | Strong |
| career assessment in `{city}` | city-service pages | Strong |
| stream selection in `{city}` | city-service pages | Strong |
| degree selection in `{city}` | city-service pages | Strong |
| working professional guidance in `{city}` | city-service pages | Strong |
| certification in `{city}` | city-service pages | Strong |
| best career counsellor in `{city}` | base city pages only | Partial |
| career counselling fees in `{city}` | none | Missing |
| online career counselling in `{city}` | mentioned inside copy | Partial |
| psychometric test in `{city}` | weak | Weak / Missing |

---

## 6. SEO findings

## 6.1 What is already in good shape
- site architecture
- canonical coverage
- H1 consistency
- large local page network
- 80-guide blog structure
- metadata control across most page types
- schema coverage across templates

## 6.2 Current SEO issues

### Issue 1: service-main metadata still needs tightening
Affected:
- `/stream-selection-guidance`
- `/degree-selection-guidance`
- `/guidance-for-working-professionals`

### Issue 2: some exact commercial modifiers are not yet fully owned in titles/H1/H2s
This is now the main SEO issue.
The site often has the **right page type**, but not always the **best phrasing** for the query.

### Issue 3: local modifier layer is incomplete
Generic city intent is covered.
Pricing / “best” / “online” local modifiers are not fully owned.

---

## 7. AEO findings

## What is already good
- answer blocks
- FAQ sections
- strong heading structure
- tables on important pages
- article schema and FAQ schema on blogs
- comparison formats on service pages

## Remaining AEO gaps
- more pages should explicitly answer “fees / cost / online / best / for class 10 / for class 12” in short answer-first blocks
- some money pages should use more structured comparison tables
- more pages should include “who it is for / when not to choose this / how much it costs / how long it takes” blocks

**Conclusion:** the AEO base is strong, but commercial-intent answer blocks can be improved.

---

## 8. GEO findings

## What is already good
- wide city/state footprint
- local service pages
- strong areaServed signals
- ProfessionalService / LocalBusiness / Organization architecture

## Remaining GEO gaps
- no explicit “fees in city” content layer
- no explicit “best in city” / comparison layer
- local modifier intent is underdeveloped relative to the base city architecture

**Conclusion:** GEO architecture is already powerful, but still under-monetized.

---

## 9. AI Overviews findings

## What is already strong
- modular content
- answer-first structures
- schema support
- FAQ content
- well-structured blogs
- local + commercial + informational breadth

## Remaining AI-visibility gaps
- many posts still need stronger source citation to become more citable
- official references should be added to exam, education, and certification content
- pricing/ROI/eligibility tables can be expanded further
- pages that already cover a topic should include the exact common query phrasing more explicitly

**Conclusion:** GCDA is now much more AI-retrievable than before, but can still improve citation-worthiness.

---

## 10. Work map of issues

This section focuses on **what to do next**, with the corrected understanding of what already exists.

## Priority 1 — Optimize existing pages before creating new ones

### A. `/plan`
**Issue:** already covers pricing, but not tightly enough for fees-intent SEO  
**Target keywords to strengthen:**
- career counselling fees in India
- career counselling cost in India
- online career counselling charges
- career guidance pricing India

**Actions:**
- rewrite title/H1/H2 language to include fees/cost variants
- add a pricing comparison table
- add FAQs for “how much does career counselling cost in India?”
- add “what affects pricing?” section

### B. `/career-counselling/career-assessment`
**Issue:** strong page, but can better absorb psychometric/aptitude variants  
**Target keywords to strengthen:**
- career assessment test for students
- aptitude test for students
- psychometric career test
- psychometric test for students

**Actions:**
- add H2s / FAQ blocks with exact phrasing
- add a short section comparing aptitude vs psychometric vs career assessment
- strengthen internal links from blog posts

### C. `/career-counselling/stream-selection-guidance`
**Issue:** already covers class-10 intent, but not named tightly enough  
**Target keywords:**
- career counselling for class 10
- stream selection after class 10
- counselling after 10th

**Actions:**
- add exact-match H2s and FAQs
- add a “for class 10 students and parents” section
- possibly refine metadata if needed

### D. `/career-counselling/degree-selection-guidance`
**Issue:** already covers class-12 intent, but can be made more explicit  
**Target keywords:**
- career counselling for class 12
- after 12th course selection
- counselling after 12th

**Actions:**
- add exact-match H2s and FAQs
- trim overlong meta description
- add “for class 12 students” comparison table

### E. `/career-certification`
**Issue:** partially covers “how to become a career counsellor” but is still product-led  
**Target keywords:**
- how to become a career counsellor in India
- qualification for career counsellor in India
- career counsellor career path

**Actions:**
- add exact-match H2s
- add “step-by-step path” section
- add role / qualification / duration / outcomes table
- potentially make H1 closer to the search intent while preserving conversion

---

## Priority 2 — Build the clearest true gaps

### A. City pricing pages
These are the strongest true new-page opportunity.

Build first for top cities:
- Mumbai
- Delhi
- Bengaluru
- Hyderabad
- Pune
- Chennai
- Kolkata
- Ahmedabad
- Nagpur
- Noida

**Recommended page family:**
- `career-counselling-fees-in-{city}`

### B. Psychometric test page
If the assessment page cannot comfortably absorb this intent, create:
- `/psychometric-test-for-students`

But this should only be done **after** deciding whether the existing assessment page will be upgraded or split.

---

## Priority 3 — Optional expansion pages (only after optimization pass)

These are valid opportunities, but they are **not truly absent topics** today:
- `/career-counselling-online-india`
- `/career-counsellor-near-me`
- top-city `best-career-counsellor-in-{city}` pages
- `/how-to-become-career-counsellor-in-india` as a separate editorial guide

Recommendation: only create these after optimizing the existing pages first and evaluating overlap risk.

---

## Priority 4 — AI / EEAT strengthening

Across the blog and service system:
- add official external citations
- cite exam authorities and higher-ed sources where relevant
- add data-supported salary / eligibility / duration tables
- make key pages more quoteable for AI summaries

---

## 11. Final verdict

### What this revised audit confirms
The website is **not missing most of the major themes** I previously flagged.

Instead, the real picture is:

### Already covered well
- core counselling category
- class 10 / class 12 guidance intent
- career assessment intent
- certification / course intent
- local city counselling intent

### Partially covered, but not always in exact query language
- online career counselling India
- career counsellor near me
- fees/cost in India
- how to become a career counsellor in India
- best career counsellor in city

### Clearest real gaps
- career counselling fees in `{city}`
- psychometric test for students (if not absorbed into assessment page more directly)

### Most important strategic lesson
The next stage of GCDA growth is **not mass page creation**.
It is:

1. **tightening existing high-intent pages** around exact keyword phrasing  
2. **adding the most commercially useful missing modifier pages**  
3. **strengthening citation-worthiness for AI / AEO / GEO performance**

---

## 12. Recommended next action sequence

### Step 1
Optimize these existing pages first:
- `/plan`
- `/career-counselling/career-assessment`
- `/career-counselling/stream-selection-guidance`
- `/career-counselling/degree-selection-guidance`
- `/career-certification`

### Step 2
Create top-city fees pages.

### Step 3
Decide whether psychometric-test intent should be:
- absorbed into the assessment page, or
- split into a dedicated page

### Step 4
Only then evaluate new exact-match expansion pages like:
- online career counselling India
- near me
- best in city
- editorial “how to become a career counsellor” guide

---

## 13. Audit artifact files

This revised report is based on the full crawl artifact:
- `workspace-full-audit-2026-07-29.json`

This JSON contains the crawl output for the full current sitemap and can be used as the technical evidence layer behind this report.
