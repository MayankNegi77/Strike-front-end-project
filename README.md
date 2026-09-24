# ⚡ Strike Frontend — Interactive Tech Education Platform

A modern, high-conversion, SEO-optimized frontend web application built for **Strike** — an advanced tech education platform empowering students to master Data Structures & Algorithms (DSA), Generative AI, Full-Stack Web Development, and DevOps.

Built with **React 19** and **Vite**, this project combines pixel-perfect fidelity to the original Strike platform with innovative psychological UX triggers, interactive 3D character animations, dynamic marquee tickers, responsive glassmorphism aesthetics, and **industry-leading Search Engine Optimization (SEO)** for top Google search rankings.

---

## ✨ Project Highlights & Curiosity Innovations

Beyond recreating the authentic Strike UI, this project incorporates specialized interactive features and search engine engineering designed to boost student curiosity, search visibility, emotional engagement, and course conversion:

### 1. 🔍 Advanced Search Engine Optimization (SEO) for Top Search Rankings
* **Primary Meta Tag Optimization**: Fully configured title (`Strike | DSA, Web Development & Gen AI Courses by Rohit Negi`), descriptive meta tags, author metadata, and high-converting keyword targeting (*Strike, Rohit Negi, Coder Army, DSA, Generative AI, System Design, Full Stack Web Development, FAANG Preparation*).
* **Rich Social Sharing (Open Graph & Twitter Cards)**: Embedded `og:title`, `og:description`, `og:image`, `twitter:card`, and `twitter:site` tags ensuring rich, high-click-through cards when shared across WhatsApp, LinkedIn, Twitter/X, and Telegram.
* **Structured Data (JSON-LD) for Google Rich Snippets**: Schema.org JSON-LD structured markup for `Organization`, `Person` (Lead Instructor), `Course`, and `EducationalOrganization` to trigger rich search results, Knowledge Graph panels, and rating badges on Google.
* **Crawler & Mobile-First Indexing Directives**: Full `robots` directives (`index, follow, max-image-preview:large, max-snippet:-1`), canonical URL tags (`https://strikes.in/`), theme-color metadata (`#0a0a0c`), and responsive viewport settings for 100% mobile-first Google rank optimization.
* **Performance & Asset Preloading**: Preconnect (`preconnect`, `dns-prefetch`) hints to Google Fonts and Cloudfront CDNs for ultra-fast First Contentful Paint (FCP), lower latency, and top Lighthouse PageSpeed scores.

### 2. 🕯️ Torch Boy Interactive Widget & Secret Coupon Engine
* **Interactive 3D Character**: Positioned as a floating widget, a 3D animated character holding a torch illuminates the user's path.
* **Hover Secret Coupon Card**: Hovering over the character unveils an exclusive secret discount coupon card.
* **Emotional Thought Trigger**: Applying the coupon triggers an inspiring, emotionally resonant message urging students to take control of their career and future.
* **Instant Site-Wide Discount Application**: Clicking the course button automatically applies discounted pricing across all membership cards (`Strike Ultra`, `Strike Plus`, etc.) and smoothly scrolls the user directly to the **Membership Plans** section.

### 3. 🎡 Dual Interactive Marquee Tickers
* **Hero Membership Ticker**: Located right below the hero header and above the *Join Us* call-to-action. It rotates membership tiers, discount badges, and savings alerts to maximize initial user interaction and guide users directly to target courses.
* **Real Stories Marquee (Student Experiences & Feedback)**:
  * Showcases authentic reviews from Indian students building their careers with Strike.
  * Displays student names (e.g., *Aman Sharma*, *Rohan Verma*, *Priya Patel*), star ratings (4.5 half-stars & 5.0 full-stars), quote indicators, and course badges with custom SVG logos.
  * Features an **"Explore Course"** button on each review card that instantly scrolls the reader to the specific course referenced in that comment (DSA + GenAI, Strike Ultra, Strike Plus, Thunder 100 Days, Full Stack Web Dev, DevOps Track).
  * Styled with a zero-layout-shift pop-up zoom effect and soft CSS `mask-image` gradient dissolve at the entry/exit edges for a seamless marquee animation.

### 4. 👨‍🏫 Confidence-Building Mentor Profile Cards
* Showcases top portrait photographs of mentors.
* Provides credentials, industry experience, and mentorship track highlights to instill candidate trust, authority, and confidence.

### 5. 🔄 Interactive 3D Card Flip Mechanics
* Course cards feature custom double-sided 3D flip physics.
* Clicking **"Explore Course"** flips the card 180° to reveal detailed curriculum breakdown and key outcomes.
* Tapping anywhere on the reverse side unflips the card back to the front (safeguarding the *Read More* link).

