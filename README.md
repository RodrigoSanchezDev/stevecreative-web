# Steve Creative - Digital Agency Website

A professional, modern website for **Steve Creative**, a full-service digital agency specializing in web development and digital marketing.

## 🏗️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **next-intl** - Internationalization (English & Spanish)
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vercel** - Deployment

## 📁 Project Structure

```
stevecreative-web/
├── frontend/                # Next.js app
│   ├── messages/            # i18n translation files (en/es)
│   ├── src/
│   │   ├── app/
│   │   │   ├── [locale]/    # i18n pages
│   │   │   └── api/contact/ # Contact form API route
│   │   ├── components/
│   │   │   ├── ui/          # Reusable UI components
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   └── sections/    # Page sections
│   │   ├── i18n/            # i18n configuration
│   │   └── lib/             # Utilities
│   └── public/
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌍 Internationalization

The website supports English and Spanish. Language switching is available in the navigation bar. 

- English: `/en`
- Spanish: `/es`

Translation files are located in `frontend/messages/`.

## 🎨 Design System

Reusable components in `frontend/src/components/ui/`:

- **Button** - Primary, secondary, ghost, outline variants
- **Card** - Glass-morphism cards with hover effects
- **Section** - Consistent section wrapper
- **Container** - Max-width container
- **SectionHeader** - Consistent section titles with badges
- **Badge** - Status/category badges
- **FormElements** - Input, Textarea, Select

## 📧 API Route

| Method | Endpoint       | Description              |
|--------|--------------- |--------------------------|
| POST   | /api/contact   | Submit contact form      |
| GET    | /api/contact   | API info                 |

## 🚀 Deployment

This project is configured for **Vercel**. Connect your GitHub repo and set the root directory to `frontend/`.

## 📄 License

MIT
