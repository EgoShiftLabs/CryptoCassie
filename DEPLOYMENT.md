# GitHub Pages Deployment Instructions

## Quick Setup

1. **Create a new GitHub repository**
   - Go to GitHub.com and create a new repository
   - Name it something like `crypto-cassie-generator`
   - Make it public (required for free GitHub Pages)

2. **Upload the files**
   - Upload all files from the `github-pages-deployment` folder to your repository
   - This includes:
     - `index.html`
     - `assets/` folder
     - `README.md`
     - `crypto_cassie_specifications.md`
     - `crypto_cassie_specifications.pdf`

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main" 
   - Folder: "/ (root)"
   - Click "Save"

4. **Access your site**
   - URL will be: `https://[username].github.io/[repository-name]`
   - May take 5-10 minutes to become available

## File Structure

```
github-pages-deployment/
├── index.html                          # Main HTML file
├── assets/
│   ├── crypto_cassie_initial-[hash].png # Character image
│   ├── index-[hash].css                 # Styles
│   └── index-[hash].js                  # JavaScript
├── README.md                            # Documentation
├── crypto_cassie_specifications.md     # Character guide
└── crypto_cassie_specifications.pdf    # Character guide (PDF)
```

## Features Included

✅ **Fully Functional Interface**
- Scene presets (Café, Beach, Podcast, Metaverse)
- Custom scene configuration
- Outfit selection
- Dialogue input
- Video prompt generation
- Copy to clipboard functionality

✅ **Character Consistency**
- Detailed character specifications
- Visual consistency guide
- Hyper-realistic appearance maintenance

✅ **Responsive Design**
- Works on desktop and mobile
- Professional UI with Tailwind CSS
- Smooth animations and interactions

✅ **No Backend Required**
- Pure static files
- Works entirely in the browser
- Perfect for GitHub Pages

## Usage After Deployment

1. Visit your GitHub Pages URL
2. Choose a preset or create custom scene
3. Select outfit style
4. Describe the scene setting
5. Write dialogue for Cassie
6. Click "Generate Video Prompt"
7. Copy the generated prompt
8. Use with your video generation tool

The generated prompts include all necessary details to maintain Crypto Cassie's consistent appearance, personality, and tone across all video content.

