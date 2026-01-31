// Auto Install Prompt for Easy Home Screen Installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;

  // Don't show if already dismissed
  if (localStorage.getItem('pwa-dismissed') === 'true') {
    return;
  }

  showInstallPromotion();
});

function showInstallPromotion() {
  const overlay = document.createElement('div');
  overlay.id = 'install-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';

  const installBox = document.createElement('div');
  installBox.style.cssText = 'background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:24px;padding:40px 30px;max-width:500px;width:100%;text-align:center;color:white;';

  installBox.innerHTML = '<div style="font-size:80px;margin-bottom:20px;color:#FF6600;">ॐ</div>' +
    '<h2 style="font-size:28px;margin-bottom:15px;font-weight:800;color:white;">Save to Home Screen</h2>' +
    '<p style="font-size:18px;margin-bottom:30px;color:rgba(255,255,255,0.95);">Click the button below to add this app to your home screen!</p>' +
    '<button id="install-button" style="background:white;color:#667eea;border:none;padding:18px 40px;font-size:20px;font-weight:800;border-radius:50px;cursor:pointer;width:100%;max-width:300px;margin-bottom:15px;">📱 Add to Home Screen</button><br>' +
    '<button id="maybe-later" style="background:rgba(255,255,255,0.2);color:white;border:none;padding:12px 30px;font-size:16px;font-weight:600;border-radius:50px;cursor:pointer;margin-top:10px;">Maybe Later</button>';

  overlay.appendChild(installBox);
  document.body.appendChild(overlay);

  document.getElementById('install-button').addEventListener('click', async function() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
    overlay.remove();
  });

  document.getElementById('maybe-later').addEventListener('click', function() {
    localStorage.setItem('pwa-dismissed', 'true');
    overlay.remove();
  });
}

window.addEventListener('appinstalled', function() {
  localStorage.setItem('pwa-installed', 'true');
});
