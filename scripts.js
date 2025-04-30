// Array of serif Google Fonts to use
const fonts = [
    'Playfair Display',
    'Lora',
    'EB Garamond',
    'Merriweather',
    'Crimson Pro',
    'Vollkorn',
    'Source Serif Pro',
    'Noto Serif',
    'Libre Baskerville',
    'Cormorant Garamond',
    'Bodoni Moda',
    'Yrsa',
    'DM Serif Display',
    'Taviraj',
    'Bree Serif',
    'PT Serif',
    'Cinzel',
    'Alice',
    'Cardo',
    'Newsreader',
    'Amiri',
    'Castoro',
    'Prata',
    'Linden Hill',
    'Libre Caslon Text',
    'Nanum Myeongjo',
    'Gentium Book Basic',
    'Petrona',
    'Rosarivo',
    'Spectral',
    'Sura',
    'Arvo',
    'Abhaya Libre',
    'Roboto Serif',
    'Fraunces',
    'Bitter',
    'Cormorant',
    'Brygada 1918',
    'Faustina',
    'Lora',
    'Headland One',
    'Italiana',
    'Literata',
    'Solway',
    'Cantata One',
    'Markazi Text',
    'Radley',
    'Manuale',
    'Lustria',
    'Zilla Slab'
];

// Font weights and styles to use
const fontVariants = [
    { weight: '300', style: 'normal' },       // Light
    { weight: '400', style: 'normal' },       // Regular
    { weight: '500', style: 'normal' },       // Medium
    { weight: '600', style: 'normal' },       // SemiBold
    { weight: '400', style: 'italic' },       // Italic
    { weight: '500', style: 'italic' }        // Medium Italic
];

// Expanded array of pastel and soft colors for backgrounds
const backgroundColors = [
    // Soft pastels
    '#F8F3EB', '#F3F8EB', '#EBF8F3', '#EBF3F8', '#F3EBF8', '#F8EBF3',
    '#E6D7CF', '#D7E6CF', '#CFE6D7', '#CFD7E6', '#D7CFE6', '#E6CFD7',
    '#F2D9D3', '#D9F2D3', '#D3F2D9', '#D3D9F2', '#D9D3F2', '#F2D3D9',
    '#F8D8C8', '#C8F8D8', '#D8C8F8', '#F8C8D8', '#C8D8F8', '#D8F8C8',
    
    // Soft muted colors
    '#E0E4CC', '#C7DEDE', '#DEC7DE', '#DEDEC7',
    '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900',
    '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A',
    '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58',
    '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC',
    '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0',
    
    // Muted pastels
    '#DCEDC8', '#FFD3B6', '#FFAAA5', '#FF8B94',
    '#FDFDF5', '#FFF1D0', '#FFD3B6', '#FFAAA5', 
    '#D8DCFF', '#AEADF0', '#C38D94', '#A76571',
    '#D3F0EE', '#B1DDF1', '#A6B8F3', '#AEE1CD',
    '#FFC5BF', '#FFD8BE', '#FFEBBE', '#ABE6BB',
    
    // Soft complex colors
    '#E9D1D0', '#ECE9E1', '#EFE6DD', '#EDEDE9',
    '#F0E9E1', '#E5E2DF', '#DBD9D7', '#A39E93',
    '#D7E9F7', '#EFEFEF', '#E7E0D6', '#BFB1A4',
    '#F3E9E7', '#E6DBD0', '#D8B29C', '#C99C7A',
    '#F2D0A7', '#D99873', '#9C7169', '#5C464B',
    
    // Dusty pastels
    '#D6E5E3', '#9BBFB8', '#6C8984', '#D1CECB',
    '#E2CFC9', '#F7DFD4', '#FAEEE0', '#F9F4EC',
    '#F4F7F7', '#AACFD0', '#5DA0A2', '#34495E',
    '#CADBC8', '#B4C4AE', '#B4C4AE', '#75896C',
    '#F4EBE2', '#E4D7C5', '#BCA890', '#936B3E',
    
    // Muted tones
    '#BFCBA8', '#8FBDD3', '#5584AC', '#726A95',
    '#EEF2E6', '#D4E7C5', '#99BC85', '#6B7D7D',
    '#FFCBCB', '#FFB6B6', '#FF9292', '#C25B56',
    '#F1E4E4', '#D9C5C5', '#AEA3A3', '#8C7575',
    '#EDF2FB', '#D7E3FC', '#CCDBFD', '#C1D3FE',
    
    // Light earth tones
    '#E3D2C2', '#CBAC97', '#B68F75', '#9B7461',
    '#EEE0CB', '#BAA898', '#8E8268', '#6E6550',
    '#E4DAC2', '#D1BE9C', '#AA9A73', '#7A6F4C',
    '#E6E2D6', '#C5B9A0', '#A69676', '#8B7953',
    '#E2DBC7', '#C6BFA5', '#9E9577', '#7E754F'
];

