# Hunza Technologies

Official website for Hunza Technologies, a technology and digital solutions company based at the Software Technology Park in Nasirabad, Hunza, Pakistan.

Tagline: **Empower Ideas Through Technology.**

## Stack

- React 18 (JavaScript)
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Brand colours

Extracted from the official company logo (LinkedIn and Facebook profile artwork):

| Role | HEX | Use |
| --- | --- | --- |
| Orange (primary) | `#F58B1E` | Buttons, accents, headings on dark |
| Orange (text on light) | `#B85E0D` | Small links on cream backgrounds |
| Ink | `#1A1D1A` | Logo field, navigation, dark sections |
| Paper | `#F4F0E8` | Light surfaces |
| Cream | `#FBF8F2` | Page background |

The circular HT mark is the official logo and is not redrawn. It is stored at `public/logo.png`.

## Research notes

Primary sources used while building this site:

- LinkedIn company page: [hunza-technologies](https://www.linkedin.com/company/hunza-technologies/)
- Facebook page: [HunzaTechnologies](https://www.facebook.com/HunzaTechnologies) (page metadata and official logo retrieved; the full Facebook timeline could not be loaded reliably)
- Existing website archive of [hunzatechnologies.com](https://hunzatechnologies.com/) (the live site timed out during research)

Verified public facts used on the site:

- Services: Web Development, UX/UI Design, Graphic Design, Digital Marketing, Video Editing
- Office: Software Technology Park / IT Park, Nasirabad, Hunza
- Phone / WhatsApp: +92 340 4899562
- Email used in official LinkedIn posts: hunzatechnologies84@gmail.com
- Founding member named in an official company post: Rizwan
- Publicly offered training: UX/UI Design training; online Content Writing + Freelancing classes

The previous website used placeholder team names, awards, testimonials and lorem ipsum. None of that content was reused.

Google reviews shown on the homepage are taken from the public IT PARK listing in Nasirabad (5.0 from 4 reviews as published). Reviewer names were not listed, so they are not invented here.

## Contact form

The form validates in the browser, then posts to FormSubmit, which delivers the enquiry to `hunzatechnologies84@gmail.com`.

The first submission sends an activation email to that Gmail inbox. Open it and confirm the address once. After that, new enquiries arrive in Gmail automatically.

To use a different backend, set:

```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
```

## Updating content

- Services: `src/data/services.js`
- Training catalogue: `src/data/training.js`
- Company contact and social: `src/data/company.js`
- FAQs: `src/data/faq.js`

Add a new training programme by appending an object in `trainingPrograms`. Mark `verified: true` only when the company has publicly offered that programme.
