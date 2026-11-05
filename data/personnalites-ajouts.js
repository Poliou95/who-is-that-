// Personnalités ajoutées (Facile, Difficile, Expert), avec leurs traductions anglaises.
// Lieux, années et coordonnées vérifiés avec Wikidata.
(function () {
  var P = window.PERSONNALITES;
  function lieu(t) { return { lieu: t[0], an: t[1], lat: t[2], lon: t[3], vers: !!t[4] }; }
  function A(niveau, nom, n, d, bio, reponses) {
    P[niveau].push({ nom: nom, naissance: lieu(n), deces: lieu(d), bio: bio, reponses: reponses });
  }
  A("facile", "Édith Piaf", ["Paris", 1915, 48.857, 2.352], ["Grasse", 1963, 43.658, 6.925],
    "Chanteuse française à la voix bouleversante, interprète de La Vie en rose et de Non, je ne regrette rien.",
    ["piaf", "edith piaf", "la mome piaf"]);
  A("facile", "Johnny Hallyday", ["Paris", 1943, 48.857, 2.352], ["Marnes-la-Coquette", 2017, 48.83, 2.177],
    "Rockeur français aux millions de disques vendus, idole des jeunes pendant près de soixante ans.",
    ["johnny hallyday", "hallyday", "johnny", "jean philippe smet"]);
  A("facile", "Serge Gainsbourg", ["Paris", 1928, 48.857, 2.352], ["Paris", 1991, 48.857, 2.352],
    "Auteur-compositeur français provocateur, auteur de La Javanaise et de Je t'aime… moi non plus.",
    ["gainsbourg", "serge gainsbourg", "gainsbarre"]);
  A("facile", "Jacques Brel", ["Schaerbeek", 1929, 50.867, 4.374], ["Bobigny", 1978, 48.908, 2.44],
    "Chanteur belge à la présence intense, auteur de Ne me quitte pas et d'Amsterdam.",
    ["brel", "jacques brel"]);
  A("facile", "Claude François", ["Ismaïlia", 1939, 30.583, 32.267], ["Paris", 1978, 48.857, 2.352],
    "Chanteur français à paillettes, créateur de Comme d'habitude, devenu My Way.",
    ["claude francois", "cloclo"]);
  A("facile", "Dalida", ["Le Caire", 1933, 30.044, 31.236], ["Paris", 1987, 48.857, 2.352],
    "Chanteuse française née en Égypte, interprète de Paroles, paroles et de Gigi l'amoroso.",
    ["dalida"]);
  A("facile", "Charles Aznavour", ["Paris", 1924, 48.857, 2.352], ["Mouriès", 2018, 43.689, 4.871],
    "Chanteur français d'origine arménienne, auteur de La Bohème et de centaines de chansons.",
    ["aznavour", "charles aznavour"]);
  A("facile", "Maria Callas", ["New York", 1923, 40.713, -74.006], ["Paris", 1977, 48.857, 2.352],
    "Soprano grecque surnommée « la Divine », la plus célèbre cantatrice d'opéra du XXe siècle.",
    ["callas", "maria callas", "la callas"]);
  A("facile", "Frank Sinatra", ["Hoboken", 1915, 40.745, -74.032], ["Los Angeles", 1998, 34.052, -118.244],
    "Chanteur et acteur américain à la voix de velours, interprète de My Way et de New York, New York.",
    ["sinatra", "frank sinatra"]);
  A("facile", "Ray Charles", ["Albany (Géorgie)", 1930, 31.582, -84.166], ["Beverly Hills", 2004, 34.073, -118.399],
    "Pianiste et chanteur américain aveugle, pionnier de la soul, interprète de Hit the Road Jack.",
    ["ray charles"]);
  A("facile", "Michael Jackson", ["Gary", 1958, 41.593, -87.347], ["Los Angeles", 2009, 34.052, -118.244],
    "Chanteur et danseur américain surnommé le « roi de la pop », auteur de l'album Thriller.",
    ["michael jackson", "jackson", "mickael jackson"]);
  A("facile", "John Lennon", ["Liverpool", 1940, 53.408, -2.991], ["New York", 1980, 40.713, -74.006],
    "Chanteur et cofondateur des Beatles, auteur d'Imagine, assassiné devant chez lui.",
    ["lennon", "john lennon"]);
  A("facile", "Freddie Mercury", ["Zanzibar", 1946, -6.167, 39.2], ["Londres", 1991, 51.507, -0.128],
    "Chanteur du groupe Queen, interprète de Bohemian Rhapsody.",
    ["freddie mercury", "mercury", "freddy mercury"]);
  A("facile", "David Bowie", ["Londres", 1947, 51.507, -0.128], ["New York", 2016, 40.713, -74.006],
    "Chanteur britannique aux mille visages, créateur du personnage de Ziggy Stardust.",
    ["bowie", "david bowie"]);
  A("facile", "Bob Marley", ["Nine Mile", 1945, 18.298, -77.278], ["Miami", 1981, 25.79, -80.21],
    "Chanteur jamaïcain qui fit connaître le reggae dans le monde entier.",
    ["marley", "bob marley"]);
  A("facile", "Jimi Hendrix", ["Seattle", 1942, 47.605, -122.33], ["Londres", 1970, 51.507, -0.128],
    "Guitariste américain virtuose, révolutionnaire du rock, mort à 27 ans.",
    ["hendrix", "jimi hendrix", "jimmy hendrix"]);
  A("facile", "Jim Morrison", ["Melbourne (Floride)", 1943, 28.084, -80.608], ["Paris", 1971, 48.857, 2.352],
    "Chanteur du groupe The Doors, mort à Paris à 27 ans.",
    ["morrison", "jim morrison"]);
  A("facile", "Kurt Cobain", ["Aberdeen (Washington)", 1967, 46.975, -123.816], ["Seattle", 1994, 47.605, -122.33],
    "Chanteur du groupe Nirvana, figure du grunge, mort à 27 ans.",
    ["cobain", "kurt cobain"]);
  A("facile", "Whitney Houston", ["Newark", 1963, 40.736, -74.172], ["Beverly Hills", 2012, 34.073, -118.4],
    "Chanteuse américaine à la voix puissante, interprète de I Will Always Love You.",
    ["whitney houston", "houston", "whitney"]);
  A("facile", "Marilyn Monroe", ["Los Angeles", 1926, 34.052, -118.244], ["Los Angeles", 1962, 34.052, -118.244],
    "Actrice américaine devenue l'icône glamour d'Hollywood dans les années 1950.",
    ["marilyn monroe", "monroe", "marilyn", "norma jeane"]);
  A("facile", "James Dean", ["Marion (Indiana)", 1931, 40.549, -85.665], ["Cholame", 1955, 35.724, -120.296],
    "Acteur américain de La Fureur de vivre, mort à 24 ans dans un accident de voiture.",
    ["james dean", "dean"]);
  A("facile", "Audrey Hepburn", ["Bruxelles", 1929, 50.847, 4.353], ["Tolochenaz", 1993, 46.5, 6.467],
    "Actrice britannique de Diamants sur canapé, devenue ambassadrice de l'UNICEF.",
    ["audrey hepburn", "hepburn"]);
  A("facile", "Grace Kelly", ["Philadelphie", 1929, 39.953, -75.164], ["Monaco", 1982, 43.731, 7.425],
    "Actrice américaine d'Hitchcock devenue princesse de Monaco.",
    ["grace kelly", "kelly", "grace de monaco", "princesse grace"]);
  A("facile", "Alfred Hitchcock", ["Londres", 1899, 51.507, -0.128], ["Los Angeles", 1980, 34.052, -118.244],
    "Réalisateur britannique, maître du suspense, auteur de Psychose et des Oiseaux.",
    ["hitchcock", "alfred hitchcock"]);
  A("facile", "Bruce Lee", ["San Francisco", 1940, 37.775, -122.419], ["Hong Kong", 1973, 22.32, 114.17],
    "Acteur et maître des arts martiaux qui popularisa le kung-fu au cinéma.",
    ["bruce lee"]);
  A("facile", "Louis de Funès", ["Courbevoie", 1914, 48.897, 2.252], ["Nantes", 1983, 47.217, -1.554],
    "Acteur comique français de La Grande Vadrouille et du Gendarme de Saint-Tropez.",
    ["de funes", "louis de funes", "funes"]);
  A("facile", "Jean Gabin", ["Paris", 1904, 48.857, 2.352], ["Neuilly-sur-Seine", 1976, 48.887, 2.268],
    "Acteur français de La Grande Illusion et du Quai des brumes.",
    ["gabin", "jean gabin"]);
  A("facile", "Coluche", ["Paris", 1944, 48.857, 2.352], ["Opio", 1986, 43.668, 6.982],
    "Humoriste français, fondateur des Restos du cœur.",
    ["coluche", "michel colucci"]);
  A("facile", "Joséphine Baker", ["Saint-Louis (Missouri)", 1906, 38.626, -90.199], ["Paris", 1975, 48.857, 2.352],
    "Danseuse et chanteuse américaine devenue star à Paris, résistante, entrée au Panthéon.",
    ["josephine baker", "baker"]);
  A("facile", "Coco Chanel", ["Saumur", 1883, 47.259, -0.078], ["Paris", 1971, 48.857, 2.352],
    "Créatrice de mode française, inventrice de la petite robe noire et du parfum N° 5.",
    ["chanel", "coco chanel", "gabrielle chanel"]);
  A("facile", "Christian Dior", ["Granville", 1905, 48.838, -1.587], ["Montecatini Terme", 1957, 43.883, 10.771],
    "Couturier français dont le New Look révolutionna la mode d'après-guerre.",
    ["dior", "christian dior"]);
  A("facile", "Karl Lagerfeld", ["Hambourg", 1933, 53.55, 10], ["Neuilly-sur-Seine", 2019, 48.887, 2.268],
    "Créateur de mode allemand, directeur artistique de Chanel, toujours en noir et blanc.",
    ["lagerfeld", "karl lagerfeld"]);
  A("facile", "Andy Warhol", ["Pittsburgh", 1928, 40.442, -80], ["New York", 1987, 40.713, -74.006],
    "Artiste américain du pop art, célèbre pour ses boîtes de soupe et ses portraits de Marilyn.",
    ["warhol", "andy warhol"]);
  A("facile", "Muhammad Ali", ["Louisville", 1942, 38.256, -85.751], ["Scottsdale", 2016, 33.493, -111.926],
    "Boxeur américain, triple champion du monde des poids lourds, qui « volait comme un papillon ».",
    ["muhammad ali", "ali", "mohamed ali", "cassius clay"]);
  A("facile", "Pelé", ["Três Corações", 1940, -21.695, -45.255], ["São Paulo", 2022, -23.55, -46.634],
    "Footballeur brésilien, triple champion du monde.",
    ["pele", "edson arantes do nascimento"]);
  A("facile", "Diego Maradona", ["Lanús", 1960, -34.7, -58.4], ["Tigre", 2020, -34.426, -58.58],
    "Footballeur argentin génial, auteur de la « main de Dieu » au Mondial 1986.",
    ["maradona", "diego maradona"]);
  A("facile", "Ayrton Senna", ["São Paulo", 1960, -23.55, -46.634], ["Bologne", 1994, 44.494, 11.343],
    "Pilote brésilien triple champion du monde de Formule 1, mort en course.",
    ["senna", "ayrton senna"]);
  A("facile", "Kobe Bryant", ["Philadelphie", 1978, 39.953, -75.164], ["Calabasas", 2020, 34.133, -118.65],
    "Basketteur américain des Los Angeles Lakers, mort dans un accident d'hélicoptère.",
    ["kobe bryant", "bryant", "kobe"]);
  A("facile", "Pierre de Coubertin", ["Paris", 1863, 48.857, 2.352], ["Genève", 1937, 46.2, 6.15],
    "Pédagogue français qui fit renaître les Jeux olympiques en 1896.",
    ["coubertin", "pierre de coubertin"]);
  A("facile", "Stephen Hawking", ["Oxford", 1942, 51.752, -1.258], ["Cambridge", 2018, 52.208, 0.122],
    "Physicien britannique des trous noirs, atteint de la maladie de Charcot.",
    ["hawking", "stephen hawking"]);
  A("facile", "Steve Jobs", ["San Francisco", 1955, 37.775, -122.419], ["Palo Alto", 2011, 37.444, -122.16],
    "Cofondateur d'Apple, à l'origine du Macintosh, de l'iPod et de l'iPhone.",
    ["steve jobs", "jobs"]);
  A("facile", "Alexander Fleming", ["Lochfield", 1881, 55.647, -4.254], ["Londres", 1955, 51.507, -0.128],
    "Médecin écossais qui découvrit la pénicilline, le premier antibiotique.",
    ["fleming", "alexander fleming"]);
  A("facile", "Louis Braille", ["Coupvray", 1809, 48.892, 2.794], ["Paris", 1852, 48.857, 2.352],
    "Français devenu aveugle enfant, inventeur de l'écriture en points saillants pour les aveugles.",
    ["braille", "louis braille"]);
  A("facile", "Jacques-Yves Cousteau", ["Saint-André-de-Cubzac", 1910, 44.995, -0.446], ["Paris", 1997, 48.857, 2.352],
    "Officier de marine français, explorateur des océans à bord de la Calypso.",
    ["cousteau", "jacques yves cousteau", "commandant cousteau", "jacques cousteau"]);
  A("facile", "Charles Lindbergh", ["Détroit", 1902, 42.332, -83.047], ["Maui", 1974, 20.661, -156.1],
    "Aviateur américain, premier à traverser l'Atlantique seul et sans escale, en 1927.",
    ["lindbergh", "charles lindbergh"]);
  A("facile", "Youri Gagarine", ["Klouchino", 1934, 55.671, 35.05], ["Novosiolovo", 1968, 56.067, 39.05],
    "Cosmonaute soviétique, premier homme à voyager dans l'espace, en 1961.",
    ["gagarine", "youri gagarine", "gagarin", "yuri gagarin", "iouri gagarine"]);
  A("facile", "Platon", ["Athènes", -428, 37.984, 23.728, true], ["Athènes", -348, 37.984, 23.728, true],
    "Philosophe grec, disciple de Socrate et fondateur de l'Académie d'Athènes.",
    ["platon", "plato"]);
  A("facile", "Charles Baudelaire", ["Paris", 1821, 48.857, 2.352], ["Paris", 1867, 48.857, 2.352],
    "Poète français, auteur des Fleurs du mal.",
    ["baudelaire", "charles baudelaire"]);
  A("facile", "Jean-Paul Sartre", ["Paris", 1905, 48.857, 2.352], ["Paris", 1980, 48.857, 2.352],
    "Philosophe français de l'existentialisme, qui refusa le prix Nobel de littérature.",
    ["sartre", "jean paul sartre"]);
  A("facile", "Albert Camus", ["Dréan", 1913, 36.683, 7.75], ["Villeblevin", 1960, 48.324, 3.082],
    "Écrivain français né en Algérie, auteur de L'Étranger et de La Peste, mort dans un accident de voiture.",
    ["camus", "albert camus"]);
  A("facile", "Antoine de Saint-Exupéry", ["Lyon", 1900, 45.764, 4.836], ["Au large de Marseille", 1944, 43.176, 5.386],
    "Aviateur et écrivain français, auteur du Petit Prince, disparu en mer pendant la guerre.",
    ["saint exupery", "antoine de saint exupery", "st exupery", "saint ex"]);
  A("facile", "Agatha Christie", ["Torquay", 1890, 50.464, -3.525], ["Wallingford", 1976, 51.6, -1.125],
    "Romancière britannique, reine du roman policier et créatrice d'Hercule Poirot.",
    ["agatha christie", "christie"]);
  A("facile", "J.R.R. Tolkien", ["Bloemfontein", 1892, -29.1, 26.217], ["Bournemouth", 1973, 50.72, -1.88],
    "Écrivain et professeur britannique, auteur du Hobbit et du Seigneur des anneaux.",
    ["tolkien", "jrr tolkien", "john ronald reuel tolkien"]);
  A("facile", "Élisabeth II", ["Londres", 1926, 51.507, -0.128], ["Balmoral", 2022, 57.041, -3.23],
    "Reine du Royaume-Uni pendant 70 ans, le plus long règne de l'histoire britannique.",
    ["elisabeth ii", "elizabeth ii", "elisabeth 2", "elizabeth 2", "la reine elisabeth ii"]);
  A("facile", "Lady Diana", ["Sandringham", 1961, 52.83, 0.51], ["Paris", 1997, 48.857, 2.352],
    "Princesse de Galles très populaire, morte dans un accident de voiture sous un tunnel parisien.",
    ["lady diana", "diana", "lady di", "princesse diana", "diana spencer", "princess diana"]);
  A("facile", "Sissi", ["Munich", 1837, 48.138, 11.575], ["Genève", 1898, 46.2, 6.15],
    "Impératrice d'Autriche à la beauté légendaire, assassinée à Genève par un anarchiste.",
    ["sissi", "sisi", "elisabeth d autriche", "imperatrice sissi", "elisabeth de wittelsbach"]);
  A("facile", "Jean-Paul II", ["Wadowice", 1920, 49.883, 19.494], ["Vatican", 2005, 41.902, 12.453],
    "Pape polonais pendant 27 ans, grand voyageur, qui contribua à la chute du communisme.",
    ["jean paul ii", "jean paul 2", "john paul ii", "karol wojtyla", "wojtyla"]);
  A("facile", "Saint François d'Assise", ["Assise", 1182, 43.071, 12.615, true], ["Assise", 1226, 43.071, 12.615],
    "Fils de marchand devenu religieux pauvre, fondateur des Franciscains, qui parlait aux oiseaux.",
    ["francois d assise", "saint francois d assise", "saint francois", "francis of assisi"]);
  A("facile", "L'abbé Pierre", ["Lyon", 1912, 45.764, 4.836], ["Paris", 2007, 48.857, 2.352],
    "Prêtre français, fondateur d'Emmaüs, qui lança l'appel de l'hiver 1954 pour les sans-abri.",
    ["abbe pierre", "l abbe pierre", "henri groues"]);
  A("facile", "Anne Frank", ["Francfort-sur-le-Main", 1929, 50.111, 8.682], ["Bergen-Belsen", 1945, 52.759, 9.907],
    "Adolescente juive dont le journal, écrit cachée à Amsterdam, témoigne de la Shoah.",
    ["anne frank", "frank"]);
  A("facile", "Jean Moulin", ["Béziers", 1899, 43.343, 3.216], ["Metz", 1943, 49.12, 6.177],
    "Préfet et chef de la Résistance française, mort après avoir été torturé par la Gestapo.",
    ["jean moulin", "moulin"]);
  A("facile", "Simone Veil", ["Nice", 1927, 43.702, 7.268], ["Paris", 2017, 48.857, 2.352],
    "Rescapée d'Auschwitz, ministre qui fit légaliser l'IVG en France, présidente du Parlement européen.",
    ["simone veil", "veil"]);
  A("facile", "François Mitterrand", ["Jarnac", 1916, 45.681, -0.175], ["Paris", 1996, 48.857, 2.352],
    "Président de la République française pendant quatorze ans, qui abolit la peine de mort.",
    ["mitterrand", "francois mitterrand", "tonton"]);
  A("facile", "Jacques Chirac", ["Paris", 1932, 48.857, 2.352], ["Paris", 2019, 48.857, 2.352],
    "Maire de Paris puis président de la République française, qui refusa la guerre en Irak.",
    ["chirac", "jacques chirac"]);
  A("facile", "Margaret Thatcher", ["Grantham", 1925, 52.912, -0.642], ["Londres", 2013, 51.507, -0.128],
    "Première femme Premier ministre du Royaume-Uni, surnommée la « Dame de fer ».",
    ["thatcher", "margaret thatcher", "dame de fer", "iron lady"]);
  A("facile", "Ronald Reagan", ["Tampico", 1911, 41.631, -89.786], ["Los Angeles", 2004, 34.052, -118.244],
    "Acteur d'Hollywood devenu président des États-Unis à la fin de la guerre froide.",
    ["reagan", "ronald reagan"]);
  A("facile", "Malcolm X", ["Omaha", 1925, 41.259, -95.938], ["New York", 1965, 40.713, -74.006],
    "Militant afro-américain radical des droits civiques, assassiné à New York.",
    ["malcolm x", "malcolm little", "malcom x"]);
  A("facile", "Al Capone", ["New York", 1899, 40.713, -74.006], ["Miami Beach", 1947, 25.79, -80.13],
    "Gangster de Chicago pendant la Prohibition, finalement condamné pour fraude fiscale.",
    ["al capone", "capone", "scarface"]);
  A("facile", "Raspoutine", ["Pokrovskoïe", 1869, 57.245, 66.794], ["Saint-Pétersbourg", 1916, 59.95, 30.317],
    "Moine guérisseur sibérien très influent à la cour du tsar, assassiné par des nobles.",
    ["raspoutine", "rasputin", "grigori raspoutine"]);
  A("facile", "Mata Hari", ["Leeuwarden", 1876, 53.201, 5.799], ["Vincennes", 1917, 48.848, 2.439],
    "Danseuse néerlandaise accusée d'espionnage pendant la Première Guerre mondiale et fusillée.",
    ["mata hari", "margaretha zelle"]);
  A("difficile", "Caligula", ["Anzio", 12, 41.447, 12.627], ["Rome", 41, 41.893, 12.483],
    "Empereur romain réputé fou, qui aurait voulu nommer son cheval consul.",
    ["caligula"]);
  A("difficile", "Philippe le Bel", ["Fontainebleau", 1268, 48.409, 2.702], ["Fontainebleau", 1314, 48.409, 2.702],
    "Roi de France qui fit arrêter les Templiers et s'opposa au pape.",
    ["philippe le bel", "philippe iv", "philippe iv le bel", "philip the fair", "philip iv"]);
  A("difficile", "Catherine de Médicis", ["Florence", 1519, 43.771, 11.254], ["Blois", 1589, 47.586, 1.331],
    "Reine de France d'origine florentine, mère de trois rois, au cœur des guerres de Religion.",
    ["catherine de medicis", "catherine de medici", "medicis"]);
  A("difficile", "Lucrèce Borgia", ["Subiaco", 1480, 41.933, 13.1], ["Ferrare", 1519, 44.839, 11.617],
    "Fille du pape Alexandre VI, à la réputation sulfureuse, devenue duchesse de Ferrare.",
    ["lucrece borgia", "borgia", "lucrezia borgia"]);
  A("difficile", "Machiavel", ["Florence", 1469, 43.769, 11.256], ["Florence", 1527, 43.769, 11.256],
    "Penseur politique florentin, auteur du Prince.",
    ["machiavel", "machiavelli", "nicolas machiavel", "niccolo machiavelli"]);
  A("difficile", "Mazarin", ["Pescina", 1602, 42.026, 13.659], ["Vincennes", 1661, 48.848, 2.439],
    "Cardinal d'origine italienne, principal ministre pendant l'enfance de Louis XIV.",
    ["mazarin", "cardinal mazarin", "jules mazarin"]);
  A("difficile", "Louis XIII", ["Fontainebleau", 1601, 48.409, 2.702], ["Saint-Germain-en-Laye", 1643, 48.896, 2.091],
    "Roi de France, fils d'Henri IV et père de Louis XIV, qui gouverna avec Richelieu.",
    ["louis xiii", "louis 13"]);
  A("difficile", "Marie Stuart", ["Linlithgow", 1542, 55.978, -3.601], ["Fotheringhay", 1587, 52.524, -0.436],
    "Reine d'Écosse et brièvement de France, décapitée sur ordre d'Élisabeth Ire.",
    ["marie stuart", "mary stuart", "marie reine d ecosse", "mary queen of scots"]);
  A("difficile", "Oliver Cromwell", ["Huntingdon", 1599, 52.336, -0.172], ["Londres", 1658, 51.507, -0.128],
    "Chef puritain qui fit exécuter le roi Charles Ier et gouverna l'Angleterre en Lord Protecteur.",
    ["cromwell", "oliver cromwell", "olivier cromwell"]);
  A("difficile", "Talleyrand", ["Paris", 1754, 48.857, 2.352], ["Paris", 1839, 48.857, 2.352],
    "Diplomate français habile, ministre sous la Révolution, Napoléon et la Restauration.",
    ["talleyrand", "charles maurice de talleyrand"]);
  A("difficile", "Nicolas II", ["Tsarskoïe Selo", 1868, 59.717, 30.417], ["Iekaterinbourg", 1918, 56.838, 60.605],
    "Dernier tsar de Russie, fusillé avec sa famille par les bolcheviks.",
    ["nicolas ii", "nicolas 2", "nicholas ii", "tsar nicolas ii"]);
  A("difficile", "Rosa Luxemburg", ["Zamość", 1871, 50.721, 23.259], ["Berlin", 1919, 52.517, 13.383],
    "Révolutionnaire marxiste d'origine polonaise, assassinée à Berlin.",
    ["rosa luxemburg", "luxemburg", "rosa luxembourg"]);
  A("difficile", "Rommel", ["Heidenheim an der Brenz", 1891, 48.676, 10.154], ["Herrlingen", 1944, 48.421, 9.897],
    "Maréchal allemand surnommé le « Renard du désert », contraint au suicide par Hitler.",
    ["rommel", "erwin rommel", "renard du desert"]);
  A("difficile", "Pétain", ["Cauchy-à-la-Tour", 1856, 50.504, 2.451], ["Port-Joinville", 1951, 46.723, -2.351],
    "Héros de Verdun devenu chef du régime de Vichy, qui collabora avec l'Allemagne nazie.",
    ["petain", "philippe petain", "marechal petain"]);
  A("difficile", "Eva Perón", ["Los Toldos", 1919, -35.0, -61.04], ["Buenos Aires", 1952, -34.6, -58.382],
    "Épouse du président argentin Juan Perón, adulée par les pauvres sous le surnom d'Evita.",
    ["eva peron", "evita", "evita peron", "peron"]);
  A("difficile", "Yitzhak Rabin", ["Jérusalem", 1922, 31.777, 35.234], ["Tel Aviv", 1995, 32.08, 34.78],
    "Premier ministre israélien, prix Nobel de la paix, assassiné par un extrémiste.",
    ["rabin", "yitzhak rabin", "itzhak rabin"]);
  A("difficile", "Saddam Hussein", ["Tikrit", 1937, 34.6, 43.683], ["Bagdad", 2006, 33.315, 44.366],
    "Dictateur de l'Irak, renversé par l'invasion américaine de 2003 et exécuté.",
    ["saddam hussein", "saddam", "hussein"]);
  A("difficile", "Ulysses S. Grant", ["Point Pleasant (Ohio)", 1822, 38.894, -84.234], ["Mount McGregor", 1885, 43.18, -73.744],
    "Général nordiste vainqueur de la guerre de Sécession, puis président des États-Unis.",
    ["grant", "ulysses grant", "ulysses s grant"]);
  A("difficile", "Harry Truman", ["Lamar", 1884, 37.495, -94.271], ["Kansas City", 1972, 39.1, -94.578],
    "Président des États-Unis qui ordonna les bombardements atomiques sur le Japon.",
    ["truman", "harry truman", "harry s truman"]);
  A("difficile", "Eisenhower", ["Denison", 1890, 33.749, -96.534], ["Washington", 1969, 38.897, -77.026],
    "Commandant du débarquement en Normandie, puis président des États-Unis.",
    ["eisenhower", "dwight eisenhower", "ike", "dwight d eisenhower"]);
  A("difficile", "Richard Nixon", ["Yorba Linda", 1913, 33.889, -117.818], ["New York", 1994, 40.713, -74.006],
    "Président des États-Unis contraint à la démission par le scandale du Watergate.",
    ["nixon", "richard nixon"]);
  A("difficile", "Marat", ["Boudry", 1743, 46.95, 6.833], ["Paris", 1793, 48.857, 2.352],
    "Journaliste révolutionnaire assassiné dans sa baignoire par Charlotte Corday.",
    ["marat", "jean paul marat"]);
  A("difficile", "Charlotte Corday", ["Les Ligneries", 1768, 48.876, 0.111], ["Paris", 1793, 48.857, 2.352],
    "Jeune Normande qui assassina Marat et fut guillotinée.",
    ["charlotte corday", "corday"]);
  A("difficile", "Le marquis de Sade", ["Paris", 1740, 48.857, 2.352], ["Charenton", 1814, 48.819, 2.43],
    "Écrivain libertin scandaleux qui passa une grande partie de sa vie enfermé.",
    ["sade", "marquis de sade", "le marquis de sade"]);
  A("difficile", "Casanova", ["Venise", 1725, 45.44, 12.332], ["Duchcov", 1798, 50.604, 13.746],
    "Aventurier vénitien célèbre pour ses conquêtes amoureuses et son évasion des prisons de Venise.",
    ["casanova", "giacomo casanova"]);
  A("difficile", "Jean Calvin", ["Noyon", 1509, 49.581, 2.999], ["Genève", 1564, 46.2, 6.15],
    "Réformateur protestant français qui fit de Genève la « Rome protestante ».",
    ["calvin", "jean calvin", "john calvin"]);
  A("difficile", "Nostradamus", ["Saint-Rémy-de-Provence", 1503, 43.789, 4.832], ["Salon-de-Provence", 1566, 43.641, 5.097],
    "Médecin et astrologue provençal, auteur de prophéties toujours commentées.",
    ["nostradamus", "michel de nostredame"]);
  A("difficile", "Diderot", ["Langres", 1713, 47.862, 5.333], ["Paris", 1784, 48.857, 2.352],
    "Philosophe des Lumières qui dirigea l'Encyclopédie.",
    ["diderot", "denis diderot"]);
  A("difficile", "Montesquieu", ["La Brède", 1689, 44.679, -0.544], ["Paris", 1755, 48.857, 2.352],
    "Philosophe des Lumières qui théorisa la séparation des pouvoirs dans De l'esprit des lois.",
    ["montesquieu"]);
  A("difficile", "Simone de Beauvoir", ["Paris", 1908, 48.857, 2.352], ["Paris", 1986, 48.857, 2.352],
    "Philosophe et écrivaine française, autrice du Deuxième Sexe, compagne de Sartre.",
    ["simone de beauvoir", "de beauvoir", "beauvoir"]);
  A("difficile", "Charles Perrault", ["Paris", 1628, 48.857, 2.352], ["Paris", 1703, 48.857, 2.352],
    "Écrivain français qui mit par écrit Le Petit Chaperon rouge, Cendrillon et Le Chat botté.",
    ["perrault", "charles perrault"]);
  A("difficile", "Chateaubriand", ["Saint-Malo", 1768, 48.649, -2.026], ["Paris", 1848, 48.857, 2.352],
    "Écrivain romantique français, auteur des Mémoires d'outre-tombe.",
    ["chateaubriand", "francois rene de chateaubriand"]);
  A("difficile", "Stendhal", ["Grenoble", 1783, 45.187, 5.726], ["Paris", 1842, 48.857, 2.352],
    "Romancier français, auteur du Rouge et le Noir.",
    ["stendhal", "henri beyle"]);
  A("difficile", "Flaubert", ["Rouen", 1821, 49.443, 1.103], ["Croisset", 1880, 49.441, 1.038],
    "Romancier français, auteur de Madame Bovary.",
    ["flaubert", "gustave flaubert"]);
  A("difficile", "Maupassant", ["Tourville-sur-Arques", 1850, 49.858, 1.101], ["Paris", 1893, 48.857, 2.352],
    "Écrivain français, maître de la nouvelle, auteur de Bel-Ami et du Horla.",
    ["maupassant", "guy de maupassant"]);
  A("difficile", "George Sand", ["Paris", 1804, 48.857, 2.352], ["Nohant", 1876, 46.639, 1.96],
    "Romancière française au pseudonyme masculin, compagne de Chopin.",
    ["george sand", "sand", "aurore dupin"]);
  A("difficile", "Verlaine", ["Metz", 1844, 49.12, 6.177], ["Paris", 1896, 48.857, 2.352],
    "Poète français, auteur des Poèmes saturniens, compagnon tumultueux de Rimbaud.",
    ["verlaine", "paul verlaine"]);
  A("difficile", "Marcel Proust", ["Paris", 1871, 48.857, 2.352], ["Paris", 1922, 48.857, 2.352],
    "Écrivain français, auteur d'À la recherche du temps perdu et de la célèbre madeleine.",
    ["proust", "marcel proust"]);
  A("difficile", "Lord Byron", ["Londres", 1788, 51.507, -0.128], ["Missolonghi", 1824, 38.369, 21.429],
    "Poète romantique anglais, mort en combattant pour l'indépendance de la Grèce.",
    ["byron", "lord byron"]);
  A("difficile", "Jane Austen", ["Steventon", 1775, 51.23, -1.219], ["Winchester", 1817, 51.063, -1.309],
    "Romancière anglaise, autrice d'Orgueil et Préjugés.",
    ["jane austen", "austen"]);
  A("difficile", "Oscar Wilde", ["Dublin", 1854, 53.35, -6.26], ["Paris", 1900, 48.857, 2.352],
    "Écrivain irlandais plein d'esprit, auteur du Portrait de Dorian Gray, mort à Paris.",
    ["oscar wilde", "wilde"]);
  A("difficile", "Arthur Conan Doyle", ["Édimbourg", 1859, 55.953, -3.189], ["Crowborough", 1930, 51.06, 0.163],
    "Écrivain écossais, créateur du détective Sherlock Holmes.",
    ["conan doyle", "arthur conan doyle", "doyle"]);
  A("difficile", "Lewis Carroll", ["Daresbury", 1832, 53.34, -2.633], ["Guildford", 1898, 51.236, -0.57],
    "Écrivain et mathématicien anglais, auteur d'Alice au pays des merveilles.",
    ["lewis carroll", "carroll", "charles dodgson"]);
  A("difficile", "Rudyard Kipling", ["Mumbai", 1865, 19.076, 72.877], ["Londres", 1936, 51.507, -0.128],
    "Écrivain britannique né en Inde, auteur du Livre de la jungle.",
    ["kipling", "rudyard kipling"]);
  A("difficile", "Jack London", ["San Francisco", 1876, 37.775, -122.419], ["Glen Ellen", 1916, 38.364, -122.524],
    "Écrivain américain aventurier, auteur de L'Appel de la forêt et de Croc-Blanc.",
    ["jack london"]);
  A("difficile", "Debussy", ["Saint-Germain-en-Laye", 1862, 48.896, 2.091], ["Paris", 1918, 48.857, 2.352],
    "Compositeur français, auteur de Clair de lune et de La Mer.",
    ["debussy", "claude debussy"]);
  A("difficile", "Ravel", ["Ciboure", 1875, 43.385, -1.668], ["Paris", 1937, 48.857, 2.352],
    "Compositeur français, auteur du Boléro.",
    ["ravel", "maurice ravel"]);
  A("difficile", "Cézanne", ["Aix-en-Provence", 1839, 43.528, 5.446], ["Aix-en-Provence", 1906, 43.528, 5.446],
    "Peintre provençal, précurseur du cubisme, qui peignit sans cesse la montagne Sainte-Victoire.",
    ["cezanne", "paul cezanne"]);
  A("difficile", "Degas", ["Paris", 1834, 48.857, 2.352], ["Paris", 1917, 48.857, 2.352],
    "Peintre et sculpteur français, célèbre pour ses danseuses.",
    ["degas", "edgar degas"]);
  A("difficile", "Renoir", ["Limoges", 1841, 45.834, 1.262], ["Cagnes-sur-Mer", 1919, 43.664, 7.148],
    "Peintre impressionniste français, auteur du Bal du moulin de la Galette.",
    ["renoir", "auguste renoir", "pierre auguste renoir"]);
  A("difficile", "Toulouse-Lautrec", ["Albi", 1864, 43.928, 2.146], ["Malromé", 1901, 44.602, -0.213],
    "Peintre et affichiste du Montmartre des cabarets et du Moulin-Rouge.",
    ["toulouse lautrec", "lautrec", "henri de toulouse lautrec"]);
  A("difficile", "Matisse", ["Le Cateau-Cambrésis", 1869, 50.105, 3.541], ["Nice", 1954, 43.702, 7.268],
    "Peintre français aux couleurs pures, maître du fauvisme et des papiers découpés.",
    ["matisse", "henri matisse"]);
  A("difficile", "Modigliani", ["Livourne", 1884, 43.55, 10.317], ["Paris", 1920, 48.857, 2.352],
    "Peintre italien de Montparnasse aux portraits aux cous allongés.",
    ["modigliani", "amedeo modigliani", "modi"]);
  A("difficile", "Magritte", ["Lessines", 1898, 50.712, 3.83], ["Schaerbeek", 1967, 50.867, 4.374],
    "Peintre surréaliste belge, auteur de « Ceci n'est pas une pipe ».",
    ["magritte", "rene magritte"]);
  A("difficile", "Edvard Munch", ["Løten", 1863, 60.793, 11.308], ["Oslo", 1944, 59.913, 10.739],
    "Peintre norvégien, auteur du Cri.",
    ["munch", "edvard munch"]);
  A("difficile", "Camille Claudel", ["Fère-en-Tardenois", 1864, 49.199, 3.518], ["Montfavet", 1943, 43.925, 4.878],
    "Sculptrice française, élève et amante de Rodin, internée pendant trente ans.",
    ["camille claudel", "claudel"]);
  A("difficile", "Jean-Michel Basquiat", ["New York", 1960, 40.713, -74.006], ["New York", 1988, 40.713, -74.006],
    "Peintre américain venu du graffiti, star de l'art new-yorkais, mort à 27 ans.",
    ["basquiat", "jean michel basquiat"]);
  A("difficile", "Henry Ford", ["Dearborn", 1863, 42.311, -83.213], ["Dearborn", 1947, 42.311, -83.213],
    "Industriel américain qui démocratisa l'automobile grâce au travail à la chaîne.",
    ["henry ford", "ford"]);
  A("difficile", "Louis Blériot", ["Cambrai", 1872, 50.176, 3.235], ["Paris", 1936, 48.857, 2.352],
    "Aviateur français, premier à traverser la Manche en avion, en 1909.",
    ["bleriot", "louis bleriot"]);
  A("difficile", "Marconi", ["Bologne", 1874, 44.494, 11.343], ["Rome", 1937, 41.893, 12.483],
    "Inventeur italien de la télégraphie sans fil, ancêtre de la radio.",
    ["marconi", "guglielmo marconi"]);
  A("difficile", "Wernher von Braun", ["Wyrzysk", 1912, 53.15, 17.267], ["Alexandria (Virginie)", 1977, 38.805, -77.047],
    "Ingénieur allemand des fusées V2, puis de la fusée américaine qui emmena l'homme sur la Lune.",
    ["von braun", "wernher von braun", "braun"]);
  A("difficile", "Ferdinand de Lesseps", ["Versailles", 1805, 48.805, 2.135], ["Guilly", 1894, 47.081, 1.725],
    "Diplomate français qui fit percer le canal de Suez.",
    ["lesseps", "ferdinand de lesseps", "de lesseps"]);
  A("difficile", "Amerigo Vespucci", ["Florence", 1454, 43.771, 11.254], ["Séville", 1512, 37.389, -5.995],
    "Navigateur florentin qui a donné son prénom à l'Amérique.",
    ["vespucci", "amerigo vespucci", "americ vespuce", "vespuce"]);
  A("difficile", "Pizarro", ["Trujillo", 1478, 39.465, -5.879, true], ["Lima", 1541, -12.06, -77.037],
    "Conquistador espagnol qui renversa l'Empire inca.",
    ["pizarro", "francisco pizarro", "francois pizarre", "pizarre"]);
  A("difficile", "Pocahontas", ["Werowocomoco", 1596, 37.412, -76.649, true], ["Gravesend", 1617, 51.442, 0.369],
    "Fille d'un chef amérindien de Virginie, partie en Angleterre où elle mourut jeune.",
    ["pocahontas"]);
  A("difficile", "Davy Crockett", ["Limestone (Tennessee)", 1786, 36.228, -82.631], ["San Antonio", 1836, 29.426, -98.486],
    "Trappeur et homme politique américain, tué en défendant Fort Alamo.",
    ["davy crockett", "crockett"]);
  A("difficile", "Buffalo Bill", ["Le Claire", 1846, 41.596, -90.356], ["Denver", 1917, 39.739, -104.985],
    "Chasseur de bisons et éclaireur devenu star d'un spectacle sur le Far West.",
    ["buffalo bill", "william cody", "william frederick cody"]);
  A("difficile", "Calamity Jane", ["Princeton (Missouri)", 1852, 40.399, -93.586], ["Terry (Dakota du Sud)", 1903, 44.334, -103.817],
    "Aventurière du Far West, amie de Wild Bill Hickok.",
    ["calamity jane", "martha jane canary"]);
  A("difficile", "Pancho Villa", ["San Juan del Río", 1878, 24.777, -104.459], ["Parral (Chili)", 1923, 26.928, -105.667],
    "Chef révolutionnaire du nord du Mexique, assassiné dans une embuscade.",
    ["pancho villa", "villa", "francisco villa"]);
  A("difficile", "Emiliano Zapata", ["Anenecuilco", 1879, 18.779, -98.981], ["Chinameca", 1919, 18.62, -99.01],
    "Chef paysan de la révolution mexicaine, pour qui « la terre appartient à ceux qui la travaillent ».",
    ["zapata", "emiliano zapata"]);
  A("expert", "Le Caravage", ["Milan", 1571, 45.467, 9.19], ["Porto Ercole", 1610, 42.394, 11.204],
    "Peintre italien au clair-obscur dramatique et à la vie violente.",
    ["caravage", "le caravage", "caravaggio", "michelangelo merisi"]);
  A("expert", "Le Greco", ["Héraklion", 1541, 35.34, 25.134], ["Tolède", 1614, 39.867, -4.033],
    "Peintre crétois installé à Tolède, aux figures étirées et mystiques.",
    ["greco", "le greco", "el greco"]);
  A("expert", "Delacroix", ["Saint-Maurice (Val-de-Marne)", 1798, 48.818, 2.435], ["Paris", 1863, 48.857, 2.352],
    "Peintre romantique français, auteur de La Liberté guidant le peuple.",
    ["delacroix", "eugene delacroix"]);
  A("expert", "Joan Miró", ["Barcelone", 1893, 41.383, 2.177], ["Palma de Majorque", 1983, 39.567, 2.65],
    "Peintre catalan aux formes colorées et poétiques, proche du surréalisme.",
    ["miro", "joan miro"]);
  A("expert", "Marc Chagall", ["Liozna", 1887, 55.026, 30.795], ["Saint-Paul-de-Vence", 1985, 43.696, 7.122],
    "Peintre d'origine biélorusse aux personnages volants, auteur du plafond de l'Opéra Garnier.",
    ["chagall", "marc chagall"]);
  A("expert", "Kandinsky", ["Moscou", 1866, 55.751, 37.617], ["Neuilly-sur-Seine", 1944, 48.887, 2.268],
    "Peintre d'origine russe, pionnier de l'art abstrait.",
    ["kandinsky", "wassily kandinsky", "vassily kandinsky"]);
  A("expert", "Jackson Pollock", ["Cody (Wyoming)", 1912, 44.523, -109.057], ["East Hampton", 1956, 40.963, -72.185],
    "Peintre américain qui projetait la peinture sur ses toiles posées au sol.",
    ["pollock", "jackson pollock"]);
  A("expert", "Schubert", ["Vienne", 1797, 48.208, 16.372], ["Vienne", 1828, 48.208, 16.372],
    "Compositeur viennois de lieder et de La Truite, mort à 31 ans.",
    ["schubert", "franz schubert"]);
  A("expert", "Liszt", ["Raiding", 1811, 47.566, 16.531], ["Bayreuth", 1886, 49.948, 11.578],
    "Pianiste virtuose hongrois, première « rock star » de la musique classique.",
    ["liszt", "franz liszt"]);
  A("expert", "Puccini", ["Lucques", 1858, 43.85, 10.517], ["Bruxelles", 1924, 50.847, 4.353],
    "Compositeur italien d'opéras, dont La Bohème, Tosca et Madame Butterfly.",
    ["puccini", "giacomo puccini"]);
  A("expert", "Pavarotti", ["Modène", 1935, 44.646, 10.926], ["Modène", 2007, 44.646, 10.926],
    "Ténor italien à la voix solaire, l'un des Trois Ténors.",
    ["pavarotti", "luciano pavarotti"]);
  A("expert", "Ennio Morricone", ["Rome", 1928, 41.893, 12.483], ["Rome", 2020, 41.893, 12.483],
    "Compositeur italien des musiques de western, dont Le Bon, la Brute et le Truand.",
    ["morricone", "ennio morricone"]);
  A("expert", "Johnny Cash", ["Kingsland (Arkansas)", 1932, 33.861, -92.294], ["Nashville", 2003, 36.162, -86.774],
    "Chanteur américain de country, « l'homme en noir », qui chanta dans des prisons.",
    ["johnny cash", "cash"]);
  A("expert", "Buddy Holly", ["Lubbock", 1936, 33.585, -101.845], ["Clear Lake (Iowa)", 1959, 43.136, -93.38],
    "Pionnier du rock'n'roll à lunettes, mort à 22 ans dans un accident d'avion.",
    ["buddy holly", "holly"]);
  A("expert", "Janis Joplin", ["Port Arthur", 1943, 29.885, -93.94], ["Los Angeles", 1970, 34.052, -118.244],
    "Chanteuse américaine de rock et de blues à la voix rauque, morte à 27 ans.",
    ["janis joplin", "joplin"]);
  A("expert", "Tina Turner", ["Brownsville (Tennessee)", 1939, 35.591, -89.261], ["Küsnacht", 2023, 47.318, 8.582],
    "Chanteuse américaine surnommée la « reine du rock », interprète de The Best.",
    ["tina turner", "turner"]);
  A("expert", "George Michael", ["Londres", 1963, 51.507, -0.128], ["Goring-on-Thames", 2016, 51.523, -1.135],
    "Chanteur britannique de Wham!, interprète de Careless Whisper et Last Christmas.",
    ["george michael"]);
  A("expert", "Georges Brassens", ["Sète", 1921, 43.404, 3.697], ["Saint-Gély-du-Fesc", 1981, 43.692, 3.806],
    "Chanteur français à la guitare et à la moustache, auteur des Copains d'abord.",
    ["brassens", "georges brassens"]);
  A("expert", "Fellini", ["Rimini", 1920, 44.059, 12.568], ["Rome", 1993, 41.893, 12.483],
    "Réalisateur italien de La Dolce Vita et d'Amarcord.",
    ["fellini", "federico fellini"]);
  A("expert", "Stanley Kubrick", ["New York", 1928, 40.713, -74.006], ["St Albans", 1999, 51.753, -0.336],
    "Réalisateur américain de 2001 : l'Odyssée de l'espace et de Shining.",
    ["kubrick", "stanley kubrick"]);
  A("expert", "Orson Welles", ["Kenosha", 1915, 42.582, -87.846], ["Los Angeles", 1985, 34.052, -118.244],
    "Réalisateur et acteur américain de Citizen Kane, qui affola l'Amérique avec une fausse invasion martienne à la radio.",
    ["orson welles", "welles"]);
  A("expert", "Greta Garbo", ["Stockholm", 1905, 59.329, 18.069], ["New York", 1990, 40.713, -74.006],
    "Actrice suédoise, star mystérieuse d'Hollywood, qui se retira à 36 ans.",
    ["greta garbo", "garbo"]);
  A("expert", "Ingrid Bergman", ["Stockholm", 1915, 59.329, 18.069], ["Londres", 1982, 51.507, -0.128],
    "Actrice suédoise de Casablanca, trois fois oscarisée.",
    ["ingrid bergman", "bergman"]);
  A("expert", "Romy Schneider", ["Vienne", 1938, 48.208, 16.372], ["Paris", 1982, 48.857, 2.352],
    "Actrice autrichienne devenue star en France, révélée par le rôle de Sissi.",
    ["romy schneider", "schneider", "romy"]);
  A("expert", "Marlon Brando", ["Omaha", 1924, 41.259, -95.938], ["Los Angeles", 2004, 34.052, -118.244],
    "Acteur américain du Parrain et d'Un tramway nommé Désir.",
    ["brando", "marlon brando"]);
  A("expert", "John Wayne", ["Winterset", 1907, 41.336, -94.014], ["Los Angeles", 1979, 34.052, -118.244],
    "Acteur américain, héros de westerns comme La Chevauchée fantastique.",
    ["john wayne", "wayne"]);
  A("expert", "Jean-Paul Belmondo", ["Neuilly-sur-Seine", 1933, 48.887, 2.268], ["Paris", 2021, 48.857, 2.352],
    "Acteur français d'À bout de souffle, célèbre pour ses cascades.",
    ["belmondo", "jean paul belmondo", "bebel"]);
  A("expert", "Alain Delon", ["Sceaux", 1935, 48.779, 2.291], ["Douchy-Montcorbon", 2024, 47.943, 3.053],
    "Acteur français du Samouraï et de Plein Soleil, l'un des plus beaux visages du cinéma.",
    ["delon", "alain delon"]);
  A("expert", "Heath Ledger", ["Perth", 1979, -31.956, 115.86], ["New York", 2008, 40.713, -74.006],
    "Acteur australien, Joker inoubliable de The Dark Knight, mort à 28 ans.",
    ["heath ledger", "ledger"]);
  A("expert", "Robin Williams", ["Chicago", 1951, 41.882, -87.628], ["Tiburon", 2014, 37.874, -122.457],
    "Acteur comique américain du Cercle des poètes disparus et de Madame Doubtfire.",
    ["robin williams", "williams"]);
  A("expert", "F. Scott Fitzgerald", ["Saint Paul", 1896, 44.944, -93.094], ["Los Angeles", 1940, 34.052, -118.244],
    "Écrivain américain des années folles, auteur de Gatsby le Magnifique.",
    ["fitzgerald", "scott fitzgerald", "f scott fitzgerald", "francis scott fitzgerald"]);
  A("expert", "John Steinbeck", ["Salinas", 1902, 36.678, -121.656], ["New York", 1968, 40.713, -74.006],
    "Écrivain américain, auteur des Raisins de la colère, prix Nobel de littérature.",
    ["steinbeck", "john steinbeck"]);
  A("expert", "Virginia Woolf", ["Londres", 1882, 51.507, -0.128], ["Lewes", 1941, 50.875, 0.012],
    "Romancière anglaise moderniste, autrice de Mrs Dalloway.",
    ["virginia woolf", "woolf"]);
  A("expert", "Gabriel García Márquez", ["Aracataca", 1927, 10.591, -74.185], ["Mexico", 2014, 19.354, -99.136],
    "Écrivain colombien, auteur de Cent ans de solitude, prix Nobel de littérature.",
    ["garcia marquez", "gabriel garcia marquez", "marquez", "gabo"]);
  A("expert", "Jorge Luis Borges", ["Buenos Aires", 1899, -34.6, -58.382], ["Genève", 1986, 46.2, 6.15],
    "Écrivain argentin aveugle, auteur de nouvelles labyrinthiques comme Fictions.",
    ["borges", "jorge luis borges"]);
  A("expert", "Pablo Neruda", ["Parral (Chili)", 1904, -36.15, -71.833], ["Santiago", 1973, -33.438, -70.65],
    "Poète chilien engagé, prix Nobel de littérature.",
    ["neruda", "pablo neruda"]);
  A("expert", "Federico García Lorca", ["Fuente Vaqueros", 1898, 37.219, -3.783], ["Víznar", 1936, 37.231, -3.554],
    "Poète et dramaturge andalou, fusillé au début de la guerre d'Espagne.",
    ["lorca", "garcia lorca", "federico garcia lorca"]);
  A("expert", "Jesse Owens", ["Oakville (Alabama)", 1913, 34.445, -87.161], ["Tucson", 1980, 32.222, -110.926],
    "Athlète afro-américain, quadruple médaillé d'or aux Jeux de Berlin en 1936, sous les yeux d'Hitler.",
    ["jesse owens", "owens"]);
  A("expert", "Babe Ruth", ["Baltimore", 1895, 39.286, -76.615], ["New York", 1948, 40.713, -74.006],
    "Légende américaine du baseball, star des New York Yankees.",
    ["babe ruth", "ruth"]);
  A("expert", "Fausto Coppi", ["Castellania", 1919, 44.799, 8.931], ["Tortona", 1960, 44.894, 8.866],
    "Cycliste italien surnommé le « Campionissimo », double vainqueur du Tour de France.",
    ["coppi", "fausto coppi"]);
  A("expert", "Jacques Anquetil", ["Mont-Saint-Aignan", 1934, 49.462, 1.087], ["Rouen", 1987, 49.443, 1.103],
    "Cycliste normand, premier à gagner cinq fois le Tour de France.",
    ["anquetil", "jacques anquetil"]);
  A("expert", "Johan Cruyff", ["Amsterdam", 1947, 52.373, 4.893], ["Barcelone", 2016, 41.383, 2.177],
    "Footballeur néerlandais du « football total », star de l'Ajax et du FC Barcelone.",
    ["cruyff", "johan cruyff", "cruijff"]);
  A("expert", "Eusébio", ["Maputo", 1942, -25.969, 32.573], ["Lisbonne", 2014, 38.708, -9.139],
    "Footballeur portugais né au Mozambique, surnommé la « Panthère noire ».",
    ["eusebio"]);
  A("expert", "Ferenc Puskás", ["Budapest", 1927, 47.498, 19.041], ["Budapest", 2006, 47.498, 19.041],
    "Buteur hongrois légendaire du Real Madrid et de la grande équipe de Hongrie.",
    ["puskas", "ferenc puskas"]);
  A("expert", "George Best", ["Belfast", 1946, 54.597, -5.93], ["Londres", 2005, 51.507, -0.128],
    "Footballeur nord-irlandais flamboyant de Manchester United.",
    ["george best", "best"]);
  A("expert", "Juan Manuel Fangio", ["Balcarce", 1911, -37.846, -58.256], ["Buenos Aires", 1995, -34.6, -58.382],
    "Pilote argentin, cinq fois champion du monde de Formule 1 dans les années 1950.",
    ["fangio", "juan manuel fangio"]);
  A("expert", "Niki Lauda", ["Vienne", 1949, 48.208, 16.372], ["Zurich", 2019, 47.374, 8.541],
    "Pilote autrichien de Formule 1, revenu en course six semaines après avoir été gravement brûlé.",
    ["lauda", "niki lauda"]);
  A("expert", "Suzanne Lenglen", ["Paris", 1899, 48.857, 2.352], ["Paris", 1938, 48.857, 2.352],
    "Joueuse de tennis française, première star mondiale du tennis féminin.",
    ["lenglen", "suzanne lenglen"]);
  A("expert", "Marcel Cerdan", ["Sidi Bel Abbès", 1916, 35.2, -0.633], ["Açores", 1949, 37.8, -25.5],
    "Boxeur français champion du monde, amour d'Édith Piaf, mort dans un accident d'avion.",
    ["cerdan", "marcel cerdan"]);
  A("expert", "Bobby Fischer", ["Chicago", 1943, 41.882, -87.628], ["Reykjavik", 2008, 64.147, -21.935],
    "Joueur d'échecs américain, champion du monde en 1972 face au Soviétique Spassky.",
    ["bobby fischer", "fischer"]);
  A("expert", "Kant", ["Kaliningrad", 1724, 54.711, 20.509], ["Kaliningrad", 1804, 54.711, 20.509],
    "Philosophe allemand des Lumières, auteur de la Critique de la raison pure.",
    ["kant", "emmanuel kant", "immanuel kant"]);
  A("expert", "Vauban", ["Saint-Léger-de-Foucheret", 1633, 47.378, 4.04], ["Paris", 1707, 48.857, 2.352],
    "Ingénieur militaire de Louis XIV qui fortifia les frontières de la France.",
    ["vauban", "sebastien le prestre de vauban"]);
  A("expert", "Francis Drake", ["Tavistock", 1540, 50.55, -4.144, true], ["Portobelo", 1596, 9.554, -79.655],
    "Corsaire anglais, deuxième à faire le tour du monde, mort au large de Panama.",
    ["drake", "francis drake"]);
  A("expert", "François-Joseph", ["Vienne", 1830, 48.208, 16.372], ["Vienne", 1916, 48.208, 16.372],
    "Empereur d'Autriche pendant 68 ans, époux de Sissi.",
    ["francois joseph", "franz joseph", "francois joseph ier", "franz josef"]);
  A("expert", "Louis II de Bavière", ["Munich", 1845, 48.138, 11.575], ["Lac de Starnberg", 1886, 47.904, 11.307],
    "Roi de Bavière rêveur qui fit bâtir le château de Neuschwanstein, retrouvé noyé dans un lac.",
    ["louis ii de baviere", "louis ii", "ludwig ii", "ludwig ii of bavaria", "le roi fou"]);
  A("expert", "Guillaume II", ["Berlin", 1859, 52.52, 13.405], ["Doorn", 1941, 52.031, 5.339],
    "Dernier empereur d'Allemagne, qui abdiqua à la fin de la Première Guerre mondiale.",
    ["guillaume ii", "wilhelm ii", "guillaume 2", "kaiser guillaume ii", "kaiser wilhelm"]);
  A("expert", "Custer", ["New Rumley", 1839, 40.402, -81.031], ["Little Bighorn", 1876, 45.57, -107.43],
    "Officier de cavalerie américain tué avec ses hommes à Little Bighorn.",
    ["custer", "general custer", "george armstrong custer"]);

  var T = window.TRADUCTIONS_EN;
  T["Édith Piaf"] = ["Édith Piaf", "French singer with a heart-rending voice, who sang La Vie en rose and Non, je ne regrette rien."];
  T["Johnny Hallyday"] = ["Johnny Hallyday", "French rock star who sold millions of records and was a teen idol for almost sixty years."];
  T["Serge Gainsbourg"] = ["Serge Gainsbourg", "Provocative French songwriter, author of La Javanaise and Je t'aime… moi non plus."];
  T["Jacques Brel"] = ["Jacques Brel", "Belgian singer of intense stage presence, author of Ne me quitte pas and Amsterdam."];
  T["Claude François"] = ["Claude François", "French pop singer famous for his sequins, who wrote Comme d'habitude, which became My Way."];
  T["Dalida"] = ["Dalida", "Egyptian-born French singer of Paroles, paroles and Gigi l'amoroso."];
  T["Charles Aznavour"] = ["Charles Aznavour", "French singer of Armenian descent, author of La Bohème and hundreds of songs."];
  T["Maria Callas"] = ["Maria Callas", "Greek soprano nicknamed \"La Divina\", the most famous opera singer of the 20th century."];
  T["Frank Sinatra"] = ["Frank Sinatra", "American singer and actor with a velvet voice, who sang My Way and New York, New York."];
  T["Ray Charles"] = ["Ray Charles", "Blind American pianist and singer, soul pioneer, who sang Hit the Road Jack."];
  T["Michael Jackson"] = ["Michael Jackson", "American singer and dancer nicknamed the \"King of Pop\", who made the album Thriller."];
  T["John Lennon"] = ["John Lennon", "Singer and co-founder of the Beatles, author of Imagine, shot dead outside his home."];
  T["Freddie Mercury"] = ["Freddie Mercury", "Lead singer of Queen, who sang Bohemian Rhapsody."];
  T["David Bowie"] = ["David Bowie", "British singer of many faces, creator of the character Ziggy Stardust."];
  T["Bob Marley"] = ["Bob Marley", "Jamaican singer who brought reggae to the whole world."];
  T["Jimi Hendrix"] = ["Jimi Hendrix", "American guitar virtuoso who revolutionised rock, dead at 27."];
  T["Jim Morrison"] = ["Jim Morrison", "Lead singer of The Doors, who died in Paris aged 27."];
  T["Kurt Cobain"] = ["Kurt Cobain", "Lead singer of Nirvana and figure of grunge, dead at 27."];
  T["Whitney Houston"] = ["Whitney Houston", "American singer with a powerful voice, who sang I Will Always Love You."];
  T["Marilyn Monroe"] = ["Marilyn Monroe", "American actress who became Hollywood's glamour icon in the 1950s."];
  T["James Dean"] = ["James Dean", "American actor of Rebel Without a Cause, killed in a car crash at 24."];
  T["Audrey Hepburn"] = ["Audrey Hepburn", "British actress of Breakfast at Tiffany's who became a UNICEF ambassador."];
  T["Grace Kelly"] = ["Grace Kelly", "American Hitchcock actress who became Princess of Monaco."];
  T["Alfred Hitchcock"] = ["Alfred Hitchcock", "British director, master of suspense, who made Psycho and The Birds."];
  T["Bruce Lee"] = ["Bruce Lee", "Actor and martial artist who made kung fu popular in cinema."];
  T["Louis de Funès"] = ["Louis de Funès", "French comic actor of La Grande Vadrouille and The Troops of St. Tropez."];
  T["Jean Gabin"] = ["Jean Gabin", "French actor of La Grande Illusion and Port of Shadows."];
  T["Coluche"] = ["Coluche", "French comedian who founded the Restos du cœur food charity."];
  T["Joséphine Baker"] = ["Josephine Baker", "American dancer and singer who became a star in Paris, a Resistance fighter honoured in the Panthéon."];
  T["Coco Chanel"] = ["Coco Chanel", "French fashion designer who created the little black dress and the No. 5 perfume."];
  T["Christian Dior"] = ["Christian Dior", "French couturier whose New Look revolutionised post-war fashion."];
  T["Karl Lagerfeld"] = ["Karl Lagerfeld", "German fashion designer, creative director of Chanel, always dressed in black and white."];
  T["Andy Warhol"] = ["Andy Warhol", "American pop artist, famous for his soup cans and portraits of Marilyn."];
  T["Muhammad Ali"] = ["Muhammad Ali", "American boxer, three-time heavyweight champion, who could \"float like a butterfly\"."];
  T["Pelé"] = ["Pelé", "Brazilian footballer, three-time World Cup winner."];
  T["Diego Maradona"] = ["Diego Maradona", "Brilliant Argentine footballer, author of the \"Hand of God\" at the 1986 World Cup."];
  T["Ayrton Senna"] = ["Ayrton Senna", "Brazilian three-time Formula One world champion, killed in a race."];
  T["Kobe Bryant"] = ["Kobe Bryant", "American basketball player for the Los Angeles Lakers, killed in a helicopter crash."];
  T["Pierre de Coubertin"] = ["Pierre de Coubertin", "French educator who revived the Olympic Games in 1896."];
  T["Stephen Hawking"] = ["Stephen Hawking", "British physicist of black holes who lived with motor neurone disease."];
  T["Steve Jobs"] = ["Steve Jobs", "Co-founder of Apple, behind the Macintosh, the iPod and the iPhone."];
  T["Alexander Fleming"] = ["Alexander Fleming", "Scottish doctor who discovered penicillin, the first antibiotic."];
  T["Louis Braille"] = ["Louis Braille", "Frenchman blinded as a child who invented the raised-dot writing system for the blind."];
  T["Jacques-Yves Cousteau"] = ["Jacques Cousteau", "French naval officer who explored the oceans aboard the Calypso."];
  T["Charles Lindbergh"] = ["Charles Lindbergh", "American aviator, the first to fly solo non-stop across the Atlantic, in 1927."];
  T["Youri Gagarine"] = ["Yuri Gagarin", "Soviet cosmonaut, the first human in space, in 1961."];
  T["Platon"] = ["Plato", "Greek philosopher, disciple of Socrates and founder of the Academy in Athens."];
  T["Charles Baudelaire"] = ["Charles Baudelaire", "French poet, author of The Flowers of Evil."];
  T["Jean-Paul Sartre"] = ["Jean-Paul Sartre", "French existentialist philosopher who turned down the Nobel Prize in Literature."];
  T["Albert Camus"] = ["Albert Camus", "Algerian-born French writer, author of The Stranger and The Plague, killed in a car crash."];
  T["Antoine de Saint-Exupéry"] = ["Antoine de Saint-Exupéry", "French aviator and writer, author of The Little Prince, lost at sea during the war."];
  T["Agatha Christie"] = ["Agatha Christie", "British novelist, queen of crime fiction and creator of Hercule Poirot."];
  T["J.R.R. Tolkien"] = ["J.R.R. Tolkien", "British writer and professor, author of The Hobbit and The Lord of the Rings."];
  T["Élisabeth II"] = ["Elizabeth II", "Queen of the United Kingdom for 70 years, the longest reign in British history."];
  T["Lady Diana"] = ["Princess Diana", "Hugely popular Princess of Wales, killed in a car crash in a Paris tunnel."];
  T["Sissi"] = ["Empress Sisi", "Empress of Austria of legendary beauty, stabbed to death in Geneva by an anarchist."];
  T["Jean-Paul II"] = ["John Paul II", "Polish pope for 27 years, a great traveller who helped bring down communism."];
  T["Saint François d'Assise"] = ["Francis of Assisi", "Merchant's son turned poor friar, founder of the Franciscans, said to preach to the birds."];
  T["L'abbé Pierre"] = ["Abbé Pierre", "French priest and founder of Emmaus, who launched the 1954 winter appeal for the homeless."];
  T["Anne Frank"] = ["Anne Frank", "Jewish teenager whose diary, written in hiding in Amsterdam, bears witness to the Holocaust."];
  T["Jean Moulin"] = ["Jean Moulin", "Prefect and leader of the French Resistance, who died after being tortured by the Gestapo."];
  T["Simone Veil"] = ["Simone Veil", "Auschwitz survivor and minister who legalised abortion in France, President of the European Parliament."];
  T["François Mitterrand"] = ["François Mitterrand", "President of France for fourteen years, who abolished the death penalty."];
  T["Jacques Chirac"] = ["Jacques Chirac", "Mayor of Paris then President of France, who opposed the Iraq war."];
  T["Margaret Thatcher"] = ["Margaret Thatcher", "First woman Prime Minister of the United Kingdom, nicknamed the \"Iron Lady\"."];
  T["Ronald Reagan"] = ["Ronald Reagan", "Hollywood actor who became US President at the end of the Cold War."];
  T["Malcolm X"] = ["Malcolm X", "Radical African-American civil rights activist, assassinated in New York."];
  T["Al Capone"] = ["Al Capone", "Chicago gangster during Prohibition, finally jailed for tax evasion."];
  T["Raspoutine"] = ["Rasputin", "Siberian healer monk with great influence at the tsar's court, murdered by noblemen."];
  T["Mata Hari"] = ["Mata Hari", "Dutch dancer accused of spying during the First World War and shot by firing squad."];
  T["Caligula"] = ["Caligula", "Roman emperor reputed to be mad, said to have wanted to make his horse a consul."];
  T["Philippe le Bel"] = ["Philip the Fair", "King of France who had the Templars arrested and defied the pope."];
  T["Catherine de Médicis"] = ["Catherine de' Medici", "Florentine-born Queen of France, mother of three kings, at the heart of the Wars of Religion."];
  T["Lucrèce Borgia"] = ["Lucrezia Borgia", "Daughter of Pope Alexander VI with a scandalous reputation, who became Duchess of Ferrara."];
  T["Machiavel"] = ["Machiavelli", "Florentine political thinker, author of The Prince."];
  T["Mazarin"] = ["Mazarin", "Italian-born cardinal, chief minister during the childhood of Louis XIV."];
  T["Louis XIII"] = ["Louis XIII", "King of France, son of Henry IV and father of Louis XIV, who ruled alongside Richelieu."];
  T["Marie Stuart"] = ["Mary, Queen of Scots", "Queen of Scotland and briefly of France, beheaded on Elizabeth I's orders."];
  T["Oliver Cromwell"] = ["Oliver Cromwell", "Puritan leader who had King Charles I executed and ruled England as Lord Protector."];
  T["Talleyrand"] = ["Talleyrand", "Shrewd French diplomat, minister under the Revolution, Napoleon and the Restoration."];
  T["Nicolas II"] = ["Nicholas II", "Last tsar of Russia, shot with his family by the Bolsheviks."];
  T["Rosa Luxemburg"] = ["Rosa Luxemburg", "Polish-born Marxist revolutionary, murdered in Berlin."];
  T["Rommel"] = ["Rommel", "German field marshal nicknamed the \"Desert Fox\", forced into suicide by Hitler."];
  T["Pétain"] = ["Pétain", "Hero of Verdun who became head of the Vichy regime and collaborated with Nazi Germany."];
  T["Eva Perón"] = ["Eva Perón", "Wife of Argentine President Juan Perón, idolised by the poor as Evita."];
  T["Yitzhak Rabin"] = ["Yitzhak Rabin", "Israeli Prime Minister and Nobel Peace laureate, assassinated by an extremist."];
  T["Saddam Hussein"] = ["Saddam Hussein", "Dictator of Iraq, overthrown by the 2003 US invasion and executed."];
  T["Ulysses S. Grant"] = ["Ulysses S. Grant", "Union general who won the Civil War, then President of the United States."];
  T["Harry Truman"] = ["Harry Truman", "US President who ordered the atomic bombings of Japan."];
  T["Eisenhower"] = ["Eisenhower", "Commander of the Normandy landings, then President of the United States."];
  T["Richard Nixon"] = ["Richard Nixon", "US President forced to resign by the Watergate scandal."];
  T["Marat"] = ["Marat", "Revolutionary journalist stabbed in his bath by Charlotte Corday."];
  T["Charlotte Corday"] = ["Charlotte Corday", "Young woman from Normandy who killed Marat and was guillotined."];
  T["Le marquis de Sade"] = ["Marquis de Sade", "Scandalous libertine writer who spent much of his life locked up."];
  T["Casanova"] = ["Casanova", "Venetian adventurer famous for his love affairs and his escape from Venice's prisons."];
  T["Jean Calvin"] = ["John Calvin", "French Protestant reformer who made Geneva the \"Protestant Rome\"."];
  T["Nostradamus"] = ["Nostradamus", "Provençal doctor and astrologer whose prophecies are still debated."];
  T["Diderot"] = ["Diderot", "Enlightenment philosopher who edited the Encyclopédie."];
  T["Montesquieu"] = ["Montesquieu", "Enlightenment philosopher who set out the separation of powers in The Spirit of the Laws."];
  T["Simone de Beauvoir"] = ["Simone de Beauvoir", "French philosopher and writer, author of The Second Sex and Sartre's companion."];
  T["Charles Perrault"] = ["Charles Perrault", "French writer who set down Little Red Riding Hood, Cinderella and Puss in Boots."];
  T["Chateaubriand"] = ["Chateaubriand", "French Romantic writer, author of Memoirs from Beyond the Grave."];
  T["Stendhal"] = ["Stendhal", "French novelist, author of The Red and the Black."];
  T["Flaubert"] = ["Flaubert", "French novelist, author of Madame Bovary."];
  T["Maupassant"] = ["Maupassant", "French writer and master of the short story, author of Bel-Ami and The Horla."];
  T["George Sand"] = ["George Sand", "French novelist with a male pen name, Chopin's companion."];
  T["Verlaine"] = ["Verlaine", "French poet, author of Saturnine Poems and Rimbaud's stormy companion."];
  T["Marcel Proust"] = ["Marcel Proust", "French writer, author of In Search of Lost Time and its famous madeleine."];
  T["Lord Byron"] = ["Lord Byron", "English Romantic poet who died fighting for Greek independence."];
  T["Jane Austen"] = ["Jane Austen", "English novelist, author of Pride and Prejudice."];
  T["Oscar Wilde"] = ["Oscar Wilde", "Witty Irish writer, author of The Picture of Dorian Gray, who died in Paris."];
  T["Arthur Conan Doyle"] = ["Arthur Conan Doyle", "Scottish writer, creator of the detective Sherlock Holmes."];
  T["Lewis Carroll"] = ["Lewis Carroll", "English writer and mathematician, author of Alice's Adventures in Wonderland."];
  T["Rudyard Kipling"] = ["Rudyard Kipling", "India-born British writer, author of The Jungle Book."];
  T["Jack London"] = ["Jack London", "American adventurer-writer, author of The Call of the Wild and White Fang."];
  T["Debussy"] = ["Debussy", "French composer of Clair de lune and La Mer."];
  T["Ravel"] = ["Ravel", "French composer of Boléro."];
  T["Cézanne"] = ["Cézanne", "Provençal painter and forerunner of Cubism, who painted Mont Sainte-Victoire again and again."];
  T["Degas"] = ["Degas", "French painter and sculptor, famous for his ballet dancers."];
  T["Renoir"] = ["Renoir", "French Impressionist painter of Dance at Le Moulin de la Galette."];
  T["Toulouse-Lautrec"] = ["Toulouse-Lautrec", "Painter and poster artist of Montmartre's cabarets and the Moulin Rouge."];
  T["Matisse"] = ["Matisse", "French painter of pure colours, master of Fauvism and paper cut-outs."];
  T["Modigliani"] = ["Modigliani", "Italian painter of Montparnasse, known for his long-necked portraits."];
  T["Magritte"] = ["Magritte", "Belgian Surrealist painter of \"This is not a pipe\"."];
  T["Edvard Munch"] = ["Edvard Munch", "Norwegian painter, author of The Scream."];
  T["Camille Claudel"] = ["Camille Claudel", "French sculptor, Rodin's pupil and lover, confined to an asylum for thirty years."];
  T["Jean-Michel Basquiat"] = ["Jean-Michel Basquiat", "American painter who came from graffiti, a star of the New York art scene, dead at 27."];
  T["Henry Ford"] = ["Henry Ford", "American industrialist who made the car affordable through the assembly line."];
  T["Louis Blériot"] = ["Louis Blériot", "French aviator, the first to fly across the English Channel, in 1909."];
  T["Marconi"] = ["Marconi", "Italian inventor of wireless telegraphy, the forerunner of radio."];
  T["Wernher von Braun"] = ["Wernher von Braun", "German engineer of the V-2 rockets, then of the American rocket that took men to the Moon."];
  T["Ferdinand de Lesseps"] = ["Ferdinand de Lesseps", "French diplomat who had the Suez Canal dug."];
  T["Amerigo Vespucci"] = ["Amerigo Vespucci", "Florentine navigator whose first name was given to America."];
  T["Pizarro"] = ["Pizarro", "Spanish conquistador who overthrew the Inca Empire."];
  T["Pocahontas"] = ["Pocahontas", "Daughter of a Native American chief in Virginia who travelled to England, where she died young."];
  T["Davy Crockett"] = ["Davy Crockett", "American frontiersman and politician, killed defending the Alamo."];
  T["Buffalo Bill"] = ["Buffalo Bill", "Buffalo hunter and army scout who became the star of a Wild West show."];
  T["Calamity Jane"] = ["Calamity Jane", "Wild West frontierswoman, friend of Wild Bill Hickok."];
  T["Pancho Villa"] = ["Pancho Villa", "Revolutionary leader from northern Mexico, killed in an ambush."];
  T["Emiliano Zapata"] = ["Emiliano Zapata", "Peasant leader of the Mexican Revolution, for whom \"the land belongs to those who work it\"."];
  T["Le Caravage"] = ["Caravaggio", "Italian painter of dramatic light and shade who led a violent life."];
  T["Le Greco"] = ["El Greco", "Cretan painter who settled in Toledo, known for his elongated, mystical figures."];
  T["Delacroix"] = ["Delacroix", "French Romantic painter of Liberty Leading the People."];
  T["Joan Miró"] = ["Joan Miró", "Catalan painter of colourful, poetic shapes, close to Surrealism."];
  T["Marc Chagall"] = ["Marc Chagall", "Belarus-born painter of floating figures, who painted the ceiling of the Paris Opéra Garnier."];
  T["Kandinsky"] = ["Kandinsky", "Russian-born painter, a pioneer of abstract art."];
  T["Jackson Pollock"] = ["Jackson Pollock", "American painter who dripped paint onto canvases laid on the floor."];
  T["Schubert"] = ["Schubert", "Viennese composer of songs and The Trout, who died at 31."];
  T["Liszt"] = ["Liszt", "Hungarian piano virtuoso, classical music's first \"rock star\"."];
  T["Puccini"] = ["Puccini", "Italian opera composer of La Bohème, Tosca and Madama Butterfly."];
  T["Pavarotti"] = ["Pavarotti", "Italian tenor with a sunny voice, one of the Three Tenors."];
  T["Ennio Morricone"] = ["Ennio Morricone", "Italian composer of western film scores, including The Good, the Bad and the Ugly."];
  T["Johnny Cash"] = ["Johnny Cash", "American country singer, \"the Man in Black\", who played concerts in prisons."];
  T["Buddy Holly"] = ["Buddy Holly", "Bespectacled rock'n'roll pioneer, killed in a plane crash at 22."];
  T["Janis Joplin"] = ["Janis Joplin", "American rock and blues singer with a raspy voice, dead at 27."];
  T["Tina Turner"] = ["Tina Turner", "American singer nicknamed the \"Queen of Rock\", who sang The Best."];
  T["George Michael"] = ["George Michael", "British singer from Wham!, who sang Careless Whisper and Last Christmas."];
  T["Georges Brassens"] = ["Georges Brassens", "French singer with guitar and moustache, author of Les Copains d'abord."];
  T["Fellini"] = ["Fellini", "Italian director of La Dolce Vita and Amarcord."];
  T["Stanley Kubrick"] = ["Stanley Kubrick", "American director of 2001: A Space Odyssey and The Shining."];
  T["Orson Welles"] = ["Orson Welles", "American director and actor of Citizen Kane, who panicked America with a fake Martian invasion on the radio."];
  T["Greta Garbo"] = ["Greta Garbo", "Swedish actress, Hollywood's mysterious star, who retired at 36."];
  T["Ingrid Bergman"] = ["Ingrid Bergman", "Swedish actress of Casablanca, winner of three Oscars."];
  T["Romy Schneider"] = ["Romy Schneider", "Austrian actress who became a star in France, first famous for playing Sissi."];
  T["Marlon Brando"] = ["Marlon Brando", "American actor of The Godfather and A Streetcar Named Desire."];
  T["John Wayne"] = ["John Wayne", "American actor, hero of westerns such as Stagecoach."];
  T["Jean-Paul Belmondo"] = ["Jean-Paul Belmondo", "French actor of Breathless, famous for doing his own stunts."];
  T["Alain Delon"] = ["Alain Delon", "French actor of Le Samouraï and Purple Noon, one of cinema's most famous faces."];
  T["Heath Ledger"] = ["Heath Ledger", "Australian actor, unforgettable Joker in The Dark Knight, who died at 28."];
  T["Robin Williams"] = ["Robin Williams", "American comic actor of Dead Poets Society and Mrs. Doubtfire."];
  T["F. Scott Fitzgerald"] = ["F. Scott Fitzgerald", "American writer of the Jazz Age, author of The Great Gatsby."];
  T["John Steinbeck"] = ["John Steinbeck", "American writer, author of The Grapes of Wrath, Nobel Prize in Literature."];
  T["Virginia Woolf"] = ["Virginia Woolf", "English modernist novelist, author of Mrs Dalloway."];
  T["Gabriel García Márquez"] = ["Gabriel García Márquez", "Colombian writer, author of One Hundred Years of Solitude, Nobel Prize in Literature."];
  T["Jorge Luis Borges"] = ["Jorge Luis Borges", "Blind Argentine writer of labyrinthine short stories such as Ficciones."];
  T["Pablo Neruda"] = ["Pablo Neruda", "Committed Chilean poet, Nobel Prize in Literature."];
  T["Federico García Lorca"] = ["Federico García Lorca", "Andalusian poet and playwright, shot at the start of the Spanish Civil War."];
  T["Jesse Owens"] = ["Jesse Owens", "African-American athlete who won four gold medals at the 1936 Berlin Games, in front of Hitler."];
  T["Babe Ruth"] = ["Babe Ruth", "American baseball legend and star of the New York Yankees."];
  T["Fausto Coppi"] = ["Fausto Coppi", "Italian cyclist nicknamed \"Il Campionissimo\", twice winner of the Tour de France."];
  T["Jacques Anquetil"] = ["Jacques Anquetil", "Cyclist from Normandy, the first to win the Tour de France five times."];
  T["Johan Cruyff"] = ["Johan Cruyff", "Dutch master of \"Total Football\", star of Ajax and FC Barcelona."];
  T["Eusébio"] = ["Eusébio", "Mozambique-born Portuguese footballer nicknamed the \"Black Panther\"."];
  T["Ferenc Puskás"] = ["Ferenc Puskás", "Legendary Hungarian goalscorer for Real Madrid and the great Hungary team."];
  T["George Best"] = ["George Best", "Flamboyant Northern Irish footballer of Manchester United."];
  T["Juan Manuel Fangio"] = ["Juan Manuel Fangio", "Argentine driver, five-time Formula One world champion in the 1950s."];
  T["Niki Lauda"] = ["Niki Lauda", "Austrian Formula One driver who raced again six weeks after being badly burned."];
  T["Suzanne Lenglen"] = ["Suzanne Lenglen", "French tennis player, the first global star of women's tennis."];
  T["Marcel Cerdan"] = ["Marcel Cerdan", "French world champion boxer, Édith Piaf's lover, killed in a plane crash."];
  T["Bobby Fischer"] = ["Bobby Fischer", "American chess player who became world champion in 1972 against the Soviet Spassky."];
  T["Kant"] = ["Kant", "German Enlightenment philosopher, author of the Critique of Pure Reason."];
  T["Vauban"] = ["Vauban", "Louis XIV's military engineer who fortified France's borders."];
  T["Francis Drake"] = ["Francis Drake", "English privateer, the second to sail around the world, who died off Panama."];
  T["François-Joseph"] = ["Franz Joseph", "Emperor of Austria for 68 years, husband of Sisi."];
  T["Louis II de Bavière"] = ["Ludwig II of Bavaria", "Dreamy King of Bavaria who built Neuschwanstein Castle and was found drowned in a lake."];
  T["Guillaume II"] = ["Wilhelm II", "Last German Emperor, who abdicated at the end of the First World War."];
  T["Custer"] = ["Custer", "American cavalry officer killed with his men at Little Bighorn."];

  var LE = window.LIEUX_EN;
  LE["Albany (Géorgie)"] = "Albany (Georgia)";
  LE["Alexandria (Virginie)"] = "Alexandria (Virginia)";
  LE["Assise"] = "Assisi";
  LE["Athènes"] = "Athens";
  LE["Au large de Marseille"] = "Off Marseille";
  LE["Açores"] = "Azores";
  LE["Bagdad"] = "Baghdad";
  LE["Barcelone"] = "Barcelona";
  LE["Bergen-Belsen"] = "Bergen-Belsen concentration camp";
  LE["Bologne"] = "Bologna";
  LE["Bruxelles"] = "Brussels";
  LE["Détroit"] = "Detroit";
  LE["Ferrare"] = "Ferrara";
  LE["Francfort-sur-le-Main"] = "Frankfurt";
  LE["Genève"] = "Geneva";
  LE["Hambourg"] = "Hamburg";
  LE["Héraklion"] = "Heraklion";
  LE["Iekaterinbourg"] = "Yekaterinburg";
  LE["Ismaïlia"] = "Ismailia";
  LE["Jérusalem"] = "Jerusalem";
  LE["Klouchino"] = "Klushino";
  LE["Lac de Starnberg"] = "Lake Starnberg";
  LE["Le Caire"] = "Cairo";
  LE["Lisbonne"] = "Lisbon";
  LE["Livourne"] = "Livorno";
  LE["Londres"] = "London";
  LE["Lucques"] = "Lucca";
  LE["Melbourne (Floride)"] = "Melbourne (Florida)";
  LE["Mexico"] = "Mexico City";
  LE["Modène"] = "Modena";
  LE["Moscou"] = "Moscow";
  LE["New York"] = "New York City";
  LE["Novosiolovo"] = "Novosyolovo";
  LE["Palma de Majorque"] = "Palma de Mallorca";
  LE["Parral (Chili)"] = "Parral (Chile)";
  LE["Philadelphie"] = "Philadelphia";
  LE["Pokrovskoïe"] = "Pokrovskoye";
  LE["Reykjavik"] = "Reykjavík";
  LE["Saint-Louis (Missouri)"] = "St. Louis (Missouri)";
  LE["Saint-Pétersbourg"] = "Saint Petersburg";
  LE["Séville"] = "Seville";
  LE["Terry (Dakota du Sud)"] = "Terry (South Dakota)";
  LE["Tolède"] = "Toledo";
  LE["Tsarskoïe Selo"] = "Tsarskoye Selo";
  LE["Vatican"] = "Vatican City";
  LE["Venise"] = "Venice";
  LE["Vienne"] = "Vienna";
  LE["Édimbourg"] = "Edinburgh";
})();