// Import the phrases from the data file
let singleWordPhrases = [];
let twoWordPhrases = [];
let threeWordPhrases = [];
let fourWordPhrases = [];

// Try to load the phrases asynchronously
async function loadPhrases() {
    try {
        const phrasesModule = await import('./phrases-data.js');
        singleWordPhrases = phrasesModule.singleWordPhrases || [];
        twoWordPhrases = phrasesModule.twoWordPhrases || [];
        threeWordPhrases = phrasesModule.threeWordPhrases || [];
        fourWordPhrases = phrasesModule.fourWordPhrases || [];
        console.log(`Loaded ${singleWordPhrases.length + twoWordPhrases.length + threeWordPhrases.length + fourWordPhrases.length} phrases`);
    } catch (error) {
        console.warn('Could not load phrases module:', error);
        // Will fall back to the built-in phrases defined below
    }
}

// Original phrases as fallback
const builtInPhrases = [
    // Original core phrases - all positive
    'breathe',
    'stay weird',
    'move softly',
    'you\'re okay',
    'one more try',
    'be brave',
    'be still',
    'slow down',
    'trust yourself',
    'just begin',
    'look up',
    'stay curious',
    'keep going',
    'be present',
    'feel alive',
    'find wonder',
    'stay gentle',
    'dream big',
    'choose joy',
    'be kind',
    'let go',
    'find beauty',
    'simply be',
    'seek truth',
    'embrace change',
    'grow wildly',
    'stay foolish',
    'shine bright',
    'break free',
    'stand tall',
    'create magic',
    'find peace',
    'love deeply',
    'speak truth',
    'wander often',
    'stay wild',
    'float gently',
    'forget time',
    'remember joy',
    'try again',
    'begin anywhere',
    'create space',
    'flow freely',
    'dance slowly',
    'bloom fully',
    'think clearly',
    'feel everything',
    'trust intuition',
    'seek wisdom',
    'find wonder',
    'speak softly',
    'listen deeply',
    'rest well',
    'start fresh',
    'seek silence',
    'embrace imperfection',
    'just dance',
    'look inward',
    'stay humble',
    'create daily',
    'smile often',
    'remember why',
    'stay hopeful',
    'pause here',
    'find freedom',
    'stay grounded',
    'learn always',
    'feel everything',
    'forget perfection',
    'make magic',
    'live fully',
    'practice patience',
    'grow daily',
    'seek beauty',
    'embrace solitude',
    'simply exist',
    'feel alive',
    'remain curious',
    'love freely',
    'be yourself',
    'stay inspired',
    'go slowly',
    'listen well',
    'stay authentic',
    'connect deeply',
    'be fearless',
    'choose peace',
    'celebrate progress',
    'embrace unknown',
    'look forward',
    'stay true',
    'be present',
    'surrender control',
    'trust process',
    'keep dreaming',
    'seek wonder',
    'find balance',
    'exist loudly',
    'love fully',
    'practice grace',
    'stay grateful',
    'be here',
    'savor moments',
    
    // Additional positive phrases
    'small joys',
    'inner light',
    'soft strength',
    'wild heart',
    'quiet power',
    'brave soul',
    'fresh start',
    'pure joy',
    'just breathe',
    'open heart',
    'healing energy',
    'faith always',
    'yes please',
    'make space',
    'create beauty',
    'worthy love',
    'eyes forward',
    'embrace yourself',
    'start now',
    'choose happiness',
    'inner peace',
    'endless wonder',
    'keep hope',
    'radiate love',
    'simple pleasures',
    'abundant grace',
    'bold moves',
    'quiet reflection',
    'creative spirit',
    'full presence',
    'endless curiosity',
    'wild dreams',
    'deep breaths',
    'unfold gently',
    'fierce grace',
    'tender heart',
    'mindful moment',
    'sacred pause',
    'cherish today',
    'strong roots',
    'morning light',
    'bright future',
    'quiet courage',
    'imagine more',
    'bloom anyway',
    'grateful heart',
    'beautiful mind',
    'trust timing',
    'calm chaos',
    'live now',
    'love deeply',
    'seek light',
    'brilliant you',
    'kindness matters',
    'lasting peace',
    'good enough',
    'courage dear heart',
    'onwards always',
    'soul shine',
    'kind words',
    'brave steps',
    'open mind',
    'rise again',
    'true self',
    'light within',
    'wild freedom',
    'pure bliss',
    'new horizons',
    'enough already',
    'seek beauty',
    'hold hope',
    'love wins',
    'choose wisely',
    'simple truths',
    'rich life',
    'full circle',
    'magical moments',
    'endless possibilities',
    'steady pace',
    'truth speaks',
    'quiet confidence',
    'inner wisdom',
    'free spirit',
    'bold love',
    'always becoming',
    'sweet surrender',
    'creative flow',
    'deep roots',
    'brave heart',
    'grow through',
    'pure wonder',
    'rise up',
    'strong foundation',
    'endless grace',
    'still waters',
    'bright soul',
    'vital energy',
    'wild wonder',
    'seek depth',
    'always learning',
    'calm center',
    'begin again',
    'quiet mind',
    'sweet joy',
    'vibrant presence',
    'gentle reminder',
    'awaken fully',
    'simple pleasures',
    'divine timing',
    'bold dreams',
    'fully alive',
    'heart open'
];

