export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "THÉRAPEUTE DE MASSAGE",
    },
    hero: {
      badge: "Relaxation & Bien-être",
      title1: "Bienvenue chez",
      title2: "Corps'In Massages",
      description: "Découvrez l'art du massage thérapeutique avec plus de 10 ans d'expérience. Un moment de détente et de bien-être vous attend.",
      sendEmail: "Envoyer un email",
      callNow: "Appeler maintenant",
      location: "Eschert, Suisse",
    },
    about: {
      label: "À propos",
      title1: "Rencontre avec",
      title2: "Corinne",
      p1: "Depuis 2011, je vous accueille pour un moment de détente et de bien-être. Mère de deux jeunes adultes, j'ai toujours aimé prendre soin des gens et les huiles essentielles m'ont naturellement guidée vers la formation en massage.",
      p2: "Je vous écoute attentivement pour comprendre vos besoins. Mes mains me guident dans les thérapies ; ce n'est pas toujours moi qui décide ce qui est bon pour vous. Le massage n'est pas un simple travail pour moi, mais une véritable passion.",
      stat1: "13 ans d'expérience",
      stat2: "Clients satisfaits",
      stat3: "100% dédication",
      features: [
        { title: "À l'écoute", description: "Je vous écoutez avec attention pour adapter les soins à vos besoins" },
        { title: "Expérience", description: "Plus de 13 années de pratique professionnelle en massage thérapeutique" },
        { title: "Qualification", description: "Formations continues pour maîtriser diverses techniques de bien-être" },
        { title: "Passion", description: "Le massage est ma passion, bien plus qu'une simple profession" },
      ],
    },
    services: {
      label: "Nos prestations",
      title: "Techniques de massage",
      description: "Un large choix de massages et thérapies pour votre bien-être",
      items: [
        { title: "Massage aux Bougies", description: "Massage relaxant avec des bougies de cire naturelle pour une expérience sensorielle complète" },
        { title: "Massage aux Pierres Chaudes", description: "Massage Sémérou utilisant des pierres chaudes pour détendre les muscles en profondeur" },
        { title: "Disjonction Cranio-Cervicale", description: "Technique spécialisée pour relâcher les tensions du cou et des cervicales" },
        { title: "Massage Lomi-Lomi Hawaïen", description: "Massage traditionnel hawaiien pour une détente totale du corps et de l'esprit" },
        { title: "Massage Yin-Yang Énergétique", description: "Équilibrage énergétique combinant relaxation et vitalisation du corps" },
        { title: "Kinésiologie Structurelle", description: "Ostéopathie douce pour rétablir l'équilibre musculaire et articulaire" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Ambiance de détente",
      description: "Un environnement calme et apaisant pour votre bien-être",
    },
    hours: {
      label: "Disponibilité",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Entrez en",
      title2: "contact",
      description: "Réservez votre séance ou posez vos questions",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Prendre rendez-vous",
      callNow: "Appelez maintenant",
    },
    footer: {
      tagline: "Thérapeute de Massage",
      description: "Corps'In Massages vous offre des séances de massage thérapeutique depuis 2011 pour votre bien-être et votre détente.",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "MASSAGE THERAPIST",
    },
    hero: {
      badge: "Relaxation & Wellness",
      title1: "Welcome to",
      title2: "Corps'In Massages",
      description: "Discover the art of therapeutic massage with over 10 years of experience. A moment of relaxation and well-being awaits you.",
      sendEmail: "Send Email",
      callNow: "Call Now",
      location: "Eschert, Switzerland",
    },
    about: {
      label: "About",
      title1: "Meet",
      title2: "Corinne",
      p1: "Since 2011, I welcome you for a moment of relaxation and well-being. Mother of two young adults, I have always loved taking care of people, and essential oils naturally guided me towards massage training.",
      p2: "I listen to you carefully to understand your needs. My hands guide me in therapies; it is not always I who decides what is good for you. Massage is not just work for me, but a true passion.",
      stat1: "13 years experience",
      stat2: "Satisfied clients",
      stat3: "100% dedication",
      features: [
        { title: "Attentive Listening", description: "I listen carefully to adapt treatments to your specific needs" },
        { title: "Experience", description: "Over 13 years of professional practice in therapeutic massage" },
        { title: "Qualification", description: "Continuous training to master various wellness techniques" },
        { title: "Passion", description: "Massage is my passion, much more than just a profession" },
      ],
    },
    services: {
      label: "Our Services",
      title: "Massage Techniques",
      description: "A wide choice of massages and therapies for your wellness",
      items: [
        { title: "Candle Massage", description: "Relaxing massage with natural wax candles for a complete sensory experience" },
        { title: "Hot Stone Massage", description: "Sémérou massage using hot stones to deeply relax muscles" },
        { title: "Cranio-Cervical Disjunction", description: "Specialized technique to release tension from the neck and cervical area" },
        { title: "Hawaiian Lomi-Lomi Massage", description: "Traditional Hawaiian massage for complete relaxation of body and mind" },
        { title: "Yin-Yang Energy Massage", description: "Energy balancing combining relaxation and body vitalization" },
        { title: "Structural Kinesiology", description: "Gentle osteopathy to restore muscular and joint balance" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Relaxation Ambiance",
      description: "A calm and soothing environment for your well-being",
    },
    hours: {
      label: "Availability",
      title: "Opening Hours",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Get in",
      title2: "touch",
      description: "Book your session or ask your questions",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Book Appointment",
      callNow: "Call Now",
    },
    footer: {
      tagline: "Massage Therapist",
      description: "Corps'In Massages offers therapeutic massage sessions since 2011 for your wellness and relaxation.",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I understand",
    },
  },
};

export interface Translations {
  nav: { about: string; services: string; gallery: string; hours: string; contact: string; call: string; profession: string };
  hero: { badge: string; title1: string; title2: string; description: string; sendEmail: string; callNow: string; location: string };
  about: { label: string; title1: string; title2: string; p1: string; p2: string; stat1: string; stat2: string; stat3: string; features: Array<{ title: string; description: string }> };
  services: { label: string; title: string; description: string; items: Array<{ title: string; description: string }> };
  gallery: { label: string; title: string; description: string };
  hours: { label: string; title: string; header: string; today: string; closed: string; days: string[] };
  contact: { label: string; title1: string; title2: string; description: string; phone: string; email: string; address: string; cta: string; callNow: string };
  footer: { tagline: string; description: string; navigation: string; about: string; copyright: string };
  disclaimer: { title: string; items: string[]; button: string };
}
