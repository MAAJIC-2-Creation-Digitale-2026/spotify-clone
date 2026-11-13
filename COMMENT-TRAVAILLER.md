# Spotify clone — comment on travaille (version téléphone)

On change de méthode : **on ne fait plus une page entière chacun·e**. Le site est découpé en **petits composants** (une carte, une barre, une ligne…). Chacun·e prend **un seul composant à la fois**, le termine, le livre, puis en prend un autre.

Pour l'instant, on ne fait **que la version téléphone (390 px)**. L'ordinateur viendra après.

---

## 1. C'est quoi, un composant ?

Un morceau de page qu'on fabrique **une fois** et qu'on **pose** dans les pages, autant de fois qu'on veut.

Exemple : la **carte** de playlist. On l'écrit une seule fois dans `components/carte.html`. La page d'accueil en pose 10, chacune avec un titre et une pochette différents.

Un composant = **2 fichiers à toi** + **1 fichier pour tester** :

| Fichier | À quoi il sert | Qui l'écrit |
|---|---|---|
| `components/carte.html` | le HTML du composant | **toi** |
| `css/carte.css` | le style du composant | **toi** |
| `dev/carte.html` | le **bac à sable** : ton composant tout seul, pour le voir pendant que tu codes | déjà fait, tu n'y touches pas |

Tu ne touches **que tes 2 fichiers**. Comme ça, personne ne modifie le même fichier en même temps (pas de conflit Git).

## 2. Les « trous » `{{…}}`

Dans un composant, ce qui change d'une carte à l'autre est écrit entre doubles accolades :

```html
<a class="carte" href="{{lien}}">
  <img class="carte-image" src="{{image}}" alt="">
  <h3 class="carte-titre">{{titre}}</h3>
  <p class="carte-texte">{{texte}}</p>
</a>
```

C'est la **page** qui remplit les trous, avec des attributs `data-…` :

```html
<div data-include="components/carte.html"
     data-titre="Chill du dimanche"
     data-texte="Des titres calmes pour finir la semaine."
     data-image="assets/img/pochettes/chill-du-dimanche.jpg"
     data-lien="playlist.html"></div>
```

`data-titre` remplit `{{titre}}`, `data-image` remplit `{{image}}`, etc. Le fichier `js/include.js` fait le remplacement tout seul.

Trou spécial : `{{contenu}}` reçoit **ce que la page a écrit entre les balises** de l'emplacement. C'est comme ça que la **rangée** reçoit ses cartes.

⚠ Ne supprime pas les `{{trous}}` de ton composant : sinon la page ne peut plus le remplir.

## 3. Ma façon de travailler, pas à pas

1. **Je choisis un ticket** au daily (post-it sur le tableau) : un seul à la fois. Les tickets sont les **issues GitHub #9 à #24** (T01 à T16), plus **#8** (T17) et **#30 à #32** (T18 à T20, page Premium). Pour aujourd'hui, on commence par T01, T02, T03, T06 et T07.
2. **Je m'assigne l'issue** sur GitHub : onglet *Issues* → j'ouvre mon ticket → *Assignees* → *Assign yourself*. Une issue déjà assignée à quelqu'un est prise.
3. **Je crée ma branche** dans VS Code (panneau Git, en bas à gauche : *main* → *Create new branch*) : `t03-carte` (numéro du ticket + nom du composant).
4. **J'ouvre mon bac à sable** : clic droit sur `dev/carte.html` → *Open with Live Server*. Puis F12 → mode appareil → largeur **390**.
5. **Je code** dans `components/carte.html` et `css/carte.css`. J'enregistre → le bac à sable se recharge.
6. **Je vérifie dans la vraie page** : `index.html` (la page où mon composant est posé est écrite en haut du bac à sable).
7. **Je coche les cases** de mon issue au fur et à mesure.
8. **Je livre** : commit (*« T03 carte : pochette, titre, texte »*) → *Publish Branch* / *Sync* → sur GitHub, *Compare & pull request* → j'écris `Closes #numéro-de-mon-issue` → le / la lead relit et fusionne.
9. **Je reviens sur `main`**, je fais *Sync* (pour récupérer le travail des autres), et je prends le ticket suivant.

## 4. Les règles

- **Un ticket à la fois.** On ne commence pas le suivant tant que le premier n'est pas livré.
- **Seulement tes 2 fichiers.** Besoin de changer une page, `tokens.css` ou `page-mobile.css` ? On demande au / à la lead.
- **Préfixe de classe** = nom du composant : tout ce qui est dans `carte.css` commence par `.carte`.
- **Les couleurs et tailles** : les variables de `css/tokens.css` (`var(--accent)`, `var(--texte-secondaire)`…).
- **Les contenus** (artistes, albums, titres, playlists, images, sons) sont dans la partie 6 du `README.md` : pas de vrais artistes.
- **Jamais de push sur `main`.** Toujours une branche + une Pull Request.
- **Bloqué·e plus de 10 minutes ?** On demande (voisin·e, lead, Amélie).

## 5. Ça ne s'affiche pas ?

| Ce que je vois | Pourquoi | Solution |
|---|---|---|
| Bandeau rouge « file:/// » | J'ai ouvert le fichier en double-cliquant | Clic droit → *Open with Live Server* |
| « Composant introuvable » | Faute dans le nom du fichier | Vérifier `components/` + nom exact, en minuscules |
| `{{titre}}` affiché tel quel | Le trou n'a pas le même nom que le `data-…` | `{{titre}}` ↔ `data-titre` (même mot) |
| Mon style ne s'applique pas | Le CSS n'est pas chargé ou la classe est mal écrite | Inspecter (F12) l'élément : la classe est-elle la même que dans le CSS ? |
| La page entière défile vers la droite | Un élément est plus large que l'écran | F12 → chercher l'élément qui dépasse (souvent une rangée sans `overflow-x: auto`) |
