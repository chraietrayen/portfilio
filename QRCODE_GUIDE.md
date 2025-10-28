# 📱 Guide QR Code Social Media

## 🎯 Fonctionnalités

Votre page Contact contient maintenant un **QR Code interactif** qui permet aux visiteurs de scanner et accéder à tous vos réseaux sociaux!

### Deux modes disponibles:

1. **🔗 Tous les liens** - Ouvre une page web magnifique avec tous vos réseaux sociaux
2. **👤 Contact vCard** - Enregistre vos informations de contact directement dans le téléphone

## ⚙️ Personnalisation de vos liens

### 1. Modifier les liens dans le composant React

**Fichier:** `client/src/components/SocialQRCode.js`

Ligne 9-19, modifiez l'objet `socialLinks`:

```javascript
const socialLinks = {
  facebook: 'https://facebook.com/VOTRE_USERNAME',
  instagram: 'https://instagram.com/VOTRE_USERNAME',
  snapchat: 'https://snapchat.com/add/VOTRE_USERNAME',
  telegram: 'https://t.me/VOTRE_USERNAME',
  linkedin: 'https://linkedin.com/in/VOTRE_USERNAME',
  github: 'https://github.com/VOTRE_USERNAME',
  twitter: 'https://twitter.com/VOTRE_USERNAME',
  email: 'votre.email@exemple.com',
  phone: '+216XXXXXXXX'
};
```

### 2. Modifier la page HTML des liens sociaux

**Fichier:** `client/public/social-links.html`

Modifiez les liens dans les balises `<a>` (lignes 165-250):

```html
<a href="https://facebook.com/VOTRE_USERNAME" class="link">
  <span class="link-icon">📘</span>
  <div class="link-content">
    <span class="link-text">Facebook</span>
    <span class="link-subtitle">Suivez-moi sur Facebook</span>
  </div>
</a>
```

## 🎨 Personnalisation du design

### Changer les couleurs du QR Code

Dans `SocialQRCode.js`, ligne 200+:

```javascript
<QRCodeSVG
  value={qrValue}
  size={256}
  level="H"
  fgColor="#000000"  // Couleur du QR code
  bgColor="#FFFFFF"  // Couleur de fond
  includeMargin={true}
/>
```

### Ajouter votre photo dans le QR Code

Le QR code utilise déjà `/rvn.jpg` comme logo central. Pour le changer:

```javascript
imageSettings={{
  src: "/votre-photo.jpg",  // Chemin vers votre photo
  height: 40,
  width: 40,
  excavate: true,  // Creuse l'espace pour l'image
}}
```

## 📱 Comment ça marche

### Après déploiement:

1. Le QR code pointe vers: `https://votre-domaine.com/social-links.html`
2. Les utilisateurs scannent le QR code avec leur téléphone
3. Ils arrivent sur une page magnifique avec tous vos liens
4. Ils peuvent cliquer sur n'importe quel réseau social

### Mode vCard:

1. Sélectionnez "Contact vCard"
2. Scannez le QR code
3. Le téléphone propose d'enregistrer votre contact
4. Toutes vos informations sont ajoutées automatiquement

## 🚀 Fonctionnalités incluses

- ✅ Affichage/masquage animé du QR code
- ✅ Deux modes: Liens web + vCard
- ✅ Téléchargement du QR code en PNG
- ✅ Aperçu de tous les réseaux sociaux
- ✅ Design responsive et animé
- ✅ Page HTML autonome avec animations
- ✅ Thème VS Code cohérent

## 📝 Réseaux sociaux supportés

Par défaut, les réseaux suivants sont inclus:

- 📘 Facebook
- 📸 Instagram
- 👻 Snapchat
- ✈️ Telegram
- 💼 LinkedIn
- 💻 GitHub
- 🐦 Twitter
- 📧 Email
- 📱 Téléphone
- 🌐 Portfolio

## 🔧 Ajouter d'autres réseaux sociaux

### Dans SocialQRCode.js:

```javascript
const socialLinks = {
  // ... liens existants
  tiktok: 'https://tiktok.com/@VOTRE_USERNAME',
  youtube: 'https://youtube.com/@VOTRE_CHANNEL',
  discord: 'https://discord.gg/VOTRE_SERVER',
};
```

### Dans social-links.html:

```html
<a href="https://tiktok.com/@VOTRE_USERNAME" class="link">
  <span class="link-icon">🎵</span>
  <div class="link-content">
    <span class="link-text">TikTok</span>
    <span class="link-subtitle">Mes vidéos TikTok</span>
  </div>
  <span class="arrow">→</span>
</a>
```

## 🎯 Tester le QR Code

### En développement:
```bash
cd client
npm start
```

Visitez: `http://localhost:3000/contact`

### Après déploiement:

1. Ouvrez votre portfolio en production
2. Allez sur la page Contact
3. Cliquez sur "Afficher le QR Code"
4. Scannez avec votre téléphone
5. Vérifiez que tous les liens fonctionnent

## 💡 Conseils

1. **Vérifiez vos liens** - Testez chaque lien avant de déployer
2. **Photo optimisée** - Utilisez une photo carrée et petite (< 100KB)
3. **QR Code lisible** - Ne changez pas trop la taille, gardez au moins 200px
4. **Mode vCard** - Testez sur iOS et Android, le format peut varier
5. **Analytics** - Ajoutez des paramètres UTM pour tracker les scans:
   ```
   https://instagram.com/votre_username?utm_source=qr_code
   ```

## 🐛 Dépannage

### Le QR code ne s'affiche pas:
- Vérifiez que `qrcode.react` est installé
- Regardez la console pour les erreurs

### Les liens ne fonctionnent pas:
- Vérifiez que les URLs sont complètes (avec https://)
- Testez chaque lien manuellement

### La page social-links.html ne s'ouvre pas:
- Vérifiez que le fichier est dans `public/`
- Après build, il doit être copié dans `build/`

## 📦 Déploiement

Quand vous déployez sur Vercel:

1. Les fichiers dans `public/` sont automatiquement servis
2. Le QR code pointera vers `https://votre-domaine.vercel.app/social-links.html`
3. Testez sur mobile après déploiement

---

**Créé avec ❤️ pour votre portfolio**
