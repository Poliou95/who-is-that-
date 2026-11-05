// Langue de l'interface (français / anglais) et traduction des données.
(function () {
  var TEXTES = {
    fr: {
      titre: "Destins",
      sousTitre: "Une naissance, une mort, deux points sur la carte.<br>Sauras-tu dire qui c'était&nbsp;?",
      niveau: "Niveau", facile: "Facile", difficile: "Difficile", expert: "Expert",
      mode: "Mode", classique: "Partie classique", marathon: "Marathon",
      aideFacile: "{n} personnalités très connues. La carte indique le nom des lieux.",
      aideDifficile: "{n} personnalités moins évidentes. La carte n'indique que les années.",
      aideExpert: "{n} personnalités connues mais plus dures à situer : artistes, sportifs, souverains… La carte n'indique que les années.",
      aideClassique: "10 personnalités tirées au hasard.",
      aideMarathon: "Les {n} personnalités du niveau, avec 3 vies. Passer ou manquer de temps coûte une vie.",
      meilleurScore: "Meilleur score", jouer: "Jouer",
      quitter: "Quitter la partie", confirmerQuitter: "Quitter la partie en cours ?",
      vies: "Vies", vieRestante: "{n} vie restante", viesRestantes: "{n} vies restantes",
      score: "Score", passer: "Passer", valider: "Valider", qui: "Qui est-ce ?", taReponse: "Ta réponse",
      suivant: "Suivant", voirResultat: "Voir le résultat",
      bravo: "Bravo ! +{n} points", passe: "Passé", temps: "Temps écoulé",
      moinsUneVie: " · −1 vie", plusDeVie: " · plus de vie", nonReessaie: "Non, réessaie !",
      partieTerminee: "Partie terminée", nouveauRecord: "Nouveau record&nbsp;!",
      accueil: "Accueil", rejouer: "Rejouer", trouvees: "{n} trouvée(s) sur {total}",
      naissance: "Naissance", deces: "Décès", vers: "vers", avJC: "av. J.-C.",
      portraitDe: "Portrait de {nom}", langue: "Langue"
    },
    en: {
      titre: "Destinies",
      sousTitre: "A birth, a death, two dots on the map.<br>Can you tell who it was?",
      niveau: "Level", facile: "Easy", difficile: "Hard", expert: "Expert",
      mode: "Mode", classique: "Classic game", marathon: "Marathon",
      aideFacile: "{n} very famous people. The map shows the place names.",
      aideDifficile: "{n} less obvious people. The map only shows the years.",
      aideExpert: "{n} well-known people who are harder to place: artists, athletes, rulers… The map only shows the years.",
      aideClassique: "10 people picked at random.",
      aideMarathon: "All {n} people of the level, with 3 lives. Skipping or running out of time costs a life.",
      meilleurScore: "Best score", jouer: "Play",
      quitter: "Quit game", confirmerQuitter: "Quit the current game?",
      vies: "Lives", vieRestante: "{n} life left", viesRestantes: "{n} lives left",
      score: "Score", passer: "Skip", valider: "Submit", qui: "Who is it?", taReponse: "Your answer",
      suivant: "Next", voirResultat: "See results",
      bravo: "Well done! +{n} points", passe: "Skipped", temps: "Time's up",
      moinsUneVie: " · −1 life", plusDeVie: " · no lives left", nonReessaie: "No, try again!",
      partieTerminee: "Game over", nouveauRecord: "New record!",
      accueil: "Home", rejouer: "Play again", trouvees: "{n} found out of {total}",
      naissance: "Born", deces: "Died", vers: "c.", avJC: "BC",
      portraitDe: "Portrait of {nom}", langue: "Language"
    }
  };

  var CLE = "destins.langue";
  var code = null;
  try { code = localStorage.getItem(CLE); } catch (e) { /* stockage indisponible */ }
  if (code !== "fr" && code !== "en") {
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "fr";
    code = /^fr/i.test(nav) ? "fr" : "en";
  }

  function t(cle, valeurs) {
    var s = (TEXTES[code] && TEXTES[code][cle]) || TEXTES.fr[cle] || cle;
    Object.keys(valeurs || {}).forEach(function (k) { s = s.split("{" + k + "}").join(valeurs[k]); });
    return s;
  }

  function traduction(perso) { return (window.TRADUCTIONS_EN || {})[perso.nom]; }

  // Remplit tous les éléments marqués data-i18n (texte), data-i18n-html,
  // data-i18n-placeholder et data-i18n-aria.
  function appliquer() {
    document.documentElement.lang = code;
    document.title = t("titre");
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-placeholder")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-langue]").forEach(function (el) {
      el.setAttribute("aria-pressed", String(el.getAttribute("data-langue") === code));
    });
  }

  window.Langue = {
    code: function () { return code; },
    definir: function (c) {
      code = c === "en" ? "en" : "fr";
      try { localStorage.setItem(CLE, code); } catch (e) { /* stockage indisponible */ }
      appliquer();
    },
    appliquer: appliquer,
    t: t,
    nom: function (perso) { var tr = traduction(perso); return code === "en" && tr ? tr[0] : perso.nom; },
    bio: function (perso) { var tr = traduction(perso); return code === "en" && tr ? tr[1] : perso.bio; },
    lieu: function (lieu) { return code === "en" ? ((window.LIEUX_EN || {})[lieu.lieu] || lieu.lieu) : lieu.lieu; },
    credit: function (c) { return code === "en" ? c.replace("domaine public", "public domain") : c; },
    // Réponses anglaises acceptées en plus des réponses françaises.
    reponsesEn: function (perso) { var tr = traduction(perso); return tr ? [tr[0]].concat(tr[2] || []) : []; }
  };
})();
