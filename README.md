# Hippolyte • Templates & UI Kits

![Status](https://img.shields.io/badge/Live-Online-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white)
![Stack](https://img.shields.io/badge/UI-Tailwind%20%2B%20DaisyUI-14b8a6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/UX-Responsive-f59e0b?style=for-the-badge&logo=figma&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge&logo=github&logoColor=white)


Portfolio statique présentant 10 templates/UI kits avec filtres, animations et thèmes light/dark.

## Aperçu rapide
- Filtres dynamiques par catégorie (landing, dashboard, ecommerce, portfolio)
- Animations fluides (entrée, hover, gradients) + respect `prefers-reduced-motion`
- Responsive renforcé (mobile, tablette, TV/XL)
- Thème persistant (localStorage) + toggle clair/sombre
- Formulaire de contact validé côté client + toasts accessibles
- Données templates générées côté client (JS) sans back-end

## Démarrage
Aucune dépendance à installer. Ouvrez simplement le fichier HTML.

### Option 1 : double-clic
1. Double-cliquez sur `index.html` pour ouvrir dans votre navigateur.

### Option 2 : petit serveur local (recommandé)
```bash
# depuis la racine du projet
python -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Structure
- `index.html` : structure de la page et intégration Tailwind CDN + DaisyUI
- `style.css` : styles custom (animations, gradients, responsive avancé)
- `script.js` : logique des filtres, rendu des cartes, thème, formulaire

## Personnalisation
- Ajouter/éditer des templates : modifier le tableau `templates` dans `script.js`
- Couleurs : variables CSS dans `style.css` (`--ocean`, `--coral`, `--purple`, `--night`)
- Branding : header, hero et footer dans `index.html`

## Accessibilité & UX
- Respect des animations réduites via `prefers-reduced-motion`
- Boutons/filtres avec états actifs clairs
- Toasts ARIA (`role="status"`, `aria-live="polite"`)
- Contraste renforcé (palette océan/coral/nuit)

## Auteurs
- Hippolyte — Dev Full Stack Web (hippolyte@zorcraft.ovh)

## Licence
MIT
