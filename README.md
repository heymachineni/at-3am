# Ambient Words

A minimalist, full-screen web application that displays changing phrases in beautiful serif typography. This ambient digital artwork cycles through words, colors, and fonts automatically.

## Features

- Elegant, minimalist design showcasing beautiful typography
- Rotating positive phrases and affirmations
- Carefully curated color palette of soft, pastel backgrounds
- Dynamic font selection from Google Fonts
- Responsive design for all devices
- Clean animations and transitions
- Works offline with service worker implementation
- Firebase analytics integration
- Randomized content to ensure a unique experience each visit

## Technical Details

- Vanilla JavaScript with ES6+ features
- Custom CSS with variables and transitions
- Google Fonts API for typography
- Service worker for offline support
- Firebase hosting and analytics
- Local phrase collection with extensive positive content
- Intelligent background and text color contrast calculations

## How It Works

The application cycles through a carefully curated collection of positive phrases and affirmations. With each update, it selects a new font from Google Fonts, a new background color from our soft palette, and a new phrase from our collection.

The interface is intentionally minimal to create a peaceful, meditative space. Text contrast is calculated dynamically to ensure readability on any background color.

## Usage

Simply visit the website and enjoy the rotating content. The phrases update automatically every 20 seconds, or you can click/tap the screen for an immediate refresh.

## Customization

You can customize the experience by editing:
- `phrases` array in `scripts.js` to add your own phrases
- `fonts` array to use different Google Fonts
- `backgroundColors` array to modify the color palette
- `useExternalApi` and `externalApiFrequency` to adjust API usage
- Add your Wordnik API key for enhanced word selection 