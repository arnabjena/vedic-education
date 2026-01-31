/**
 * Voice Selector UI
 * Allows users to manually choose their preferred voice
 */

(function() {
  'use strict';

  const synth = window.speechSynthesis;
  let selectedVoiceURI = localStorage.getItem('preferred-voice');

  function createVoiceSelector() {
    // Only run on article pages
    if (!document.querySelector('.post-content')) {
      return;
    }

    // Wait for voices to load
    setTimeout(function() {
      const voices = synth.getVoices();
      if (voices.length === 0) {
        setTimeout(createVoiceSelector, 1000);
        return;
      }

      // Filter to only English voices
      const englishVoices = voices.filter(v => v.lang.startsWith('en-'));

      // Sort: Indian first, then Google, then others
      englishVoices.sort((a, b) => {
        if (a.lang === 'en-IN' && b.lang !== 'en-IN') return -1;
        if (a.lang !== 'en-IN' && b.lang === 'en-IN') return 1;
        if (a.name.includes('Google') && !b.name.includes('Google')) return -1;
        if (!a.name.includes('Google') && b.name.includes('Google')) return 1;
        return a.name.localeCompare(b.name);
      });

      // Create selector container
      const container = document.createElement('div');
      container.className = 'voice-selector-container';
      container.style.cssText = 'background:#fff9f0;border:2px solid #FF9933;border-radius:12px;padding:15px 20px;margin:15px 0;display:flex;align-items:center;gap:15px;flex-wrap:wrap;';

      // Label
      const label = document.createElement('label');
      label.style.cssText = 'font-weight:600;color:#333;font-size:15px;';
      label.innerHTML = '🎙️ Voice:';

      // Dropdown
      const select = document.createElement('select');
      select.id = 'voice-selector';
      select.style.cssText = 'flex:1;min-width:250px;padding:10px;border:2px solid #FF9933;border-radius:8px;font-size:14px;background:white;cursor:pointer;';

      // Add options
      englishVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.voiceURI;

        let displayName = voice.name;

        // Add badges
        if (voice.lang === 'en-IN') {
          displayName = '🇮🇳 ' + displayName + ' (Indian)';
        } else if (voice.name.includes('Google')) {
          displayName = '⭐ ' + displayName;
        }

        // Show language
        displayName += ' - ' + voice.lang;

        option.textContent = displayName;

        // Mark as selected if previously chosen
        if (voice.voiceURI === selectedVoiceURI) {
          option.selected = true;
        }

        select.appendChild(option);
      });

      // Test button
      const testBtn = document.createElement('button');
      testBtn.textContent = '🔊 Test';
      testBtn.style.cssText = 'padding:10px 20px;background:#FF9933;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;font-size:14px;';
      testBtn.title = 'Test selected voice';

      // Info text
      const info = document.createElement('div');
      info.style.cssText = 'font-size:13px;color:#666;width:100%;margin-top:5px;';
      info.innerHTML = '💡 <strong>Tip:</strong> Look for voices marked 🇮🇳 <strong>(Indian)</strong> for authentic pronunciation. If none available, <a href="#install-voices" style="color:#FF9933;font-weight:600;">install Indian voice</a>.';

      // Event handlers
      select.addEventListener('change', function() {
        selectedVoiceURI = select.value;
        localStorage.setItem('preferred-voice', selectedVoiceURI);

        // Update the section-audio.js to use this voice
        window.preferredVoiceURI = selectedVoiceURI;

        // Show confirmation
        showNotification('Voice saved! Click ▶️ on any section to hear it.');
      });

      testBtn.addEventListener('click', function() {
        const voice = voices.find(v => v.voiceURI === select.value);
        if (voice) {
          testVoice(voice);
        }
      });

      // Add install instructions link handler
      info.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          e.preventDefault();
          showInstallInstructions();
        }
      });

      // Assemble
      container.appendChild(label);
      container.appendChild(select);
      container.appendChild(testBtn);
      container.appendChild(info);

      // Insert after the audio info note
      const audioNote = document.querySelector('.audio-info-note');
      if (audioNote) {
        audioNote.after(container);
      } else {
        // Insert at top of post content
        const postContent = document.querySelector('.post-content');
        if (postContent) {
          postContent.insertBefore(container, postContent.firstChild);
        }
      }

      // Store globally so section-audio.js can access it
      window.preferredVoiceURI = selectedVoiceURI;

    }, 500);
  }

  function testVoice(voice) {
    const testText = "Namaste! This is how the Bhagavad Gita, Krishna, Kurukshetra, and Dharma sound in this voice.";
    const utterance = new SpeechSynthesisUtterance(testText);
    utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    synth.cancel(); // Stop any current speech
    synth.speak(utterance);
  }

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:15px 25px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:10000;animation:slideIn 0.3s ease;';
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = '@keyframes slideIn { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }';
    document.head.appendChild(style);

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      style.textContent += '@keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(400px); opacity: 0; } }';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  function showInstallInstructions() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';

    const content = document.createElement('div');
    content.style.cssText = 'background:white;border-radius:16px;padding:30px;max-width:600px;max-height:80vh;overflow-y:auto;';

    content.innerHTML = `
      <h2 style="color:#FF9933;margin-top:0;">🇮🇳 Install Indian English Voice</h2>

      <h3>On Mac (Recommended - Best Quality!):</h3>
      <ol style="line-height:1.8;">
        <li>Open <strong>System Preferences</strong></li>
        <li>Go to <strong>Accessibility → Spoken Content</strong></li>
        <li>Click <strong>"System Voice"</strong> → <strong>"Customize..."</strong></li>
        <li>Find <strong>"Veena"</strong> or <strong>"Rishi"</strong> (Indian English)</li>
        <li>Click <strong>Download</strong></li>
        <li>Refresh this page and select the voice</li>
      </ol>

      <h3>On Chrome (Any OS):</h3>
      <ol style="line-height:1.8;">
        <li>Chrome has <strong>Google voices built-in</strong></li>
        <li>If not showing, update Chrome to latest version</li>
        <li>Look for "Google हिन्दी (en-IN)" in the dropdown</li>
      </ol>

      <h3>On Android:</h3>
      <ol style="line-height:1.8;">
        <li>Settings → <strong>Language & Input</strong></li>
        <li><strong>Text-to-Speech Output</strong> → Google TTS</li>
        <li>Settings → <strong>Install voice data</strong></li>
        <li>Download <strong>"English (India)"</strong></li>
      </ol>

      <h3>On Windows:</h3>
      <ol style="line-height:1.8;">
        <li>Use <strong>Chrome browser</strong> (has Google voices)</li>
        <li>Or: Settings → Time & Language → <strong>Speech</strong></li>
        <li>Add <strong>"English (India)"</strong> voice</li>
      </ol>

      <div style="margin-top:20px;text-align:center;">
        <button onclick="this.closest('div[style*=fixed]').remove()" style="background:#FF9933;color:white;border:none;padding:12px 30px;border-radius:8px;cursor:pointer;font-size:16px;font-weight:600;">Got It!</button>
      </div>
    `;

    modal.appendChild(content);
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    });

    document.body.appendChild(modal);
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createVoiceSelector);
  } else {
    createVoiceSelector();
  }

  // Reload on voices change
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = createVoiceSelector;
  }

})();
