// Vérifie les données et la reconnaissance des réponses.
// Lancer avec : node tests/verifier-donnees.js
global.window = globalThis;
require("../data/personnalites.js");
var R = require("../js/reponses.js");

var erreurs = 0;
function erreur(msg) { erreurs++; console.log("ERREUR : " + msg); }

var niveaux = window.PERSONNALITES;
var tous = niveaux.facile.concat(niveaux.difficile);

// 1. Exactement 50 personnalités par niveau, sans doublon.
["facile", "difficile"].forEach(function (n) {
  if (niveaux[n].length !== 50) erreur(n + " contient " + niveaux[n].length + " personnalités au lieu de 50");
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

// 4. Exemples de saisies attendues.
function trouver(nom) { return tous.filter(function (p) { return p.nom === nom; })[0]; }
var oui = [
  ["Napoléon Bonaparte", "napoleon"], ["Napoléon Bonaparte", "BONAPARTE"], ["Napoléon Bonaparte", "Napoléon"],
  ["Napoléon Bonaparte", "napolon"], ["Léonard de Vinci", "Léonard de Vinci"], ["Léonard de Vinci", "de vinci"],
  ["Jeanne d'Arc", "jeanne darc"], ["Jeanne d'Arc", "Jeanne d’Arc"], ["Charles de Gaulle", "De Gaule"],
  ["Franklin D. Roosevelt", "roosevelt"], ["Martin Luther King", "luther king"], ["Martin Luther", "Martin Luther"],
  ["Friedrich Nietzsche", "nietzche"], ["Fiodor Dostoïevski", "dostoievsky"], ["Mahomet", "Muhammad"],
  ["Mère Teresa", "mère thérésa"], ["Vincent van Gogh", "Van Gog"], ["Albert Einstein", "einstien"],
  ["Gandhi", "ghandi"], ["Atatürk", "ataturk"], ["Hô Chi Minh", "ho chi min"], ["Salvador Dalí", "dali"],
  ["Mikhaïl Gorbatchev", "gorbachev"], ["Louis XIV", "Louis 14"], ["Catherine II", "Catherine II"]
];
var non = [
  ["Martin Luther", "luther"], ["Martin Luther King", "luther"], ["Martin Luther King", "martin luther"],
  ["Napoléon Bonaparte", "louis"], ["Marie Curie", "marie"], ["Louis Pasteur", "louis"], ["Socrate", "platon"],
  ["Claude Monet", "manet"], ["Isaac Newton", ""], ["Mozart", "m"]
];
oui.forEach(function (t) { if (!R.estCorrecte(t[1], trouver(t[0]))) erreur("« " + t[1] + " » devrait être accepté pour " + t[0]); });
non.forEach(function (t) { if (R.estCorrecte(t[1], trouver(t[0]))) erreur("« " + t[1] + " » ne devrait pas être accepté pour " + t[0]); });

console.log(erreurs ? erreurs + " erreur(s)." : "Tout est correct : " + tous.length + " personnalités vérifiées.");
process.exit(erreurs ? 1 : 0);
