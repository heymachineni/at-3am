// Text Scramble Effect
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = 'abcdefghijklmnopqrstuvwxyz';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 10) + 5;
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.5) {
          // Only scramble letters and preserve spaces
          if (to === ' ') {
            char = ' ';
          } else {
            char = this.getRandomCharSameCase(to);
          }
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  getRandomCharSameCase(target) {
    if (!target || !isNaN(target) || target === ' ') return target;
    
    // Determine if the target is uppercase or lowercase
    const isUpperCase = target === target.toUpperCase();
    
    // Get a random letter from our chars array
    const randomChar = this.chars[Math.floor(Math.random() * this.chars.length)];
    
    // Return in the same case as the target
    return isUpperCase ? randomChar.toUpperCase() : randomChar;
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const navLink = document.querySelector('.scramble-text');
  if (navLink) {
    const originalText = navLink.textContent;
    const textScramble = new TextScramble(navLink);
    
    navLink.addEventListener('mouseenter', () => {
      textScramble.setText(originalText);
    });
  }
}); 