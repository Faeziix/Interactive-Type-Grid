export const IS = {
  Structure: ["Control", "Initiating", "Direct"],
  Starter: ["Informative", "Initiating", "Movement"],
  Finisher: ["Movement", "Responding", "Direct"],
  BehindTheScene: ["Informative", "Responding", "Control"],
};

export const Temps = {
  Guardian: ["Affiliative", "Concrete", "Systematic"],
  Artisan: ["Pragmatic", "Concrete", "Intrest"],
  Intellectual: ["Pragmatic", "Abstract", "Systematic"],
  Idealist: ["Affiliative", "Abstract", "Interest"],
};

export const Q = {
  Crusader: ["Si-Ne", "Ti-Fe"],
  Templar: ["Se-Ni", "Ti-Fe"],
  Wayfarer: ["Se-Ni", "Te-Fi"],
  Philosopher: ["Si-Ne", "Te-Fi"],
};

let TypesData = [
  {
    id: 1,
    type: "ESTJ",
    typeDes: "OVERSEER",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Guardian,
    Quadra: Q.Philosopher,
    CF: ["Te", "Si", "Ne", "Fi"],
  },
  {
    id: 2,
    type: "ESTP",
    typeDes: "PERSUADER",

    InteractionStyle: IS.Structure,
    Temperament: Temps.Artisan,
    Quadra: Q.Templar,
    CF: ["Se", "Ti", "Fe", "Ni"],
  },
  {
    id: 3,
    type: "ENTJ",
    typeDes: "CHIEF",

    InteractionStyle: IS.Structure,
    Temperament: Temps.Intellectual,
    Quadra: Q.Wayfarer,
    CF: ["Te", "Ni", "Se", "Fi"],
  },
  {
    id: 4,
    type: "ENFJ",
    typeDes: "MENTOR",

    InteractionStyle: IS.Structure,
    Temperament: Temps.Idealist,
    Quadra: Q.Templar,
    CF: ["Fe", "Ni", "Se", "Ti"],
  },
  {
    id: 5,
    type: "ESFJ",
    typeDes: "SUPPORTER",

    InteractionStyle: IS.Starter,
    Temperament: Temps.Guardian,
    Quadra: Q.Crusader,
    CF: ["Fe", "Si", "Ne", "Ti"],
  },
  {
    id: 6,
    type: "ESFP",
    typeDes: "ENTERTAINER",

    InteractionStyle: IS.Starter,
    Temperament: Temps.Artisan,
    Quadra: Q.Wayfarer,
    CF: ["Se", "Fi", "Te", "Ni"],
  },
  {
    id: 7,
    type: "ENTP",
    typeDes: "VISIONARY",

    InteractionStyle: IS.Starter,
    Temperament: Temps.Intellectual,
    Quadra: Q.Crusader,
    CF: ["Ne", "Ti", "Fe", "Si"],
  },
  {
    id: 8,
    type: "ENFP",
    typeDes: "ADVOCATE",

    InteractionStyle: IS.Starter,
    Temperament: Temps.Idealist,
    Quadra: Q.Philosopher,
    CF: ["Ne", "Fi", "Te", "Si"],
  },
  {
    id: 9,
    type: "ISTJ",
    typeDes: "EXAMINER",

    InteractionStyle: IS.Finisher,
    Temperament: Temps.Guardian,
    Quadra: Q.Philosopher,
    CF: ["Si", "Te", "Fi", "Ne"],
  },
  {
    id: 10,
    type: "ISTP",
    typeDes: "CRAFTMAN",

    InteractionStyle: IS.Finisher,
    Temperament: Temps.Artisan,
    Quadra: Q.Templar,
    CF: ["Ti", "Se", "Ni", "Fe"],
  },
  {
    id: 11,
    type: "INTJ",
    typeDes: "STRATEGIST",

    InteractionStyle: IS.Finisher,
    Temperament: Temps.Intellectual,
    Quadra: Q.Wayfarer,
    CF: ["Ni", "Te", "Fi", "Se"],
  },
  {
    id: 12,
    type: "INFJ",
    typeDes: "SAGE",

    InteractionStyle: IS.Finisher,
    Temperament: Temps.Idealist,
    Quadra: Q.Templar,
    CF: ["Ni", "Fe", "Ti", "Se"],
  },
  {
    id: 13,
    type: "ISFJ",
    typeDes: "DEFENDER",

    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Guardian,
    Quadra: Q.Crusader,
    CF: ["Si", "Fe", "Ti", "Ne"],
  },
  {
    id: 14,
    type: "ISFP",
    typeDes: "ARTIST",

    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Artisan,
    Quadra: Q.Wayfarer,
    CF: ["Fi", "Se", "Ni", "Te"],
  },
  {
    id: 15,
    type: "INTP",
    typeDes: "ENGINEER",

    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Intellectual,
    Quadra: Q.Crusader,
    CF: ["Ti", "Ne", "Si", "Fe"],
  },
  {
    id: 16,
    type: "INFP",
    typeDes: "DREAMER",

    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Idealist,
    Quadra: Q.Philosopher,
    CF: ["Fi", "Ne", "Si", "Te"],
  },
];

export default TypesData;
