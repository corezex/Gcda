# GCDA Test URL Deep Crawl Notes
## Scope: `/cities` → state hubs → city-service pages
**Date:** 2026-07-29  
**Test URL:** https://gcda-ochre.vercel.app/cities

---

## What I crawled
I used the live test URL and followed the `/cities` page structure to verify that the local architecture is actually present on the deployed test build.

### Start page crawled
- `/cities`

### Deep-follow verification performed
I followed the state-hub links exposed on `/cities` and inspected representative state pages and city-service pages, including:
- `/maharashtra`
- `/karnataka`
- `/delhi`
- `/uttar-pradesh`

And representative city pages such as:
- `/maharashtra/career-counsellor-mumbai`
- `/karnataka/career-assessment-bengaluru`
- `/uttar-pradesh/stream-selection-lucknow`

---

## Structure confirmed on the live test URL

## 1) `/cities` page is live and exposes the state architecture
Observed title:
- `Career Counselling in 438 Indian Cities | GCDA`

Observed H1:
- `Find GCDA career counselling in your state and city.`

The page clearly lists state/UT links such as:
- Andhra Pradesh
- Maharashtra
- Karnataka
- Uttar Pradesh
- Delhi
- West Bengal
- etc.

It is functioning as a real hub, not a placeholder.

---

## 2) State hubs are live and expose city pages
Example verified:
- `/maharashtra`
- `/karnataka`
- `/delhi`
- `/uttar-pradesh`

These pages show:
- state-level H1
- state-level intro copy
- multiple city cards
- city-service URLs
- per-city service lists

Example state title observed:
- `Career Counselling in Maharashtra: 42 Cities | GCDA`
- `Career Counselling in Karnataka: 24 Cities | GCDA`
- `Career Counselling in Delhi: 12 Cities | GCDA`
- `Career Counselling in Uttar Pradesh: 42 Cities | GCDA`

So the state hubs are not only live — they are actively exposing city pages in the test build.

---

## 3) City-service pages are live
Verified examples:
- `/maharashtra/career-counsellor-mumbai`
- `/karnataka/career-assessment-bengaluru`
- `/uttar-pradesh/stream-selection-lucknow`

Observed titles:
- `Career Counsellor in Mumbai | GCDA`
- `Career Assessment in Bengaluru | GCDA`
- `Stream Selection in Lucknow | GCDA`

Observed H1s:
- `Career Counsellor in Mumbai, Maharashtra`
- `Career Assessment in Bengaluru, Karnataka`
- `Stream Selection in Lucknow, Uttar Pradesh`

These pages include:
- hero copy
- local-context blocks
- “what you get” content
- “who this is for” content
- process/how-it-works sections
- local colleges/exams sections
- FAQ sections

So yes — the city pages are genuinely there and visible in the current test URL.

---

## 4) Service-depth per city is live
On state pages, each city exposes multiple service URLs.

Example from Delhi and Maharashtra state pages:
- Career Counsellor
- Personal Counselling
- Career Assessment
- Career Counselling Seminar
- Career Counselling Certification
- Stream Selection
- Degree Selection
- Working Professional Guidance

That means the deployed local architecture is not just “city pages” — it is a **city × service** structure.

---

## What I learned from the live crawl

## A. The local SEO footprint is definitely present on the deployed test build
This confirms:
- `/cities` is live
- state hubs are live
- city-service pages are live
- city pages contain real sections, not blank shells

## B. My earlier assumption that I should rely only on local code inspection was incomplete
The live test crawl confirms the structure exactly in deployment, which is why this check was useful.

---

## Important issues I found on the live test URL
These are not structural failures, but they are real QA/content issues visible in the deployed build.

## 1) Missing spaces in visible copy on `/cities` and state pages
Examples observed live:
- `30Andhra Pradesh cities`
- `42Maharashtra cities`
- `24Karnataka cities`
- `12Delhi cities`

This looks like a rendering/string-spacing issue in card copy.

### Why it matters
- hurts polish and readability
- weakens trust/quality signals
- makes local pages look programmatic

---

## 2) Hero proof spacing bug on city pages
Observed live examples:
- `Online sessions across Mumbaiin-person Mumbai50K+ career sessions delivered`
- `Online sessions across Lucknowin-person Lucknow50K+ career sessions delivered`

### Why it matters
- this is visible immediately in the hero
- makes important proof points look broken
- hurts page quality perception

---

## 3) Duplicate/awkward wording in city-page local copy
Observed examples:
- `the local the local economy economy`
- `a mix of local industries economy`

### Why it matters
- obvious template-generation artifact
- lowers trust
- weakens helpful-content quality
- increases risk that pages feel scaled instead of editorially checked

---

## 4) Some proper nouns / industry names are awkwardly lowercased
Observed examples:
- `bfsi`
- `it`

### Why it matters
- looks unpolished
- should be `BFSI`, `IT`

---

## 5) Service count mismatch in state-hub copy
State pages say:
- `across all 7 GCDA services`

But the visible list actually shows **8 links**:
1. Career Counsellor
2. Personal Counselling
3. Career Assessment
4. Career Counselling Seminar
5. Career Counselling Certification
6. Stream Selection
7. Degree Selection
8. Working Professional Guidance

### Why it matters
- factual inconsistency in important navigational copy
- makes the template feel unreliable

---

## 6) Sikkim shows 0 cities on `/cities`
Observed on the hub:
- `Sikkim • 0 cities`

### Why it matters
- not necessarily wrong, but odd UX
- may be better hidden until at least one city is available
- otherwise it feels like an incomplete rollout

---

## Overall conclusion from the live crawl

### Confirmed
Yes — the test URL does have the local architecture live:
- city hub
- state hubs
- city-service pages

### But also confirmed
The deployed local pages still show **visible templating/QA issues** that should be cleaned before relying on them heavily for SEO quality.

### Biggest visible live issues to fix next
1. spacing issues in `/cities` and state card copy
2. hero proof spacing on city pages
3. duplicated template text like `the local the local economy economy`
4. lowercase/awkward proper nouns
5. “7 services” vs 8 services mismatch
6. review zero-city states like Sikkim for UX

---

## Recommended next action
Before doing the next strategy layer, I recommend a **local-page QA cleanup pass** focused specifically on:
- `/cities`
- state hub templates
- city page hero copy
- local-context text generation patterns

That will make the current local footprint much more trustworthy and SEO-safe.
