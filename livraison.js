// ══════════════════════════════════════════
//  HOSNA KIDS — Tarifs de livraison par wilaya
//  Modifiez les prix ici ou via le dashboard admin
// ══════════════════════════════════════════

const WILAYAS_LIVRAISON = [
  { nom:"Adrar",               domicile:1100, bureau:750 },
  { nom:"Chlef",               domicile:700,  bureau:400 },
  { nom:"Laghouat",            domicile:900,  bureau:500 },
  { nom:"Oum El Bouaghi",      domicile:850,  bureau:450 },
  { nom:"Batna",               domicile:850,  bureau:450 },
  { nom:"Béjaïa",              domicile:800,  bureau:450 },
  { nom:"Biskra",              domicile:900,  bureau:550 },
  { nom:"Béchar",              domicile:1000, bureau:700 },
  { nom:"Blida",               domicile:600,  bureau:350 },
  { nom:"Bouira",              domicile:750,  bureau:450 },
  { nom:"Tamanrasset",         domicile:1550, bureau:1100 },
  { nom:"Tébessa",             domicile:850,  bureau:450 },
  { nom:"Tlemcen",             domicile:600,  bureau:400 },
  { nom:"Tiaret",              domicile:750,  bureau:400 },
  { nom:"Tizi Ouzou",          domicile:700,  bureau:450 },
  { nom:"Alger",               domicile:500,  bureau:350 },
  { nom:"Djelfa",              domicile:900,  bureau:550 },
  { nom:"Jijel",               domicile:800,  bureau:450 },
  { nom:"Sétif",               domicile:800,  bureau:450 },
  { nom:"Saïda",               domicile:800,  bureau:400 },
  { nom:"Skikda",              domicile:750,  bureau:450 },
  { nom:"Sidi Bel Abbès",      domicile:600,  bureau:400 },
  { nom:"Annaba",              domicile:800,  bureau:450 },
  { nom:"Guelma",              domicile:900,  bureau:450 },
  { nom:"Constantine",         domicile:800,  bureau:450 },
  { nom:"Médéa",               domicile:700,  bureau:400 },
  { nom:"Mostaganem",          domicile:600,  bureau:400 },
  { nom:"M'Sila",              domicile:900,  bureau:550 },
  { nom:"Mascara",             domicile:650,  bureau:400 },
  { nom:"Ouargla",             domicile:950,  bureau:550 },
  { nom:"Oran",                domicile:500,  bureau:300 },
  { nom:"El Bayadh",           domicile:950,  bureau:700 },
  { nom:"Illizi",              domicile:1550, bureau:1100 },
  { nom:"Bordj Bou Arréridj",  domicile:800,  bureau:450 },
  { nom:"Boumerdès",           domicile:700,  bureau:400 },
  { nom:"El Tarf",             domicile:900,  bureau:450 },
  { nom:"Tindouf",             domicile:1300, bureau:800 },
  { nom:"Tissemsilt",          domicile:800,  bureau:400 },
  { nom:"El Oued",             domicile:1000, bureau:600 },
  { nom:"Khenchela",           domicile:900,  bureau:500 },
  { nom:"Souk Ahras",          domicile:900,  bureau:500 },
  { nom:"Tipaza",              domicile:700,  bureau:400 },
  { nom:"Mila",                domicile:750,  bureau:450 },
  { nom:"Aïn Defla",           domicile:700,  bureau:400 },
  { nom:"Naâma",               domicile:950,  bureau:550 },
  { nom:"Aïn Témouchent",      domicile:600,  bureau:400 },
  { nom:"Ghardaïa",            domicile:1000, bureau:500 },
  { nom:"Relizane",            domicile:700,  bureau:400 },
  { nom:"Timimoun",            domicile:1100, bureau:750 },
  { nom:"Bordj Badji Mokhtar", domicile:950,  bureau:850 },
  { nom:"Ouled Djellal",       domicile:900,  bureau:550 },
  { nom:"Béni Abbès",          domicile:1100, bureau:800 },
  { nom:"In Salah",            domicile:1450, bureau:1000 },
  { nom:"In Guezzam",          domicile:950,  bureau:850 },
  { nom:"Touggourt",           domicile:1000, bureau:550 },
  { nom:"Djanet",              domicile:2200, bureau:1550 },
  { nom:"El M'Ghair",          domicile:950,  bureau:650 },
  { nom:"El Menia",            domicile:1000, bureau:500 },
];

const LIVRAISON_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwaf1VXMR5pIrLBLlgnLzeq8eWwzIEwks9rDl4WkZzeqswsQ93sIWY471wQkYXC94W/exec";

function getLivraisonInfo(wilayaNom) {
  return WILAYAS_LIVRAISON.find(w => w.nom === wilayaNom) || { domicile: 500, bureau: 400 };
}

// Enregistre les tarifs : en cache localStorage tout de suite (rapide),
// puis vers Google Sheets pour que tous les visiteurs voient les nouveaux prix.
function saveLivraisonTarifs(tarifs) {
  localStorage.setItem('hosna_livraison', JSON.stringify(tarifs));
  fetch(LIVRAISON_SCRIPT_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'saveLivraison', tarifs })
  }).catch(e => console.log('Livraison sync error:', e));
}

// Charge les tarifs : applique immédiatement le cache/valeurs par défaut ci-dessus
// (aucune attente réseau), puis rafraîchit discrètement en arrière-plan.
async function loadLivraisonTarifs() {
  const saved = localStorage.getItem('hosna_livraison');
  if (saved) {
    try {
      const custom = JSON.parse(saved);
      custom.forEach(c => {
        const idx = WILAYAS_LIVRAISON.findIndex(w => w.nom === c.nom);
        if (idx >= 0) WILAYAS_LIVRAISON[idx] = c;
      });
    } catch (e) {}
  }
  // WILAYAS_LIVRAISON contient déjà des valeurs utilisables → affichage instantané.

  fetch(LIVRAISON_SCRIPT_URL + '?action=livraison')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        data.forEach(c => {
          const idx = WILAYAS_LIVRAISON.findIndex(w => w.nom === c.nom);
          if (idx >= 0) WILAYAS_LIVRAISON[idx] = c;
          else WILAYAS_LIVRAISON.push(c);
        });
        localStorage.setItem('hosna_livraison', JSON.stringify(WILAYAS_LIVRAISON));
        window.dispatchEvent(new CustomEvent('livraison-updated'));
      }
    })
    .catch(e => console.log('Livraison fetch error:', e));

  return WILAYAS_LIVRAISON;
}
