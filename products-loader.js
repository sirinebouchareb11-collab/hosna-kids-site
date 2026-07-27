const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwaf1VXMR5pIrLBLlgnLzeq8eWwzIEwks9rDl4WkZzeqswsQ93sIWY471wQkYXC94W/exec";

let products = [];

async function loadProducts() {
  try {
    const res = await fetch(SCRIPT_URL, {
      method: 'GET',
      redirect: 'follow'
    });
    const text = await res.text();
    const data = JSON.parse(text);
    if (Array.isArray(data) && data.length > 0) {
      products = data;
      localStorage.setItem('hosna_products_backup', JSON.stringify(products));
      return products;
    }
  } catch(e) {
    console.log('Google Sheets error:', e);
  }

  // Fallback localStorage
  const saved = localStorage.getItem('hosna_products_backup');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        products = parsed;
        return products;
      }
    } catch(e) {}
  }

  // Fallback produits hardcodés depuis Google Sheets
  products = [
    {
      id: 1,
      nom: "ensemble fish 3 piece",
      cat: "garcon",
      prix: 2600,
      description: "",
      tailles: ["12 mois", "2 ans", "3 ans"],
      images: [
        "https://i.ibb.co/bRbJN3cH/photo-2026-07-16-19-15-05.jpg",
        "https://i.ibb.co/dwZMRtpX/photo-2026-07-16-19-15-07.jpg",
        "https://i.ibb.co/d4CTCYFx/photo-2026-07-16-19-15-08.jpg"
      ],
      stock: { "12 mois": 2, "2 ans": 1, "3 ans": 2 }
    },
    {
      id: 2,
      nom: "pyjama fille lapin",
      cat: "fille",
      prix: 2100,
      description: "",
      tailles: ["3 mois", "6 mois", "12 mois", "18 mois"],
      images: [
        "https://i.ibb.co/twMwKf8d/photo-2026-07-16-18-56-35.jpg",
        "https://i.ibb.co/4RJ34mG1/photo-2026-07-16-18-56-42.jpg"
      ],
      stock: { "3 mois": 1, "6 mois": 1, "12 mois": 1, "18 mois": 1 }
    }
  ];
  localStorage.setItem('hosna_products_backup', JSON.stringify(products));
  return products;
}
