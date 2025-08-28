# GameOn - Marathon National de Jeux Vidéos

[![HTML5](https://img.shields.io/badge/HTML5-Expert-E34F26?logo=html5&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Expert-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Expert-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un site web moderne et responsive pour l'inscription au marathon national de jeux vidéos GameOn. Ce projet met l'accent sur l'accessibilité, les performances et l'expérience utilisateur optimale.

## 🎯 Aperçu du Projet

GameOn est une landing page interactive permettant aux utilisateurs de s'inscrire à un tournoi de jeux vidéos. Le site comprend :

- **Interface responsive** adaptée à tous les appareils
- **Formulaire d'inscription** avec validation en temps réel
- **Navigation mobile** avec menu hamburger
- **Accessibilité WCAG** intégrée
- **Performance optimisée** avec images WebP et lazy loading

## 🚀 Démonstration

[Voir la démo en direct](https://votre-demo-url.com) | [Design Figma](https://www.figma.com/design/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106-630&t=YCkkQ5hGH2vCxx6V-0)

## 📋 Fonctionnalités

### ✨ Interface Utilisateur

- Design moderne et attrayant
- Navigation responsive avec menu mobile
- Images optimisées (WebP avec fallback)
- Animations CSS fluides

### 📝 Formulaire d'Inscription

- Validation en temps réel des champs
- Messages d'erreur accessibles
- Sélection de ville de tournoi
- Checkbox pour conditions d'utilisation
- Modal de confirmation

### 🎨 Accessibilité

- Support complet des lecteurs d'écran
- Navigation au clavier
- Contraste conforme WCAG
- Attributs ARIA appropriés
- Focus management

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec Flexbox/Grid
- **JavaScript ES6+** - Logique interactive pure (sans frameworks)
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie (DM Sans, Roboto)

## 📁 Structure du Projet

```
GameOn/
├── assets/
│   ├── css/
│   │   └── style.css              # Styles principaux
│   ├── js/
│   │   ├── script.js              # Point d'entrée principal
│   │   ├── validation.js          # Logique de validation
│   │   ├── mobileMenu.js          # Menu mobile
│   │   ├── formReset.js           # Reset du formulaire
│   │   └── setupEventListeners.js # Configuration des événements
│   ├── img/
│   │   ├── png/                   # Images PNG
│   │   └── webp/                  # Images WebP optimisées
│   ├── favicons/                  # Icônes d'application
│   └── manifest.json              # Métadonnées PWA
├── index.html                     # Page principale
└── README.md                      # Documentation
```

## 🚀 Installation et Utilisation

### Prérequis

- Navigateur web moderne
- Serveur web local (optionnel, recommandé pour le développement)

### Installation Rapide

1. **Cloner le repository**

   ```bash
   git clone https://github.com/votre-username/GameOn.git
   cd GameOn
   ```

2. **Ouvrir le projet**

   Double-cliquer sur `index.html`

## 📱 Responsive Design

Le site est optimisé pour :

- **Desktop** : 1200px et plus
- **Tablet** : 768px - 1199px
- **Mobile** : 320px - 767px

## ✅ Validation du Formulaire

### Champs Requis

- **Prénom/Nom** : Minimum 2 caractères
- **Email** : Format email valide
- **Date de naissance** : Date valide
- **Nombre de tournois** : 0-99
- **Ville du tournoi** : Sélection obligatoire
- **Conditions d'utilisation** : Acceptation requise

### Fonctionnalités

- Validation en temps réel
- Messages d'erreur contextuels
- Indicateurs visuels d'état
- Prévention de soumission invalide

### Configuration JavaScript

Les paramètres principaux sont centralisés dans chaque module pour faciliter la maintenance.

## 🔧 Performance

### Optimisations Implémentées

- **Images** : Format WebP avec fallback PNG/JPG
- **Fonts** : Preconnect aux CDN Google Fonts
- **Loading** : Lazy loading pour les images
- **CSS** : Styles critiques inline (si nécessaire)
- **JavaScript** : Modules séparés pour un chargement optimisé

## 🧪 Tests

### Tests Manuels

- [ ] Navigation responsive
- [ ] Validation du formulaire
- [ ] Accessibilité clavier
- [ ] Compatibilité navigateurs

## 📄 Licences

### Ressources Externes

- **Font Awesome** : [Licence Font Awesome](https://fontawesome.com/license)
- **Google Fonts** : [Licence SIL Open Font](https://scripts.sil.org/OFL)

## 🔗 Liens Utiles

- [Repository Original](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/)
- [Maquettes Figma](https://www.figma.com/design/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106-630&t=YCkkQ5hGH2vCxx6V-0)
- [Documentation MDN](https://developer.mozilla.org/)
- [Guide Accessibilité WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Développé avec ❤️ pour OpenClassrooms**
