# Spotify clone — les tickets (version téléphone, 390 px)

Un ticket = **un petit composant**. On en prend **un seul à la fois**. Pour le prendre : copier son titre et son bloc dans une nouvelle issue GitHub, s'assigner, créer la branche `tXX-nom` (voir `COMMENT-TRAVAILLER.md`).

Chaque ticket a **5 cases**. Une case compte quand elle est cochée **et** fusionnée dans `main`.

Maquette : les captures de l'appli dans le dossier `maquette/telephone/` (accueil, sidebar, rechercher, bibliothèque, premium, créer). Mesures : `maquette/releve-mesures-telephone.md`. Contenus : la Google Sheet de l'équipe.

## Par où commencer

| Priorité | Tickets | Pourquoi |
|---|---|---|
| **1 — aujourd'hui** | T01 nav-bas · T02 barre-haut · T03 carte · T06 ligne-titre · T07 mini-lecteur | Indépendants les uns des autres : 5 personnes peuvent travailler en même temps. Ensemble, ils font déjà ressembler l'accueil à Spotify. |
| 2 | T04 rangée (après T03) · T05 carte-artiste | Finissent la page d'accueil. |
| 3 | T08 recherche-entete · T09 tuile-genre · T10 biblio-entete · T11 element-biblio | Pages Rechercher et Bibliothèque. |
| 4 | T12 playlist-entete · T13 playlist-actions · T14 connexion-form · T15 offre-premium | Pages Playlist, Connexion, Premium. |
| Bonus | T16 menu-creer | Pour qui a fini. |

Toutes les pages ont déjà leurs emplacements (`data-include`) : dès qu'un composant est fusionné, il apparaît tout seul dans les pages.

---

## T01 — Barre de navigation du bas

**Titre de l'issue :** `[T01 nav-bas] Barre de navigation du bas (téléphone)`

```markdown
**Fichiers :** `components/nav-bas.html`, `css/nav-bas.css` · **Bac à sable :** `dev/nav-bas.html`
**Posé dans :** toutes les pages (en bas) · **Maquette :** `telephone/01-sidebar.png`, `04-bibliotheque-page-entiere.png` (tout en bas)
**Dépend de :** rien

### Tâches
- [ ] HTML : une liste `<ul>` de 5 liens (Accueil, Rechercher, Bibliothèque, Premium, Créer), chacun avec une icône Font Awesome (`aria-hidden="true"`) et un texte
- [ ] Les 5 liens côte à côte, de même largeur (Flexbox), `list-style: none`
- [ ] Dans chaque lien : l'icône AU-DESSUS du texte, texte 11 px, gris
- [ ] Fond en dégradé : du transparent (en haut) au noir (en bas), hauteur ≈ 64 px
- [ ] Le lien de la page en cours est blanc (`data-actif` + sélecteur d'attribut)

### C'est fini quand
Sur chaque page, la barre du bas montre la bonne page en blanc et chaque lien mène à sa page.

Notions : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [linear-gradient](https://www.w3schools.com/css/css3_gradients.asp) · [sélecteurs d'attribut](https://www.w3schools.com/css/css_attribute_selectors.asp)
```

---

## T02 — Barre du haut : avatar + filtres

**Titre de l'issue :** `[T02 barre-haut] Avatar et filtres en pilules (accueil, téléphone)`

```markdown
**Fichiers :** `components/barre-haut.html`, `css/barre-haut.css` · **Bac à sable :** `dev/barre-haut.html`
**Posé dans :** `index.html` (en haut) · **Maquette :** `telephone/02-accueil-page-entiere.png` (tout en haut)
**Dépend de :** rien

### Tâches
- [ ] HTML : l'avatar (un lien vers `connexion.html` avec `aria-label`) + 4 boutons filtres : Tout · Musique · Podcasts · Livres audio
- [ ] Avatar rond 32 px, fond vert `--accent`, initiale noire en gras, centrée
- [ ] Filtres en pilules : 32 px de haut, fond `--fond-pilule`, texte blanc 14 px, sans bordure, 8 px entre eux
- [ ] Filtre actif (« Tout ») : fond vert, texte noir (`barre-haut-filtre--actif` + `aria-pressed="true"`)
- [ ] Avatar et filtres sur une seule ligne ; si ça dépasse, les filtres défilent à l'horizontale (pas la page)

### C'est fini quand
La barre ressemble au haut de la capture et la page ne défile pas vers la droite à 390 px.

Notions : [border-radius](https://www.w3schools.com/css/css3_borders_rounded.asp) · [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [overflow](https://www.w3schools.com/css/css_overflow.asp)
```

