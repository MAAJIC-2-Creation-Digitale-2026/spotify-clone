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
    titre: 'Ti lampé',
    artiste: 'Lova Kaz',
    pochette: 'assets/img/pochettes/kabar-la-nuit.jpg',
    fichier: 'assets/audio/titre-1.mp3'
  },
  {
    titre: 'Bleu piscine',
    artiste: 'Nayla Rivière',
    pochette: 'assets/img/pochettes/bleu-piscine.jpg',
    fichier: 'assets/audio/titre-2.mp3'
  },
  {
    titre: 'Coulée',
    artiste: 'Piton Club',
    pochette: 'assets/img/pochettes/basalte.jpg',
    fichier: 'assets/audio/titre-3.mp3'
  },
  {
    titre: 'La case en tôle',
    artiste: 'Les Tamarins',
    pochette: 'assets/img/pochettes/les-fruits-du-jardin.jpg',
    fichier: 'assets/audio/titre-4.mp3'
  },
  {
    titre: 'Tension basse',
    artiste: 'Velours Mécanique',
    pochette: 'assets/img/pochettes/circuits-fragiles.jpg',
    fichier: 'assets/audio/titre-5.mp3'
  },
  {
    titre: 'Le col des Bœufs',
    artiste: 'Isaure Delmas',
    pochette: 'assets/img/pochettes/lettres-du-col.jpg ',
    fichier: 'assets/audio/titre-6.mp3'
  },
  {
    titre: 'Minuit vanille',
    artiste: 'Saphir Nwar',
    pochette: 'assets/img/pochettes/minuit-vanille.jpg',
    fichier: 'assets/audio/titre-7.mp3'
  },
  {
    titre: 'Marée haute',
    artiste: 'Orchestre du Lagon',
    pochette: 'assets/img/pochettes/marees.jpg',
    fichier: 'assets/audio/titre-8.mp3'
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
  const miniLecteur = document.querySelector('.mini-lecteur'); // Ajout pour le fond dynamique ← ici
  const boutonPlay = el('play');
  const progression = el('progression');
  const volume = el('volume');
  let numero = 0; // numéro de la piste en cours dans PISTES

  // Extrait la couleur moyenne de la pochette et l'assombrit pour le fond du mini-lecteur ← ici
  function majCouleurPochette(img) {
    if (!miniLecteur || !img || img.naturalWidth === 0) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1;
    canvas.height = 1;
    try {
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      const rSombre = Math.floor(r * 0.55);
      const gSombre = Math.floor(g * 0.55);
      const bSombre = Math.floor(b * 0.55);
      miniLecteur.style.setProperty('--bg-pochette', `rgb(${rSombre}, ${gSombre}, ${bSombre})`);
    } catch (e) {
      // Garde la couleur par défaut (#5a3d8a)
    }
  }

  // Écoute le chargement de chaque nouvelle pochette ← ici aussi
  if (el('pochette')) {
    el('pochette').addEventListener('load', () => majCouleurPochette(el('pochette')));
  }

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
      progression.style.setProperty('--avancement', progression.value + '%'); // variable CSS pour le style de la barre de progression
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