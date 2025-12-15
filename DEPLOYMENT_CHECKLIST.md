# Pre-Deployment Checklist

Before pushing to GitHub, make sure to complete these steps:

## ✅ Security Review - COMPLETED
- [x] No API keys or secrets in code
- [x] `.env` added to `.gitignore`
- [x] `.env.example` created for reference
- [x] EmailJS config uses environment variables

## 📝 Personalization - TODO

### Update these files with YOUR information:

1. **Social Links** - `src/data/socialLinks.js`
   - [ ] Update GitHub URL
   - [ ] Update LinkedIn URL
   - [ ] Update Twitter/X URL
   - [ ] Update Instagram URL
   - [ ] Update email address

2. **Projects** - `src/data/projects.js`
   - [ ] Replace with your actual projects
   - [ ] Add real project images
   - [ ] Add working project links

3. **Profile Image** - `src/assets/images/profile.png`
   - [ ] Replace with your photo

4. **Package.json** - `package.json`
   - [ ] Update repository URL
   - [ ] Add your name as author

5. **Index.html** - `index.html`
   - [ ] Update page title
   - [ ] Update meta description

## 🔐 Environment Setup

1. **EmailJS Configuration**
   ```bash
   # Create your .env file
   cp .env.example .env
   
   # Add your EmailJS credentials
   # Get them from https://www.emailjs.com/
   ```

2. **Never commit these files:**
   - `.env`
   - `.env.local`
   - `node_modules/`
   - `dist/`

## 🚀 Ready to Deploy

Once you've completed the personalization:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

## 📊 Post-Deployment

- [ ] Set up custom domain (optional)
- [ ] Test contact form
- [ ] Check responsive design on real devices
- [ ] Test dark mode toggle
- [ ] Verify all links work
- [ ] Run Lighthouse audit
- [ ] Add Google Analytics (optional)

---

**Safe to push to GitHub once security items are ✅ and personalization is done!**
