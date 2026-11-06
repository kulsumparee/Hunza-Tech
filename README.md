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

Not invented, and therefore not shown as facts: client lists, project counts, awards, testimonials, employee numbers, course fees, course duration, accreditation, or placement guarantees.

## Contact form

The form validates in the browser.

- If `VITE_FORM_ENDPOINT` is empty, Submit opens the visitor’s email client with a prepared message to `hunzatechnologies84@gmail.com`. WhatsApp is offered as a second real path.
- To send enquiries without mailto, create a Formspree or FormSubmit form that delivers to the company inbox, then set:

```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
```

Rebuild after changing the variable. The endpoint is bundled into the frontend (typical for Formspree). Do not put a private API secret in a `VITE_` variable.

## Updating content

- Services: `src/data/services.js`
- Training catalogue: `src/data/training.js`
- Company contact and social: `src/data/company.js`
- FAQs: `src/data/faq.js`

Add a new training programme by appending an object in `trainingPrograms`. Mark `verified: true` only when the company has publicly offered that programme.
