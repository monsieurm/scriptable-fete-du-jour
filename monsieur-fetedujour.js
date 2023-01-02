// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: magic;

const date = new Date();
const day = date.getDay().toString();
const today = date.getDate().toString();
const month = date.getMonth().toString();
const titleText = 'Fête du jour';
const subtitleText = 'Demain';
const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
];
const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
];
const saints = [
    [
        "Jour de l'An",
        "Basile",
        "Geneviève",
        "Odilon",
        "Edouard",
        "Mélaine",
        "Raymond",
        "Lucien",
        "Alix",
        "Guillaume",
        "Pauline",
        "Tatiana",
        "Yvette",
        "Nina",
        "Rémi",
        "Marcel",
        "Roseline",
        "Prisca",
        "Marius",
        "Sébastien",
        "Agnès",
        "Vincent",
        "Barnard",
        "François de Sales",
        "Conversion de Paul",
        "Paule",
        "Angèle",
        "Thomas d'Aquin",
        "Gildas",
        "Martine",
        "Marcelle"
    ],
    [
        "Ella",
        "Fête de la Présention",
        "Blaise",
        "Véronique",
        "Agathe",
        "Gaston",
        "Eugènie",
        "Jacqueline",
        "Apolline",
        "Arnaud",
        "Notre Dame de Lourdes",
        "Félix",
        "Béatrice",
        "Valentin",
        "Claude",
        "Julienne",
        "Alexis",
        "Bernadette",
        "Gabin",
        "Aimée",
        "Mercredi des Cendres",
        "Isabelle",
        "Lazare",
        "Modeste",
        "Roméo",
        "Nestor",
        "Honorine",
        "Romain",
        "Auguste"
    ],
    [
        "Aubin",
        "Charles le Bon",
        "Guénolé",
        "Casimir",
        "Olive",
        "Colette",
        "Félicité",
        "Jean de Dieu",
        "Françoise",
        "Vivien",
        "Rosine",
        "Justine",
        "Rodrigue",
        "Mathilde",
        "Louise",
        "Bénédicte",
        "Patrice",
        "Cyrille",
        "Joseph",
        "Herbert",
        "Clémence",
        "Léa",
        "Victorien",
        "Karine",
        "Anne",
        "Larissa",
        "Habib",
        "Gontran",
        "Gwladys",
        "Amédée",
        "Benjamin"
    ],
    [
        "Hugues",
        "Sandrine",
        "Richard",
        "Isidore",
        "Irène",
        "Marcellin",
        "Jean-Baptiste de la Salle",
        "Julie",
        "Gautier",
        "Fulbert",
        "Stanislas",
        "Jules",
        "Ida",
        "Maxime",
        "Paterne",
        "Benoît-Joseph",
        "Anicet",
        "Parfait",
        "Emma",
        "Odette",
        "Anselme",
        "Alexandre",
        "Georges",
        "Fidèle",
        "Marc",
        "Alida",
        "Zita",
        "Valérie",
        "Catherine de Sienne",
        "Robert"
    ],
    [
        "Fête du travail",
        "Boris",
        "Philippe",
        "Sylvain",
        "Judith",
        "Prudence",
        "Gisèle",
        "Armistice de 1945",
        "Pacôme",
        "Solange",
        "Estelle",
        "Achille",
        "Rolande",
        "Matthias",
        "Denise",
        "Honoré",
        "Pascal",
        "Eric",
        "Yves",
        "Bernardin",
        "Constantin",
        "Emile",
        "Didier",
        "Donatien",
        "Sophie",
        "Bérenger",
        "Augustin",
        "Germain",
        "Aymar",
        "Ferdinand",
        "Ferdinand"
    ],
    [
        "Justin",
        "Blandine",
        "Kévin",
        "Clotilde",
        "Igor",
        "Norbert",
        "Gilbert",
        "Médard",
        "Diane",
        "Landry",
        "Barnabé",
        "Guy",
        "Antoine de Padoue",
        "Elisée",
        "Germaine",
        "Jean-François Régis",
        "Hervé",
        "Léonce",
        "Romuald",
        "Silvère",
        "Solstice d'été",
        "Alban",
        "Audrey",
        "Jean-Baptiste",
        "Prosper",
        "Anthelme",
        "Fernand",
        "Irénée",
        "Pierre",
        "Martial"
    ],
    [
        "Thierry",
        "Martinien",
        "Thomas",
        "Florent",
        "Antoine",
        "Mariette",
        "Raoul",
        "Thibault",
        "Amandine",
        "Ulrich",
        "Benoît",
        "Olivier",
        "Henri",
        "Fête Nationale",
        "Donald",
        "Fête de Notre Dame du Mont Carmel",
        "Charlotte",
        "Frédéric",
        "Arsène",
        "Marina",
        "Victor",
        "Marie-Madeleine",
        "Brigitte",
        "Christine",
        "Jacques",
        "Anne",
        "Nathalie",
        "Samson",
        "Marthe",
        "Juliette",
        "Ignace de Loyola"
    ],
    [
        "Alphonse",
        "Julien, Eymard",
        "Lydie",
        "Jean-Marie, Vianney",
        "Abel",
        "Fête de la Transfiguration",
        "Gaétan",
        "Dominique",
        "Amour",
        "Laurent",
        "Claire",
        "Clarisse",
        "Hippolyte",
        "Evrard",
        "Fête de l'Assomption",
        "Armel",
        "Hyacinthe",
        "Hélène",
        "Jean-Eudes",
        "Bernard",
        "Christophe",
        "Fabrice",
        "Rose de Lima",
        "Barthélémy",
        "Louis",
        "Natacha",
        "Monique",
        "Augustin",
        "Sabine",
        "Fiacre",
        "Aristide"
    ],
    [
        "Gilles",
        "Ingrid",
        "Grégoire",
        "Rosalie",
        "Raïssa",
        "Bertrand",
        "Reine",
        "Fête de la Nativité",
        "Alain",
        "Inès",
        "Adelphe",
        "Apollinaire",
        "Aimé",
        "Fête de la Croix Glorieuse",
        "Roland",
        "Edith",
        "Renaud",
        "Nadège",
        "Emilie",
        "Davy",
        "Matthieu",
        "Maurice",
        "Equinoxe d'Automne",
        "Thècle",
        "Hermann",
        "Côme",
        "Vincent de Paul",
        "Venceslas",
        "Michel",
        "Jérôme"
    ],
    [
        "Thérèse de l'Enfant Jésus",
        "Léger",
        "Gérard",
        "François d'Assise",
        "Fleur",
        "Bruno",
        "Serge",
        "Pélagie",
        "Denis",
        "Ghislain",
        "Firmin",
        "Wilfried",
        "Géraud",
        "Juste",
        "Thérèse d'Avila",
        "Edwige",
        "Baudoin",
        "Luc",
        "René",
        "Adeline",
        "Céline",
        "Elodie",
        "Jean de Capistran",
        "Florentin",
        "Crépin",
        "Dimitri",
        "Emeline",
        "Jude",
        "Narcisse",
        "Bienvenue",
        "Quentin"
    ],
    [
        "Toussaint",
        "Fête des défunts",
        "Hubert",
        "Charles",
        "Sylvie",
        "Bertille",
        "Carine",
        "Geoffroy",
        "Théodore",
        "Léon",
        "Armistice de 1918",
        "Christian",
        "Brice",
        "Sidoine",
        "Albert",
        "Marguerite",
        "Elisabeth",
        "Aude",
        "Tanguy",
        "Edmond",
        "Présence de Marie",
        "Cécile",
        "Clément",
        "Flora",
        "Catherine",
        "Delphine",
        "Sévrin",
        "Jacques de la Marche",
        "Saturnin",
        "André"
    ],
    [
        "Florence",
        "Viviane",
        "François-Xavier",
        "Barbara",
        "Gérald",
        "Nicolas",
        "Ambroise",
        "Fête de l'Immaculée Conception",
        "Pierre Fourier",
        "Romaric",
        "Daniel",
        "Jeanne-Françoise de Chantal",
        "Lucie",
        "Odile",
        "Ninon",
        "Alice",
        "Gaël",
        "Gatien",
        "Urbain",
        "Théophile",
        "Solstice d'Hiver",
        "Françoise-Xavière",
        "Armand",
        "Adèle",
        "Noël",
        "Etienne",
        "Jean",
        "Innocents",
        "David",
        "Roger",
        "Sylvestre"
    ]
];
const widget = createWidget();

