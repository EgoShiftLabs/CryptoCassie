# Crypto Cassie Web App - Design & Structure Plan

## Website Structure

### Core Pages
1. **index.html** - Home Page
   - Hero section with Cassie image
   - Project overview
   - Social media links (Telegram, GitHub, TikTok)
   - Embedded sample video
   - Footer with contact/social links

2. **prompts.html** - AI Prompt Generator
   - Text input for custom prompts
   - Scene type dropdown (tutorial, beach, dancing, etc.)
   - Tone toggle (friendly, seductive, educational)
   - Clean code box output
   - Copy button functionality
   - Prompt history (localStorage, last 5)
   - TTS export-ready structure
   - HunyuanVideo Export Button

3. **after-dark.html** - Cassie After Dark Mode
   - NSFW/suggestive prompt generator
   - Age verification disclaimer
   - Dark theme forced
   - Spicy preset themes
   - Same UI as prompts.html but themed differently

4. **character.html** - Cassie Identity Profile
   - Immutable character description
   - Static image reference
   - Branding guidelines
   - Visual consistency documentation

### Directory Structure
```
crypto-cassie-webapp/
├── index.html
├── prompts.html
├── after-dark.html
├── character.html
├── css/
│   ├── main.css
│   ├── dark-theme.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── prompt-generator.js
│   └── hunyuan-export.js
├── images/
│   ├── cassie-hero.jpg
│   ├── cassie-profile.jpg
│   └── icons/
├── videos/
│   ├── intro.mp4
│   └── cassie-dance.webm
└── assets/
    ├── fonts/
    └── exports/
```

## Design System

### Color Palette
- Primary: #FF6B9D (Pink/Magenta - crypto/tech vibes)
- Secondary: #4ECDC4 (Teal - matches Cassie's green eyes)
- Accent: #FFE66D (Gold - crypto theme)
- Dark: #2C3E50 (Navy blue)
- Light: #F8F9FA (Off-white)
- Text: #333333 (Dark gray)

### Typography
- Headers: Modern sans-serif (Inter or Poppins)
- Body: Clean readable font (Open Sans or system fonts)
- Code: Monospace (Fira Code or Monaco)

### Visual Style
- Modern, clean design with subtle gradients
- Card-based layouts
- Smooth animations and transitions
- Mobile-first responsive design
- Consistent spacing and grid system

### UI Components
- Navigation bar with logo and menu
- Hero sections with background images/videos
- Interactive buttons with hover effects
- Form inputs with modern styling
- Modal dialogs for instructions
- Copy-to-clipboard functionality
- Progress indicators
- Social media icons

## Technical Requirements

### Frontend Stack
- HTML5 semantic markup
- CSS3 with Flexbox/Grid
- Vanilla JavaScript (ES6+)
- No external dependencies
- LocalStorage for data persistence
- File download/export functionality

### GitHub Pages Compatibility
- All assets self-contained
- No server-side processing
- Relative paths for all resources
- Optimized file sizes
- Cross-browser compatibility

### Features Implementation
1. **Prompt Generator**
   - Dynamic form inputs
   - Real-time prompt building
   - Template system for different scenes
   - Export to .txt files
   - Copy to clipboard

2. **HunyuanVideo Integration**
   - Export button functionality
   - Modal with instructions
   - Link to GitHub repo
   - Local setup guidance

3. **Character Consistency**
   - Locked character profile
   - Reference images
   - Style guidelines
   - Prompt templates that maintain consistency

4. **Responsive Design**
   - Mobile-optimized layouts
   - Touch-friendly interactions
   - Adaptive navigation
   - Scalable media elements

