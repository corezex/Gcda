# Missing Major Cities Audit

**Date:** 2026-07-26
**Total current cities:** 346 (across 36 states/UTs)
**Missing major cities found:** 91

## How I checked

1. Extracted all 346 current city names from `data/indiaLocations.js` (the `city('Name', ...)` function calls inside each state's array).
2. Cross-referenced against a comprehensive list of Tier-1, Tier-2, and Tier-3 Indian cities (population > 100K), based on 2011 Census + 2024 estimates.
3. Categorized missing cities by population/importance.

## Spelling variants already in the data (NOT missing)

| Common spelling | In data as |
|---|---|
| Bangalore | Bengaluru |
| Bombay | Mumbai |
| Calcutta | Kolkata |
| Madras | Chennai |
| Trichy | Tiruchirappalli |
| Trivandrum | Thiruvananthapuram |
| Cochin | Kochi |
| Mangalore | Mangaluru |
| Gurgaon | Gurugram |
| Calicut | Kozhikode |
| Trichur | Thrissur |
| Quilon | Kollam |
| Cuddapah | Kadapa |
| Allahabad | Prayagraj |
| Shimoga | Shivamogga |
| Davangere | Davanagere |
| Rajamahendravaram | Rajahmundry |

**The data uses official (post-2011) names — that's correct.**

---

## CRITICAL — Tier-1 missing cities (top SEO priority)

These are the cities that students/parents search for most. Each one is a 200K+ population centre that the live site MUST cover.

| # | City | State | Population | Why it matters |
|---|------|-------|-----------|----------------|
| 1 | **Noida** | Uttar Pradesh | 700K+ | Most-searched NCR city. Currently missing — huge SEO gap. |
| 2 | **Greater Noida** | Uttar Pradesh | 300K+ | NCR, top IT/career search. |
| 3 | **Navi Mumbai** | Maharashtra | 1.1M+ | Planned city, major Mumbai suburb. |
| 4 | **Pimpri-Chinchwad** | Maharashtra | 1M+ | Pune metro, major industrial area. |
| 5 | **Davangere** | Karnataka | 500K+ | Education hub. (Spelled "Davanagere" in data — may want to add alias.) |
| 6 | **Ulhasnagar** | Maharashtra | 500K+ | Mumbai metro. |
| 7 | **Mangalagiri** | Andhra Pradesh | 100K+ | **AP new capital region (Amaravati)** — must-have. |
| 8 | **Panchkula** | Haryana | 200K+ | Tricity (Chandigarh-Mohali-Panchkula). |
| 9 | **Gandhidham** | Gujarat | 250K+ | Major commercial hub. |
| 10 | **Bhuj** | Gujarat | 200K+ | Kutch region HQ. |
| 11 | **Bidar** | Karnataka | 300K+ |  |
| 12 | **Bharatpur** | Rajasthan | 250K+ |  |
| 13 | **Hooghly** | West Bengal | 300K+ | Kolkata suburb. |
| 14 | **Kharagpur** | West Bengal | 300K+ | **IIT Kharagpur** location. |
| 15 | **Hapur** | Uttar Pradesh | 250K+ | NCR. |
| 16 | **Ahmednagar** | Maharashtra | 350K+ |  |
| 17 | **Katihar** | Bihar | 200K+ |  |
| 18 | **Munger** | Bihar | 200K+ | Famous historic city. |
| 19 | **Nagaon** | Assam | 150K+ |  |

## 🟡 MEDIUM — Tier-2/3 (100K-200K+)

| # | City | State | Population | Note |
|---|------|-------|-----------|------|
| 1 | Dwarka | Delhi | 1M+ | Major Delhi subcity. |
| 2 | South Dum Dum | West Bengal | 400K+ | Kolkata suburb. |
| 3 | Mau | Uttar Pradesh | 300K+ |  |
| 4 | Jalna | Maharashtra | 300K+ |  |
| 5 | Raiganj | West Bengal | 200K+ |  |
| 6 | Rae Bareli | Uttar Pradesh | 200K+ |  |
| 7 | Krishnagiri | Tamil Nadu | 200K+ | Near Bangalore. |
| 8 | Vapi | Gujarat | 200K+ | Major industrial city. |
| 9 | Dharmapuri | Tamil Nadu | 150K+ |  |
| 10 | Chengalpattu | Tamil Nadu | 150K+ | Chennai suburb. |
| 11 | Rajnandgaon | Chhattisgarh | 150K+ |  |
| 12 | Chittorgarh | Rajasthan | 150K+ |  |
| 13 | Moga | Punjab | 150K+ |  |
| 14 | Rewari | Haryana | 150K+ |  |
| 15 | Vidisha | Madhya Pradesh | 150K+ |  |
| 16 | Itarsi | Madhya Pradesh | 100K+ | Railway junction. |
| 17 | Dumka | Jharkhand | 100K+ |  |
| 18 | Udhampur | J&K | 100K+ |  |
| 19 | Theni | Tamil Nadu | 100K+ |  |
| 20 | Ramanathapuram | Tamil Nadu | 100K+ |  |
| 21 | Nagapattinam | Tamil Nadu | 100K+ | Port city. |
| 22 | Gangavathi | Karnataka | 100K+ |  |
| 23 | Anakapalle | Andhra Pradesh | 100K+ | Near Vizag. |
| 24 | Samastipur | Bihar | 100K+ |  |
| 25 | Bhadrak | Odisha | 100K+ |  |
| 26 | Jharsuguda | Odisha | 100K+ | Industrial hub. |
| 27 | Suryapet | Telangana | 100K+ |  |
| 28 | Dispur | Assam | 100K+ | Assam state capital. |
| 29 | Sivasagar | Assam | 100K+ |  |
| 30 | Mount Abu | Rajasthan | 25K+ | Famous for education/tourism. |

## 🟢 LOW — District HQs (<200K)

42 cities — too many to list in full. Includes Ariyalur, Bankura, Banswara, Bolpur, Chamba, Champhai, Curchorem, Dharmanagar, Diskit, Diu, Fatehpur, Fazilka, Goalpara, Kailashahar, Kallakurichi, Kangra, Karaikudi, Khajuraho, Khonsa, Koraput, Mamit, Mandla, Mon, Mughal Sarai, Nongstoin, Orai, Perambalur, Pilibhit, Pratapgarh, Pudukkottai, Punalur, Pushkar, Ramanagara, Roing, Sehore, Seppa, Sivaganga, Tenkasi, Thodupuzha, Virudhunagar, Williamnagar, Wokha.

---

## Recommendation

**Add the 19 HIGH-priority cities immediately.** These are the cities that:
- Have 200K+ population
- Are top search queries for "career counselling in [city]"
- Are major education hubs (IIT Kharagpur, Kutch, NCR, etc.)
- Are state capitals or capital regions (Mangalagiri = AP capital)

**Add the 30 MEDIUM-priority cities in a second pass.** These give broader coverage across all states.

**The 42 LOW-priority cities can wait** unless you want full district-HQ coverage. They're all small towns that mostly don't have major career-counselling search volume.

## Action item

Would you like me to:
1. **Add only the 19 HIGH-priority cities** (19 × 8 services = 152 new city pages; recommended first step)
2. **Add HIGH + MEDIUM (49 cities)** (49 × 8 services = 392 new city pages; full Tier-1+Tier-2 coverage)
3. **Add all 91 missing cities** (91 × 8 = 728 new city pages; full district coverage)

Each addition needs:
- A `city('Name', 'District', 'tier', { industries, topColleges, topExams, landmarks, studentNote, professionalNote, deliveryNote, faqs })` entry in `data/indiaLocations.js`
- A matching `cityServiceContent` entry in `data/cityServiceContent.js` for each of 8 services (longDescription, whyItMatters per city-service pair)

The full data-injection for one city across 8 services is about 250 lines of code.
