# Hunza Technologies

Official website for Hunza Technologies, a technology and digital solutions company based at the Software Technology Park in Nasirabad, Hunza, Pakistan.

Tagline: **Empower Ideas Through Technology.**

## Stack

- React 18 (JavaScript)
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

## See the code locally

The live site currently lives on the working branch `cursor/hunza-technologies-website-878e` (the `main` branch only has the starter README until the pull request is merged).

```bash
git clone https://github.com/kulsumparee/Hunza-Tech.git
cd Hunza-Tech
git checkout cursor/hunza-technologies-website-878e
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173). You can also browse the files on GitHub or open the cloned folder in Cursor.

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

The form validates in the browser, then sends the enquiry two ways so it can reach `hunzatechnologies84@gmail.com`:

1. A normal HTML POST to FormSubmit (the method FormSubmit documents; AJAX is blocked by Cloudflare).
2. A JSON POST to [Form.taxi](https://form.taxi) (`https://form.taxi/s/jtuweah7`).

Each enquiry email includes what the visitor typed: full name, email, phone, the skill or service they want (including the training programme when they ask to learn), and their message.

The first submission from a new website can send an **Activate Form** or Form.taxi confirmation email to that Gmail inbox. Open it, click the link, then submit the enquiry again. After that, new enquiries arrive with the visitor’s answers. Check spam if nothing appears.

To use a different Form.taxi (or similar) JSON endpoint, set:

```bash
VITE_FORM_ENDPOINT=https://form.taxi/s/your-code
```

## Updating content

- Services: `src/data/services.js`
- Training catalogue: `src/data/training.js`
- Company contact and social: `src/data/company.js`
- FAQs: `src/data/faq.js`

Add a new training programme by appending an object in `trainingPrograms`. Mark `verified: true` only when the company has publicly offered that programme.
