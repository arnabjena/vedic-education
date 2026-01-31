// Auto Install Prompt - Works on ALL browsers including Brave
let deferredPrompt;
let installPromptShown = false;

// Detect browser
function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.indexOf('Brave') > -1 || navigator.brave) return 'Brave';
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) return 'Safari';
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('Edge') > -1) return 'Edge';
  return 'Other';
}

function getDevice() {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return 'iOS';
  if (/Android/.test(ua)) return 'Android';
  return 'Desktop';
}

// Listen for the automatic prompt (Chrome, Edge - not Brave)
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;

  if (localStorage.getItem('pwa-dismissed') === 'true') {
    return;
  }

  showInstallPromotion(true); // true = has automatic prompt
});

// For browsers that don't support automatic prompt (Brave, Safari, Firefox)
// Show manual instructions after a short delay
setTimeout(function() {
  if (!installPromptShown &&
      !localStorage.getItem('pwa-dismissed') &&
      !localStorage.getItem('pwa-installed') &&
      !window.matchMedia('(display-mode: standalone)').matches) {

    const browser = getBrowser();
    // Show manual instructions for Brave, Safari, Firefox
    if (browser === 'Brave' || browser === 'Safari' || browser === 'Firefox') {
      showInstallPromotion(false); // false = manual instructions
    }
  }
}, 3000); // Wait 3 seconds before showing

