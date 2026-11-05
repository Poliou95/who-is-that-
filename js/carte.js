// Carte du monde (SVG) + marqueurs et légendes (HTML) avec cadrage automatique.
(function () {
  var LARGEUR_MONDE = 1000;            // largeur du monde en unités SVG
  var LAT_HAUT = 84, LAT_BAS = -60;    // zone utile (sans l'Antarctique)
  var LARGEUR_MIN_DEGRES = 50;         // échelle d'un continent : jamais plus zoomé

  var projection = d3.geoMercator()
    .scale(LARGEUR_MONDE / (2 * Math.PI))
    .translate([LARGEUR_MONDE / 2, 0]);
  var Y_HAUT = projection([0, LAT_HAUT])[1];
  var Y_BAS = projection([0, LAT_BAS])[1];
  var LARGEUR_MIN = LARGEUR_MONDE * LARGEUR_MIN_DEGRES / 360;

  var conteneur, svg, calque, vue = null, animation = null, cible = null, marqueurs = [];

  function initialiser(element) {
    conteneur = element;
    var NS = "http://www.w3.org/2000/svg";
    svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "carte-svg");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");

    var fond = document.createElementNS(NS, "rect");
    fond.setAttribute("class", "ocean");
    fond.setAttribute("x", -LARGEUR_MONDE);
    fond.setAttribute("y", Y_HAUT - LARGEUR_MONDE);
    fond.setAttribute("width", LARGEUR_MONDE * 3);
    fond.setAttribute("height", (Y_BAS - Y_HAUT) + LARGEUR_MONDE * 2);
    svg.appendChild(fond);

    var monde = window.CARTE_MONDE;
    var chemin = d3.geoPath(projection);
    var pays = document.createElementNS(NS, "path");
    pays.setAttribute("class", "pays");
    pays.setAttribute("d", chemin(topojson.feature(monde, monde.objects.countries)));
    svg.appendChild(pays);
    var frontieres = document.createElementNS(NS, "path");
    frontieres.setAttribute("class", "frontieres");
    frontieres.setAttribute("d", chemin(topojson.mesh(monde, monde.objects.countries, function (a, b) { return a !== b; })));
    svg.appendChild(frontieres);

    calque = document.createElement("div");
    calque.className = "calque-marqueurs";
    conteneur.appendChild(svg);
    conteneur.appendChild(calque);

    if (window.ResizeObserver) {
      new ResizeObserver(function () { if (cible) recadrer(false); }).observe(conteneur);
    } else {
      window.addEventListener("resize", function () { if (cible) recadrer(false); });
    }
  }

  // Calcule la zone à afficher pour montrer les points, avec un zoom plafonné.
  function calculerVue(points, largeurEcran, hauteurEcran) {
    var xs = points.map(function (p) { return p[0]; });
    var ys = points.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
    var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
    var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    // Marges pour laisser de la place aux légendes.
    var l = Math.max((x1 - x0) * 1.5, LARGEUR_MIN);
    var h = Math.max((y1 - y0) * 1.5, LARGEUR_MIN);
    var ratio = largeurEcran / hauteurEcran;
    if (l / h > ratio) h = l / ratio; else l = h * ratio;
    // Reste dans les limites du monde quand c'est possible.
    var hauteurMonde = Y_BAS - Y_HAUT;
    var y = cy - h / 2;
    if (h >= hauteurMonde) y = Y_HAUT + hauteurMonde / 2 - h / 2;
    else y = Math.min(Math.max(y, Y_HAUT), Y_BAS - h);
    var x = cx - l / 2;
    if (l >= LARGEUR_MONDE) x = LARGEUR_MONDE / 2 - l / 2;
    else x = Math.min(Math.max(x, 0), LARGEUR_MONDE - l);
    return { x: x, y: y, l: l, h: h };
  }

  function appliquerVue(v) {
    vue = v;
    svg.setAttribute("viewBox", v.x + " " + v.y + " " + v.l + " " + v.h);
    placerMarqueurs();
  }

  function recadrer(anime) {
    var largeur = conteneur.clientWidth, hauteur = conteneur.clientHeight;
    if (!largeur || !hauteur) return;
    var arrivee = calculerVue(cible, largeur, hauteur);
    if (animation) cancelAnimationFrame(animation);
    var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!anime || !vue || reduit) { appliquerVue(arrivee); return; }
    var depart = vue, debut = performance.now(), duree = 700;
    function etape(t) {
      var k = Math.min(1, (t - debut) / duree);
      k = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      appliquerVue({
        x: depart.x + (arrivee.x - depart.x) * k, y: depart.y + (arrivee.y - depart.y) * k,
        l: depart.l + (arrivee.l - depart.l) * k, h: depart.h + (arrivee.h - depart.h) * k
      });
      animation = k < 1 ? requestAnimationFrame(etape) : null;
    }
    animation = requestAnimationFrame(etape);
  }

  function versEcran(p) {
    var k = conteneur.clientWidth / vue.l;
    return [(p[0] - vue.x) * k, (p[1] - vue.y) * k];
  }

  // Affiche une personnalité. « avecLieux » = afficher le nom des lieux (niveau Facile).
  function afficher(perso, avecLieux) {
    calque.innerHTML = "";
    marqueurs = [];
    var n = perso.naissance, d = perso.deces;
    var memeLieu = n.lieu === d.lieu && n.lat === d.lat && n.lon === d.lon;
    var pn = projection([n.lon, n.lat]), pd = projection([d.lon, d.lat]);

    if (memeLieu) {
      marqueurs.push(creerMarqueur(pn, "les-deux", [
        ligne("naissance", Langue.t("naissance"), n), ligne("deces", Langue.t("deces"), d)
      ], avecLieux ? Langue.lieu(n) : null));
    } else {
      marqueurs.push(creerMarqueur(pn, "naissance", [ligne("naissance", Langue.t("naissance"), n)], avecLieux ? Langue.lieu(n) : null));
      marqueurs.push(creerMarqueur(pd, "deces", [ligne("deces", Langue.t("deces"), d)], avecLieux ? Langue.lieu(d) : null));
    }
    cible = [pn, pd];
    recadrer(true);
  }

  function ligne(type, titre, l) {
    return '<span class="ligne ' + type + '"><span class="pastille"></span>' +
      titre + ' <strong>' + formaterAnnee(l) + '</strong></span>';
  }

  function creerMarqueur(point, type, lignes, lieu) {
    var point_ = document.createElement("div");
    point_.className = "marqueur " + type;
    var legende = document.createElement("div");
    legende.className = "legende";
    legende.innerHTML = (lieu ? '<span class="lieu">' + echapper(lieu) + "</span>" : "") + lignes.join("");
    calque.appendChild(point_);
    calque.appendChild(legende);
    return { point: point, el: point_, legende: legende };
  }

  // Positionne marqueurs et légendes sans chevauchement ni débordement.
  function placerMarqueurs() {
    if (!marqueurs.length) return;
    var L = conteneur.clientWidth, H = conteneur.clientHeight;
    var pos = marqueurs.map(function (m) { return versEcran(m.point); });
    // Deux lieux différents mais très proches : on les écarte légèrement.
    if (pos.length === 2) {
      var dx = pos[1][0] - pos[0][0], dy = pos[1][1] - pos[0][1];
      var dist = Math.sqrt(dx * dx + dy * dy), MIN = 20;
      if (dist < MIN) {
        if (dist < 0.5) { dx = 1; dy = 0; dist = 1; }
        var e = (MIN - dist) / 2;
        pos[0] = [pos[0][0] - dx / dist * e, pos[0][1] - dy / dist * e];
        pos[1] = [pos[1][0] + dx / dist * e, pos[1][1] + dy / dist * e];
      }
    }
    var occupes = pos.map(function (p) { return { x: p[0] - 10, y: p[1] - 10, l: 20, h: 20 }; });
    occupes.push({ x: L - 72, y: 0, l: 72, h: 50 }); // chrono en haut à droite
    marqueurs.forEach(function (m, i) {
      var p = pos[i];
      m.el.style.transform = "translate(" + p[0] + "px," + p[1] + "px)";
      var lg = m.legende.offsetWidth, hg = m.legende.offsetHeight, ecart = 14;
      var candidats = [
        { x: p[0] - lg / 2, y: p[1] - ecart - hg },          // au-dessus
        { x: p[0] - lg / 2, y: p[1] + ecart },               // en dessous
        { x: p[0] + ecart, y: p[1] - hg / 2 },               // à droite
        { x: p[0] - ecart - lg, y: p[1] - hg / 2 }           // à gauche
      ];
      // Si l'autre marqueur est au-dessus, on préfère placer cette légende en dessous.
      if (pos.length === 2 && pos[1 - i][1] < p[1]) candidats.unshift(candidats.splice(1, 1)[0]);
      var meilleur = null, meilleurScore = Infinity;
      candidats.forEach(function (c) {
        var r = { x: Math.min(Math.max(c.x, 6), L - lg - 6), y: Math.min(Math.max(c.y, 6), H - hg - 6), l: lg, h: hg };
        var score = Math.abs(r.x - c.x) + Math.abs(r.y - c.y);
        occupes.forEach(function (o) { score += 1000 * recouvrement(r, o); });
        if (score < meilleurScore) { meilleurScore = score; meilleur = r; }
      });
      occupes.push(meilleur);
      m.legende.style.transform = "translate(" + meilleur.x + "px," + meilleur.y + "px)";
    });
  }

  function recouvrement(a, b) {
    var l = Math.min(a.x + a.l, b.x + b.l) - Math.max(a.x, b.x);
    var h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    return l > 0 && h > 0 ? 1 : 0;
  }

  function formaterAnnee(l) {
    var t = l.an < 0 ? (-l.an) + "\u00a0" + Langue.t("avJC") : String(l.an);
    return (l.vers ? Langue.t("vers") + "\u00a0" : "") + t;
  }

  function echapper(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  window.Carte = { initialiser: initialiser, afficher: afficher, formaterAnnee: formaterAnnee };
})();
