// ══════════════════════════════════════════
//  HOSNA KIDS — Chargement des produits (Supabase)
//  Nécessite supabase-config.js chargé juste avant ce fichier.
// ══════════════════════════════════════════

// Copie figée des produits (mise à jour le 12/08/2026).
// Sert à afficher le catalogue INSTANTANÉMENT, même à la toute
// première visite, avant même que Supabase ait répondu.
const PRODUCTS_SNAPSHOT = [
  {
    "id": 1,
    "nom": "Robe 2 pièce dentelle bleu nuit",
    "cat": "fille",
    "prix": 2600,
    "description": "Robe&nbsp; dentelle bleu nuit&nbsp; avec chapeau assorti&nbsp;\n\n&nbsp;Livraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "12 mois"
    ],
    "images": [
      "https://i.ibb.co/Kpwzx0Hn/photo-2026-07-23-23-31-03.jpg",
      "https://i.ibb.co/B27Df6kc/photo-2026-07-23-23-31-04.jpg",
      "https://i.ibb.co/8LWmtDMH/photo-2026-07-23-23-31-08.jpg"
    ],
    "stock": {
      "12 mois": 1
    }
  },
  {
    "id": 2,
    "nom": "Robe Fleurie",
    "cat": "fille",
    "prix": 2500,
    "description": "Robe Fleurie Bébé Fille avec Bandeau Assorti\n\nAvec ses motifs floraux et ses couleurs lumineuses et un bandeau assorti&nbsp; .\n\n9 mois à 12 mois\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "9 mois"
    ],
    "images": [
      "https://i.ibb.co/4RYN2Ktt/photo-2026-06-23-22-57-13.jpg",
      "https://i.ibb.co/pkX0L8M/photo-2026-06-23-22-57-19.jpg"
    ],
    "stock": {
      "9 mois": 1
    }
  },
  {
    "id": 3,
    "nom": "Ensemble Garçon 03 Pièces",
    "cat": "garcon",
    "prix": 2650,
    "description": "Ensemble 3 pièces composé d'un t-shirt blanc imprimé \"Fish Qui Peut\", d'un short bleu confortable et d'un bob assorti.&nbsp;\n\nTailles disponibles de &nbsp;1 , 2 , 3 ans&nbsp;\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "3 ans"
    ],
    "images": [
      "https://i.ibb.co/SWYy6B7/photo-2026-06-23-23-01-46.jpg",
      "https://i.ibb.co/prjWXcmW/photo-2026-06-23-23-01-45.jpg",
      "https://i.ibb.co/ccStCS7B/photo-2026-06-23-23-01-43.jpg"
    ],
    "stock": {
      "3 ans": 1
    }
  },
  {
    "id": 4,
    "nom": "Pyjama Lapin Fille",
    "cat": "fille",
    "prix": 2300,
    "description": "",
    "tailles": [
      "6-9 mois",
      "9-12 mois",
      "18-24 mois"
    ],
    "images": [
      "https://i.ibb.co/dwYQx2xX/photo-2026-07-16-18-56-35.jpg",
      "https://i.ibb.co/n8MSQGgN/photo-2026-07-16-18-56-47.jpg",
      "https://i.ibb.co/fzxZbx8x/photo-2026-07-16-18-56-44.jpg"
    ],
    "stock": {
      "6-9 mois": 1,
      "9-12 mois": 1,
      "18-24 mois": 1
    }
  },
  {
    "id": 5,
    "nom": "Robe à fleurs avec avec surtête",
    "cat": "fille",
    "prix": 2200,
    "description": "Robe à fleurs avec doubleurs et&nbsp; avec surtête chic et confortable\n\nLivraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "3-6 mois"
    ],
    "images": [
      "https://i.ibb.co/2Y1hJc4L/photo-2026-07-16-18-55-43.jpg",
      "https://i.ibb.co/27X6T2Ch/photo-2026-07-16-19-09-56.jpg",
      "https://i.ibb.co/cPsWsBM/photo-2026-07-16-19-10-03.jpg",
      "https://i.ibb.co/8WkrbJQ/photo-2026-07-16-19-10-07.jpg"
    ],
    "stock": {
      "3-6 mois": 1
    }
  },
  {
    "id": 6,
    "nom": "Ensemble Garçon 3 pièces",
    "cat": "garcon",
    "prix": 2650,
    "description": "Ensemble 3 pièces composé d'un t-shirt blanc imprimé \"Fish Qui Peut\", d'un short beige confortable et d'un bob assorti.&nbsp;\n\nTailles disponibles de &nbsp;1 , 2 , 3 ans&nbsp;\n\n&nbsp;Livraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "12 mois",
      "3 ans"
    ],
    "images": [
      "https://i.ibb.co/SXVK5LyM/photo-2026-07-16-19-15-05.jpg",
      "https://i.ibb.co/TBFhj9YF/photo-2026-07-16-19-15-08.jpg",
      "https://i.ibb.co/QFbJWXxk/photo-2026-07-16-19-15-07.jpg",
      "https://i.ibb.co/h5LD5RD/photo-2026-07-16-19-15-06.jpg"
    ],
    "stock": {
      "12 mois": 1,
      "3 ans": 1
    }
  },
  {
    "id": 7,
    "nom": "Barboteuse Garçon",
    "cat": "garcon",
    "prix": 1500,
    "description": "Barboteuse Garçon&nbsp;\n\nDisponible de 6 à 24 mois\n\nLivraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "9-12 mois",
      "12-18 mois"
    ],
    "images": [
      "https://i.ibb.co/BVWR4xPd/photo-2026-07-16-19-27-29.jpg",
      "https://i.ibb.co/VYDJNqQ5/photo-2026-07-16-19-27-25.jpg",
      "https://i.ibb.co/Ztcn2n0/photo-2026-07-16-19-27-20.jpg"
    ],
    "stock": {
      "9-12 mois": 2,
      "12-18 mois": 2
    }
  },
  {
    "id": 8,
    "nom": "Ensemble Garçon Burberry",
    "cat": "garcon",
    "prix": 1400,
    "description": "Ensemble Garçon Burberry&nbsp;\n\nDisponible de 2 ans à 4 ans .",
    "tailles": [
      "2 ans",
      "4 ans",
      "6 ans",
      "8 ans",
      "10 ans"
    ],
    "images": [
      "https://i.ibb.co/Y7Wf0GNZ/photo-2026-07-16-19-36-43.jpg",
      "https://i.ibb.co/h1WS3FsL/photo-2026-07-16-19-36-48.jpg",
      "https://i.ibb.co/TMkKQV2N/photo-2026-07-16-19-36-46.jpg"
    ],
    "stock": {
      "2 ans": 2,
      "4 ans": 4,
      "6 ans": 4,
      "8 ans": 2,
      "10 ans": 2
    }
  },
  {
    "id": 9,
    "nom": "Robe Bébé Fille Rose",
    "cat": "fille",
    "prix": 2500,
    "description": "une robe rose élégante et confortable à votre petite&nbsp; avec joli nœud à l'avant et finitions volantées et son culotte assorti .\n\nTailles disponibles 12 , 18 , 24 mois\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "18 mois",
      "2 ans"
    ],
    "images": [
      "https://i.ibb.co/YT8Z3PGg/photo-2026-06-07-12-21-27.jpg",
      "https://i.ibb.co/sJ3MhXkg/photo-2026-06-07-12-21-30.jpg",
      "https://i.ibb.co/C5Ljrz7G/photo-2026-06-07-12-21-33.jpg",
      "https://i.ibb.co/6R30tGvw/photo-2026-06-07-12-21-21.jpg"
    ],
    "stock": {
      "18 mois": 1,
      "2 ans": 1
    }
  },
  {
    "id": 10,
    "nom": "Robe Jean",
    "cat": "fille",
    "prix": 2400,
    "description": "Robe Bébé Fille en Jean avec Blouse Blanche Brodée\n\nTailles disponibles de 3 à 12 mois\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "3-6 mois",
      "6-9 mois",
      "9-12 mois"
    ],
    "images": [
      "https://i.ibb.co/GvYm8YqJ/photo-2026-06-07-15-17-45.jpg",
      "https://i.ibb.co/Q7xGRpJL/photo-2026-06-07-15-17-47.jpg",
      "https://i.ibb.co/dJXWLMFT/photo-2026-06-07-15-17-50.jpg"
    ],
    "stock": {
      "3-6 mois": 2,
      "6-9 mois": 2,
      "9-12 mois": 1
    }
  },
  {
    "id": 11,
    "nom": "Ensemble Garçon 2 Pièces jaune-bleu",
    "cat": "garcon",
    "prix": 1750,
    "description": "ensemble 2 pièces composé d'un t-shirt jaune et un short bleu confortable\n\nTailles disponibles 6 , 12 , 18 , 24 mois\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "6 mois",
      "12 mois",
      "18 mois"
    ],
    "images": [
      "https://i.ibb.co/0p3prVv3/photo-2026-06-07-16-06-07.jpg",
      "https://i.ibb.co/pvk9DZ88/photo-2026-06-07-16-06-11.jpg",
      "https://i.ibb.co/PzQT23FP/photo-2026-06-07-16-06-14.jpg"
    ],
    "stock": {
      "6 mois": 3,
      "12 mois": 3,
      "18 mois": 3
    }
  },
  {
    "id": 12,
    "nom": "Robe Bébé Fille Élégante Beige & Marron",
    "cat": "fille",
    "prix": 1800,
    "description": "robe beige et marron avec col à volants chic et intemporel&nbsp;\n\nTailles disponibles\n\n5 mois&nbsp;&nbsp;– 7 mois– 9 mois – 11 mois – 13 mois\n\n🚚 Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "5 mois",
      "7 mois",
      "13 mois"
    ],
    "images": [
      "https://i.ibb.co/9mqP30vF/photo-2026-06-14-19-45-54.jpg",
      "https://i.ibb.co/rGrYFxB5/photo-2026-06-14-19-46-04.jpg",
      "https://i.ibb.co/dJ5yPLtK/photo-2026-06-14-19-46-09.jpg"
    ],
    "stock": {
      "5 mois": 1,
      "7 mois": 1,
      "13 mois": 1
    }
  },
  {
    "id": 13,
    "nom": "Salopette Carreaux \"Mon Petit Pilote\"",
    "cat": "garcon",
    "prix": 2800,
    "description": "une salopette à carreaux rouges avec une&nbsp; broderie avion et un t-shirt blanc Léger et confortable .\n\nTailles disponibles&nbsp;12 mois – 18 mois – 24 mois\n\n🚚 Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "12 mois"
    ],
    "images": [
      "https://i.ibb.co/DfJL2PCg/photo-2026-06-15-13-34-33.jpg",
      "https://i.ibb.co/CK2mhNnv/photo-2026-06-15-13-34-41.jpg",
      "https://i.ibb.co/5xjrVJ29/photo-2026-06-15-13-34-44.jpg"
    ],
    "stock": {
      "12 mois": 2
    }
  },
  {
    "id": 14,
    "nom": "salopette oursin noir",
    "cat": "garcon",
    "prix": 1950,
    "description": "salopette jean avec t-shirt rayé vert noir et blanc – Motif ourson\n\nTailles disponibles 6 mois à 4 ans.\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "6-9 mois"
    ],
    "images": [
      "https://i.ibb.co/FbCFLSpV/photo-2026-06-15-20-26-21.jpg",
      "https://i.ibb.co/d018Zyk8/photo-2026-06-15-20-26-14.jpg",
      "https://i.ibb.co/LDd4rwnk/photo-2026-06-15-20-26-16.jpg"
    ],
    "stock": {
      "6-9 mois": 1
    }
  },
  {
    "id": 15,
    "nom": "Salopette oursin jean trait blanc grand",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "6-9 mois",
      "9-12 mois",
      "12-18 mois",
      "3-4 ans"
    ],
    "images": [
      "https://i.ibb.co/Xx7z0FLV/photo-2026-07-27-11-39-21.jpg",
      "https://i.ibb.co/4nJhXQRv/photo-2026-07-27-11-39-20.jpg",
      "https://i.ibb.co/wN5fF6r7/photo-2026-07-27-11-39-19.jpg"
    ],
    "stock": {
      "6-9 mois": 4,
      "9-12 mois": 5,
      "12-18 mois": 2,
      "3-4 ans": 5
    }
  },
  {
    "id": 16,
    "nom": "Salopette Happy Clair",
    "cat": "garcon",
    "prix": 1950,
    "description": "Tailles disponibles 6 mois à 4 ans.\n\nLivraison disponible dans les 58 wilayas.",
    "tailles": [
      "6-9 mois",
      "9-12 mois",
      "12-18 mois",
      "2-3 ans",
      "3-4 ans"
    ],
    "images": [
      "https://i.ibb.co/0RtktNCT/photo-2026-07-27-11-39-41.jpg",
      "https://i.ibb.co/V0JSKMTx/photo-2026-07-27-11-39-46.jpg",
      "https://i.ibb.co/wNtpk7Ks/photo-2026-07-27-11-39-54.jpg"
    ],
    "stock": {
      "6-9 mois": 4,
      "9-12 mois": 5,
      "12-18 mois": 3,
      "2-3 ans": 1,
      "3-4 ans": 3
    }
  },
  {
    "id": 17,
    "nom": "Robe 2 pièce dentelle rose",
    "cat": "fille",
    "prix": 2600,
    "description": "Robe&nbsp; dentelle rose&nbsp; avec chapeau assorti&nbsp;\n\n&nbsp;Livraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "18 mois",
      "2 ans"
    ],
    "images": [
      "https://i.ibb.co/ksnTKgbt/photo-2026-07-23-23-31-14.jpg",
      "https://i.ibb.co/0VW7wCWn/photo-2026-07-23-23-31-11.jpg",
      "https://i.ibb.co/Y4k5yZGq/photo-2026-07-23-23-31-12.jpg"
    ],
    "stock": {
      "18 mois": 1,
      "2 ans": 1
    }
  },
  {
    "id": 18,
    "nom": "Robe à fleurs  avec surtête",
    "cat": "fille",
    "prix": 2200,
    "description": "Robe à fleurs avec doubleurs et&nbsp; avec surtête chic et confortable\n\nLivraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "3-6 mois"
    ],
    "images": [
      "https://i.ibb.co/gqjZVP5/photo-2026-07-16-18-55-40.jpg",
      "https://i.ibb.co/N0trg9w/photo-2026-07-16-19-03-58.jpg",
      "https://i.ibb.co/chWs06TN/photo-2026-07-16-19-03-59.jpg"
    ],
    "stock": {
      "3-6 mois": 2
    }
  },
  {
    "id": 19,
    "nom": "Salopette police trait noir petit",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "3-4 ans"
    ],
    "images": [
      "https://i.ibb.co/1GF2jM56/photo-2026-07-27-11-39-13.jpg",
      "https://i.ibb.co/s9hS2VFs/photo-2026-07-27-11-39-16.jpg",
      "https://i.ibb.co/9mRyhk68/photo-2026-07-27-11-39-14.jpg"
    ],
    "stock": {
      "3-4 ans": 2
    }
  },
  {
    "id": 20,
    "nom": "Salopette police trait blanc grand",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "6-9 mois",
      "12-18 mois"
    ],
    "images": [
      "https://i.ibb.co/Fq4XrxNz/photo-2026-07-27-11-39-09.jpg",
      "https://i.ibb.co/xS22BYHY/photo-2026-07-27-11-39-04.jpg",
      "https://i.ibb.co/Cy6dsWJ/photo-2026-07-27-11-39-07.jpg"
    ],
    "stock": {
      "6-9 mois": 1,
      "12-18 mois": 1
    }
  },
  {
    "id": 21,
    "nom": "Salopette oursin jean",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "6-9 mois",
      "9-12 mois",
      "12-18 mois",
      "3-4 ans"
    ],
    "images": [
      "https://i.ibb.co/PvD0H9v1/photo-2026-07-27-15-44-10.jpg",
      "https://i.ibb.co/KxTKdkSr/photo-2026-07-27-11-39-53.jpg",
      "https://i.ibb.co/zW9xjNKC/photo-2026-07-27-15-44-12.jpg"
    ],
    "stock": {
      "6-9 mois": 1,
      "9-12 mois": 2,
      "12-18 mois": 1,
      "3-4 ans": 1
    }
  },
  {
    "id": 22,
    "nom": "Salopette Happy Foncé",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "6-9 mois"
    ],
    "images": [
      "https://i.ibb.co/d0d7jztM/photo-2026-07-27-11-39-50.jpg",
      "https://i.ibb.co/wZTKHpZv/photo-2026-07-27-11-39-52.jpg",
      "https://i.ibb.co/7dqpQ4Fh/photo-2026-07-27-11-39-37.jpg"
    ],
    "stock": {
      "6-9 mois": 2
    }
  },
  {
    "id": 23,
    "nom": "Salopette Oursin Trai Noir",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "6-9 mois",
      "9-12 mois",
      "2-3 ans",
      "3-4 ans"
    ],
    "images": [
      "https://i.ibb.co/0ySLcvgL/photo-2026-07-27-11-39-49.jpg",
      "https://i.ibb.co/LDD1qGjz/photo-2026-07-27-11-39-44.jpg",
      "https://i.ibb.co/gMfL82KG/photo-2026-07-27-11-39-48.jpg"
    ],
    "stock": {
      "6-9 mois": 3,
      "9-12 mois": 3,
      "2-3 ans": 2,
      "3-4 ans": 5
    }
  },
  {
    "id": 24,
    "nom": "Ensemble garçon 2 pièce saumon-blue",
    "cat": "garcon",
    "prix": 1750,
    "description": "",
    "tailles": [
      "2 ans"
    ],
    "images": [
      "https://i.ibb.co/DDd76RbZ/photo-2026-06-28-22-21-17.jpg",
      "https://i.ibb.co/twFSsh5n/photo-2026-06-28-22-21-30.jpg",
      "https://i.ibb.co/7tvmFL71/photo-2026-06-28-22-21-33.jpg"
    ],
    "stock": {
      "2 ans": 2
    }
  },
  {
    "id": 25,
    "nom": "Ensemble garçon 2 pièces blue-gris",
    "cat": "garcon",
    "prix": 1750,
    "description": "",
    "tailles": [
      "12 mois",
      "18 mois"
    ],
    "images": [
      "https://i.ibb.co/CpTx1PPV/photo-2026-06-28-22-20-58.jpg",
      "https://i.ibb.co/VW9fqD57/photo-2026-06-28-22-21-02.jpg",
      "https://i.ibb.co/Zp3y8HQY/photo-2026-06-28-22-21-14.jpg"
    ],
    "stock": {
      "12 mois": 1,
      "18 mois": 1
    }
  },
  {
    "id": 26,
    "nom": "Robe Disney",
    "cat": "fille",
    "prix": 1900,
    "description": "",
    "tailles": [
      "7 mois",
      "9 mois",
      "11 mois"
    ],
    "images": [
      "https://i.ibb.co/yFR0H8vm/Capture-d-cran-2026-07-27-155907.png",
      "https://i.ibb.co/Y7Sn1dQ7/photo-2026-06-28-23-26-53.jpg",
      "https://i.ibb.co/tfb8Y5S/photo-2026-06-28-23-26-57.jpg"
    ],
    "stock": {
      "7 mois": 1,
      "9 mois": 1,
      "11 mois": 1
    }
  },
  {
    "id": 27,
    "nom": "salopette oursin jaune",
    "cat": "garcon",
    "prix": 1950,
    "description": "",
    "tailles": [
      "12-18 mois"
    ],
    "images": [
      "https://i.ibb.co/VWmqcvwV/photo-2026-06-15-20-26-07.jpg",
      "https://i.ibb.co/qFsX1VHn/photo-2026-06-15-20-26-05.jpg",
      "https://i.ibb.co/SDP8rKVL/photo-2026-06-15-20-26-02.jpg"
    ],
    "stock": {
      "12-18 mois": 1
    }
  },
  {
    "id": 28,
    "nom": "Robe 2 pièce dentelle grenadine",
    "cat": "fille",
    "prix": 2600,
    "description": "Robe&nbsp; dentelle grenadine avec chapeau assorti&nbsp;\n\n&nbsp;Livraison disponible dans les 58 wilayas.&nbsp;",
    "tailles": [
      "2 ans"
    ],
    "images": [
      "https://i.ibb.co/DHdKxJg1/photo-2026-07-23-23-31-24.jpg"
    ],
    "stock": {
      "2 ans": 1
    }
  },
  {
    "id": 29,
    "nom": "Salopette Papillon",
    "cat": "garcon",
    "prix": 2800,
    "description": "une salopette élégante&nbsp; avec un t-shirt à rayures marines et d'un magnifique nœud papillon rouge.\n\nTailles disponibles&nbsp;de 3 à 12 mois\n\n&nbsp;Livraison disponible dans les 58 wilayas.",
    "tailles": [
      "9-12 mois"
    ],
    "images": [
      "https://i.ibb.co/qYG6vcV0/photo-2026-06-07-12-44-10.jpg",
      "https://i.ibb.co/Q3hXpSTZ/photo-2026-06-07-12-44-15.jpg",
      "https://i.ibb.co/MkfvwdL0/photo-2026-06-07-12-44-19.jpg",
      "https://i.ibb.co/9CXfzZY/photo-2026-06-07-12-44-23.jpg",
      "https://i.ibb.co/TxM03NHr/photo-2026-06-07-12-44-26.jpg"
    ],
    "stock": {
      "9-12 mois": 1
    }
  }
];

