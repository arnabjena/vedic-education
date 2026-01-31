/**
 * Section-Specific Audio Player
 * Adds play button next to each section heading
 * Reads only that specific section
 */

(function() {
  'use strict';

  let currentUtterance = null;
  let currentButton = null;
  const synth = window.speechSynthesis;

  // Check if speech synthesis is supported
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-Speech not supported');
    return;
  }

  function extractSectionContent(heading) {
    const content = [];
    let currentElement = heading.nextElementSibling;

    // Collect all elements until the next heading of same or higher level
    while (currentElement) {
      const tagName = currentElement.tagName;

      // Stop at next h2 or h1
      if (tagName === 'H1' || tagName === 'H2') {
        break;
      }

      // Get text from this element
      const text = currentElement.textContent || currentElement.innerText;
      if (text && text.trim()) {
        content.push(text.trim());
      }

      currentElement = currentElement.nextElementSibling;
    }

    return content.join(' ').replace(/\s+/g, ' ').trim();
  }

  function stopCurrentAudio() {
    if (synth.speaking) {
      synth.cancel();
    }

    if (currentButton) {
      currentButton.textContent = '▶️';
      currentButton.title = 'Play this section';
      currentButton.classList.remove('playing');
    }

    currentUtterance = null;
    currentButton = null;
  }

  function selectBestVoice() {
    const voices = synth.getVoices();

    // Check if user manually selected a voice
    if (window.preferredVoiceURI) {
      const userVoice = voices.find(v => v.voiceURI === window.preferredVoiceURI);
      if (userVoice) {
        console.log('Using user-selected voice:', userVoice.name, userVoice.lang);
        return userVoice;
      }
    }

    // Voice preference order (best to acceptable)
    const preferences = [
      // 1. Indian English voices (most natural for Indian content)
      v => v.lang === 'en-IN' && v.name.includes('Google'),
      v => v.lang === 'en-IN',

      // 2. High-quality Google voices
      v => v.name.includes('Google') && v.name.includes('UK'),
      v => v.name.includes('Google') && v.name.includes('US'),

      // 3. Natural-sounding voices (female voices often sound warmer)
      v => v.name.toLowerCase().includes('female'),
      v => v.name.toLowerCase().includes('samantha'),
      v => v.name.toLowerCase().includes('karen'),
      v => v.name.toLowerCase().includes('veena'),
      v => v.name.toLowerCase().includes('rishi'),

      // 4. Any UK/Australian English (closer to Indian accent)
      v => v.lang === 'en-GB',
      v => v.lang === 'en-AU',

      // 5. Any Google voice
      v => v.name.includes('Google'),

      // 6. Any English voice
      v => v.lang.startsWith('en-')
    ];

    // Try each preference in order
    for (const preference of preferences) {
      const voice = voices.find(preference);
      if (voice) {
        console.log('Auto-selected voice:', voice.name, voice.lang);
        return voice;
      }
    }

    // Fallback to first available voice
    console.log('Using default voice:', voices[0]?.name);
    return voices[0];
  }

  function fixPronunciation(text) {
    // Pronunciation corrections for common Sanskrit/Hindi words
    // Format: Incorrect → Phonetic spelling
    const corrections = {
      // Names
      'Krishna': 'Krish-nuh',
      'Rama': 'Raa-muh',
      'Arjuna': 'Ar-joo-nuh',
      'Vishnu': 'Vish-noo',
      'Shiva': 'Shiv-uh',
      'Hanuman': 'Hun-oo-maan',
      'Ganesha': 'Gun-ay-shuh',

      // Places
      'Kurukshetra': 'Koo-rook-shay-truh',
      'Ayodhya': 'Uh-yod-yuh',
      'Vrindavan': 'Vrin-daa-vun',
      'Dwarka': 'Dwaar-kuh',

      // Concepts
      'Dharma': 'Dhar-muh',
      'Karma': 'Kar-muh',
      'Moksha': 'Moke-shuh',
      'Bhakti': 'Buck-tee',
      'Yoga': 'Yo-guh',
      'Veda': 'Vay-duh',
      'Vedic': 'Vay-dick',

      // Texts
      'Bhagavad Gita': 'Bhug-uh-vud Gee-taa',
      'Gita': 'Gee-taa',
      'Ramayana': 'Raa-maa-yuh-nuh',
      'Mahabharata': 'Muh-haa-baa-rut-uh',
      'Upanishad': 'Oo-pun-ish-ud',
      'Purana': 'Poo-raa-nuh',

      // Greetings
      'Namaste': 'Num-us-tay',
      'Om': 'Ohm',
      'ॐ': 'Ohm',

      // Titles
      'Swami': 'Swaa-mee',
      'Guru': 'Goo-roo',
      'Rishi': 'Rish-ee',
      'Deva': 'Day-vuh',
      'Devi': 'Day-vee'
    };

    // Only apply corrections if NOT using Indian voice
    const currentVoice = selectBestVoice();
    if (currentVoice && currentVoice.lang === 'en-IN') {
      // Indian voices pronounce correctly, don't change
      return text;
    }

    // Apply corrections for non-Indian voices
    let correctedText = text;
    for (const [original, phonetic] of Object.entries(corrections)) {
      // Case-insensitive replacement
      const regex = new RegExp('\\b' + original + '\\b', 'gi');
      correctedText = correctedText.replace(regex, phonetic);
    }

    return correctedText;
  }

  function playSection(heading, button) {
    // Stop any currently playing audio
    stopCurrentAudio();

    // Extract section content
    let text = extractSectionContent(heading);

    if (!text || text.length < 10) {
      alert('This section is too short to read.');
      return;
    }

    // Fix pronunciation for non-Indian voices
    text = fixPronunciation(text);

    // Create utterance
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentButton = button;

    // Configure voice (select best Indian/natural voice)
    const bestVoice = selectBestVoice();
    if (bestVoice) {
      currentUtterance.voice = bestVoice;
    }

    // Slightly slower rate sounds more natural
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1.0;

    // Update button when finished
    currentUtterance.onend = function() {
      if (currentButton) {
        currentButton.textContent = '▶️';
        currentButton.title = 'Play this section';
        currentButton.classList.remove('playing');
      }
      currentUtterance = null;
      currentButton = null;
    };

    // Start speaking
    synth.speak(currentUtterance);

    // Update button
    button.textContent = '⏸️';
    button.title = 'Stop';
    button.classList.add('playing');
  }

  function addAudioButtons() {
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2');

    headings.forEach(function(heading) {
      // Create audio button
      const button = document.createElement('button');
      button.className = 'section-audio-btn';
      button.textContent = '▶️';
      button.title = 'Play this section';
      button.setAttribute('aria-label', 'Play section audio');

      // Add click handler
      button.addEventListener('click', function(e) {
        e.preventDefault();

        if (currentButton === button && synth.speaking) {
          // Stop if clicking the same button
          stopCurrentAudio();
        } else {
          // Play this section
          playSection(heading, button);
        }
      });

      // Create wrapper
      const wrapper = document.createElement('span');
      wrapper.className = 'section-audio-wrapper';
      wrapper.appendChild(button);

      // Insert button after heading text
      heading.appendChild(document.createTextNode(' '));
      heading.appendChild(wrapper);
    });

    // Add global stop button in case user wants to stop from anywhere
    addGlobalStopButton();
  }

  function addGlobalStopButton() {
    // Only add if there are sections with audio
    if (document.querySelectorAll('.section-audio-btn').length === 0) {
      return;
    }

    const stopBtn = document.createElement('button');
    stopBtn.id = 'global-audio-stop';
    stopBtn.className = 'global-audio-stop-btn';
    stopBtn.textContent = '⏹️ Stop Audio';
    stopBtn.title = 'Stop all audio';
    stopBtn.style.cssText = 'position:fixed;bottom:80px;right:20px;background:#dc3545;color:white;border:none;padding:12px 20px;border-radius:50px;font-size:14px;font-weight:700;z-index:998;box-shadow:0 5px 15px rgba(0,0,0,0.3);cursor:pointer;display:none;';

    stopBtn.addEventListener('click', function() {
      stopCurrentAudio();
      stopBtn.style.display = 'none';
    });

    document.body.appendChild(stopBtn);

    // Show/hide stop button based on audio state
    setInterval(function() {
      if (synth.speaking) {
        stopBtn.style.display = 'block';
      } else {
        stopBtn.style.display = 'none';
      }
    }, 100);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(addAudioButtons, 200);
    });
  } else {
    setTimeout(addAudioButtons, 200);
  }

})();
