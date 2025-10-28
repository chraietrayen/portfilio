import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

const SocialQRCode = () => {
  const [showQR, setShowQR] = useState(false);
  const [selectedView, setSelectedView] = useState('all'); // 'all' or 'vcard'

  // Vos informations de réseaux sociaux - À PERSONNALISER
  const socialLinks = {
    facebook: 'https://www.facebook.com/rayen.chraiet.9/',
    instagram: 'https://www.instagram.com/rayenchraiet/',
    linkedin: 'https://www.linkedin.com/in/rayen-chraiet-16b671337/',
    github: 'https://github.com/chraietrayen',
    twitter: 'https://x.com/home',
    email: 'rayenchraiet2000@gmail.com',
    phone: '+21694599198'
  };

  // Page HTML avec tous les liens sociaux
  const socialLinksHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rayen Chraiet - Social Links</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      max-width: 500px;
      width: 100%;
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .profile {
      text-align: center;
      margin-bottom: 30px;
    }
    .profile img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #667eea;
      margin-bottom: 15px;
    }
    h1 {
      margin: 0;
      color: #333;
      font-size: 24px;
    }
    p {
      color: #666;
      margin: 5px 0;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .link {
      display: flex;
      align-items: center;
      padding: 15px 20px;
      background: #f5f5f5;
      border-radius: 12px;
      text-decoration: none;
      color: #333;
      transition: all 0.3s;
      border: 2px solid transparent;
    }
    .link:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
    .link-icon {
      font-size: 24px;
      margin-right: 15px;
      width: 30px;
      text-align: center;
    }
    .link-text {
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="profile">
      <h1>🚀 Rayen Chraiet</h1>
      <p>Full Stack Developer</p>
    </div>
    <div class="links">
      <a href="${socialLinks.facebook}" class="link" target="_blank">
        <span class="link-icon">📘</span>
        <span class="link-text">Facebook</span>
      </a>
      <a href="${socialLinks.instagram}" class="link" target="_blank">
        <span class="link-icon">📸</span>
        <span class="link-text">Instagram</span>
      </a>
      <a href="${socialLinks.snapchat}" class="link" target="_blank">
        <span class="link-icon">👻</span>
        <span class="link-text">Snapchat</span>
      </a>
      <a href="${socialLinks.telegram}" class="link" target="_blank">
        <span class="link-icon">✈️</span>
        <span class="link-text">Telegram</span>
      </a>
      <a href="${socialLinks.linkedin}" class="link" target="_blank">
        <span class="link-icon">💼</span>
        <span class="link-text">LinkedIn</span>
      </a>
      <a href="${socialLinks.github}" class="link" target="_blank">
        <span class="link-icon">💻</span>
        <span class="link-text">GitHub</span>
      </a>
      <a href="${socialLinks.twitter}" class="link" target="_blank">
        <span class="link-icon">🐦</span>
        <span class="link-text">Twitter</span>
      </a>
      <a href="mailto:${socialLinks.email}" class="link">
        <span class="link-icon">📧</span>
        <span class="link-text">Email</span>
      </a>
      <a href="tel:${socialLinks.phone}" class="link">
        <span class="link-icon">📱</span>
        <span class="link-text">Phone</span>
      </a>
    </div>
  </div>
</body>
</html>`;

  // Créer un data URI pour le QR code
  // Option 1: Lien vers votre page hébergée (recommandé après déploiement)
  const hostedLinksURL = window.location.origin + '/social-links.html';
  
  // Option 2: Data URI pour HTML embarqué (fallback)
  // eslint-disable-next-line no-unused-vars
  const socialLinksDataURI = `data:text/html;charset=utf-8,${encodeURIComponent(socialLinksHTML)}`;

  // vCard format pour contact direct
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Rayen Chraiet
TEL:${socialLinks.phone}
EMAIL:${socialLinks.email}
URL:${socialLinks.linkedin}
URL:${socialLinks.github}
NOTE:Facebook: ${socialLinks.facebook}\\nInstagram: ${socialLinks.instagram}\\nSnapchat: ${socialLinks.snapchat}\\nTelegram: ${socialLinks.telegram}
END:VCARD`;

  const qrValue = selectedView === 'vcard' ? vCardData : hostedLinksURL;

  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-3xl">📱</span>
          <h3 className="text-xl font-code text-vscode-yellow">
            Scannez pour mes réseaux sociaux
          </h3>
        </div>

        <p className="text-vscode-comment mb-6">
          Scannez le QR code pour accéder à tous mes liens de réseaux sociaux
        </p>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedView('all')}
            className={`px-4 py-2 rounded-lg font-code text-sm transition-all ${
              selectedView === 'all'
                ? 'bg-vscode-blue text-white'
                : 'bg-vscode-bg border border-vscode-border text-vscode-text hover:border-vscode-blue'
            }`}
          >
            🔗 Tous les liens
          </button>
          <button
            onClick={() => setSelectedView('vcard')}
            className={`px-4 py-2 rounded-lg font-code text-sm transition-all ${
              selectedView === 'vcard'
                ? 'bg-vscode-green text-white'
                : 'bg-vscode-bg border border-vscode-border text-vscode-text hover:border-vscode-green'
            }`}
          >
            👤 Contact vCard
          </button>
        </div>

        {/* QR Code Display */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowQR(!showQR)}
          className="mx-auto mb-6 bg-vscode-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-code transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showQR ? '🙈' : '👁️'}</span>
          {showQR ? 'Masquer le QR Code' : 'Afficher le QR Code'}
        </motion.button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-xl shadow-2xl border-4 border-vscode-blue">
                <QRCodeSVG
                  value={qrValue}
                  size={256}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: "/rvn.jpg",
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />
              </div>
              
              <div className="mt-6 text-left">
                <p className="text-vscode-comment text-sm mb-3">
                  {selectedView === 'all' 
                    ? '📱 Le QR code ouvre une page avec tous mes réseaux sociaux'
                    : '👤 Le QR code enregistre mes informations de contact'}
                </p>
                
                {/* Social Links Preview */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                  {Object.entries(socialLinks).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs bg-vscode-bg px-3 py-2 rounded-lg hover:bg-vscode-border transition-colors border border-vscode-border hover:border-vscode-blue"
                    >
                      <span>
                        {platform === 'facebook' && '📘'}
                        {platform === 'instagram' && '📸'}
                        {platform === 'snapchat' && '👻'}
                        {platform === 'telegram' && '✈️'}
                        {platform === 'linkedin' && '💼'}
                        {platform === 'github' && '💻'}
                        {platform === 'twitter' && '🐦'}
                        {platform === 'email' && '📧'}
                        {platform === 'phone' && '📱'}
                      </span>
                      <span className="text-vscode-text capitalize truncate">
                        {platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download QR Code */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const svg = document.querySelector('#social-qr-code svg');
                  if (svg) {
                    const svgData = new XMLSerializer().serializeToString(svg);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    img.onload = () => {
                      canvas.width = img.width;
                      canvas.height = img.height;
                      ctx.fillStyle = 'white';
                      ctx.fillRect(0, 0, canvas.width, canvas.height);
                      ctx.drawImage(img, 0, 0);
                      const pngFile = canvas.toDataURL('image/png');
                      const downloadLink = document.createElement('a');
                      downloadLink.download = 'rayen-chraiet-social-qr.png';
                      downloadLink.href = pngFile;
                      downloadLink.click();
                    };
                    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
                  }
                }}
                className="mt-6 bg-vscode-green hover:bg-green-600 text-white px-4 py-2 rounded-lg font-code text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <span>⬇️</span>
                Télécharger le QR Code
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden div for QR download */}
        <div id="social-qr-code" style={{ position: 'absolute', left: '-9999px' }}>
          <QRCodeSVG
            value={qrValue}
            size={512}
            level="H"
            includeMargin={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SocialQRCode;