// Combine all phrases
let phrases = [];

// Function to update phrases array
function updatePhrasesArray() {
    // Start with built-in phrases
    phrases = [...builtInPhrases];
    
    // Add the phrases from the external module if available
    if (singleWordPhrases.length > 0) {
        phrases = phrases.concat(singleWordPhrases.map(p => p.toLowerCase()));
    }
    if (twoWordPhrases.length > 0) {
        phrases = phrases.concat(twoWordPhrases);
    }
    if (threeWordPhrases.length > 0) {
        phrases = phrases.concat(threeWordPhrases);
    }
    if (fourWordPhrases.length > 0) {
        phrases = phrases.concat(fourWordPhrases);
    }
    
    // Shuffle the phrases for better randomization
    shuffleArray(phrases);
}

// Word API configuration
const useExternalApi = true; // Set to false to use only local phrases
const externalApiFrequency = 0.3; // 30% chance to use external API

// External APIs for fetching words
const apis = {
    datamuse: {
        url: 'https://api.datamuse.com/words',
        params: ['rel_jjb=positive', 'max=50'],
        processResponse: (data) => {
            if (!data || !data.length) return null;
            
            // Filter out any health-related, potentially negative words, or common names
            const negativeTerms = ['disease', 'ill', 'sick', 'hiv', 'virus', 'cancer', 'pain', 'hurt', 'ache'];
            const namesToFilter = ['net', 'red', 'may', 'web', 'jan', 'rob', 'bob', 'ray', 'pat', 'kim', 'tom', 'tim', 'jim', 'dan', 'sam'];
            
            const positiveWords = data.filter(item => {
                // Filter out negative terms and common names that could be colors or names
                return !negativeTerms.some(term => item.word.includes(term)) && 
                       !namesToFilter.some(name => item.word.toLowerCase() === name.toLowerCase());
            });
            
            if (positiveWords.length === 0) return null;
            
            const randomIndex = Math.floor(Math.random() * Math.min(positiveWords.length, 20));
            const word = positiveWords[randomIndex].word;
            
            // Ensure word is not too long
            if (word.length > 12) return null;
            return word;
        }
    },
    wordnik: {
        url: 'https://api.wordnik.com/v4/words.json/randomWord',
        params: ['hasDictionaryDef=true', 'minCorpusCount=10000', 'minDictionaryCount=5', 'minLength=3', 'maxLength=10', 'includePartOfSpeech=adjective,noun'],
        apiKey: '', // No API key needed as per user's request
        processResponse: (data) => {
            if (!data || !data.word) return null;
            
            // Filter out potentially problematic words and common names
            const negativeTerms = ['disease', 'ill', 'sick', 'hiv', 'virus', 'cancer', 'pain', 'hurt', 'ache'];
            const namesToFilter = ['net', 'red', 'may', 'web', 'jan', 'rob', 'bob', 'ray', 'pat', 'kim', 'tom', 'tim', 'jim', 'dan', 'sam'];
            
            if (negativeTerms.some(term => data.word.includes(term)) || 
                namesToFilter.some(name => data.word.toLowerCase() === name.toLowerCase())) {
                return null;
            }
            
            return data.word;
        }
    }
};

