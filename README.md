# KENRICK - Creative Portfolio

A modern, responsive single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Clean, professional creative agency aesthetic
- 🌓 **Dark Mode** - Smooth theme switching with system preference detection
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ✨ **Smooth Animations** - Framer Motion powered scroll-triggered animations
- 🎯 **SEO Optimized** - Complete meta tags and Open Graph support
- 📧 **Contact Form** - EmailJS integration with validation
- 🎭 **Interactive UI** - Floating badges, hover effects, and more

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Forms:** EmailJS
- **Utilities:** clsx, tailwind-merge

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🖥️ Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static asse
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   └── sections/  # Page sections
│   ├── data/          # Static data files
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and helpers
│   └── styles/        # Global styles and Tailwind config
└── ...config files
```

## 🎨 Customization

### Update Personal Information

1. **Profile Image:** Replace `src/assets/images/profile.png`
2. **Projects:** Edit `src/data/projects.js`
3. **Services:** Edit `src/data/services.js`
4. **Social Links:** Edit `src/data/socialLinks.js`
5. **Navigation:** Edit `src/data/navLinks.js`

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update credentials in `src/lib/emailjs.js`:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

### Colors & Theme

Edit `tailwind.config.js` to customize:
- Primary colors
- Font families
- Animations
- Breakpoints

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### GitHub Pages

Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ by KENRICK**