/**
 * Main widget function.
 *
 * @param {} data The data for the widget to display
 */
function createWidget(data) {
    // console.log(`Creating widget with data: ${JSON.stringify(data)}`);
    let widget = new ListWidget();
    widget.backgroundColor = new Color('#fff');
    widget.setPadding(0, 5, 0, 5);

    // let stack = widget.addStack();
    // stack.layoutVertically();

    let top = widget.addStack();
    top.addSpacer();

    let middle = widget.addStack();
    middle.layoutVertically();
    middle.addSpacer(10);
    middle.backgroundColor = new Color('#ff0000');

    let bottom = widget.addStack();
    bottom.layoutVertically();
    bottom.addSpacer(20);
    bottom.backgroundColor = new Color('#00ff00');

    let titleLineText = top.addText(titleText.toUpperCase());
    titleLineText.font = new Font('HelveticaNeue-Medium', 12);
    titleLineText.textColor = new Color('#ff0000');
    top.addSpacer();

    let dateLine = middle.addStack();
    dateLine.addSpacer();

    let dateLineText = dateLine.addText(`${days[day]} ${today}`);
    dateLineText.font = new Font('HelveticaNeue-Medium', 14);
    dateLineText.textColor = new Color('#000');
    dateLine.addSpacer();

    let saintLine = middle.addStack();
    saintLine.addSpacer();

    let saintLineText = saintLine.addText(saints[month][today - 1]);
    saintLineText.font = new Font('HelveticaNeue-Bold', 20);
    saintLineText.textColor = new Color('#000');
    // saintLineText.centerAlignText();
    saintLine.addSpacer();

    let tomorrowLine = bottom.addStack();
    tomorrowLine.addSpacer();

    let subtitleLineText = tomorrowLine.addText(subtitleText.toUpperCase());
    subtitleLineText.font = new Font('HelveticaNeue-Medium', 8);
    subtitleLineText.textColor = new Color('#000');
    // subtitleLineText.centerAlignText();
    tomorrowLine.addSpacer();

    let tomorrowSaintLine = bottom.addStack();
    tomorrowSaintLine.addSpacer();

    let tomorrowSaintLineText = tomorrowSaintLine.addText(saints[month][today]);
    tomorrowSaintLineText.font = new Font('HelveticaNeue-Bold', 18);
    tomorrowSaintLineText.textColor = new Color('#000');
    // tomorrowSaintLineText.centerAlignText();
    tomorrowSaintLine.addSpacer();

    return widget;
}

Script.setWidget(widget);
Script.complete();

widget.presentSmall();
