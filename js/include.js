/* =========================================================
   include.js — OUTIL DE L'ÉQUIPE : ON N'Y TOUCHE PAS
   ---------------------------------------------------------
   Ce que fait ce script :
   il cherche dans la page toutes les balises qui ont
   l'attribut data-include="chemin/vers/composant.html",
   va chercher ce fichier, et remplace la balise par son contenu.

   Exemple dans index.html :
     <div data-include="components/sidebar.html"></div>
   devient, dans le navigateur :
     <aside class="sidebar"> ... tout le contenu de sidebar.html ... </aside>

   ⚠️ Ça ne marche PAS en ouvrant le fichier en double-clic
   (adresse en file:///). Il faut ouvrir la page avec
   Live Server (adresse en http://127.0.0.1...) ou sur GitHub Pages.
   ========================================================= */

// Fonction qui remplace chaque emplacement data-include par son composant
async function inclureComposants(zone) {
  // On récupère tous les emplacements de la zone (la page, ou un composant)
  const emplacements = zone.querySelectorAll('[data-include]');

  // On les traite un par un, dans l'ordre de la page
  for (const emplacement of emplacements) {
    // Le chemin du fichier à inclure, ex. "components/sidebar.html"
    const chemin = emplacement.getAttribute('data-include');

    try {
      // On demande le fichier au serveur
      const reponse = await fetch(chemin);

      // Si le serveur répond « introuvable » (erreur 404 par ex.), on s'arrête
      if (!reponse.ok) {
        throw new Error('erreur ' + reponse.status);
      }

      // On lit le contenu du fichier comme du texte HTML
      const html = await reponse.text();

      // On le transforme en vraies balises grâce à un <template>
      const modele = document.createElement('template');
      modele.innerHTML = html;

      // Un composant peut lui-même contenir des data-include : on les traite aussi
      await inclureComposants(modele.content);

      // On remplace l'emplacement par les balises du composant
      emplacement.replaceWith(modele.content);
    } catch (erreur) {
      // En cas de problème, on affiche un message visible à la place du composant
      afficherErreur(emplacement, chemin, erreur);
    }
  }
}

// Message d'erreur affiché dans la page (plus visible que la console)
function afficherErreur(emplacement, chemin, erreur) {
  const conseil = 'Vérifie le nom du fichier et son chemin dans data-include.';

  emplacement.innerHTML =
    '<p style="padding:12px;border:2px dashed #e22134;color:#e22134;font-family:sans-serif;">' +
    '⚠️ Composant non chargé : <strong>' + chemin + '</strong><br>' + conseil +
    '</p>';

  console.error('[include.js] ' + chemin + ' : ' + erreur.message);
}

// Bandeau affiché en haut de la page si elle est ouverte en double-clic (file:///)
function afficherBandeauFile() {
  const bandeau = document.createElement('p');
  bandeau.style.cssText =
    'position:fixed;inset:0 0 auto 0;z-index:9999;margin:0;padding:16px;' +
    'background:#e22134;color:#fff;font:16px/1.4 sans-serif;text-align:center;';
  bandeau.textContent =
    '⚠️ Page ouverte en file:/// : les composants ne peuvent pas se charger. ' +
    'Dans VS Code, clic droit sur le fichier → Open with Live Server.';
  document.body.prepend(bandeau);
}

// Si la page est ouverte en file:///, on prévient et on s'arrête là
if (window.location.protocol === 'file:') {
  afficherBandeauFile();
} else {
  lancer();
}

// On lance le tout. Quand c'est fini, on prévient la page avec l'évènement
// « composants-charges » (utile si on ajoute du JavaScript plus tard,
// par ex. pour faire marcher le bouton play du lecteur).
function lancer() {
  inclureComposants(document).then(function () {
    document.dispatchEvent(new Event('composants-charges'));
  });
}
