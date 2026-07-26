# GCDA Career Website

A multi-page Next.js website for **GCDA – Global Career Development Association** with:

- 5 primary pages: Home, About, Services, Plans, Contact
- Dedicated service detail pages
- Reused brand logo and downloaded website illustrations in `public/assets`
- Updated Mumbai office address
- Responsive navigation, testimonials, FAQs, and a working contact form flow

## Pages included

- `/`
- `/about`
- `/services`
- `/services/personal-counselling`
- `/services/career-assessment`
- `/services/workshops-seminars`
- `/services/stream-selection-guidance`
- `/services/degree-selection-guidance`
- `/services/working-professionals-guidance`
- `/plans`
- `/contact`

## Brand/contact details used

- Address: **102, Citi Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053**
- Phone: **+91 91360 05039**
- Email: **gcda.career@gmail.com**
- WhatsApp CTA included

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

## Notes

- Plan names, pricing, and plan features were kept aligned with the current site.
- Contact form uses a client-side `mailto:` flow plus WhatsApp CTA so it works without a backend.
- If you want, this can be extended next with city pages, blog pages, SEO schema, or a CMS.
