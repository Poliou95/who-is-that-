// Reconnaissance des réponses : ignore majuscules, accents, ponctuation,
// espaces, et tolère quelques fautes de frappe.
(function (global) {
  function normaliser(texte) {
    return String(texte)
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  // Version sans espaces : « Jeanne d'Arc », « jeanne darc » et « jeannedarc » se valent.
  function compacter(texte) {
    return normaliser(texte).replace(/ /g, "");
  }

  // Nombre de fautes entre deux mots : lettre ajoutée, retirée, changée,
  // ou deux lettres voisines inversées (« ghandi » pour « gandhi »).
  function distance(a, b) {
    if (a === b) return 0;
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (j = 0; j <= b.length; j++) { d[0][j] = j; }
    for (i = 1; i <= a.length; i++) {
      for (j = 1; j <= b.length; j++) {
        var cout = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cout);
        if (i > 1 && j > 1 && a.charAt(i - 1) === b.charAt(j - 2) && a.charAt(i - 2) === b.charAt(j - 1)) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        }
      }
    }
    return d[a.length][b.length];
  }

  // Fautes tolérées selon la longueur de la réponse attendue.
  function tolerance(longueur) {
    if (longueur <= 5) return 0;
    if (longueur <= 8) return 1;
    return 2;
  }

  function variantes(perso) {
    return [perso.nom].concat(perso.reponses).map(compacter);
  }

  function estCorrecte(saisie, perso) {
    var c = compacter(saisie);
    if (c.length < 2) return false;
    return variantes(perso).some(function (v) {
      return distance(c, v) <= tolerance(v.length);
    });
  }

  var api = { normaliser: normaliser, compacter: compacter, distance: distance,
              tolerance: tolerance, variantes: variantes, estCorrecte: estCorrecte };
  global.Reponses = api;
  if (typeof module !== "undefined") module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
