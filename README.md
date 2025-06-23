# Crypto Cassie Web App

A fully self-contained AI web app and branded website for the Crypto Cassie project, designed for seamless GitHub Pages deployment.

## 🌟 Features

- **AI Prompt Generator**: Create custom prompts for Crypto Cassie content with consistent character design
- **HunyuanVideo Integration**: Export prompts directly to HunyuanVideo for AI video generation
- **Character Lock System**: Maintains Cassie's consistent appearance and personality across all content
- **After Dark Mode**: Mature content prompt generator with age verification (18+)
- **Responsive Design**: Mobile-first design that works on all devices
- **Local Storage**: Prompt history and user preferences saved locally
- **GitHub Pages Ready**: 100% static files, no server required

## 🚀 Quick Start

### GitHub Pages Deployment

1. Fork or clone this repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" and choose `main` branch
4. Your site will be available at `https://yourusername.github.io/crypto-cassie-webapp`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crypto-cassie-webapp.git
   cd crypto-cassie-webapp
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
crypto-cassie-webapp/
├── index.html              # Homepage
├── prompts.html            # AI Prompt Generator
├── character.html          # Character Profile (Locked)
├── after-dark.html         # After Dark Mode (18+)
├── css/
│   ├── main.css           # Main stylesheet
│   └── dark-theme.css     # Dark theme for After Dark
├── js/
│   ├── main.js            # Core functionality
│   ├── prompt-generator.js # Prompt generation logic
│   ├── after-dark.js      # After Dark functionality
│   └── hunyuan-export.js  # HunyuanVideo integration
├── images/                # Character images and assets
├── videos/                # Sample videos
└── assets/                # Additional assets and exports
```

## 🎯 Character Specifications

### Crypto Cassie - Character Lock 🔐

- **Name**: Crypto Cassie
- **Race**: Black American
- **Height**: 5'10"
- **Weight**: 145 lbs
- **Eyes**: Green
- **Hair**: Wet & wavy
- **Body**: Feminine, shapely, fit (not muscular)
- **Style**: Rotates between streetwear, classy casual, and beachwear
- **Voice**: Cute, educational, mildly seductive
- **Age Range**: 18–21

**Important**: Cassie's appearance and personality are locked and must remain consistent across all generated content.

## 🤖 AI Prompt Generator

### Features
- Custom scene descriptions
- Scene type selection (tutorial, beach, dancing, etc.)
- Tone adjustment (friendly, educational, seductive, playful)
- Outfit style selection
- Background, lighting, and camera options
- TTS-ready format generation
- Prompt history (last 5 prompts)

### HunyuanVideo Integration
- One-click prompt export to `.txt` files
- Setup instructions for HunyuanVideo
- GitHub repository links
- Local installation guidance

## 🌙 After Dark Mode

### Features
- Age verification system (18+ only)
- Dark theme interface
- Mature content prompt generation
- Enhanced intensity levels
- Suggestive scene types
- Platform policy compliance

### Content Guidelines
- All content remains within platform policies
- Suggestive themes without explicit content
- Maintains character consistency
- Suitable for AI video generation platforms
- 18+ audience only

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **Vanilla JavaScript**: No external dependencies
- **LocalStorage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance
- Optimized for fast loading
- Minimal external dependencies
- Efficient CSS and JavaScript
- Compressed assets

## 📱 Mobile Support

The app is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Adaptive navigation
- Scalable media elements
- Mobile-optimized forms

## 🔒 Privacy & Security

- No server-side data collection
- Local storage only
- Age verification for mature content
- Platform policy compliance
- No external tracking

## 🎨 Customization

### Adding Images
1. Place character images in the `images/` directory
2. Update image paths in HTML files
3. Ensure images maintain character consistency

### Adding Videos
1. Place video files in the `videos/` directory
2. Update video sources in HTML
3. Use multiple formats for compatibility (MP4, WebM)

### Modifying Prompts
1. Edit prompt templates in `js/prompt-generator.js`
2. Update scene configurations as needed
3. Maintain character consistency requirements

## 🚀 Deployment Options

### GitHub Pages (Recommended)
- Free hosting
- Automatic deployment
- Custom domain support
- SSL certificate included

### Other Static Hosts
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check the documentation
- Review the character specifications

## 🔗 Links

- [HunyuanVideo Repository](https://github.com/Tencent/HunyuanVideo)
- [Character Profile](character.html)
- [AI Prompt Generator](prompts.html)

---

**Note**: This is a demonstration project showcasing AI character consistency and prompt generation. Ensure compliance with all applicable terms of service when using with AI video generation platforms.

