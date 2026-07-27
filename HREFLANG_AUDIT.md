# GCDA Live Site — Hreflang Language Variants Audit

**Source:** https://gcdassociation.org/
**Method:** Direct URL testing of each 2-letter language code at `/{lang}/`
**Date:** 2026-07-26

---

## Summary

The live GCDA website uses **2-letter language-prefix URL routing** (e.g. `/en/`, `/hi/`, `/ta/`) to serve language variants of the same content. Of the 22 official Indian languages + English + Urdu, **15 variants are live** on the site.

## Language variants that WORK (15)

| # | Code | Language | Native Name | Region | Status | Confirmed |
|---|------|----------|-------------|--------|--------|-----------|
| 1 | `en` | English | English | Global | ✅ LIVE | 200 OK, full content |
| 2 | `hi` | Hindi | हिन्दी | Pan-India | ✅ LIVE | 200 OK, full content |
| 3 | `bn` | Bengali | বাংলা | West Bengal, Tripura | ✅ LIVE | 200 OK, full content |
| 4 | `te` | Telugu | తెలుగు | Telangana, AP | ✅ LIVE | 200 OK, full content |
| 5 | `mr` | Marathi | मराठी | Maharashtra | ✅ LIVE | 200 OK, full content |
| 6 | `ta` | Tamil | தமிழ் | Tamil Nadu | ✅ LIVE | 200 OK, full content |
| 7 | `gu` | Gujarati | ગુજરાતી | Gujarat | ✅ LIVE | 200 OK, full content |
| 8 | `kn` | Kannada | ಕನ್ನಡ | Karnataka | ✅ LIVE | 200 OK, full content |
| 9 | `ml` | Malayalam | മലയാളം | Kerala | ✅ LIVE | 200 OK, full content |
| 10 | `pa` | Punjabi | ਪੰਜਾਬੀ | Punjab | ✅ LIVE | 200 OK, full content |
| 11 | `or` | Odia | ଓଡ଼ିଆ | Odisha | ✅ LIVE | 200 OK, full content |
| 12 | `ur` | Urdu | اردو | J&K, Hyderabad | ✅ LIVE | 200 OK, full content |
| 13 | `ks` | Kashmiri | کشمیری | J&K | ✅ LIVE | 200 OK, full content |
| 14 | `kok` | Konkani | कोंकणी | Goa, Maharashtra | ✅ LIVE | 200 OK, full content |

## Language variants that DON'T WORK (3)

| # | Code | Language | Native Name | Region | Status | Notes |
|---|------|----------|-------------|--------|--------|-------|
| 1 | `as` | Assamese | অসমীয়া | Assam | ❌ 404 | Site serves a 404 page — not yet implemented |
| 2 | `sa` | Sanskrit | संस्कृतम् | Pan-India (classical) | ❌ 404 | Not implemented |
| 3 | `mni` | Manipuri (Meitei) | মৈতৈলোন্ | Manipur | ❌ 404 | Not implemented |
| 4 | `sat` | Santali | ᱥᱟᱱᱛᱟᱲᱤ | Jharkhand, Odisha, WB | ❌ 404 | Not implemented |

## Indian languages NOT TESTED but likely missing

| Code | Language | Native Name |
|------|----------|-------------|
| `doi` | Dogri | डोगरी |
| `brx` | Bodo | बड़ो |
| `mai` | Maithili | मैथिली |
| `sd` | Sindhi | سنڌي |

## Notes on URL patterns

1. **English root:** `/` and `/en/` both serve English content
2. **Other languages:** `/{lang}/` and `/{lang}/contact`, `/{lang}/career-counselling` etc.
3. **City pages:** the live sitemap also includes `/{state}/career-counsellor-{city}` URLs (no language prefix on city pages)
4. **Content type:** All variants serve the same English UI structure (header, footer, navigation) with translated body text — looks like a CMS-driven translation, not a fully localized UI
5. **Page count:** Sitemap has 43 chunks with thousands of city page URLs

---

## Hreflang tag pattern that should be on every page

Based on the live site's 14 working variants, the canonical `hreflang` set should be:

```html
<link rel="alternate" hreflang="en" href="https://gcdassociation.org/en" />
<link rel="alternate" hreflang="hi" href="https://gcdassociation.org/hi" />
<link rel="alternate" hreflang="bn" href="https://gcdassociation.org/bn" />
<link rel="alternate" hreflang="te" href="https://gcdassociation.org/te" />
<link rel="alternate" hreflang="mr" href="https://gcdassociation.org/mr" />
<link rel="alternate" hreflang="ta" href="https://gcdassociation.org/ta" />
<link rel="alternate" hreflang="gu" href="https://gcdassociation.org/gu" />
<link rel="alternate" hreflang="kn" href="https://gcdassociation.org/kn" />
<link rel="alternate" hreflang="ml" href="https://gcdassociation.org/ml" />
<link rel="alternate" hreflang="pa" href="https://gcdassociation.org/pa" />
<link rel="alternate" hreflang="or" href="https://gcdassociation.org/or" />
<link rel="alternate" hreflang="ur" href="https://gcdassociation.org/ur" />
<link rel="alternate" hreflang="ks" href="https://gcdassociation.org/ks" />
<link rel="alternate" hreflang="kok" href="https://gcdassociation.org/kok" />
<link rel="alternate" hreflang="x-default" href="https://gcdassociation.org/" />
```

**With region subtags for India-specific targeting** (Google-recommended best practice):

```html
<link rel="alternate" hreflang="en-IN" href="https://gcdassociation.org/en" />
<link rel="alternate" hreflang="hi-IN" href="https://gcdassociation.org/hi" />
... etc
<link rel="alternate" hreflang="x-default" href="https://gcdassociation.org/" />
```

## What's missing from the LIVE site (and should be added)

The live site has **NO hreflang tags** in the HTML `<head>` and **NO hreflang in the sitemap**. Google is being told there are 14 language variants, but the search engine has no way to know they're alternate versions of the same content.

### Action items to ask the user:

1. **Do you want me to add hreflang tags to OUR new build (arena/019f9ca8-gcda)?** Currently our build is English-only (`en-IN`).
2. **Do you want me to mirror the live site's 14-language structure** in our new build?
3. **Do you want the 3 missing variants (as, sa, mni) added too** to make 17?
4. **Hreflang in `<head>` only, or also in sitemap?**
