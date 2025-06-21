* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    transition: background-color 1s ease-in-out;
    background-color: #f5f5f5;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    will-change: background-color;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}

.logo {
    display: flex;
    align-items: center;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.logo:hover {
    opacity: 1;
}

.logo img {
    height: 100%;
    width: auto;
}

nav {
    display: flex;
    align-items: center;
}

nav a {
    color: inherit;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    font-size: 14px;
    line-height: 1;
}

nav a:hover {
    opacity: 1;
}

.scramble-char {
    display: inline-block;
    color: inherit;
}

/* Main Content */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.phrase-container {
    text-align: center;
    opacity: 1;
    padding: 0 20px;
    max-width: 100%;
    will-change: opacity;
    transition: opacity 0.5s ease-in-out;
    transform: translateZ(0);
    backface-visibility: hidden;
}

h1 {
    font-size: clamp(16px, 5vw, 28px);
    color: #333;
    line-height: 1.2;
    letter-spacing: -0.02em;
    transition: color 1s ease-in-out;
    user-select: none;
    text-transform: lowercase;
    font-weight: normal; /* Use regular weight as default */
    will-change: color, font-family, font-weight, font-style;
}

/* About Page Styles */
.about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
    opacity: 0;
    animation: fadeIn 1.5s forwards;
    text-align: left;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.about-text {
    font-size: clamp(14px, 3vw, 18px);
    line-height: 1.6;
    margin-bottom: 30px;
    transition: color 1s ease-in-out, opacity 0.5s ease-in-out;
    font-family: 'Playfair Display', 'Lora', 'EB Garamond', serif;
}

.signature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Playfair Display', 'Lora', 'EB Garamond', serif;
}

.linkedin {
    display: inline-flex;
    align-items: center;
    transition: color 1s ease-in-out;
}

.linkedin svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    margin-left: 5px;
}

/* Tap feedback half-circles */
.tap-feedback {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 80px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease-out;
    z-index: 1000;
}

.tap-feedback.left {
    left: 0;
    border-radius: 0 40px 40px 0;
}

.tap-feedback.right {
    right: 0;
    border-radius: 40px 0 0 40px;
}

.tap-feedback.show {
    opacity: 0.3;
} 
