# GameOn - Marathon National de Jeux Vidéos

[![HTML5](https://img.shields.io/badge/HTML5-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Progressive%20Web%20App-5A0FC8?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

Une application web progressive (PWA) moderne et accessible pour l'inscription au marathon national de jeux vidéos GameOn. Ce projet implémente les meilleures pratiques en matière d'accessibilité, de performance et d'expérience utilisateur.

## 🎯 Aperçu du Projet

GameOn est une landing page interactive avec un système de modal avancé permettant aux utilisateurs de s'inscrire au tournoi de jeux vidéos. L'application comprend :

- **Interface responsive** adaptée à tous les appareils (mobile, tablette, desktop)
- **Système de modal complet** avec animations fluides et gestion des états
- **Formulaire d'inscription avancé** avec validation en temps réel et feedback utilisateur
- **Navigation mobile** avec menu hamburger animé
- **Écran de chargement** avec animations gaming personnalisées
- **Progressive Web App (PWA)** avec manifest et service worker
- **Accessibilité WCAG** complète avec ARIA et navigation clavier
- **Performance optimisée** avec images WebP, lazy loading et animations CSS

## 🚀 Démonstration

- **[Démo en direct](https://steinshy.github.io/OC-GameOn/)**
- **[Design Figma](https://www.figma.com/design/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106-630&t=YCkkQ5hGH2vCxx6V-0)**

## 📋 Fonctionnalités

### ✨ Interface Utilisateur

- **Design moderne** avec thème gaming et gradient personnalisés
- **Navigation responsive** avec menu mobile hamburger animé
- **Écran de chargement** avec animations personnalisées et barre de progression
- **Images optimisées** (WebP avec fallback PNG/JPG)
- **Animations CSS fluides** avec support reduced-motion
- **Progressive Web App** installable sur mobile et desktop

### 📝 Système de Modal & Formulaire

- **Modal avancée** avec animations slide et gestion d'états multiples
- **Formulaire structuré** avec 6 champs de saisie et validation complète
- **Validation en temps réel** avec feedback visuel immédiat
- **Messages d'erreur contextuels** avec aria-live pour les lecteurs d'écran
- **Sélection de ville** via boutons radio (6 villes disponibles)
- **Gestion des conditions** avec checkbox obligatoire et newsletter optionnelle
- **Modal de confirmation** avec message de succès personnalisé
- **Reset automatique** du formulaire après soumission

### 🎨 Accessibilité & UX

- **Support complet WCAG 2.1** niveau AA
- **Navigation clavier** complète avec focus management
- **Lecteurs d'écran** avec ARIA labels et live regions
- **Contraste optimal** respectant les standards d'accessibilité
- **Gestion d'états** visuels (focus, hover, error, success)
- **Responsive design** adaptatif mobile-first

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique avec WAI-ARIA
- **CSS3** - Styles modernes avec Flexbox/Grid, variables CSS et animations
- **JavaScript ES6+** - Logique modulaire pure (sans frameworks)
- **PWA** - Progressive Web App avec manifest.json
- **Font Awesome 6.7.2** - Icônes vectorielles
- **Google Fonts** - Typographie (DM Sans, Roboto) avec preconnect

## 📁 Structure du Projet

```
GameOn/
├── assets/
│   ├── css/
│   │   ├── style.css              # Styles principaux et design system
│   │   ├── modal.css              # Styles du système de modal
│   │   ├── modal-animations.css   # Animations de modal
│   │   ├── mobile-animations.css  # Animations du menu mobile
│   │   ├── loader.css             # Styles de l'écran de chargement
│   │   └── loader-animations.css  # Animations de chargement
│   ├── js/
│   │   ├── script.js              # Point d'entrée principal
│   │   ├── mobileMenu.js          # Gestion du menu mobile
│   │   └── modalForm/
│   │       ├── modalForm.js       # Références DOM du modal
│   │       ├── validation.js      # Logique de validation
│   │       └── utils/
│   │           ├── eventAttachers.js    # Attachement des événements
│   │           ├── eventListeners.js   # Gestion des événements
│   │           ├── handlers.js         # Gestionnaires d'événements
│   │           ├── formReset.js        # Reset et gestion d'états
│   │           ├── realTimeValidation.js # Validation temps réel
│   │           └── validationHelpers.js # Utilitaires de validation
│   ├── img/
│   │   ├── png/                   # Images PNG (logo, background)
│   │   └── webp/                  # Images WebP optimisées
│   ├── favicons/                  # Collection complète d'icônes PWA
│   └── manifest.json              # Métadonnées Progressive Web App
├── index.html                     # Page principale avec structure sémantique
└── README.md                      # Documentation complète
```

## 🚀 Installation et Utilisation

### Prérequis

- **Navigateur moderne** supportant ES6+ et CSS Grid

### Installation Rapide

1. **Cloner le repository**

   ```bash
   git clone https://github.com/Steinshy/OC-GameOn.git
   cd OC-GameOn
   ouvrir index.html dans le navigateur
   ```

## 📱 Responsive Design

Le site est optimisé pour :

- **Desktop** : 1200px et plus
- **Tablet** : 768px - 1199px
- **Mobile** : 320px - 767px

## ✅ Validation du Formulaire

### Champs et Règles de Validation

| Champ                  | Type     | Validation            | Messages d'erreur                        |
| ---------------------- | -------- | --------------------- | ---------------------------------------- |
| **Prénom**             | Text     | Min. 2 caractères     | "2 caractères minimum est requis."       |
| **Nom**                | Text     | Min. 2 caractères     | "2 caractères minimum est requis."       |
| **Email**              | Email    | Format RFC5322        | "L'adresse e-mail est invalide."         |
| **Date de naissance**  | Date     | Date valide           | "La date de naissance est invalide."     |
| **Nombre de tournois** | Number   | 0-99                  | "Un nombre entre 0 et 99 est requis."    |
| **Ville du tournoi**   | Radio    | Sélection obligatoire | "Un lieu de participation est requis."   |
| **Conditions**         | Checkbox | Acceptation requise   | "Les conditions doivent être acceptées." |
| **Newsletter**         | Checkbox | Optionnel             | -                                        |

### Fonctionnalités Avancées

- **Validation temps réel** : Feedback immédiat lors de la saisie
- **États visuels** : Bordures colorées (rouge/vert) selon la validité
- **Messages contextuels** : Erreurs spécifiques par champ avec aria-live
- **Prévention de soumission** : Bouton désactivé si formulaire invalide
- **Reset automatique** : Nettoyage complet après soumission réussie
- **Gestion des focus** : Navigation clavier optimisée

### Architecture Modulaire

Le système de validation est organisé en modules spécialisés :

- `validation.js` : Logique de validation par champ
- `realTimeValidation.js` : Validation en temps réel
- `validationHelpers.js` : Utilitaires pour les états visuels
- `handlers.js` : Gestionnaires d'événements de soumission

## 🔧 Performance & Optimisations

### Optimisations Implémentées

- **Images** : Format WebP avec fallback PNG/JPG automatique
- **Fonts** : Preconnect et preload pour Google Fonts (DM Sans, Roboto)
- **Loading** : Lazy loading sur toutes les images avec `loading="lazy"`
- **CSS** : Variables CSS personnalisées et animations optimisées
- **JavaScript** : Architecture modulaire avec chargement différé
- **PWA** : Mise en cache avec service worker (prêt pour implémentation)
- **Animations** : Support `prefers-reduced-motion` pour l'accessibilité
- **Compression** : Assets optimisés (images, favicons multi-formats)

### Métriques de Performance

- **First Contentful Paint** : Optimisé avec preconnect fonts
- **Largest Contentful Paint** : Images WebP compressées
- **Cumulative Layout Shift** : Dimensions d'images définies
- **Time to Interactive** : JavaScript modulaire non-bloquant

### Responsive Breakpoints

- **Mobile** : 320px - 767px (mobile-first)
- **Tablet** : 768px - 1024px
- **Desktop** : 1025px+ (max-width: 1300px)

## 📄 Licences & Ressources

### Ressources Externes

- **Font Awesome 6.7.2** : [Licence Font Awesome](https://fontawesome.com/license)
- **Google Fonts** : [Licence SIL Open Font License](https://scripts.sil.org/OFL)
- **Images** : Assets propriétaires du projet GameOn

## 🔗 Liens Utiles

- **[Repository Original](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/)** - Template de départ
- **[Maquettes Figma](https://www.figma.com/design/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106-630&t=YCkkQ5hGH2vCxx6V-0)** - Design complet

---

**Développé avec ❤️ et JavaScript pur pour OpenClassrooms**
_Projet pédagogique - Formation Développeur Front-End_