// Affichage instantané dès le chargement du script (avant tout appel réseau)
let products = [...PRODUCTS_SNAPSHOT];

// Va chercher les produits frais depuis Supabase et met à jour le cache.
async function fetchFreshProducts() {
  const { data, error } = await sb
    .from('produits')
    .select('*')
    .order('ordre', { ascending: true });

  if (error) throw error;

  if (Array.isArray(data) && data.length > 0) {
    products = data.map(p => ({
      id: p.id,
      nom: p.nom,
      cat: p.cat,
      prix: Number(p.prix),
      description: p.description || '',
      tailles: p.tailles || [],
      images: p.images || [],
      stock: p.stock || {},
      ordre: p.ordre
    }));
    localStorage.setItem('hosna_products_backup', JSON.stringify(products));
    return true;
  }
  return false;
}

async function loadProducts() {
  // 1. Utiliser le cache localStorage s'il existe (encore plus récent que la copie figée)
  const saved = localStorage.getItem('hosna_products_backup');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        products = parsed;
      }
    } catch(e) {}
  }
  // À ce stade, `products` contient déjà des données utilisables
  // (cache ou copie figée) → aucune attente réseau nécessaire.

  // 2. Rafraîchir discrètement en arrière-plan, sans jamais bloquer l'affichage
  fetchFreshProducts()
    .then(updated => {
      if (updated) window.dispatchEvent(new CustomEvent('products-updated'));
    })
    .catch(e => console.log('Supabase error:', e));

  return products;
}