let usedPhrases = new Set();
let usedFonts = new Set();
let usedColors = new Set();
let usedFontVariants = new Set();
let dynamicWordsCache = [];

// Tracks what phrases, fonts, and colors have been used to avoid repeats
const trackUsage = (item, usedSet, totalItems) => {
    usedSet.add(item);
    // Reset tracking when we've used most items
    if (usedSet.size > totalItems * 0.7) {
        usedSet.clear();
    }
};

// Get random item from array that hasn't been used recently
const getRandomUnused = (array, usedSet) => {
    let availableItems = array.filter(item => !usedSet.has(item));
    
    // If all items have been used, reset
    if (availableItems.length === 0) {
        usedSet.clear();
        availableItems = [...array];
    }
    
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const selectedItem = availableItems[randomIndex];
    
    trackUsage(selectedItem, usedSet, array.length);
    return selectedItem;
};

// Calculate contrast between colors
const getContrastRatio = (color1, color2) => {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return [r, g, b];
    };

    // Calculate relative luminance
    const luminance = (rgb) => {
        const [r, g, b] = rgb.map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    const lum1 = luminance(rgb1);
    const lum2 = luminance(rgb2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
};

// Generate a contrasting text color for the background
const getContrastingTextColor = (backgroundColor) => {
    const darkColor = '#333333';
    const lightColor = '#FFFFFF';
    
    const contrastWithDark = getContrastRatio(backgroundColor, darkColor);
    const contrastWithLight = getContrastRatio(backgroundColor, lightColor);
    
    // WCAG AA requires contrast ratio of at least 4.5:1
    return (contrastWithDark >= 4.5) ? darkColor : lightColor;
};

// Load and apply a Google Font with variant
const loadAndApplyFont = (fontName) => {
    // Get a random font variant
    const fontVariant = getRandomUnused(fontVariants, usedFontVariants);
    
    const formattedName = fontName.replace(/ /g, '+');
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:ital,wght@${fontVariant.style === 'italic' ? '1' : '0'},${fontVariant.weight}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Set the font after a small delay to ensure it's loaded
    setTimeout(() => {
        const phraseElement = document.getElementById('phrase');
        phraseElement.style.fontFamily = `'${fontName}', serif`;
        phraseElement.style.fontWeight = fontVariant.weight;
        phraseElement.style.fontStyle = fontVariant.style;
    }, 100);
};

// Fetch a word or phrase from an external API
const fetchExternalWord = async () => {
    // If we have cached words, use one of those
    if (dynamicWordsCache.length > 0) {
        const word = dynamicWordsCache.pop();
        return word;
    }
    
    // Choose an API at random
    const apiKeys = Object.keys(apis);
    const selectedApiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
    const api = apis[selectedApiKey];
    
    // Build URL
    let url = api.url;
    if (api.params && api.params.length) {
        url += '?' + api.params.join('&');
    }
    if (api.apiKey) {
        url += (url.includes('?') ? '&' : '?') + 'api_key=' + api.apiKey;
    }
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        const word = api.processResponse(data);
        
        // Ensure word is not longer than 5 words and only contains positive content
        if (word && word.split(' ').length <= 5) {
            // Final check for negativity
            const negativeTerms = ['disease', 'ill', 'sick', 'hiv', 'virus', 'cancer', 'pain', 'hurt', 'ache'];
            if (!negativeTerms.some(term => word.toLowerCase().includes(term))) {
                return word.toLowerCase(); // Convert to lowercase for consistency
            }
        }
        return null;
    } catch (error) {
        console.warn('Error fetching from external API:', error);
        return null;
    }
};

