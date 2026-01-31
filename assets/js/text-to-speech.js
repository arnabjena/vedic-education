/**
 * Vedic Education Website - Text-to-Speech Functionality
 * Uses Web Speech API for browser-native audio read-aloud
 * Works on all modern browsers, no external dependencies
 */

class TextToSpeech {
  constructor() {
    this.synth = window.speechSynthesis;
    this.utterance = null;
    this.isPaused = false;
    this.isPlaying = false;
    this.currentPosition = 0;
    this.textContent = '';
    this.voices = [];

    // Initialize when voices are loaded
    this.loadVoices();

    // Some browsers load voices asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices() {
    this.voices = this.synth.getVoices();

    // Prefer English voices
    const englishVoice = this.voices.find(voice =>
      voice.lang.startsWith('en-') && voice.name.includes('Google')
    ) || this.voices.find(voice =>
      voice.lang.startsWith('en-')
    );

    if (englishVoice) {
      this.selectedVoice = englishVoice;
    }
  }

  extractArticleContent() {
    // Get the main article content, excluding navigation and footer
    const article = document.querySelector('.post-content') ||
                   document.querySelector('.page-content article') ||
                   document.querySelector('article');

    if (!article) {
      console.error('Could not find article content');
      return '';
    }

    // Clone the article to manipulate it
    const clone = article.cloneNode(true);

    // Remove elements we don't want to read
    const elementsToRemove = clone.querySelectorAll(
      'script, style, nav, .site-nav, .listen-controls, .audio-player-container'
    );
    elementsToRemove.forEach(el => el.remove());

    // Get text content
    let text = clone.textContent || clone.innerText;

    // Clean up text
    text = text.replace(/\s+/g, ' ').trim();

    return text;
  }

  play() {
    if (!this.textContent) {
      this.textContent = this.extractArticleContent();
    }

    if (!this.textContent) {
      alert('No content found to read.');
      return;
    }

    // If already playing and paused, just resume
    if (this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.updateControls();
      return;
    }

    // Cancel any existing speech
    this.synth.cancel();

    // Create new utterance
    this.utterance = new SpeechSynthesisUtterance(this.textContent);

    // Configure utterance
    if (this.selectedVoice) {
      this.utterance.voice = this.selectedVoice;
    }
    this.utterance.rate = 1.0;  // Normal speed
    this.utterance.pitch = 1.0; // Normal pitch
    this.utterance.volume = 1.0; // Full volume

    // Event handlers
    this.utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.updateControls();
    };

    this.utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.updateControls();
    };

    this.utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      this.isPlaying = false;
      this.isPaused = false;
      this.updateControls();
    };

    // Start speaking
    this.synth.speak(this.utterance);
  }

  pause() {
    if (this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.isPlaying = false;
      this.updateControls();
    }
  }

  stop() {
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.textContent = ''; // Clear cached content
    this.updateControls();
  }

  changeSpeed(speed) {
    if (this.utterance) {
      // Stop current speech
      const wasPlaying = this.isPlaying || this.isPaused;
      this.synth.cancel();

      // Create new utterance with new speed
      this.utterance.rate = speed;

      // Resume if it was playing
      if (wasPlaying) {
        this.synth.speak(this.utterance);
      }
    }
  }

  updateControls() {
    const playBtn = document.getElementById('tts-play');
    const pauseBtn = document.getElementById('tts-pause');
    const stopBtn = document.getElementById('tts-stop');

    if (!playBtn || !pauseBtn || !stopBtn) return;

    if (this.isPlaying) {
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
      stopBtn.disabled = false;
    } else if (this.isPaused) {
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
      stopBtn.disabled = false;
    } else {
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
      stopBtn.disabled = true;
    }
  }
}

// Initialize TTS when DOM is ready
let ttsInstance = null;

function initializeTTS() {
  // Check if browser supports Speech Synthesis
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-Speech not supported in this browser');
    const listenSection = document.querySelector('.listen-controls');
    if (listenSection) {
      listenSection.innerHTML = '<p style="color: #dc3545; padding: 15px;"><em>Text-to-Speech is not supported in your browser. Please try Chrome, Safari, Edge, or Firefox.</em></p>';
    }
    return;
  }

  // Initialize TTS instance
  ttsInstance = new TextToSpeech();

  // Set up control buttons
  const playBtn = document.getElementById('tts-play');
  const pauseBtn = document.getElementById('tts-pause');
  const stopBtn = document.getElementById('tts-stop');
  const speedSelect = document.getElementById('tts-speed');

  if (playBtn) {
    playBtn.addEventListener('click', () => ttsInstance.play());
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => ttsInstance.pause());
  }

  if (stopBtn) {
    stopBtn.addEventListener('click', () => ttsInstance.stop());
  }

  if (speedSelect) {
    speedSelect.addEventListener('change', (e) => {
      ttsInstance.changeSpeed(parseFloat(e.target.value));
    });
  }

  // Clean up when page is being unloaded
  window.addEventListener('beforeunload', () => {
    if (ttsInstance) {
      ttsInstance.stop();
    }
  });
}

// Try multiple initialization methods for better compatibility
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTTS);
} else {
  // DOM already loaded
  initializeTTS();
}
