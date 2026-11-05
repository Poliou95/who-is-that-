// Déroulement du jeu « Destins » : écrans, chrono, score, vies et records.
(function () {
  var DUREE = 45;              // secondes par personnalité
  var TAILLE_CLASSIQUE = 10;   // personnalités par partie classique
  var VIES = 3;                // vies en Marathon

  var $ = function (id) { return document.getElementById(id); };
  var ecrans = { accueil: $("ecran-accueil"), jeu: $("ecran-jeu"), fin: $("ecran-fin") };

  var partie = null;   // état de la partie en cours
  var minuteur = null; // identifiant de requestAnimationFrame
  var delaiMessage = null;

  // ---------- Records (stockés sur l'appareil) ----------
  function cleRecord(niveau, mode) { return "destins.record." + niveau + "." + mode; }
  function lireRecord(niveau, mode) {
    try { return parseInt(localStorage.getItem(cleRecord(niveau, mode)), 10) || 0; } catch (e) { return 0; }
  }
  function ecrireRecord(niveau, mode, score) {
    try { localStorage.setItem(cleRecord(niveau, mode), String(score)); } catch (e) { /* stockage indisponible */ }
  }

  // ---------- Écrans ----------
  function montrer(nom) {
    Object.keys(ecrans).forEach(function (k) { ecrans[k].hidden = k !== nom; });
  }

  function choix(nom) { return document.querySelector('input[name="' + nom + '"]:checked').value; }

  function majAccueil() {
    var niveau = choix("niveau"), mode = choix("mode");
    var n = window.PERSONNALITES[niveau].length;
    $("aide-niveau").textContent = Langue.t({ facile: "aideFacile", difficile: "aideDifficile", expert: "aideExpert" }[niveau], { n: n });
    $("aide-mode").textContent = Langue.t(mode === "classique" ? "aideClassique" : "aideMarathon", { n: n });
    $("record-accueil").textContent = lireRecord(niveau, mode);
  }

  // ---------- Partie ----------
  function melanger(liste) {
    var t = liste.slice();
    for (var i = t.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = t[i]; t[i] = t[j]; t[j] = x;
    }
    return t;
  }

  function demarrer() {
    var niveau = choix("niveau"), mode = choix("mode");
    var ordre = melanger(window.PERSONNALITES[niveau]);
    if (mode === "classique") ordre = ordre.slice(0, TAILLE_CLASSIQUE);
    partie = { niveau: niveau, mode: mode, ordre: ordre, index: -1, score: 0, vies: VIES, historique: [] };
    $("vies").hidden = mode !== "marathon";
    montrer("jeu");
    $("score").textContent = "0";
    suivante();
  }

  function suivante() {
    partie.index++;
    var fini = partie.index >= partie.ordre.length || (partie.mode === "marathon" && partie.vies <= 0);
    if (fini) { terminer(); return; }
    partie.perso = partie.ordre[partie.index];
    partie.revele = false;
    partie.debut = performance.now();

    $("progression").textContent = (partie.index + 1) + " / " + partie.ordre.length;
    majVies();
    $("revelation").hidden = true;
    $("bouton-suivant").hidden = true;
    $("zone-saisie").hidden = false;
    var saisie = $("saisie");
    saisie.value = "";
    saisie.classList.remove("erreur");
    Carte.afficher(partie.perso, partie.niveau === "facile");
    saisie.focus();
    lancerChrono();
  }

  function majVies() {
    var html = "";
    for (var i = 0; i < VIES; i++) html += i < partie.vies ? "♥" : '<span class="perdue">♥</span>';
    $("vies").innerHTML = html;
    $("vies").setAttribute("aria-label", Langue.t(partie.vies > 1 ? "viesRestantes" : "vieRestante", { n: partie.vies }));
  }

  function tempsRestant() {
    return Math.max(0, DUREE - (performance.now() - partie.debut) / 1000);
  }

  function lancerChrono() {
    cancelAnimationFrame(minuteur);
    var ecran = ecrans.jeu;
    function tic() {
      if (!partie || partie.revele) return;
      var reste = tempsRestant();
      $("chrono-barre").style.transform = "scaleX(" + (reste / DUREE) + ")";
      $("chrono-texte").textContent = Math.ceil(reste);
      ecran.classList.toggle("attention", reste <= 15 && reste > 5);
      ecran.classList.toggle("urgence", reste <= 5);
      if (reste <= 0) { reveler("temps"); return; }
      minuteur = requestAnimationFrame(tic);
    }
    tic();
  }

  // issue : "trouve", "passe" ou "temps"
  function reveler(issue) {
    if (partie.revele) return;
    partie.revele = true;
    cancelAnimationFrame(minuteur);
    var points = 0;
    if (issue === "trouve") {
      points = 100 + Math.ceil(tempsRestant());
      partie.score += points;
      $("score").textContent = partie.score;
    } else if (partie.mode === "marathon") {
      partie.vies--;
      majVies();
    }
    partie.historique.push({ perso: partie.perso, trouve: issue === "trouve", points: points });

    var verdict = $("verdict");
    verdict.className = "verdict " + (issue === "trouve" ? "gagne" : "perdu");
    verdict.textContent = issue === "trouve" ? Langue.t("bravo", { n: points })
      : Langue.t(issue === "passe" ? "passe" : "temps");
    if (issue !== "trouve" && partie.mode === "marathon") {
      verdict.textContent += Langue.t(partie.vies > 0 ? "moinsUneVie" : "plusDeVie");
    }
    $("revelation-nom").textContent = Langue.nom(partie.perso);
    afficherPortrait(partie.perso);
    $("revelation-bio").textContent = Langue.bio(partie.perso);
    $("revelation").hidden = false;

    var saisie = $("saisie");
    saisie.blur();
    $("zone-saisie").hidden = true;
    var dernier = partie.index >= partie.ordre.length - 1 || (partie.mode === "marathon" && partie.vies <= 0);
    $("bouton-suivant").textContent = Langue.t(dernier ? "voirResultat" : "suivant");
    $("bouton-suivant").hidden = false;
  }

  // Portrait libre de droits, affiché seulement après la réponse.
  function afficherPortrait(perso) {
    var info = (window.PORTRAITS || {})[perso.nom];
    var figure = $("portrait"), image = $("portrait-image");
    figure.hidden = !info;
    $("revelation").classList.toggle("avec-portrait", !!info);
    if (!info) { image.removeAttribute("src"); return; }
    image.src = "portraits/" + info.f;
    image.alt = Langue.t("portraitDe", { nom: Langue.nom(perso) });
    $("portrait-credit").textContent = Langue.credit(info.c);
  }

  function valider(evenement) {
    evenement.preventDefault();
    if (!partie || partie.revele) return;
    var saisie = $("saisie");
    var texte = saisie.value.trim();
    if (!texte) { saisie.focus(); return; }
    if (Reponses.estCorrecte(texte, partie.perso)) {
      reveler("trouve");
    } else {
      saisie.value = "";
      saisie.classList.remove("erreur");
      void saisie.offsetWidth; // relance l'animation
      saisie.classList.add("erreur");
      afficherMessage(Langue.t("nonReessaie"));
      saisie.focus();
    }
  }

  function afficherMessage(texte) {
    var m = $("message");
    m.textContent = texte;
    m.classList.add("visible");
    clearTimeout(delaiMessage);
    delaiMessage = setTimeout(function () { m.classList.remove("visible"); }, 1400);
  }

  function terminer() {
    cancelAnimationFrame(minuteur);
    var ancien = lireRecord(partie.niveau, partie.mode);
    var record = Math.max(ancien, partie.score);
    if (partie.score > ancien) ecrireRecord(partie.niveau, partie.mode, partie.score);

    $("fin-mode").textContent = Langue.t(partie.niveau) + " · " + Langue.t(partie.mode);
    $("fin-score").textContent = partie.score;
    $("fin-record").textContent = record;
    $("nouveau-record").hidden = !(partie.score > ancien && partie.score > 0);
    var trouves = partie.historique.filter(function (h) { return h.trouve; }).length;
    $("recap").innerHTML = "";
    partie.historique.forEach(function (h) {
      var li = document.createElement("li");
      li.className = h.trouve ? "ok" : "ko";
      li.innerHTML = '<span class="signe">' + (h.trouve ? "✓" : "✗") + '</span><span class="recap-nom"></span>' +
        '<span class="points">' + (h.trouve ? "+" + h.points : "0") + "</span>";
      li.querySelector(".recap-nom").textContent = Langue.nom(h.perso);
      $("recap").appendChild(li);
    });
    $("recap").setAttribute("aria-label", Langue.t("trouvees", { n: trouves, total: partie.historique.length }));
    montrer("fin");
  }

  function quitter() {
    if (partie && !window.confirm(Langue.t("confirmerQuitter"))) return;
    cancelAnimationFrame(minuteur);
    partie = null;
    $("saisie").blur();
    majAccueil();
    montrer("accueil");
  }

  // ---------- Clavier de l'iPhone ----------
  // L'application occupe exactement la partie visible de l'écran : quand le
  // clavier s'ouvre, elle rétrécit et la case de réponse reste juste au-dessus.
  function ajusterHauteur() {
    var app = $("app"), vv = window.visualViewport;
    var hauteur = vv ? vv.height : window.innerHeight;
    var haut = vv ? vv.offsetTop : 0;
    app.style.height = hauteur + "px";
    app.style.transform = haut ? "translateY(" + haut + "px)" : "";
    document.body.classList.toggle("clavier-ouvert", window.innerHeight - hauteur > 120);
  }
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", ajusterHauteur);
    window.visualViewport.addEventListener("scroll", ajusterHauteur);
  }
  window.addEventListener("resize", ajusterHauteur);
  // Empêche Safari de faire défiler la page derrière l'application.
  window.addEventListener("scroll", function () { if (window.scrollY) window.scrollTo(0, 0); ajusterHauteur(); });
  ajusterHauteur();

  // ---------- Branchements ----------
  Langue.appliquer();
  document.querySelectorAll("[data-langue]").forEach(function (b) {
    b.addEventListener("click", function () { Langue.definir(b.getAttribute("data-langue")); majAccueil(); });
  });
  Carte.initialiser($("carte"));
  document.querySelectorAll('input[name="niveau"], input[name="mode"]').forEach(function (r) {
    r.addEventListener("change", majAccueil);
  });
  $("bouton-jouer").addEventListener("click", demarrer);
  $("formulaire").addEventListener("submit", valider);
  $("bouton-passer").addEventListener("click", function () { if (partie && !partie.revele) reveler("passe"); });
  $("bouton-suivant").addEventListener("click", suivante);
  $("bouton-quitter").addEventListener("click", quitter);
  $("bouton-rejouer").addEventListener("click", demarrer);
  $("bouton-accueil").addEventListener("click", function () { majAccueil(); montrer("accueil"); });
  majAccueil();

  // Accès pour les tests automatiques.
  window.Destins = { partie: function () { return partie; } };
})();
