# Destins

Jeu web en français : devine une personnalité historique à partir de son lieu
et de son année de naissance et de décès, affichés sur une carte du monde.

- Trois niveaux : Facile (50 personnalités), Difficile (50) et Expert (100).
- Deux modes : Partie classique (10 personnalités) et Marathon (3 vies).
- 45 secondes par personnalité, 100 points + 1 point par seconde restante.
- Meilleurs scores enregistrés sur l'appareil.
- Aucun compte, aucun serveur : tout est dans ce dépôt.

## Jouer

Le jeu est publié avec GitHub Pages (réglages du dépôt → Pages → branche `main`,
dossier `/ (root)`). Ouvre ensuite l'adresse indiquée dans Safari sur iPhone.

Pour l'essayer sur un ordinateur : `python3 -m http.server` dans ce dossier,
puis ouvre http://localhost:8000.

## Organisation

| Fichier | Rôle |
| --- | --- |
| `index.html` | Les trois écrans : accueil, jeu, fin |
| `style.css` | Le style visuel |
| `js/jeu.js` | Le déroulement : chrono, score, vies, records |
| `js/carte.js` | La carte, les marqueurs et le cadrage automatique |
| `js/reponses.js` | La reconnaissance des réponses (accents, fautes de frappe) |
| `data/personnalites.js` | Les personnalités Facile et Difficile : lieux, années, coordonnées, biographies, réponses acceptées |
| `data/personnalites-expert.js` | Les 100 personnalités Expert |
| `data/portraits.js` et `portraits/` | Les portraits libres de droits et leurs crédits |
| `polices/` | La police Outfit |
| `data/carte-monde.js` | Les frontières des pays (sans noms) |
| `vendor/` | Bibliothèques de dessin de carte (d3-geo, topojson) |
| `tests/verifier-donnees.js` | Vérifie les données : `node tests/verifier-donnees.js` |

## Crédits

- Police : [Outfit](https://github.com/Outfitio/Outfit-Fonts) (SIL Open Font License, voir `polices/OFL-Outfit.txt`).
- Portraits : Wikimedia Commons ; l'auteur et la licence de chaque image sont affichés dans le jeu et listés dans `data/portraits.js`.
- Données vérifiées avec Wikidata.

- Carte : [Natural Earth](https://www.naturalearthdata.com/) (domaine public),
  via [world-atlas](https://github.com/topojson/world-atlas) (licence ISC).
- [d3-geo](https://github.com/d3/d3-geo), [d3-array](https://github.com/d3/d3-array)
  et [topojson-client](https://github.com/topojson/topojson-client) (licence ISC).
