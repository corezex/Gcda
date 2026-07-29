import requests, re, json, sys
from bs4 import BeautifulSoup

BASE = "https://gcda-ochre.vercel.app"
HEADERS = {"User-Agent":"Mozilla/5.0 (compatible; SEOAudit/1.0)"}

def audit(path):
    url = BASE + path
    out = {"url": url, "path": path}
    try:
        r = requests.get(url, headers=HEADERS, timeout=30)
        out["status"] = r.status_code
        html = r.text
    except Exception as e:
        out["error"] = str(e); return out
    out["html_bytes"] = len(html)
    soup = BeautifulSoup(html, "html.parser")

    # Title
    t = soup.find("title")
    out["title"] = t.get_text(strip=True) if t else None
    out["title_len"] = len(out["title"]) if out["title"] else 0

    # Meta description
    md = soup.find("meta", attrs={"name":"description"})
    out["meta_desc"] = md["content"] if md and md.get("content") else None
    out["meta_desc_len"] = len(out["meta_desc"]) if out["meta_desc"] else 0

    # keywords meta
    mk = soup.find("meta", attrs={"name":"keywords"})
    out["meta_keywords"] = mk["content"] if mk and mk.get("content") else None

    # canonical
    can = soup.find("link", attrs={"rel":"canonical"})
    out["canonical"] = can["href"] if can and can.get("href") else None

    # robots meta
    rm = soup.find("meta", attrs={"name":"robots"})
    out["robots_meta"] = rm["content"] if rm and rm.get("content") else None

    # H1
    h1s = soup.find_all("h1")
    out["h1_count"] = len(h1s)
    out["h1"] = [h.get_text(strip=True) for h in h1s][:3]
    out["h2_count"] = len(soup.find_all("h2"))
    out["h3_count"] = len(soup.find_all("h3"))

    # JSON-LD
    schemas = []
    for s in soup.find_all("script", attrs={"type":"application/ld+json"}):
        try:
            data = json.loads(s.string)
            def types(d):
                if isinstance(d, dict):
                    if "@type" in d: schemas.append(d["@type"])
                    for v in d.values(): types(v)
                elif isinstance(d, list):
                    for i in d: types(i)
            types(data)
        except: pass
    out["schema_types"] = sorted(set([str(x) for x in schemas]))

    # OG / twitter
    og = soup.find("meta", attrs={"property":"og:title"})
    out["og_title"] = og["content"] if og and og.get("content") else None
    ogi = soup.find("meta", attrs={"property":"og:image"})
    out["og_image"] = bool(ogi and ogi.get("content"))
    out["og_type"] = (soup.find("meta", attrs={"property":"og:type"}) or {}).get("content")
    tw = soup.find("meta", attrs={"name":"twitter:card"})
    out["twitter_card"] = tw["content"] if tw and tw.get("content") else None

    # Images & alt
    imgs = soup.find_all("img")
    out["img_count"] = len(imgs)
    out["img_no_alt"] = sum(1 for i in imgs if not i.get("alt"))

    # links
    a = soup.find_all("a", href=True)
    internal = [x for x in a if x["href"].startswith("/") or "gcdassociation" in x["href"] or "vercel" in x["href"]]
    out["internal_links"] = len(internal)
    out["external_links"] = len(a) - len(internal)

    # word count of visible text
    for tag in soup(["script","style","noscript"]): tag.decompose()
    text = soup.get_text(" ", strip=True)
    out["word_count"] = len(text.split())

    # hreflang
    out["hreflang"] = len(soup.find_all("link", attrs={"rel":"alternate"}))

    # lang attr
    htmltag = soup.find("html")
    out["html_lang"] = htmltag.get("lang") if htmltag else None

    # viewport
    vp = soup.find("meta", attrs={"name":"viewport"})
    out["viewport"] = bool(vp)

    return out

if __name__ == "__main__":
    paths = sys.argv[1:]
    results = [audit(p) for p in paths]
    print(json.dumps(results, indent=1, ensure_ascii=False))
