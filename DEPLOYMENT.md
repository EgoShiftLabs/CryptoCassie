# Crypto Cassie Web App - Deployment Guide

## 🚀 GitHub Pages Deployment Instructions

### Prerequisites
- GitHub account
- Git installed on your local machine
- Basic knowledge of GitHub repositories

### Step 1: Repository Setup

1. **Create a new GitHub repository:**
   - Go to GitHub.com and click "New repository"
   - Name it `crypto-cassie-webapp` (or your preferred name)
   - Make it public (required for free GitHub Pages)
   - Initialize with README (optional)

2. **Clone the repository locally:**
   ```bash
   git clone https://github.com/yourusername/crypto-cassie-webapp.git
   cd crypto-cassie-webapp
   ```

### Step 2: Upload Project Files

1. **Copy all project files to your repository:**
   - Copy all files from this project directory
   - Ensure the following structure:
   ```
   crypto-cassie-webapp/
   ├── index.html
   ├── prompts.html
   ├── character.html
   ├── after-dark.html
   ├── css/
   ├── js/
   ├── images/
   ├── videos/
   ├── assets/
   ├── README.md
   └── .gitignore
   ```

2. **Commit and push files:**
   ```bash
   git add .
   git commit -m "Initial commit: Crypto Cassie Web App"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. **Go to repository settings:**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section

2. **Configure GitHub Pages:**
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: / (root)
   - Click "Save"

3. **Wait for deployment:**
   - GitHub will build and deploy your site
   - This usually takes 1-5 minutes
   - You'll see a green checkmark when ready

### Step 4: Access Your Live Site

Your site will be available at:
```
https://yourusername.github.io/crypto-cassie-webapp
```

## 🔧 Configuration Options

### Custom Domain (Optional)

1. **Add CNAME file:**
   ```bash
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **Configure DNS:**
   - Add CNAME record pointing to `yourusername.github.io`
   - Wait for DNS propagation (up to 24 hours)

### SSL Certificate
- GitHub Pages automatically provides SSL certificates
- Your site will be available via HTTPS

## 📱 Testing Your Deployment

### Functionality Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works between all pages
- [ ] AI Prompt Generator functions properly
- [ ] Character page displays reference images
- [ ] After Dark mode shows age verification
- [ ] HunyuanVideo export works
- [ ] All images display without cropping
- [ ] Mobile responsiveness works
- [ ] Copy-to-clipboard functions work
- [ ] Local storage saves prompt history

### Browser Testing
Test your deployed site on:
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge (desktop)

## 🛠️ Troubleshooting

### Common Issues

**Site not loading:**
- Check that GitHub Pages is enabled
- Verify files are in the root directory
- Ensure index.html exists

**Images not displaying:**
- Check image file paths are correct
- Verify images are committed to repository
- Ensure image files are not too large (< 25MB each)

**JavaScript not working:**
- Check browser console for errors
- Verify all JS files are properly linked
- Test locally first before deploying

**404 errors:**
- Check file names match exactly (case-sensitive)
- Verify all internal links use correct paths
- Ensure no spaces in file names

### Performance Optimization

**Image optimization:**
- Compress images before uploading
- Use appropriate formats (JPEG for photos, PNG for graphics)
- Consider WebP format for better compression

**File size limits:**
- Individual files: 100MB max
- Repository total: 1GB max
- Consider using Git LFS for large files

## 🔄 Updates and Maintenance

### Making Updates

1. **Edit files locally:**
   ```bash
   # Make your changes
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

2. **Automatic deployment:**
   - GitHub Pages automatically rebuilds on push
   - Changes appear within 1-5 minutes

### Version Control Best Practices

- Use descriptive commit messages
- Create branches for major features
- Test changes locally before pushing
- Keep the main branch stable

## 📊 Analytics and Monitoring

### Adding Analytics (Optional)

1. **Google Analytics:**
   - Add tracking code to all HTML files
   - Insert before closing `</head>` tag

2. **GitHub Insights:**
   - View traffic data in repository insights
   - Monitor visitor statistics

### Performance Monitoring

- Use browser dev tools to check load times
- Monitor Core Web Vitals
- Test on various devices and connections

## 🔒 Security Considerations

### Content Security
- All content is static (no server-side vulnerabilities)
- Age verification for mature content
- No sensitive data stored

### Privacy
- Local storage only (no external data collection)
- No cookies or tracking by default
- User data stays on their device

## 📞 Support and Resources

### Documentation
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [HTML/CSS/JS References](https://developer.mozilla.org/)

### Community
- GitHub Issues for bug reports
- GitHub Discussions for questions
- Stack Overflow for technical help

---

**Note:** This deployment guide ensures your Crypto Cassie web app is fully functional and accessible via GitHub Pages with all features working correctly.

