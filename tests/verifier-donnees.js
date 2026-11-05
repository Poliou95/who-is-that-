// Vérifie les données et la reconnaissance des réponses.
// Lancer avec : node tests/verifier-donnees.js
global.window = globalThis;
require("../data/personnalites.js");
require("../data/personnalites-expert.js");
require("../data/traductions-en.js");
require("../data/lieux-en.js");
require("../data/personnalites-ajouts.js");
require("../js/i18n.js");
var R = require("../js/reponses.js");

var erreurs = 0;
function erreur(msg) { erreurs++; console.log("ERREUR : " + msg); }

var niveaux = window.PERSONNALITES;
var tous = niveaux.facile.concat(niveaux.difficile, niveaux.expert);

// 1. 120 personnalités par niveau, sans doublon.
var attendu = { facile: 120, difficile: 120, expert: 120 };
Object.keys(attendu).forEach(function (n) {
  if (niveaux[n].length !== attendu[n]) erreur(n + " contient " + niveaux[n].length + " personnalités au lieu de " + attendu[n]);
});
var noms = {};
tous.forEach(function (p) {
  if (noms[p.nom]) erreur("doublon : " + p.nom);
  noms[p.nom] = true;
});

// 2. Données complètes et cohérentes.
tous.forEach(function (p) {
  ["naissance", "deces"].forEach(function (k) {
    var l = p[k];
    if (!l.lieu || typeof l.an !== "number" || isNaN(l.lat) || isNaN(l.lon)) erreur(p.nom + " : " + k + " incomplet");
    if (Math.abs(l.lat) > 90 || Math.abs(l.lon) > 180) erreur(p.nom + " : coordonnées invalides");
  });
  if (p.deces.an <= p.naissance.an) erreur(p.nom + " : décès avant la naissance");
  var age = p.deces.an - p.naissance.an;
  if (age < 15 || age > 100) erreur(p.nom + " : âge improbable (" + age + " ans)");
  if (!p.bio || p.bio.length < 30) erreur(p.nom + " : biographie manquante");
  if (!p.reponses.length) erreur(p.nom + " : aucune réponse acceptée");
});

// 3. Aucune réponse acceptée pour une personnalité ne doit l'être pour une autre.
tous.forEach(function (a) {
  R.variantes(a).forEach(function (va) {
    tous.forEach(function (b) {
      if (a === b) return;
      if (R.estCorrecte(va, b)) erreur("« " + va + " » (" + a.nom + ") serait accepté pour " + b.nom);
    });
  });
});

// 4. Exemples de saisies attendues (français et anglais).
var T = window.TRADUCTIONS_EN;
tous.forEach(function (p) { if (!T[p.nom]) erreur(p.nom + " : traduction anglaise manquante"); });
function trouver(nom) { return tous.filter(function (p) { return p.nom === nom; })[0]; }
var oui = [
  ["Napoléon Bonaparte", "napoleon"], ["Napoléon Bonaparte", "BONAPARTE"], ["Napoléon Bonaparte", "Napoléon"],
  ["Napoléon Bonaparte", "napolon"], ["Léonard de Vinci", "Léonard de Vinci"], ["Léonard de Vinci", "de vinci"],
  ["Jeanne d'Arc", "jeanne darc"], ["Jeanne d'Arc", "Jeanne d’Arc"], ["Charles de Gaulle", "De Gaule"],
  ["Franklin D. Roosevelt", "roosevelt"], ["Martin Luther King", "luther king"], ["Martin Luther", "Martin Luther"],
  ["Friedrich Nietzsche", "nietzche"], ["Fiodor Dostoïevski", "dostoievsky"], ["Mahomet", "Muhammad"],
  ["Mère Teresa", "mère thérésa"], ["Vincent van Gogh", "Van Gog"], ["Albert Einstein", "einstien"],
  ["Gandhi", "ghandi"], ["Atatürk", "ataturk"], ["Hô Chi Minh", "ho chi min"], ["Salvador Dalí", "dali"],
  ["Mikhaïl Gorbatchev", "gorbachev"], ["Louis XIV", "Louis 14"], ["Catherine II", "Catherine II"],
  ["Louis XVI", "louis xvi"], ["Henri IV", "Henri 4"], ["Jean-Sébastien Bach", "bach"], ["Tchaïkovski", "tchaikovsky"],
  ["Napoléon III", "napoleon III"], ["Lawrence d'Arabie", "Lawrence d’Arabie"], ["Joséphine de Beauharnais", "josephine"],
  ["Jeanne d'Arc", "Joan of Arc"], ["Léon Tolstoï", "Leo Tolstoy"], ["Lady Diana", "Princess Diana"],
  ["Le Caravage", "Caravaggio"], ["Platon", "Plato"], ["Kant", "Immanuel Kant"], ["Raspoutine", "Rasputin"],
  ["Bruce Lee", "bruce lee"], ["Élisabeth II", "Elizabeth II"]
];
var non = [
  ["Martin Luther", "luther"], ["Martin Luther King", "luther"], ["Martin Luther King", "martin luther"],
  ["Napoléon Bonaparte", "louis"], ["Marie Curie", "marie"], ["Louis Pasteur", "louis"], ["Socrate", "platon"],
  ["Claude Monet", "manet"], ["Isaac Newton", ""], ["Mozart", "m"],
  ["Louis XIV", "louis xvi"], ["Louis XVI", "louis xiv"], ["Henri IV", "henri viii"], ["Henri VIII", "henri vii"],
  ["Napoléon III", "napoleon"], ["Napoléon Bonaparte", "napoleon iii"],
  ["Catherine II", "catherine"], ["Catherine de Médicis", "catherine"], ["Bruce Lee", "lee"],
  ["Élisabeth II", "elisabeth ire"], ["Élisabeth Ire", "elisabeth ii"], ["Louis XIII", "louis xvi"]
];
oui.forEach(function (t) { if (!R.estCorrecte(t[1], trouver(t[0]))) erreur("« " + t[1] + " » devrait être accepté pour " + t[0]); });
non.forEach(function (t) { if (R.estCorrecte(t[1], trouver(t[0]))) erreur("« " + t[1] + " » ne devrait pas être accepté pour " + t[0]); });

console.log(erreurs ? erreurs + " erreur(s)." : "Tout est correct : " + tous.length + " personnalités vérifiées.");
process.exit(erreurs ? 1 : 0);
