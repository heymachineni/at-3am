# Ambient Words

A minimalist, full-screen web application that displays changing phrases in beautiful serif typography. This ambient digital artwork cycles through words, colors, and fonts automatically.

## Features

- Full-screen, minimalist design
- Automatic updates every 60 seconds:
  - New background color
  - New serif font from Google Fonts
  - New phrase or word
- Dynamic word sourcing from external APIs (Datamuse, Wordnik)
- Smooth, elegant transitions
- Click or tap anywhere to trigger a change
- WCAG AA compliant color contrast
- Responsive design that works on all devices
- Tracking system to avoid repetition of phrases, fonts, and colors

## How It Works

The application uses:
- Vanilla HTML, CSS, and JavaScript
- GSAP for animations
- Google Fonts API for typography
- Color contrast calculation for accessibility
- Word APIs for dynamic content

## API Integration

This project integrates with external word APIs:

- **Datamuse API**: Provides related words, synonyms, and more
- **Wordnik API**: Delivers random words with dictionary definitions

Words are prefetched and cached to ensure smooth transitions. If an API fails, the application falls back to its local word collection.

## Usage

Simply open the `index.html` file in a web browser to start the experience. The application works best in full-screen mode.

## Customization

You can customize the experience by editing:
- `phrases` array in `scripts.js` to add your own phrases
- `fonts` array to use different Google Fonts
- `backgroundColors` array to modify the color palette
- `useExternalApi` and `externalApiFrequency` to adjust API usage
- Add your Wordnik API key for enhanced word selection 