function showInstallPromotion(hasAutomaticPrompt) {
  if (installPromptShown) return;
  installPromptShown = true;

  const browser = getBrowser();
  const device = getDevice();

  const overlay = document.createElement('div');
  overlay.id = 'install-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px);';

  const installBox = document.createElement('div');
  installBox.style.cssText = 'background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:24px;padding:40px 30px;max-width:550px;width:100%;text-align:center;color:white;max-height:90vh;overflow-y:auto;';

  let content = '<div style="font-size:80px;margin-bottom:20px;color:#FF6600;">ॐ</div>' +
    '<h2 style="font-size:28px;margin-bottom:15px;font-weight:800;color:white;">Add to Home Screen</h2>';

  if (hasAutomaticPrompt) {
    // Chrome, Edge with automatic prompt
    content += '<p style="font-size:18px;margin-bottom:30px;color:rgba(255,255,255,0.95);">Click the button below to add this app to your home screen!</p>' +
      '<button id="install-button" style="background:white;color:#667eea;border:none;padding:18px 40px;font-size:20px;font-weight:800;border-radius:50px;cursor:pointer;width:100%;max-width:300px;margin-bottom:15px;">📱 Add to Home Screen</button><br>';
  } else {
    // Manual instructions for Brave, Safari, Firefox
    content += '<p style="font-size:16px;margin-bottom:20px;color:rgba(255,255,255,0.95);">Get easy access by adding this to your home screen!</p>';

    if (device === 'iOS') {
      content += '<div style="text-align:left;background:rgba(255,255,255,0.1);padding:20px;border-radius:12px;margin-bottom:20px;">' +
        '<h3 style="color:white;margin-top:0;font-size:18px;">📱 On iPhone/iPad:</h3>' +
        '<ol style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;padding-left:20px;">' +
        '<li>Tap the <strong>Share button</strong> <span style="font-size:24px;">⎋</span> at the bottom</li>' +
        '<li>Scroll and tap <strong>"Add to Home Screen"</strong></li>' +
        '<li>Tap <strong>"Add"</strong> in the top right</li>' +
        '</ol></div>';
    } else if (device === 'Android') {
      if (browser === 'Brave') {
        content += '<div style="text-align:left;background:rgba(255,255,255,0.1);padding:20px;border-radius:12px;margin-bottom:20px;">' +
          '<h3 style="color:white;margin-top:0;font-size:18px;">🦁 On Brave Browser:</h3>' +
          '<ol style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;padding-left:20px;">' +
          '<li>Tap the <strong>menu</strong> (three dots ⋮) at the top</li>' +
          '<li>Tap <strong>"Add to Home screen"</strong></li>' +
          '<li>Tap <strong>"Add"</strong> to confirm</li>' +
          '</ol></div>';
      } else {
        content += '<div style="text-align:left;background:rgba(255,255,255,0.1);padding:20px;border-radius:12px;margin-bottom:20px;">' +
          '<h3 style="color:white;margin-top:0;font-size:18px;">📱 On Android:</h3>' +
          '<ol style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;padding-left:20px;">' +
          '<li>Tap the <strong>menu</strong> (three dots ⋮) at the top</li>' +
          '<li>Tap <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong></li>' +
          '<li>Tap <strong>"Add"</strong> or <strong>"Install"</strong></li>' +
          '</ol></div>';
      }
    } else {
      // Desktop
      if (browser === 'Brave') {
        content += '<div style="text-align:left;background:rgba(255,255,255,0.1);padding:20px;border-radius:12px;margin-bottom:20px;">' +
          '<h3 style="color:white;margin-top:0;font-size:18px;">🦁 On Brave Desktop:</h3>' +
          '<ol style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;padding-left:20px;">' +
          '<li>Look for the <strong>install icon</strong> (⊕) in the address bar</li>' +
          '<li>Click it and select <strong>"Install"</strong></li>' +
          '<li>Or: Menu → <strong>"Install Vedic Wisdom..."</strong></li>' +
          '</ol></div>';
      } else {
        content += '<div style="text-align:left;background:rgba(255,255,255,0.1);padding:20px;border-radius:12px;margin-bottom:20px;">' +
          '<h3 style="color:white;margin-top:0;font-size:18px;">💻 On Desktop:</h3>' +
          '<ol style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;padding-left:20px;">' +
          '<li>Look for the <strong>install icon</strong> (⊕ or 💻) in the address bar</li>' +
          '<li>Click it and select <strong>"Install"</strong></li>' +
          '</ol></div>';
      }
    }
  }

  content += '<button id="maybe-later" style="background:rgba(255,255,255,0.2);color:white;border:none;padding:12px 30px;font-size:16px;font-weight:600;border-radius:50px;cursor:pointer;margin-top:10px;">Got It!</button>';

  installBox.innerHTML = content;
  overlay.appendChild(installBox);
  document.body.appendChild(overlay);

  // Handle install button (for automatic prompt)
  const installBtn = document.getElementById('install-button');
  if (installBtn) {
    installBtn.addEventListener('click', async function() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
      overlay.remove();
    });
  }

  // Handle dismiss button
  document.getElementById('maybe-later').addEventListener('click', function() {
    localStorage.setItem('pwa-dismissed', 'true');
    overlay.remove();
  });
}

// Add a persistent install button in the corner for all browsers
window.addEventListener('load', function() {
  // Don't show if already installed or dismissed
  if (window.matchMedia('(display-mode: standalone)').matches ||
      localStorage.getItem('pwa-installed') === 'true') {
    return;
  }

  // Create persistent install button
  const installBtn = document.createElement('div');
  installBtn.id = 'persistent-install-btn';
  installBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:12px 20px;border-radius:50px;font-size:14px;font-weight:700;z-index:999;box-shadow:0 5px 15px rgba(0,0,0,0.3);cursor:pointer;display:flex;align-items:center;gap:8px;transition:all 0.3s ease;';
  installBtn.innerHTML = '<span style="font-size:20px;color:#FF6600;">ॐ</span><span>Install App</span>';

  installBtn.addEventListener('click', function() {
    localStorage.removeItem('pwa-dismissed');
    installPromptShown = false;
    showInstallPromotion(!!deferredPrompt);
  });

  installBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
  });

  installBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });

  document.body.appendChild(installBtn);
});

// Track successful installation
window.addEventListener('appinstalled', function() {
  localStorage.setItem('pwa-installed', 'true');
  const btn = document.getElementById('persistent-install-btn');
  if (btn) btn.remove();
});
