# Spotify clone — L2 Création digitale (ILOI)

Projet d'équipe du module HTML/CSS : on reproduit **open.spotify.com** tel quel, en équipe, chacun·e son composant.
5 jours : jeu. 05/11 · mar. 10/11 · jeu. 12/11 · ven. 13/11 · mar. 17/11. **Rendu le mar. 17/11 à 12h00.**

- 🎨 **Maquette** (captures ordinateur et téléphone + relevés des mesures) : [dossier Drive, en lecture seule](https://drive.google.com/drive/folders/17HLtT-RKTaBV5tGGkyPMQKInZ43wElMk) — les noms de captures cités dans les issues (`01-accueil-haut`…) sont dans les sous-dossiers `desktop/` et `telephone/`. Le fichier Figma avec la page « Guide de style » remplacera ce lien.
- 🌐 **Site en ligne** (GitHub Pages) : https://maajic-2-creation-digitale-2026.github.io/spotify-clone/
- ✅ **Tes tâches** : [onglet Issues](https://github.com/MAAJIC-2-Creation-Digitale-2026/spotify-clone/issues), une issue par composant avec sa checklist
- 📋 **Le contenu commun** (artistes, titres, playlists, noms de fichiers) : la Google Sheet partagée par Amélie

---

## 1. Démarrer

1. Récupère le projet avec Git (voir partie 5, « Une seule fois, au début »).
2. Dans VS Code : clic droit sur `index.html` → **Open with Live Server**.
3. ⚠️ Ne pas ouvrir les pages en double-clic (adresse `file:///`) : les composants ne se chargent pas, un bandeau rouge te le rappelle.
4. Pour tester le responsive : DevTools (F12) → **mode appareil** (Ctrl + Maj + M) → essaie 390, 768 et 1280 px de large.

## 2. Comment marche le projet

Chaque zone de la page est un **composant** : un fichier HTML dans `components/` et son fichier CSS dans `css/`.
Les pages (`index.html`, `playlist.html`, `connexion.html`) ne contiennent que des emplacements :

```html
<div data-include="components/sidebar.html"></div>
```

Le script `js/include.js` remplace chaque emplacement par le contenu du composant.
On écrit le header **une fois**, et il apparaît sur toutes les pages.

| Dossier / fichier | À quoi il sert | Qui le modifie |
|---|---|---|
| `index.html`, `playlist.html`, `connexion.html` | les pages, juste des emplacements | le / la lead |
| `css/tokens.css` | les variables : couleurs, tailles, espacements (relevées sur Spotify) | le / la lead (figé après le jour 1) |
| `css/reset.css` | remise à zéro commune | personne |
| `css/layout.css` | le plan de la page (zones de la grille) + responsive global | le / la lead |
| `components/xxx.html` + `css/xxx.css` | un composant | son ou sa responsable |
| `dev/xxx.html` | le **bac à sable** : ton composant tout seul, pour coder sans attendre les autres | son ou sa responsable |
| `js/include.js` | l'outil d'assemblage | personne |
| `js/player.js` | fait marcher le lecteur (lecture, pause, progression, volume) | seulement la liste `PISTES` en haut, par le / la responsable du lecteur |
| `assets/img/`, `assets/audio/` | pochettes, photos d'artistes, extraits mp3 | tout le monde (noms en minuscules) |

### Le plan de la page (déjà codé dans `layout.css`)

```
Téléphone (base)      Tablette (768px et +)        Ordinateur (1024px et +)
┌─ header ─┐          ┌────── header ──────┐       ┌─────────── header ───────────┐
│   main   │          │ side │    main     │       │ sidebar │   main   │ panneau  │
├─ player ─┤          │ bar  │             │       │         │          │          │
└─ sidebar ┘          └────── player ──────┘       └─────────── player ───────────┘
 (barre de nav)        (sidebar repliée, 72px)       (sidebar 284px)
```

## 3. L'équipe

| Composant | Responsable | Rôle d'équipe |
|---|---|---|
| Layout + header (lead) | | gardien·ne du guide de style, relit et fusionne les Pull Requests, met en ligne |
| Sidebar « Votre bibliothèque » | | |
| Page d'accueil (`home`) | | |
| Page playlist (`playlist`) | | |
| Lecteur (`player`) + page de connexion | | |
| Panneau « En cours de lecture » | ticket libre, pour qui a fini en premier | |

Scrum Master (tourne chaque jour) : J1 ______ · J2 ______ · J3 ______ · J4 ______ · J5 ______
Product Owner (la cliente) : Amélie.

Rituels : **daily** de 10 min le matin (hier / aujourd'hui / ce qui me bloque) · **démo + rétro** de 15 min en fin de journée.

## 4. Les règles de l'équipe

1. **Je ne touche qu'à mes fichiers.** Besoin d'un changement ailleurs ? Je le demande à la personne responsable.
2. **Toutes mes classes commencent par le nom de mon composant** : `.sidebar__titre`, `.player__bouton`…
3. **Aucune valeur en dur** : couleurs, tailles et espacements viennent de `tokens.css` → `var(--accent)`.
4. **Mobile d'abord** : le CSS de base est pour le téléphone, puis on ajoute ce qui change avec les mêmes points de rupture pour tout le monde : tablette `@media (min-width: 768px)`, ordinateur `@media (min-width: 1024px)`.
5. **Chemins d'images depuis la racine du projet** : `assets/img/pochettes/album-1.jpg`.
6. **Noms de fichiers** en minuscules, sans espace ni accent.
7. **Je ne pousse jamais sur `main`** : je travaille sur ma branche et je passe par une Pull Request.

## 5. Travailler avec Git dans VS Code (sans ligne de commande)

Tout se fait dans le panneau **Contrôle de code source** de VS Code (icône des 3 ronds reliés, ou **Ctrl + Maj + G**).
Les noms entre parenthèses sont ceux de VS Code en anglais.

### Une seule fois, au début

1. **Cloner le dépôt** : Ctrl + Maj + P → tape `Git: Cloner` (*Git: Clone*) → colle l'adresse du dépôt (bouton vert **Code** sur GitHub) → choisis le dossier → **Ouvrir**.
2. **Dire à Git qui tu es** (une seule fois sur ton PC) — dans le terminal de VS Code (Ctrl + ù) :
   ```
   git config --global user.name "Prénom Nom"
   git config --global user.email "ton-email-github@exemple.com"
   ```
   Mets le même e-mail que sur ton compte GitHub : c'est grâce à lui que tes commits s'affichent avec ton nom.
3. **Créer ta branche** : clique sur `main` en bas à gauche de VS Code → **+ Créer une branche…** (*Create new branch…*) → tape le nom de ton composant (`sidebar`, `home`, `playlist`, `player`…) → Entrée.
   Le nom en bas à gauche doit maintenant être celui de ta branche.

### Plusieurs fois par jour, quand une étape marche

1. Dans le panneau Contrôle de code source, tes fichiers modifiés apparaissent. Clique sur **+** à côté de chacun (ou à côté de « Modifications ») pour les **indexer** (*Stage*).
2. Écris un message clair dans le champ du haut : `sidebar : liste des playlists`.
3. Clique sur **✓ Valider** (*Commit*).
4. La 1re fois : **Publier la branche** (*Publish Branch*). Ensuite : **Synchroniser les modifications** (*Sync Changes*).
   À la 1re publication, une fenêtre GitHub s'ouvre dans le navigateur pour te connecter.

### À la démo de fin de journée : la Pull Request

1. Sur GitHub, un bandeau jaune propose **Compare & pull request** : clique dessus.
   (Sinon : onglet **Pull requests** → **New pull request** → `base: main` ← `compare: ta-branche`.)
2. Titre : ce que tu as fait aujourd'hui. Dans la description, écris `Closes #3` (le numéro de ton issue) pour relier la PR à tes tâches.
3. **Create pull request**.
4. Le / la lead relit (*Files changed*), approuve (**Review changes → Approve**) puis fusionne (**Merge pull request**).

### Le lendemain matin, avant de recommencer

1. En bas à gauche, passe sur `main` → **Synchroniser** : tu récupères le travail fusionné de toute l'équipe.
2. Repasse sur ta branche.
3. Ctrl + Maj + P → `Git: Fusionner la branche…` (*Git: Merge Branch…*) → `main`. Ta branche contient maintenant le travail des autres.

Le site en ligne (GitHub Pages) est publié depuis la branche `main`.

## 6. Icônes et logo

- Icônes : Font Awesome 6 (déjà chargé dans chaque page) — https://fontawesome.com/search?ic=free
  ```html
  <i class="fa-solid fa-play" aria-hidden="true"></i>
  ```
- Logo Spotify : l'icône `<i class="fa-brands fa-spotify"></i>`, ou le SVG récupéré dans l'onglet **Elements** des DevTools sur open.spotify.com (comme le logo du YouTube clone), enregistré dans `assets/img/`.
- Le logo (`logo.svg`) et le favicon (`favicon.svg`) sont à ajouter dans `assets/img/` le jour 1 par le / la lead (1re Pull Request).

## 7. Tech stack et documentation

| Outil | À quoi il sert | Lien officiel |
|---|---|---|
| HTML | la structure | [MDN](https://developer.mozilla.org/fr/docs/Web/HTML) · [W3Schools](https://www.w3schools.com/html/) |
| CSS | le style | [MDN](https://developer.mozilla.org/fr/docs/Web/CSS) · [W3Schools](https://www.w3schools.com/css/) |
| Visual Studio Code | l'éditeur | https://code.visualstudio.com/ |
| Live Server | le serveur local (extension VS Code) | https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer |
| Git | le versionnage | https://git-scm.com/ · [Git dans VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview) |
| GitHub | le dépôt commun, les issues, les Pull Requests | https://github.com/ · [Doc Pull Requests](https://docs.github.com/fr/pull-requests) |
| GitHub Pages | la mise en ligne | https://pages.github.com/ |
| Font Awesome 6 (CDN cdnjs) | les icônes | https://fontawesome.com/search?ic=free |
| Figtree (Google Fonts) | la police (substitut de celle de Spotify) | https://fonts.google.com/specimen/Figtree |
| Chrome DevTools | inspecter, mesurer, tester le responsive | [Mode appareil](https://developer.chrome.com/docs/devtools/device-mode?hl=fr) |

Pas besoin de Node ni de `npm install` : Live Server suffit.

### Les notions par composant (W3Schools)

- Grille de la page : [CSS Grid](https://www.w3schools.com/css/css_grid.asp) · [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- Responsive : [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- Variables : [CSS variables](https://www.w3schools.com/css/css3_variables.asp)
- Sidebar : [listes](https://www.w3schools.com/css/css_list.asp) · [overflow](https://www.w3schools.com/css/css_overflow.asp)
- Accueil : [::before / ::after](https://www.w3schools.com/css/css_pseudo_elements.asp) · [transitions](https://www.w3schools.com/css/css3_transitions.asp) · [position](https://www.w3schools.com/css/css_positioning.asp)
- Playlist : [tableaux](https://www.w3schools.com/html/html_tables.asp) · [dégradés](https://www.w3schools.com/css/css3_gradients.asp)
- Lecteur : [input range](https://www.w3schools.com/tags/att_input_type_range.asp) · [audio](https://www.w3schools.com/html/html5_audio.asp)
- Connexion : [formulaires](https://www.w3schools.com/html/html_forms.asp) · [label](https://www.w3schools.com/tags/tag_label.asp)

## 8. Crédits

- Projet pédagogique non commercial. Spotify est une marque de Spotify AB ; ce clone n'est pas affilié à Spotify.
- Maquette de référence : captures d'open.spotify.com (novembre 2026).
- Musiques : _(titre, artiste, source, licence)_
- Images : _(source, licence)_
