# Spotify clone — L2 Création digitale (ILOI)

Projet d'équipe du module HTML/CSS : on reproduit **l'appli Spotify**, en équipe, découpée en **petits composants** (une carte, une barre, une ligne…).
On commence par la **version téléphone (390 px)**. La version ordinateur viendra après.
5 jours : jeu. 05/11 · mar. 10/11 · jeu. 12/11 · ven. 13/11 · mar. 17/11. **Rendu le mar. 17/11 à 12h00.**

- 📖 **Comment on travaille, pas à pas** : [`COMMENT-TRAVAILLER.md`](COMMENT-TRAVAILLER.md) (à lire en premier)
- ✅ **Tes tâches** : [onglet Issues](https://github.com/MAAJIC-2-Creation-Digitale-2026/spotify-clone/issues), un ticket par composant avec sa checklist
- 🎨 **Maquette** (captures téléphone et ordinateur + relevés des mesures) : [dossier Drive, en lecture seule](https://drive.google.com/drive/folders/1q3Pfz3PSOS1WhFYyj4tlRrnC5-3T3SIn?usp=sharing) — les captures citées dans les issues (`02-accueil-page-entiere`…) sont dans `maquette/telephone/` et `maquette/desktop/`.
- 🖼️ **Les images** (photos d'artistes et pochettes) : dossier Drive partagé « Semaine 4 et 5 - Spotify Clone », sous-dossier `assets/img/` (voir partie 6).
- 📋 **Le contenu** (faux artistes, albums, titres, playlists, sons) : partie 6 de ce README.
- 🌐 **Site en ligne** (GitHub Pages) : https://maajic-2-creation-digitale-2026.github.io/spotify-clone/

---

## 1. Démarrer

1. Récupère le projet avec Git (voir partie 5, « Une seule fois, au début »).
2. Dans VS Code : clic droit sur `index.html` → **Open with Live Server**.
3. ⚠️ Ne pas ouvrir les pages en double-clic (adresse `file:///`) : les composants ne se chargent pas, un bandeau rouge te le rappelle.
4. Pour voir la version téléphone : DevTools (F12) → **mode appareil** (Ctrl + Maj + M) → largeur **390 px**.
5. Pour coder ton composant tout seul : ouvre son **bac à sable** `dev/ton-composant.html` avec Live Server. La galerie de tous les bacs à sable : `dev/index.html`.

## 2. Comment marche le projet

Chaque morceau de page est un **composant** : un fichier HTML dans `components/` et son fichier CSS dans `css/`.
Les pages ne contiennent que des **emplacements**, et chaque emplacement remplit les « trous » `{{…}}` du composant avec ses attributs `data-…` :

```html
<div data-include="components/carte.html"
     data-titre="Chill du dimanche"
     data-image="assets/img/pochettes/chill-du-dimanche.jpg"
     data-lien="playlist.html"></div>
```

Le script `js/include.js` remplace chaque emplacement par le composant, rempli (`data-titre` → `{{titre}}`). On écrit la carte **une fois**, et la page peut en poser autant qu'elle veut. Détails et exemples : [`COMMENT-TRAVAILLER.md`](COMMENT-TRAVAILLER.md).

| Dossier / fichier | À quoi il sert | Qui le modifie |
|---|---|---|
| `index.html`, `recherche.html`, `bibliotheque.html`, `playlist.html`, `premium.html`, `connexion.html` | les 6 pages, déjà assemblées avec les emplacements | le / la lead |
| `components/xxx.html` + `css/xxx.css` | un composant (le commentaire en haut du fichier dit quoi faire, avec les mesures à 390 px) | la personne qui a pris le ticket |
| `dev/xxx.html` | le **bac à sable** du composant | personne (déjà prêt) |
| `css/tokens.css` | les variables : couleurs, tailles, espacements, rayons | le / la lead |
| `css/page-mobile.css` | la charpente des pages téléphone (480 px max., centrée) | le / la lead |
| `css/layout.css` | le plan de la version ordinateur (pour plus tard) | le / la lead |
| `css/reset.css`, `css/bac-a-sable.css` | remise à zéro commune, style des bacs à sable | personne |
| `js/include.js` | l'outil d'assemblage des composants | personne |
| `js/player.js` | fait marcher le lecteur (lecture, pause, progression, volume) | seulement la liste `PISTES` en haut |
| `assets/img/`, `assets/audio/` | images et extraits mp3 (les 3 mp3 du lecteur sont déjà là) | tout le monde, en respectant les noms (partie 6) |

## 3. L'équipe et les tickets

Équipe : Dorlys · Samuel · Lily · Loïc · Lucas. **Lead** (assemblage, relecture des Pull Requests, mise en ligne) : Samuel.
Product Owner (la cliente) : Amélie. Scrum Master (tourne chaque jour) : J1 ______ · J2 ______ · J3 ______ · J4 ______ · J5 ______

**Un ticket à la fois par personne.** Je m'assigne l'issue sur GitHub, je la termine, je la livre, puis j'en prends une autre.

| Ticket | Composant | Issue | Page |
|---|---|---|---|
| T01 | `nav-bas` — barre de navigation du bas | #9 | toutes |
| T02 | `barre-haut` — avatar + filtres en pilules | #10 | accueil |
| T03 | `carte` — carte de playlist | #11 | accueil |
| T04 | `rangee` — un titre + une rangée de cartes qui défile | #12 | accueil |
| T05 | `carte-artiste` — carte d'artiste (photo ronde) | #13 | accueil |
| T06 | `ligne-titre` — une ligne de la liste des titres | #14 | playlist |
| T07 | `mini-lecteur` — le lecteur au-dessus de la barre du bas | #15 | toutes |
| T08 | `recherche-entete` — titre « Rechercher » + champ | #16 | recherche |
| T09 | `tuile-genre` — une tuile de « Parcourir tout » | #17 | recherche |
| T10 | `biblio-entete` — titre « Bibliothèque » + filtres + tri | #18 | bibliothèque |
| T11 | `element-biblio` — un élément de la Bibliothèque | #19 | bibliothèque |
| T12 | `playlist-entete` — haut de la page playlist | #20 | playlist |
| T13 | `playlist-actions` — barre de boutons de la playlist | #21 | playlist |
| T14 | `connexion-form` — formulaire de connexion | #22 | connexion |
| T15 | `offre-premium` — une carte d'offre | #23 | premium |
| T16 | `menu-creer` — menu du bouton « Créer » (bonus) | #24 | accueil |
| T17 | `menu-profil` — tiroir du profil | #8 | accueil, recherche, bibliothèque |
| T18 | `premium-entete` — haut de la page Premium | #30 | premium |
| T19 | `premium-avantages` — carte « Pourquoi s'abonner ? » | #31 | premium |
| T20 | `offre-premium` (compléments) — à faire après T15 | #32 | premium |

Rituels : **daily** de 10 min le matin (hier / aujourd'hui / ce qui me bloque) · **démo + rétro** de 15 min en fin de journée. Kanban : les post-its du tableau blanc.

## 4. Les règles de l'équipe

1. **Un ticket à la fois**, et **je ne touche qu'à mes 2 fichiers** (`components/…` et `css/…`). Besoin d'un changement ailleurs ? Je le demande au / à la lead.
2. **Toutes mes classes commencent par le nom de mon composant** : `.carte`, `.carte-titre`, `.nav-bas-lien`…
3. **Aucune valeur en dur** : couleurs, tailles et espacements viennent de `tokens.css` → `var(--accent)`.
4. **Téléphone d'abord** : le CSS de base est pour le téléphone (390 px). L'ordinateur viendra ensuite avec `@media (min-width: 768px)` et `@media (min-width: 1024px)`.
5. **Chemins d'images depuis la racine du projet** : `assets/img/pochettes/kabar-la-nuit.jpg`.
6. **Noms de fichiers** en minuscules, sans espace ni accent, tirets entre les mots.
7. **Pas de vrais artistes ni de vraies pochettes** : on utilise les faux artistes, les images et les sons de la partie 6.
8. **Je ne pousse jamais sur `main`** : je travaille sur ma branche et je passe par une Pull Request.

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

### Pour chaque ticket

1. **Pars d'un `main` à jour** : en bas à gauche, passe sur `main` → **Synchroniser** (*Sync Changes*).
2. **Crée la branche du ticket** : clique sur `main` en bas à gauche → **+ Créer une branche…** (*Create new branch…*) → numéro du ticket + nom du composant : `t03-carte` → Entrée.
3. **Quand une étape marche** : dans le panneau Contrôle de code source, clique sur **+** à côté de tes fichiers (*Stage*), écris un message clair (`T03 carte : pochette, titre, texte`), puis **✓ Valider** (*Commit*).
4. La 1re fois : **Publier la branche** (*Publish Branch*). Ensuite : **Synchroniser les modifications** (*Sync Changes*).
   À la 1re publication, une fenêtre GitHub s'ouvre dans le navigateur pour te connecter.

### Quand le ticket est fini : la Pull Request

1. Sur GitHub, un bandeau jaune propose **Compare & pull request** : clique dessus.
   (Sinon : onglet **Pull requests** → **New pull request** → `base: main` ← `compare: ta-branche`.)
2. Titre : le ticket (`T03 carte`). Dans la description, écris `Closes #11` (le numéro de ton issue) pour fermer l'issue à la fusion.
3. **Create pull request**.
4. Le / la lead relit (*Files changed*), approuve (**Review changes → Approve**) puis fusionne (**Merge pull request**).
5. Retour au point 1 de « Pour chaque ticket » avec le ticket suivant.

Le site en ligne (GitHub Pages) est publié depuis la branche `main`.

## 6. Le contenu : artistes, albums, titres, playlists, images et sons

Tous les artistes sont **inventés**. On n'utilise que ce contenu (pas de vrais artistes, pas de vraies pochettes). Les chemins des images partent de la racine du projet : `assets/img/artistes/…` et `assets/img/pochettes/…`.

### Les artistes

| Nom | Genre | Auditeurs mensuels | Photo | Bio courte (carte « À propos ») |
|---|---|---|---|---|
| Lova Kaz | Maloya électro | 1 284 503 | `artistes/lova-kaz.jpg` | Elle mélange le kayamb et les synthés depuis son premier EP enregistré à Saint-Pierre. |
| Les Tamarins | Rock indé | 642 118 | `artistes/les-tamarins.jpg` | Des amis de lycée, des guitares saturées et des refrains en créole. |
| Nayla Rivière | Pop | 3 910 227 | `artistes/nayla-riviere.jpg` | Une voix douce, des chansons sur l'été et un tube viral en 2026. |
| Velours Mécanique | Électro | 418 390 | `artistes/velours-mecanique.jpg` | Un duo qui fabrique ses propres machines et joue la nuit dans des parkings. |
| Isaure Delmas | Folk | 205 774 | `artistes/isaure-delmas.jpg` | Guitare, harmonica et des chansons écrites pendant ses randonnées. |
| Piton Club | Hip-hop | 2 156 980 | `artistes/piton-club.jpg` | Un collectif de rappeurs, des instrus lourdes et des textes sur l'île. |
| Saphir Nwar | R&B | 987 412 | `artistes/saphir-nwar.jpg` | Des ballades lentes, une voix grave et beaucoup de basse. |
| Orchestre du Lagon | Instrumental | 154 306 | `artistes/orchestre-du-lagon.jpg` | Un ensemble de douze musiciens qui joue des musiques pour se concentrer. |

### Les albums

| Titre | Artiste | Année | Type | Couleur (dégradé de l'en-tête) | Pochette |
|---|---|---|---|---|---|
| Kabar la nuit | Lova Kaz | 2025 | Album | `#8C3B2E` | `pochettes/kabar-la-nuit.jpg` |
| Les fruits du jardin | Les Tamarins | 2024 | Album | `#4F6B2D` | `pochettes/les-fruits-du-jardin.jpg` |
| Bleu piscine | Nayla Rivière | 2026 | Single | `#2E7FA8` | `pochettes/bleu-piscine.jpg` |
| Circuits fragiles | Velours Mécanique | 2023 | EP | `#5A3D8A` | `pochettes/circuits-fragiles.jpg` |
| Lettres du col | Isaure Delmas | 2025 | Album | `#A8803A` | `pochettes/lettres-du-col.jpg` |
| Basalte | Piton Club | 2026 | Album | `#3A3A3A` | `pochettes/basalte.jpg` |
| Minuit vanille | Saphir Nwar | 2024 | Single | `#C9A227` | `pochettes/minuit-vanille.jpg` |
| Marées | Orchestre du Lagon | 2022 | Album | `#1F6F6B` | `pochettes/marees.jpg` |

### Les titres (page playlist et lecteur)

Les 8 premiers titres ont un vrai son : ce sont les 8 pistes du lecteur (`data-piste="0"` à `"7"`). Les mp3 viennent de [Pixabay Music](https://pixabay.com/music/) et sont **déjà dans le projet**, dans `assets/audio/`. Dans `js/player.js` (liste `PISTES`), le champ `fichier` reçoit le chemin de la colonne « Extrait mp3 ».

| # | Titre | Artiste | Album | Durée | Piste | Pochette | Extrait mp3 |
|---|---|---|---|---|---|---|---|
| 1 | Ti lampé | Lova Kaz | Kabar la nuit | 4:19 | 0 | `pochettes/kabar-la-nuit.jpg` | `assets/audio/titre-1.mp3` |
| 2 | Bleu piscine | Nayla Rivière | Bleu piscine | 1:54 | 1 | `pochettes/bleu-piscine.jpg` | `assets/audio/titre-2.mp3` |
| 3 | Coulée | Piton Club | Basalte | 1:50 | 2 | `pochettes/basalte.jpg` | `assets/audio/titre-3.mp3` |
| 4 | La case en tôle | Les Tamarins | Les fruits du jardin | 2:18 | 3 | `pochettes/les-fruits-du-jardin.jpg` | `assets/audio/titre-4.mp3` |
| 5 | Tension basse | Velours Mécanique | Circuits fragiles | 2:19 | 4 | `pochettes/circuits-fragiles.jpg` | `assets/audio/titre-5.mp3` |
| 6 | Le col des Bœufs | Isaure Delmas | Lettres du col | 2:53 | 5 | `pochettes/lettres-du-col.jpg` | `assets/audio/titre-6.mp3` |
| 7 | Minuit vanille | Saphir Nwar | Minuit vanille | 2:55 | 6 | `pochettes/minuit-vanille.jpg` | `assets/audio/titre-7.mp3` |
| 8 | Marée haute | Orchestre du Lagon | Marées | 1:24 | 7 | `pochettes/marees.jpg` | `assets/audio/titre-8.mp3` |
| 9 | Kabar la nuit | Lova Kaz | Kabar la nuit | 4:18 | | `pochettes/kabar-la-nuit.jpg` | |
| 10 | Basalte | Piton Club | Basalte | 2:49 | | `pochettes/basalte.jpg` | |
| 11 | Mangue verte | Les Tamarins | Les fruits du jardin | 3:36 | | `pochettes/les-fruits-du-jardin.jpg` | |
| 12 | Signal faible | Velours Mécanique | Circuits fragiles | 4:44 | | `pochettes/circuits-fragiles.jpg` | |

### Les playlists

| Nom | Description (2 lignes max.) | Créée par | Titres | Où elle apparaît | Couleur | Pochette |
|---|---|---|---|---|---|---|
| Titres likés | Tous les titres que tu as aimés. | Toi | 12 | Raccourcis · Bibliothèque · Page playlist | `#4B3FA8` | `pochettes/titres-likes.jpg` |
| Découvertes de la semaine | De nouveaux titres choisis pour toi, chaque lundi. | Spotify | 30 | Raccourcis · Conçu pour vous | `#2E7FA8` | `pochettes/decouvertes.jpg` |
| Chill du dimanche | Des titres calmes pour finir la semaine. | Spotify | 50 | Raccourcis · Bibliothèque | `#1F6F6B` | `pochettes/chill-du-dimanche.jpg` |
| Maloya & co | Le maloya d'aujourd'hui, du kayamb aux synthés. | Spotify | 40 | Raccourcis · Bibliothèque | `#8C3B2E` | `pochettes/maloya-and-co.jpg` |
| Focus devoirs | De la musique sans paroles pour se concentrer. | Spotify | 60 | Raccourcis · Conçu pour vous | `#5A3D8A` | `pochettes/focus-devoirs.jpg` |
| Road trip côte Est | À écouter fenêtres ouvertes, de Saint-Benoît à Saint-Philippe. | Lily | 24 | Raccourcis · Bibliothèque | `#A8803A` | `pochettes/road-trip.jpg` |
| Soirée rooftop | Pop et R&B pour danser au coucher du soleil. | Samuel | 35 | Raccourcis · Bibliothèque | `#C9A227` | `pochettes/soiree-rooftop.jpg` |
| Daily Mix 1 | Lova Kaz, Piton Club, Saphir Nwar et plus encore. | Spotify | 50 | Raccourcis · Conçu pour vous | `#3A3A3A` | `pochettes/daily-mix-1.jpg` |
| Daily Mix 2 | Les Tamarins, Isaure Delmas, Velours Mécanique et plus encore. | Spotify | 50 | Conçu pour vous | `#4F6B2D` | `pochettes/daily-mix-2.jpg` |
| Radar des sorties | Les nouveautés de tes artistes, chaque vendredi. | Spotify | 30 | Conçu pour vous | `#B5466B` | `pochettes/radar-des-sorties.jpg` |

Les pochettes de playlists n'ont pas de texte (sauf « Road trip côte Est » et « Soirée rooftop ») : le nom s'écrit en HTML, par-dessus ou en dessous.

### Les images

- **Où les trouver** : dossier Drive partagé « Semaine 4 et 5 - Spotify Clone » → `assets/img/artistes/` (8 photos) et `assets/img/pochettes/` (18 pochettes d'albums et de playlists). Copie-les dans le même dossier du projet.
- **Les noms** sont ceux des tableaux ci-dessus (colonnes « Photo » et « Pochette ») : `lova-kaz.jpg`, `kabar-la-nuit.jpg`, `titres-likes.jpg`…
- **Format** : carrés, 640 × 640 px, en `.jpg`. Les photos d'artistes s'affichent en rond avec `border-radius: 50%`.
- Besoin d'une nouvelle image ? Photo libre de droits (Unsplash, Pixabay) ou image créée par toi, carrée, nommée comme les autres, et **crédit ajouté dans la partie 8**.

### Icônes et logo

- Icônes : Font Awesome 6 (déjà chargé dans chaque page) — https://fontawesome.com/search?ic=free
  ```html
  <i class="fa-solid fa-play" aria-hidden="true"></i>
  ```
- Le logo (`assets/img/logo.svg`) et le favicon (`assets/img/favicon.ico`) sont déjà dans le projet.

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

- Mise en page des composants : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [CSS Grid](https://www.w3schools.com/css/css_grid.asp) (tuiles, version ordinateur)
- Variables : [CSS variables](https://www.w3schools.com/css/css3_variables.asp)
- Rangée qui défile (`rangee`, `barre-haut`) : [overflow](https://www.w3schools.com/css/css_overflow.asp)
- Cartes (`carte`, `carte-artiste`, `tuile-genre`) : [border-radius](https://www.w3schools.com/css/css3_borders.asp) · [object-fit](https://www.w3schools.com/css/css3_object-fit.asp) · [transitions](https://www.w3schools.com/css/css3_transitions.asp)
- Barres fixées en bas (`nav-bas`, `mini-lecteur`) : [position](https://www.w3schools.com/css/css_positioning.asp)
- Haut de playlist et Premium (`playlist-entete`, `premium-entete`) : [dégradés](https://www.w3schools.com/css/css3_gradients.asp) · [::before / ::after](https://www.w3schools.com/css/css_pseudo_elements.asp)
- Lecteur : [input range](https://www.w3schools.com/tags/att_input_type_range.asp) · [audio](https://www.w3schools.com/html/html5_audio.asp)
- Connexion et recherche (`connexion-form`, `recherche-entete`) : [formulaires](https://www.w3schools.com/html/html_forms.asp) · [label](https://www.w3schools.com/tags/tag_label.asp)
- Listes (`nav-bas`, `element-biblio`) : [listes](https://www.w3schools.com/css/css_list.asp)
- Responsive (plus tard) : [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

## 8. Crédits

- Projet pédagogique non commercial. Spotify est une marque de Spotify AB ; ce clone n'est pas affilié à Spotify.
- Maquette de référence : captures de l'appli Spotify (téléphone) et d'open.spotify.com (ordinateur), novembre 2026.
- Artistes, albums et playlists : inventés pour le projet.
- Pochettes d'albums et de playlists : créées pour le projet (illustrations générées), libres d'usage dans ce dépôt.
- Photos d'artistes : [Unsplash](https://unsplash.com/), sous [licence Unsplash](https://unsplash.com/license) (usage gratuit, crédit apprécié) :
  - `lova-kaz.jpg` : [Josh Rocklage](https://unsplash.com/fr/photos/femme-se-produisant-sur-scene-HAAsKeZbHAc)
  - `les-tamarins.jpg` : [Spencer Plouzek](https://unsplash.com/fr/photos/le-groupe-se-produisant-en-live-sur-scene-avec-des-instruments-tKEV3aixY8c)
  - `nayla-riviere.jpg` : [Claudia Raya](https://unsplash.com/fr/photos/femme-en-chemise-a-carreaux-blanc-et-noir-tenant-un-micro-Ol0wJhWu3-s)
  - `velours-mecanique.jpg` : [mostafa meraji](https://unsplash.com/fr/photos/deux-musiciens-avec-clavier-et-guitare-sur-le-terrain-t7BjlGg1FuM)
  - `isaure-delmas.jpg` : [Mariana Vusiatytska](https://unsplash.com/fr/photos/femme-jouant-a-gitar-1PlJFiOyacw)
  - `piton-club.jpg` : [Yash Jeebaun](https://unsplash.com/fr/photos/quatre-amis-posant-ensemble-dans-un-lieu-faiblement-eclaire-yrUSEu5HBrI)
  - `saphir-nwar.jpg` : [Özge Karzan](https://unsplash.com/fr/photos/un-homme-sans-chemise-debout-devant-un-fond-orange-tnQpg-v3N1k)
  - `orchestre-du-lagon.jpg` : [Kazuo ota](https://unsplash.com/fr/photos/un-orchestre-se-produit-sur-une-scene-de-concert-NNVNasAXPWQ)
- Bandeau de la page Premium (`bandeau-premium.svg`) : image provisoire créée pour le projet.
- Musiques : [Pixabay Music](https://pixabay.com/music/), sous [licence Pixabay](https://pixabay.com/service/license-summary/) (usage gratuit, crédit apprécié). Fichiers dans `assets/audio/` :
  - `titre-1.mp3`, piste 0, « Ti lampé » (Lova Kaz) : [Jabali - Breakbeat Of Africa, par Rockot](https://pixabay.com/music/world-jabali-breakbeat-of-africa-african-tribe-electronic-fusion-253188/)
  - `titre-2.mp3`, piste 1, « Bleu piscine » (Nayla Rivière) : [Summer Pop, par The_Mountain](https://pixabay.com/music/pop-summer-pop-593072/)
  - `titre-3.mp3`, piste 2, « Coulée » (Piton Club) : [Hip Hop Beat, par AtlasAudio](https://pixabay.com/music/alternative-hip-hop-hip-hop-beat-606262/)
  - `titre-4.mp3`, piste 3, « La case en tôle » (Les Tamarins) : [Indie Rock Music Grunge Nostalgia, par echoes_of_lumen](https://pixabay.com/music/rock-indie-rock-music-grunge-nostalgia-586980/)
  - `titre-5.mp3`, piste 4, « Tension basse » (Velours Mécanique) : [Dark Synthwave, par Kulakovka](https://pixabay.com/music/synthwave-dark-synthwave-624644/)
  - `titre-6.mp3`, piste 5, « Le col des Bœufs » (Isaure Delmas) : [The Beat of Nature, par folk_acoustic](https://pixabay.com/music/solo-guitar-the-beat-of-nature-122841/)
  - `titre-7.mp3`, piste 6, « Minuit vanille » (Saphir Nwar) : [Soul RnB, par The_Mountain](https://pixabay.com/music/beats-soul-rnb-618233/)
  - `titre-8.mp3`, piste 7, « Marée haute » (Orchestre du Lagon) : [Deep Ocean, par leberch](https://pixabay.com/music/modern-classical-deep-ocean-313741/)
