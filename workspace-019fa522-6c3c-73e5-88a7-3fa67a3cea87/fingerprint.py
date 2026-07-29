import requests, re, sys, json, hashlib
from bs4 import BeautifulSoup
BASE="https://gcda-ochre.vercel.app"
H={"User-Agent":"Mozilla/5.0"}

def body_text(path):
    r=requests.get(BASE+path,headers=H,timeout=30)
    s=BeautifulSoup(r.text,"html.parser")
    # remove nav/header/footer/aside to focus on main content
    for t in s(["script","style","noscript","nav","header","footer"]): t.decompose()
    main=s.find("main") or s.find("article") or s.body
    txt=main.get_text(" ",strip=True)
    txt=re.sub(r"\s+"," ",txt)
    return txt

def shingles(txt,k=12):
    words=txt.split()
    return set(" ".join(words[i:i+k]) for i in range(0,max(1,len(words)-k)))

def jaccard(a,b):
    if not a or not b: return 0
    return len(a&b)/len(a|b)

paths=sys.argv[1:]
data={}
for p in paths:
    try:
        t=body_text(p)
        data[p]=t
    except Exception as e:
        data[p]="ERR "+str(e)

# print a content sample (middle chunk) for each to eyeball uniqueness
for p in paths:
    t=data[p]
    print("="*70)
    print("PATH:",p,"| chars",len(t))
    # show a distinctive middle slice
    mid=len(t)//3
    print("SAMPLE:", t[mid:mid+500])

print("\n\n##### PAIRWISE SIMILARITY (Jaccard on 12-word shingles) #####")
sh={p:shingles(data[p]) for p in paths}
for i in range(len(paths)):
    for j in range(i+1,len(paths)):
        sim=jaccard(sh[paths[i]],sh[paths[j]])
        print(f"{sim:.2f}  {paths[i].split('/')[-1][:35]:35} <-> {paths[j].split('/')[-1][:35]}")
