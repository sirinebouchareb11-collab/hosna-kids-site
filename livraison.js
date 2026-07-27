// ══════════════════════════════════════════
//  HOSNA KIDS — Tarifs de livraison par wilaya
//  Modifiez les prix ici ou via le dashboard admin
// ══════════════════════════════════════════

const WILAYAS_LIVRAISON = [
  { nom:"Adrar",               domicile:800, bureau:600 },
  { nom:"Chlef",               domicile:400, bureau:300 },
  { nom:"Laghouat",            domicile:600, bureau:500 },
  { nom:"Oum El Bouaghi",      domicile:500, bureau:400 },
  { nom:"Batna",               domicile:500, bureau:400 },
  { nom:"Béjaïa",              domicile:400, bureau:300 },
  { nom:"Biskra",              domicile:550, bureau:450 },
  { nom:"Béchar",              domicile:700, bureau:600 },
  { nom:"Blida",               domicile:350, bureau:250 },
  { nom:"Bouira",              domicile:400, bureau:300 },
  { nom:"Tamanrasset",         domicile:900, bureau:800 },
  { nom:"Tébessa",             domicile:550, bureau:450 },
  { nom:"Tlemcen",             domicile:450, bureau:350 },
  { nom:"Tiaret",              domicile:450, bureau:350 },
  { nom:"Tizi Ouzou",          domicile:400, bureau:300 },
  { nom:"Alger",               domicile:350, bureau:250 },
  { nom:"Djelfa",              domicile:500, bureau:400 },
  { nom:"Jijel",               domicile:450, bureau:350 },
  { nom:"Sétif",               domicile:450, bureau:350 },
  { nom:"Saïda",               domicile:500, bureau:400 },
  { nom:"Skikda",              domicile:450, bureau:350 },
  { nom:"Sidi Bel Abbès",      domicile:400, bureau:300 },
  { nom:"Annaba",              domicile:450, bureau:350 },
  { nom:"Guelma",              domicile:500, bureau:400 },
  { nom:"Constantine",         domicile:450, bureau:350 },
  { nom:"Médéa",               domicile:400, bureau:300 },
  { nom:"Mostaganem",          domicile:400, bureau:300 },
  { nom:"M'Sila",              domicile:500, bureau:400 },
  { nom:"Mascara",             domicile:450, bureau:350 },
  { nom:"Ouargla",             domicile:650, bureau:550 },
  { nom:"Oran",                domicile:350, bureau:250 },
  { nom:"El Bayadh",           domicile:650, bureau:550 },
  { nom:"Illizi",              domicile:900, bureau:800 },
  { nom:"Bordj Bou Arréridj",  domicile:450, bureau:350 },
  { nom:"Boumerdès",           domicile:350, bureau:250 },
  { nom:"El Tarf",             domicile:500, bureau:400 },
  { nom:"Tindouf",             domicile:900, bureau:800 },
  { nom:"Tissemsilt",          domicile:500, bureau:400 },
  { nom:"El Oued",             domicile:600, bureau:500 },
  { nom:"Khenchela",           domicile:550, bureau:450 },
  { nom:"Souk Ahras",          domicile:500, bureau:400 },
  { nom:"Tipaza",              domicile:350, bureau:250 },
  { nom:"Mila",                domicile:450, bureau:350 },
  { nom:"Aïn Defla",           domicile:400, bureau:300 },
  { nom:"Naâma",               domicile:600, bureau:500 },
  { nom:"Aïn Témouchent",      domicile:400, bureau:300 },
  { nom:"Ghardaïa",            domicile:650, bureau:550 },
  { nom:"Relizane",            domicile:450, bureau:350 },
  { nom:"Timimoun",            domicile:800, bureau:700 },
  { nom:"Bordj Badji Mokhtar", domicile:950, bureau:850 },
  { nom:"Ouled Djellal",       domicile:600, bureau:500 },
  { nom:"Béni Abbès",          domicile:750, bureau:650 },
  { nom:"In Salah",            domicile:850, bureau:750 },
  { nom:"In Guezzam",          domicile:950, bureau:850 },
  { nom:"Touggourt",           domicile:650, bureau:550 },
  { nom:"Djanet",              domicile:950, bureau:850 },
  { nom:"El M'Ghair",          domicile:650, bureau:550 },
  { nom:"El Menia",            domicile:750, bureau:650 },
];

function getLivraisonInfo(wilayaNom) {
  return WILAYAS_LIVRAISON.find(w => w.nom === wilayaNom) || { domicile: 500, bureau: 400 };
}

function saveLivraisonTarifs(tarifs) {
  localStorage.setItem('hosna_livraison', JSON.stringify(tarifs));
}

function loadLivraisonTarifs() {
  const saved = localStorage.getItem('hosna_livraison');
  if (saved) {
    const custom = JSON.parse(saved);
    custom.forEach(c => {
      const idx = WILAYAS_LIVRAISON.findIndex(w => w.nom === c.nom);
      if (idx >= 0) WILAYAS_LIVRAISON[idx] = c;
    });
  }
  return WILAYAS_LIVRAISON;
}