### 6. 💻 Interactive IDE Code Editor Window
* Embeds a sleek dark-themed IDE code editor window (`strike.js`) in the hero section complete with syntax highlighting, line numbers, status indicators, and an interactive **Run Code** simulation.

---

## 🛠️ Tech Stack & SEO Engineering

* **Frontend Library**: React 19 (`react`, `react-dom`)
* **Build Tool**: Vite 8
* **Styling**: Pure CSS3 with custom variables, CSS grid/flexbox, keyframe animations, CSS `mask-image` edge fading, and glassmorphism backdrop filters.
* **SEO & Metadata**: JSON-LD Schema.org, Open Graph, Twitter Cards, Canonical Links, Resource Preconnects (`dns-prefetch`, `preconnect`).
* **Typography**: *Audiowide*, *Inter*, and *Fira Code* (Monospace)
* **Icons**: Custom SVG graphics & inline icon sets.

---

## 📁 Directory Structure

```
strike-frontEnd/
├── component/
│   ├── Body/
│   │   ├── aboutcompany.jsx       # Company overview & mission
│   │   ├── aboutmentor.jsx        # Mentor profiles with top portraits
│   │   ├── commentCard.jsx        # Real Stories marquee slideshow with user names & course links
│   │   ├── memberShipPlans.jsx    # Membership pricing plans (Ultra & Plus) with discount toggle
│   │   ├── questioans.jsx          # Frequently Asked Questions (Accordion)
│   │   ├── review.jsx             # Review container wrapper
│   │   ├── strikelogo.jsx         # Hero section, thought quote, ticker & IDE code editor
│   │   ├── torchBoyWidget.jsx     # Floating Torch Boy character widget & secret coupon modal
│   │   ├── whatweoffer.jsx        # Interactive 3D flip course cards
│   │   └── whyChooseus.jsx        # Platform highlights & value props
│   ├── common/
│   │   └── ScrollReveal.jsx       # Smooth scroll reveal animation wrapper
│   ├── footer/
│   │   └── footersection.jsx      # Footer with quick links & social icons
│   └── nar-bar/
│       └── navbar.jsx             # Compact glassmorphism sticky navigation bar
├── src/
│   ├── App.jsx                    # Main application root & state management
│   ├── main.jsx                   # React DOM entry point
│   └── index.css                  # Global styles, dark theme palette, & animation keyframes
├── index.html                     # Main HTML with SEO meta tags, JSON-LD Schema & Open Graph
├── public/                        # Static media assets & images
├── package.json                   # Dependencies & build scripts
└── README.md                      # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have **Node.js** (v18.0 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MayankNegi77/Strike-front-end-project.git
   cd strike-frontEnd
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🎯 Key Component Features & Purpose

| Component / File | Purpose & UX / SEO Innovation |
| :--- | :--- |
| **`index.html`** | Houses primary SEO meta tags, JSON-LD Schema markup, Open Graph, Twitter Cards, preconnect hints, and font imports for top Google ranking. |
| **`NavBar`** | Glassmorphism navigation bar that smoothly transitions into a compact pill shape on scroll. |
| **`StrikeLogo`** | Hero header featuring Audiowide branding, headline thought, membership ticker, and an interactive `strike.js` code editor. |
| **`TorchBoyWidget`** | Interactive Torch Boy character that unlocks a secret coupon on hover, displays an inspiring message, and applies site-wide discounts. |
| **`MemberShipPlans`** | Displays `Strike Ultra` and `Strike Plus` plans with live price updates when the discount coupon is redeemed. |
| **`Whatweoffer`** | 3D flip cards showcasing Strike's flagship programs (*DSA + GenAI Combo*, *Thunder 100 Days*, *Web Dev*, *DevOps*). |
| **`AboutMentor`** | Highlighting top mentor portraits to build student trust, authority, and confidence. |
| **`Card (commentCard)`** | Infinite marquee of student reviews with Indian names, star ratings, course logos, and direct scroll redirection buttons. |
| **`ScrollReveal`** | Viewport scroll reveal wrapper adding smooth entry transitions across page sections. |

---

## 🎨 Design & SEO Performance System

* **Primary Background**: `#000000` / `#060606` deep dark background.
* **Card Background**: `#090a0f` with `#27272a` subtle borders.
* **Accent Colors**: `#ffffff` (Pure White), `#eab308` (Yellow Rating Stars), `#3b82f6` (Accent Blue).
* **Marquee Dissolve**: Soft edge alpha masking (`mask-image: linear-gradient(...)`) ensuring seamless entry and exit for marquee items.
* **SEO & Ranking**: Built-in Schema.org JSON-LD structured data, mobile-first index directives, and high-intent keyword targeting for top search placement.

---

## 📄 License

This project is created for educational and demonstration purposes. All design inspirations belong to the original **Strike** platform.