// Prefetch and cache words from external APIs
const prefetchWords = async (count = 5) => {
    for (let i = 0; i < count; i++) {
        try {
            const word = await fetchExternalWord();
            if (word) {
                dynamicWordsCache.push(word);
            }
        } catch (error) {
            console.warn('Error prefetching words:', error);
        }
    }
};

// Get a phrase (either from local list or external API)
const getPhrase = async () => {
    // Decide whether to use external API based on frequency setting
    if (useExternalApi && Math.random() < externalApiFrequency) {
        const externalWord = await fetchExternalWord();
        if (externalWord) {
            return externalWord;
        }
    }
    
    // Fallback to local phrases
    return getRandomUnused(phrases, usedPhrases);
};

// Update the display with new elements
const updateDisplay = async () => {
    // Only proceed if page is visible
    if (!pageIsVisible) return;
    
    const phrase = document.getElementById('phrase');
    const body = document.body;
    const phraseContainer = document.querySelector('.phrase-container');

    // Animate out - use CSS transitions for smoother fade
    phraseContainer.style.opacity = 0;
    
    // Wait for the fade out to complete
    setTimeout(async () => {
        // Get new content
        const newPhrase = await getPhrase();
        const newFont = getRandomUnused(fonts, usedFonts);
        const newColor = getRandomUnused(backgroundColors, usedColors);
        
        // Apply new font with variant
        loadAndApplyFont(newFont);
        
        // Apply new background color
        body.style.backgroundColor = newColor;
        
        // Calculate and apply contrasting text color
        const textColor = getContrastingTextColor(newColor);
        phrase.style.color = textColor;
        
        // Update text
        phrase.textContent = newPhrase;
        
        // Animate in - use CSS transitions for smoother fade
        setTimeout(() => {
            phraseContainer.style.opacity = 1;
        }, 100); // Reduced from 200ms for faster transitions
        
        // Prefetch more words for future use
        if (useExternalApi) {
            prefetchWords(2);
        }
        
        // Schedule next update if page is visible
        if (pageIsVisible) {
            clearTimeout(updateTimer);
            updateTimer = setTimeout(updateDisplay, 20000); // 20 seconds
        }
    }, 500); // Reduced from 1000ms for faster transitions
};

// Shuffle the phrases array initially
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Add this at the beginning of the file
let pageIsVisible = true;
let updateTimer = null;

// Add page visibility detection
document.addEventListener('visibilitychange', () => {
  pageIsVisible = document.visibilityState === 'visible';
  
  if (pageIsVisible) {
    // Resume updates when page becomes visible again
    updateDisplay();
  } else if (updateTimer) {
    // Clear any pending timer when page becomes hidden
    clearTimeout(updateTimer);
    updateTimer = null;
  }
});

// Initial setup
document.addEventListener('DOMContentLoaded', async () => {
    // Load phrases from the phrases-data.js file
    await loadPhrases();
    
    // Initialize the phrases array
    updatePhrasesArray();
    
    // Preload a few fonts
    fonts.slice(0, 5).forEach(font => {
        const link = document.createElement('link');
        const formattedName = font.replace(/ /g, '+');
        link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@300;400;500;600&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    });
    
    // Immediately pick a background color to avoid starting with white
    const initialColor = getRandomUnused(backgroundColors, usedColors);
    document.body.style.backgroundColor = initialColor;
    
    // Set initial word randomly
    const initialPhrase = getRandomUnused(phrases, usedPhrases);
    const phraseElement = document.getElementById('phrase');
    phraseElement.textContent = initialPhrase;
    
    // Set initial text color based on background
    const textColor = getContrastingTextColor(initialColor);
    phraseElement.style.color = textColor;
    
    // Set initial font
    const initialFont = getRandomUnused(fonts, usedFonts);
    const initialVariant = getRandomUnused(fontVariants, usedFontVariants);
    phraseElement.style.fontFamily = `'${initialFont}', serif`;
    phraseElement.style.fontWeight = initialVariant.weight;
    phraseElement.style.fontStyle = initialVariant.style;
    
    // Prefetch words if using external API
    if (useExternalApi) {
        await prefetchWords(5);
    }
    
    // Schedule first update after 20 seconds
    updateTimer = setTimeout(updateDisplay, 20000);
}); 