---

## T03 — Carte de playlist

**Titre de l'issue :** `[T03 carte] Carte de playlist (téléphone)`

```markdown
**Fichiers :** `components/carte.html`, `css/carte.css` · **Bac à sable :** `dev/carte.html`
**Posé dans :** `index.html`, dans les rangées « Conçu pour toi » et « Tes playlists » · **Maquette :** `telephone/02-accueil-page-entiere.png`
**Trous :** `{{image}}` `{{titre}}` `{{texte}}` `{{lien}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : un lien `.carte` qui contient la pochette (`<img>`), le titre (`<h3>`) et la description (`<p>`), avec les 4 trous
- [ ] Carte de 150 px de large, qui ne rétrécit pas (`flex-shrink: 0`), sans soulignement
- [ ] Pochette carrée 150 × 150 (`aspect-ratio`, `object-fit: cover`), coins 4 px
- [ ] Titre blanc 14 px gras · description grise `--texte-secondaire` 13 px
- [ ] La description s'arrête à 2 lignes avec « … » (`-webkit-line-clamp`)

### C'est fini quand
Dans le bac à sable, les 2 cartes ont la même taille, même avec des descriptions de longueurs différentes.

Notions : [object-fit](https://www.w3schools.com/css/css3_object-fit.asp) · [aspect-ratio](https://www.w3schools.com/cssref/css_pr_aspect-ratio.php) · [text-overflow](https://www.w3schools.com/cssref/css3_pr_text-overflow.php)
```

---

## T04 — Rangée de cartes qui défile

**Titre de l'issue :** `[T04 rangee] Section avec une rangée de cartes qui défile (téléphone)`

```markdown
**Fichiers :** `components/rangee.html`, `css/rangee.css` · **Bac à sable :** `dev/rangee.html`
**Posé dans :** `index.html` (3 rangées) · **Maquette :** `telephone/02-accueil-page-entiere.png`
**Trous :** `{{titre}}` + `{{contenu}}` (les cartes, écrites par la page)
**Dépend de :** T03 (on peut commencer avant : les cartes s'affichent en texte)

### Tâches
- [ ] HTML : une `<section class="rangee">` avec un `<h2>` (`{{titre}}`) et un `<div class="rangee-liste">` qui contient `{{contenu}}`
- [ ] Titre 20 px gras, 12 px au-dessus des cartes
- [ ] Les cartes côte à côte (Flexbox), 14 px entre elles
- [ ] La rangée défile à l'horizontale (`overflow-x: auto`) ; la 3e carte est coupée par le bord de l'écran
- [ ] Bonus soigné : barre de défilement cachée + cartes « aimantées » (`scroll-snap`)

### C'est fini quand
Sur l'accueil à 390 px, on fait défiler chaque rangée au doigt (ou à la molette + Maj) et la page elle-même ne bouge pas à l'horizontale.

Notions : [overflow](https://www.w3schools.com/css/css_overflow.asp) · [gap](https://www.w3schools.com/cssref/css3_pr_gap.php) · [scroll-snap](https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-type)
```

---

## T05 — Carte d'artiste

**Titre de l'issue :** `[T05 carte-artiste] Carte d'artiste avec photo ronde (téléphone)`

```markdown
**Fichiers :** `components/carte-artiste.html`, `css/carte-artiste.css` · **Bac à sable :** `dev/carte-artiste.html`
**Posé dans :** `index.html`, rangée « Artistes populaires » · **Maquette :** `telephone/02-accueil-page-entiere.png`
**Trous :** `{{image}}` `{{nom}}` `{{lien}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : un lien `.carte-artiste` avec la photo (`<img>`) et le nom (`<h3>`), avec les 3 trous
- [ ] Carte de 150 px de large qui ne rétrécit pas
- [ ] Photo ronde 150 × 150 (`border-radius: 50%`, `object-fit: cover`)
- [ ] Nom blanc 14 px, centré sous la photo, 8 px au-dessus
- [ ] Au toucher / survol (`:active`, `:hover`) : la photo s'éclaircit un peu (`opacity` ou `filter`)

### C'est fini quand
La rangée « Artistes populaires » montre 6 ronds alignés avec leur nom dessous.

Notions : [border-radius](https://www.w3schools.com/css/css3_borders_rounded.asp) · [text-align](https://www.w3schools.com/css/css_text_align.asp)
```

---

## T06 — Ligne d'un titre

**Titre de l'issue :** `[T06 ligne-titre] Ligne d'un titre : pochette, titre, artiste (téléphone)`

```markdown
**Fichiers :** `components/ligne-titre.html`, `css/ligne-titre.css` · **Bac à sable :** `dev/ligne-titre.html`
**Posé dans :** `index.html` (« Lancer la lecture ») et `playlist.html` (8 lignes) · **Maquette :** `telephone/02-accueil-page-entiere.png` (« Lancer la lecture »)
**Trous :** `{{image}}` `{{titre}}` `{{artiste}}` `{{piste}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : pochette, un bloc avec titre + artiste, un bouton « ⋮ » avec `aria-label` (garder `data-piste="{{piste}}"` sur la ligne)
- [ ] Ligne en Flexbox, ≈ 56 px de haut ; pochette 48 × 48 ; 12 px entre la pochette et les textes
- [ ] Titre blanc 16 px · artiste gris `--texte-secondaire` 14 px
- [ ] Un titre trop long s'arrête avec « … » sans casser la ligne (`text-overflow: ellipsis`, `min-width: 0`)
- [ ] Bouton « ⋮ » collé à droite, gris, sans fond ni bordure ; `:active` sur la ligne : fond `--fond-actif`

### C'est fini quand
Les 8 lignes de `playlist.html` sont alignées à 390 px et un clic sur une des 3 premières lance le morceau.

Notions : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [text-overflow](https://www.w3schools.com/cssref/css3_pr_text-overflow.php) · [button](https://www.w3schools.com/tags/tag_button.asp)
```

---

## T07 — Mini-lecteur

**Titre de l'issue :** `[T07 mini-lecteur] Mini-lecteur au-dessus de la barre du bas (téléphone)`

```markdown
**Fichiers :** `components/mini-lecteur.html`, `css/mini-lecteur.css`, la liste `PISTES` de `js/player.js` · **Bac à sable :** `dev/mini-lecteur.html`
**Posé dans :** toutes les pages (en bas, au-dessus de la barre de navigation) · **Maquette :** le mini-lecteur de l'appli Spotify
**Dépend de :** rien (les mp3 et pochettes de la Sheet pour que la musique marche)

### Tâches
- [ ] Garder TOUS les `data-player` du HTML fourni ; ajouter l'icône play dans le bouton
- [ ] Bandeau en Flexbox ≈ 56 px de haut, marges 8 px sur les côtés, coins arrondis 8 px, fond sombre coloré
- [ ] Pochette 40 × 40 · titre blanc 14 px gras · artiste 12 px gris ; texte trop long → « … »
- [ ] Bouton play à droite, icône blanche ≈ 24 px, sans fond
- [ ] Barre de progression très fine (2 px) collée en bas du bandeau (`position: absolute`)

### C'est fini quand
Sur `index.html`, un clic sur play lance un morceau, le titre et la pochette changent, la barre avance.

Notions : [position](https://www.w3schools.com/css/css_positioning.asp) · [input range](https://www.w3schools.com/tags/att_input_type_range.asp) · [accent-color](https://www.w3schools.com/cssref/css_pr_accent-color.php)
```

---

## T08 — En-tête de la page Rechercher

**Titre de l'issue :** `[T08 recherche-entete] Titre « Rechercher » et champ de recherche (téléphone)`

```markdown
**Fichiers :** `components/recherche-entete.html`, `css/recherche-entete.css` · **Bac à sable :** `dev/recherche-entete.html`
**Posé dans :** `recherche.html` (en haut) · **Maquette :** `telephone/03-rechercher-page-entiere.png`
**Dépend de :** rien

### Tâches
- [ ] HTML : avatar + `<h1>` « Rechercher » + bouton appareil photo (`aria-label`) sur une ligne
- [ ] Un `<form role="search">` avec une loupe et un `<input type="search">` (`placeholder` « Que souhaitez-vous écouter ? », `aria-label`)
- [ ] Titre 24 px gras ; bouton photo poussé à droite (`margin-left: auto`)
- [ ] Champ 48 px de haut, fond BLANC, texte noir 16 px, coins 6 px, toute la largeur
- [ ] Loupe noire posée dans le champ, à gauche (`position: absolute`) ; `:focus-visible` bien visible

### C'est fini quand
Le haut de `recherche.html` ressemble à la capture et on peut taper dans le champ.

Notions : [formulaires](https://www.w3schools.com/html/html_forms.asp) · [input search](https://www.w3schools.com/tags/att_input_type_search.asp) · [position](https://www.w3schools.com/css/css_positioning.asp)
```

---

## T09 — Tuile de genre

**Titre de l'issue :** `[T09 tuile-genre] Tuiles colorées « Parcourir tout » (téléphone)`

```markdown
**Fichiers :** `components/tuile-genre.html`, `css/tuile-genre.css` · **Bac à sable :** `dev/tuile-genre.html`
**Posé dans :** `recherche.html` (8 tuiles) · **Maquette :** `telephone/03-rechercher-page-entiere.png`
**Trous :** `{{titre}}` `{{couleur}}` `{{image}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : un lien `.tuile-genre` (garder le `style` avec `{{couleur}}`), un `<h3>` et une `<img>`
- [ ] Tuile ≈ 100 px de haut, coins 6 px, titre blanc 16 px gras en haut à gauche
- [ ] Pochette ≈ 64 px en bas à droite, penchée (`transform: rotate(25deg)`)
- [ ] La pochette dépasse un peu et se fait couper (`overflow: hidden` sur la tuile)
- [ ] `.grille-genres` : 2 colonnes égales, 12 px d'écart (CSS Grid)

### C'est fini quand
`recherche.html` montre 8 tuiles de couleurs différentes sur 2 colonnes.

Notions : [CSS Grid](https://www.w3schools.com/css/css_grid.asp) · [transform](https://www.w3schools.com/css/css3_2dtransforms.asp) · [overflow](https://www.w3schools.com/css/css_overflow.asp)
```

---

## T10 — En-tête de la Bibliothèque

**Titre de l'issue :** `[T10 biblio-entete] Titre, filtres et tri de la Bibliothèque (téléphone)`

```markdown
**Fichiers :** `components/biblio-entete.html`, `css/biblio-entete.css` · **Bac à sable :** `dev/biblio-entete.html`
**Posé dans :** `bibliotheque.html` (en haut) · **Maquette :** `telephone/04-bibliotheque-page-entiere.png`
**Dépend de :** rien

### Tâches
- [ ] Ligne 1 : avatar + `<h1>` « Bibliothèque » + boutons loupe et « + » à droite (`aria-label`)
- [ ] Ligne 2 : filtres en pilules « Playlists » et « Artistes » (32 px, fond `--fond-pilule`, 8 px d'écart)
- [ ] Ligne 3 : bouton de tri « Récents » à gauche, bouton « grille » à droite
- [ ] Titre 24 px gras, avatar rond 32 px vert
- [ ] Les 3 lignes l'une sous l'autre avec un espace régulier (Flexbox en colonne + `gap`)

### C'est fini quand
Le haut de `bibliotheque.html` ressemble à la capture.

Notions : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [button](https://www.w3schools.com/tags/tag_button.asp)
```

---

## T11 — Élément de la Bibliothèque

**Titre de l'issue :** `[T11 element-biblio] Élément de la liste de la Bibliothèque (téléphone)`

```markdown
**Fichiers :** `components/element-biblio.html`, `css/element-biblio.css` · **Bac à sable :** `dev/element-biblio.html`
**Posé dans :** `bibliotheque.html` (8 éléments) · **Maquette :** `telephone/04-bibliotheque-page-entiere.png`
**Trous :** `{{image}}` `{{titre}}` `{{type}}` `{{forme}}` `{{lien}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : un lien avec l'image et un bloc titre + type (garder la classe `element-biblio--{{forme}}`)
- [ ] Flexbox, image 64 × 64, 12 px entre l'image et les textes, 8 px au-dessus et au-dessous
- [ ] Titre blanc 16 px · type gris 14 px ; texte trop long → « … »
- [ ] Playlist : image carrée coins 4 px · Artiste : image ronde (`.element-biblio--ronde`)
- [ ] `:active` / `:hover` : fond `--fond-actif`, coins arrondis

### C'est fini quand
`bibliotheque.html` montre 8 éléments alignés, les artistes en rond, les playlists en carré.

Notions : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [border-radius](https://www.w3schools.com/css/css3_borders_rounded.asp)
```

---

## T12 — En-tête de la playlist

**Titre de l'issue :** `[T12 playlist-entete] Haut de la page playlist en dégradé (téléphone)`

```markdown
**Fichiers :** `components/playlist-entete.html`, `css/playlist-entete.css` · **Bac à sable :** `dev/playlist-entete.html`
**Posé dans :** `playlist.html` (en haut) · **Maquette :** une page de playlist dans l'appli Spotify
**Trous :** `{{image}}` `{{titre}}` `{{couleur}}` `{{createur}}` `{{infos}}`
**Dépend de :** rien

### Tâches
- [ ] HTML : bouton retour (lien vers `index.html`, `aria-label`), pochette, `<h1>`, créateur, infos (garder le `style` avec `--couleur`)
- [ ] Fond en dégradé de `var(--couleur)` (en haut) vers `#121212` (en bas)
- [ ] Pochette ≈ 240 × 240, centrée, avec une ombre (`box-shadow`)
- [ ] Titre 24 px gras · créateur 14 px blanc gras · infos 14 px gris
- [ ] Le dégradé touche les bords de l'écran (marges négatives ou padding)

### C'est fini quand
Le haut de `playlist.html` a la couleur de la pochette et ressemble à l'appli.

Notions : [linear-gradient](https://www.w3schools.com/css/css3_gradients.asp) · [variables CSS](https://www.w3schools.com/css/css3_variables.asp) · [box-shadow](https://www.w3schools.com/css/css3_shadows_box.asp)
```

---

## T13 — Barre d'actions de la playlist

**Titre de l'issue :** `[T13 playlist-actions] Boutons et gros bouton play vert (téléphone)`

```markdown
**Fichiers :** `components/playlist-actions.html`, `css/playlist-actions.css` · **Bac à sable :** `dev/playlist-actions.html`
**Posé dans :** `playlist.html` (sous l'en-tête) · **Maquette :** une page de playlist dans l'appli Spotify
**Dépend de :** rien

### Tâches
- [ ] HTML : à gauche 3 boutons-icônes (ajouter, télécharger, options) ; à droite aléatoire + gros bouton play (`data-piste="0"`) ; tous avec `aria-label`
- [ ] Les deux groupes aux deux bouts (`justify-content: space-between`), centrés verticalement
- [ ] Icônes grises 24 px, sans fond ni bordure, 16 px d'écart
- [ ] Bouton play : rond 56 × 56, fond vert `--accent`, triangle noir centré
- [ ] Au survol / toucher, le bouton play grossit un peu (`transform: scale(1.05)` + `transition`)

### C'est fini quand
Un clic sur le gros bouton vert lance le premier morceau.

Notions : [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) · [transition](https://www.w3schools.com/css/css3_transitions.asp)
```

---

## T14 — Formulaire de connexion

**Titre de l'issue :** `[T14 connexion-form] Formulaire de connexion (téléphone)`

```markdown
**Fichiers :** `components/connexion-form.html`, `css/connexion-form.css` · **Bac à sable :** `dev/connexion-form.html`
**Posé dans :** `connexion.html` · **Maquette :** la page de connexion de Spotify en mode appareil (390 px)
**Dépend de :** rien

### Tâches
- [ ] HTML : logo, `<h1>`, 2 champs avec `<label for>` reliés à leur `<input id>`, types `email` et `password`, `required`
- [ ] Bouton `type="submit"` « Se connecter » + lien « Mot de passe oublié ? »
- [ ] Champs 48 px de haut, fond sombre, bordure grise 1 px, coins 4 px, toute la largeur
- [ ] `:focus-visible` sur les champs : bordure blanche bien visible
- [ ] Bouton pilule verte, texte noir gras, toute la largeur

### C'est fini quand
Le formulaire refuse un e-mail mal écrit et s'affiche bien à 390 px.

Notions : [formulaires](https://www.w3schools.com/html/html_forms.asp) · [label](https://www.w3schools.com/tags/tag_label.asp) · [:focus](https://www.w3schools.com/cssref/sel_focus.php)
```

---

## T15 — Carte d'offre Premium

**Titre de l'issue :** `[T15 offre-premium] Cartes d'offre de la page Premium (téléphone)`

```markdown
**Fichiers :** `components/offre-premium.html`, `css/offre-premium.css` · **Bac à sable :** `dev/offre-premium.html`
**Posé dans :** `premium.html` (2 offres) · **Maquette :** `telephone/05-premium-page-entiere.png`
**Trous :** `{{nom}}` `{{prix}}` `{{couleur}}` + `{{contenu}}` (les avantages, écrits par la page)
**Dépend de :** rien

### Tâches
- [ ] HTML : `<article>` avec étiquette Premium, `<h2>` du nom, prix, `<ul>` qui contient `{{contenu}}`, bouton « Essayer »
- [ ] Carte fond #242424, coins 8 px, padding 16 px
- [ ] Nom 24 px gras de la couleur `var(--couleur)` ; prix 14 px
- [ ] Avantages : liste simple 14 px, trait fin gris au-dessus
- [ ] Bouton pilule de la couleur `var(--couleur)`, texte noir gras, toute la largeur

### C'est fini quand
`premium.html` montre 2 offres de couleurs différentes, comme sur la capture.

Notions : [listes](https://www.w3schools.com/html/html_lists.asp) · [variables CSS](https://www.w3schools.com/css/css3_variables.asp)
```

---

## T16 — Menu « Créer » (bonus)

**Titre de l'issue :** `[T16 menu-creer] Menu « Créer » (bonus, téléphone)`

```markdown
**Fichiers :** `components/menu-creer.html`, `css/menu-creer.css` · **Bac à sable :** `dev/menu-creer.html`
**Posé dans :** pas encore (bonus) · **Maquette :** `telephone/06-creer-modal.png`
**Dépend de :** T01 pour le super bonus

### Tâches
- [ ] HTML : une poignée + 3 lignes (Playlist, Playlist collaborative, Blend), chacune avec icône ronde, titre et phrase
- [ ] Panneau fond #282828, coins 12 px en haut seulement
- [ ] Poignée 40 × 4 px grise centrée
- [ ] Rond 48 px fond #3e3e3e avec l'icône ; titre blanc 16 px gras, phrase grise 14 px
- [ ] Super bonus : l'ouvrir dans un `<dialog>` avec le bouton « Créer » de la barre du bas

### C'est fini quand
Le menu ressemble à la capture dans son bac à sable.

Notions : [dialog](https://www.w3schools.com/tags/tag_dialog.asp) · [border-radius](https://www.w3schools.com/css/css3_borders_rounded.asp)
```
