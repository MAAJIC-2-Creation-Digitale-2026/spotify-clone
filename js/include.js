/* =====================================================================
   include.js — pose les composants dans la page (version « petits composants »)
   ---------------------------------------------------------------------
   1. Un emplacement :
        <div data-include="components/carte.html"
             data-titre="Chill du dimanche"
             data-image="assets/img/pochettes/chill-du-dimanche.jpg"></div>

   2. Dans le composant, les {{trous}} sont remplis avec les data-… :
        <h3 class="carte-titre">{{titre}}</h3>   →   Chill du dimanche

   3. Le trou spécial {{contenu}} reçoit ce qu'on a écrit ENTRE les balises
      de l'emplacement (ex. : une rangée qui contient des cartes).

   4. Un composant peut contenir d'autres composants : tout est chargé.

   5. Quand tout est chargé, la page reçoit l'évènement « composants-charges »
      (js/player.js l'attend pour brancher le lecteur).

   ⚠ Ne marche pas en double-cliquant sur le fichier (file:///) :
     ouvrir avec Live Server (clic droit → Open with Live Server).
   ===================================================================== */

(function () {
  "use strict";

  // data-image-ronde → dataset.imageRonde
  function enCamel(nom) {
    return nom.replace(/-([a-z])/g, (m, l) => l.toUpperCase());
  }

  function bandeau(message) {
    const p = document.createElement("p");
    p.textContent = message;
    p.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:9999;margin:0;padding:12px;" +
      "background:#c0392b;color:#fff;font:600 14px/1.4 sans-serif;text-align:center";
    document.body.prepend(p);
  }

  async function chargerUn(bloc) {
    const url = bloc.getAttribute("data-include");
    let html;
    try {
      const reponse = await fetch(url, { cache: "no-cache" });
      if (!reponse.ok) throw new Error("erreur " + reponse.status);
      html = await reponse.text();
    } catch (e) {
      console.error("[include.js] Composant introuvable :", url, e);
      html =
        '<p style="color:#ff6b6b;border:1px dashed #ff6b6b;padding:8px;font-size:12px">' +
        "Composant introuvable : " + url + "</p>";
    }

    const contenu = bloc.innerHTML;
    html = html.replace(/\{\{\s*([\w-]+)\s*\}\}/g, (m, nom) => {
      if (nom === "contenu") return contenu;
      const valeur = bloc.dataset[enCamel(nom)];
      return valeur === undefined ? "" : valeur;
    });

    const modele = document.createElement("template");
    modele.innerHTML = html;
    bloc.replaceWith(modele.content);
  }

  async function toutCharger() {
    // On prend toujours le PREMIER emplacement de la page, jusqu'à ce qu'il n'y en ait plus.
    // (Les composants rangés dans un autre composant sont donc chargés aussi.)
    let garde = 0;
    let bloc;
    while ((bloc = document.querySelector("[data-include]")) && garde < 500) {
      await chargerUn(bloc);
      garde++;
    }
    if (garde >= 500) console.warn("[include.js] Plus de 500 composants : un composant s'inclut lui-même ?");
  }

  async function demarrer() {
    if (location.protocol === "file:") {
      bandeau("Les composants ne s'affichent pas en file:/// — ouvre la page avec Live Server (clic droit → Open with Live Server).");
      return;
    }
    await toutCharger();
    document.dispatchEvent(new Event("composants-charges"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", demarrer, { once: true });
  } else {
    demarrer();
  }
})();
