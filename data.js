// Datos de la familia. Las slides muestran SOLO palabras clave (FR/ES) + iconos.
// El guion para hablar está en guion.md (no se muestra en pantalla).

const FAMILY = [
  {
    id: "papa",
    role: { fr: "Mon père", es: "Mi papá" },
    name: "Jhon Jairo Díaz",
    emoji: "👨🏻",
    accent: "#2d6cdf",
    flag: "🇨🇴",
    cards: [
      { icon: "🎂", label: { fr: "âge", es: "edad" }, value: { fr: "59 ans", es: "59 años" } },
      { icon: "🌎", label: { fr: "nationalité", es: "nacionalidad" }, value: { fr: "Colombien · Bogotá", es: "Colombiano · Bogotá" } },
      { icon: "💼", label: { fr: "profession", es: "profesión" }, value: { fr: "Superviseur · labo pharma", es: "Supervisor · lab. farma" } },
      { icon: "❤️", label: { fr: "goûts", es: "gustos" }, value: { fr: "Voyages · famille · cinéma", es: "Viajar · familia · cine" } },
      { icon: "⚽", label: { fr: "sport", es: "deporte" }, value: { fr: "Aucun sport", es: "Ningún deporte" } },
      { icon: "⭐", label: { fr: "rêve", es: "sueño" }, value: { fr: "Retraite · voyager en famille", es: "Jubilarse · viajar en familia" } },
      { icon: "🎨", label: { fr: "passions", es: "pasiones" }, value: { fr: "Photo de voyage · œnologie", es: "Foto de viaje · vinos" } }
    ]
  },
  {
    id: "mama",
    role: { fr: "Ma mère", es: "Mi mamá" },
    name: "Claudia Gaviria",
    emoji: "👩🏻",
    accent: "#e0457b",
    flag: "🇨🇴→🇪🇸",
    cards: [
      { icon: "🎂", label: { fr: "âge", es: "edad" }, value: { fr: "56 ans", es: "56 años" } },
      { icon: "🌎", label: { fr: "nationalité", es: "nacionalidad" }, value: { fr: "Colombienne · vit en Espagne", es: "Colombiana · vive en España" } },
      { icon: "💼", label: { fr: "profession", es: "profesión" }, value: { fr: "Infirmière supérieure", es: "Enfermera superior" } },
      { icon: "❤️", label: { fr: "goûts", es: "gustos" }, value: { fr: "Manger · voyages · cinéma · shopping", es: "Comer · viajar · cine · compras" } },
      { icon: "⚽", label: { fr: "sport", es: "deporte" }, value: { fr: "Aucun sport", es: "Ningún deporte" } },
      { icon: "⭐", label: { fr: "rêve", es: "sueño" }, value: { fr: "Maison de campagne · personnes âgées", es: "Hogar campestre · ancianos" } },
      { icon: "🎨", label: { fr: "passion", es: "pasión" }, value: { fr: "Aider les autres", es: "Ayudar a los demás" } }
    ]
  },
  {
    id: "novia",
    role: { fr: "Ma petite amie", es: "Mi novia" },
    name: "Valentina Rodríguez",
    emoji: "👩🏽",
    accent: "#8b5cf6",
    flag: "🇨🇴",
    cards: [
      { icon: "🎂", label: { fr: "âge", es: "edad" }, value: { fr: "33 ans", es: "33 años" } },
      { icon: "🌎", label: { fr: "nationalité", es: "nacionalidad" }, value: { fr: "Colombienne · Manizales", es: "Colombiana · Manizales" } },
      { icon: "💼", label: { fr: "profession", es: "profesión" }, value: { fr: "Psychologue", es: "Psicóloga" } },
      { icon: "❤️", label: { fr: "goûts", es: "gustos" }, value: { fr: "Voyages · manger", es: "Viajar · comer" } },
      { icon: "⚽", label: { fr: "sport", es: "deporte" }, value: { fr: "Gym · musculation", es: "Gimnasio" } },
      { icon: "⭐", label: { fr: "rêve", es: "sueño" }, value: { fr: "Voyager dans le monde entier", es: "Viajar por todo el mundo" } },
      { icon: "🎨", label: { fr: "passions", es: "pasiones" }, value: { fr: "Bien-être mental · développement personnel", es: "Bienestar mental · desarrollo personal" } }
    ]
  },
  {
    id: "abuela",
    role: { fr: "Ma grand-mère", es: "Mi abuela" },
    name: "Teresa Gómez",
    emoji: "👵🏻",
    accent: "#0e9f6e",
    flag: "🇨🇴",
    cards: [
      { icon: "🎂", label: { fr: "âge", es: "edad" }, value: { fr: "79 ans", es: "79 años" } },
      { icon: "🌎", label: { fr: "nationalité", es: "nacionalidad" }, value: { fr: "Colombienne · Manizales", es: "Colombiana · Manizales" } },
      { icon: "💼", label: { fr: "profession", es: "profesión" }, value: { fr: "Retraitée", es: "Pensionada" } },
      { icon: "❤️", label: { fr: "goûts", es: "gustos" }, value: { fr: "Tout organiser · le ménage", es: "Organizar · la limpieza" } },
      { icon: "⚽", label: { fr: "sport", es: "deporte" }, value: { fr: "Aucun sport", es: "Ningún deporte" } },
      { icon: "⭐", label: { fr: "rêve", es: "sueño" }, value: { fr: "Profiter de la famille chaque seconde", es: "Disfrutar la familia cada segundo" } },
      { icon: "🎨", label: { fr: "passion", es: "pasión" }, value: { fr: "L'ordre · l'harmonie du foyer", es: "El orden · la armonía del hogar" } }
    ]
  }
];

// Quiz final (interactivo)
const QUIZ = [
  {
    q: { fr: "Qui rêve de voyager dans le monde entier ?", es: "¿Quién sueña con viajar por todo el mundo?" },
    options: ["Jhon Jairo", "Claudia", "Valentina", "Teresa"],
    answer: 2
  },
  {
    q: { fr: "Qui ne peut pas vivre sans le ménage ?", es: "¿Quién no puede vivir sin la limpieza?" },
    options: ["Jhon Jairo", "Claudia", "Valentina", "Teresa"],
    answer: 3
  },
  {
    q: { fr: "Qui va à la salle de sport ?", es: "¿Quién va al gimnasio?" },
    options: ["Jhon Jairo", "Claudia", "Valentina", "Teresa"],
    answer: 2
  },
  {
    q: { fr: "Qui vit en Espagne ?", es: "¿Quién vive en España?" },
    options: ["Jhon Jairo", "Claudia", "Valentina", "Teresa"],
    answer: 1
  }
];
