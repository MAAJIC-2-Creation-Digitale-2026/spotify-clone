/* =========================================================
   player.js — FAIT MARCHER LE LECTEUR (outil de l'équipe)
   ---------------------------------------------------------
   La SEULE partie à modifier : la liste PISTES juste en dessous
   (vos titres, artistes, pochettes et fichiers mp3).
   Le reste, on n'y touche pas.

   Le script retrouve les éléments du lecteur grâce aux
   attributs data-player (voir components/player.html).
   Bonus : dans la page playlist, une ligne du tableau avec
   data-piste="0" lance la piste n°0 quand on clique dessus.
   ========================================================= */

const PISTES = [
  {
    titre: 'Titre 1',
    artiste: 'Artiste 1',
    pochette: 'assets/img/pochettes/album-1.jpg',
    fichier: 'assets/audio/titre-1.mp3'
  },
  {
    titre: 'Titre 2',
    artiste: 'Artiste 2',
    pochette: 'assets/img/pochettes/album-2.jpg',
    fichier: 'assets/audio/titre-2.mp3'
  },
  {
    titre: 'Titre 3',
    artiste: 'Artiste 3',
    pochette: 'assets/img/pochettes/album-3.jpg',
    fichier: 'assets/audio/titre-3.mp3'
  }
];

/* ---------- À partir d'ici : on ne touche plus ---------- */

// Le lecteur n'existe qu'une fois les composants chargés par include.js
document.addEventListener('composants-charges', demarrerLecteur);

function demarrerLecteur() {
  // Raccourci : trouve l'élément qui a data-player="nom"
  const el = (nom) => document.querySelector('[data-player="' + nom + '"]');

  const audio = el('audio');
  if (!audio) return; // pas de lecteur sur cette page (ex. connexion)

  const lecteur = document.querySelector('.player');
  const boutonPlay = el('play');
  const progression = el('progression');
  const volume = el('volume');
  let numero = 0; // numéro de la piste en cours dans PISTES

  // Charge une piste : fichier audio + titre, artiste, pochette affichés
  function chargerPiste(n) {
    numero = (n + PISTES.length) % PISTES.length; // après la dernière, on revient à la 1re
    const piste = PISTES[numero];
    audio.src = piste.fichier;
    if (el('titre')) el('titre').textContent = piste.titre;
    if (el('artiste')) el('artiste').textContent = piste.artiste;
    if (el('pochette')) el('pochette').src = piste.pochette;
  }

  // Transforme des secondes en texte « 2:05 »
  function formaterTemps(secondes) {
    if (isNaN(secondes)) return '0:00';
    const min = Math.floor(secondes / 60);
    const sec = Math.floor(secondes % 60);
    return min + ':' + String(sec).padStart(2, '0');
  }

  // Lance la lecture ; si le mp3 manque, on l'écrit clairement dans la console
  function jouer() {
    audio.play().catch(() => {
      console.error('[player.js] Impossible de lire « ' + PISTES[numero].fichier +
        ' » : vérifie que le fichier existe et que son nom est le même que dans PISTES.');
    });
  }

  // Lecture ou pause selon l'état actuel
  function basculerLecture() {
    if (audio.paused) {
      jouer();
    } else {
      audio.pause();
    }
  }

  // Met l'icône et la classe à jour quand la lecture démarre ou s'arrête
  function majEtat() {
    const enLecture = !audio.paused;
    if (lecteur) lecteur.classList.toggle('est-en-lecture', enLecture);
    if (boutonPlay) {
      const icone = boutonPlay.querySelector('i');
      if (icone) {
        icone.classList.toggle('fa-play', !enLecture);
        icone.classList.toggle('fa-pause', enLecture);
      }
      boutonPlay.setAttribute('aria-label', enLecture ? 'Pause' : 'Lecture');
    }
  }

  // Change de piste et relance la lecture
  function changerPiste(n) {
    chargerPiste(n);
    jouer();
  }

  // --- Branchement des boutons ---
  if (boutonPlay) boutonPlay.addEventListener('click', basculerLecture);
  if (el('suivant')) el('suivant').addEventListener('click', () => changerPiste(numero + 1));
  if (el('precedent')) el('precedent').addEventListener('click', () => changerPiste(numero - 1));

  // --- Barre de progression ---
  audio.addEventListener('loadedmetadata', () => {
    if (el('duree')) el('duree').textContent = formaterTemps(audio.duration);
  });
  audio.addEventListener('timeupdate', () => {
    if (el('temps')) el('temps').textContent = formaterTemps(audio.currentTime);
    if (progression && audio.duration) {
      progression.value = (audio.currentTime / audio.duration) * 100;
    }
  });
  if (progression) {
    progression.min = 0;
    progression.max = 100;
    // Quand on déplace le curseur, on avance ou recule dans le morceau
    progression.addEventListener('input', () => {
      if (audio.duration) audio.currentTime = (progression.value / 100) * audio.duration;
    });
  }

  // --- Volume ---
  if (volume) {
    audio.volume = volume.value;
    volume.addEventListener('input', () => { audio.volume = volume.value; });
  }

  // --- Mise à jour de l'icône, et piste suivante à la fin du morceau ---
  audio.addEventListener('play', majEtat);
  audio.addEventListener('pause', majEtat);
  audio.addEventListener('ended', () => changerPiste(numero + 1));

  // --- Bonus : clic sur une ligne de la playlist (data-piste="0", "1"…) ---
  document.querySelectorAll('[data-piste]').forEach((ligne) => {
    ligne.addEventListener('click', () => changerPiste(Number(ligne.dataset.piste)));
  });

  // On prépare la première piste (sans la lancer)
  chargerPiste(0);
  majEtat();
}
