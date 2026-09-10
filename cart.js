// ══════════════════════════════════════════
//  HOSNA KIDS — Panier (stocké dans le navigateur)
// ══════════════════════════════════════════

const CART_KEY = 'hosna_cart';
const CUSTOMER_KEY = 'hosna_customer';

function getCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// Ajoute un article. Si le même produit + la même taille sont déjà dans le
// panier, augmente juste la quantité au lieu de dupliquer la ligne.
function addToCart(item) {
  const cart = getCart();
  const idx = cart.findIndex(c => String(c.id) === String(item.id) && c.taille === item.taille);
  if (idx >= 0) {
    cart[idx].quantite += item.quantite;
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

function removeFromCart(id, taille) {
  const cart = getCart().filter(c => !(String(c.id) === String(id) && c.taille === taille));
  saveCart(cart);
}

function updateCartQty(id, taille, quantite) {
  const cart = getCart();
  const idx = cart.findIndex(c => String(c.id) === String(id) && c.taille === taille);
  if (idx >= 0) {
    if (quantite < 1) { cart.splice(idx, 1); }
    else { cart[idx].quantite = quantite; }
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function cartCount() {
  return getCart().reduce((sum, c) => sum + c.quantite, 0);
}

function cartTotal() {
  return getCart().reduce((sum, c) => sum + (Number(c.prix) * c.quantite), 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = cartCount();
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ── INFOS CLIENT (nom, tel, wilaya, commune) ──
// Enregistrées une seule fois pour que le client n'ait pas à les
// retaper sur chaque page (fiche produit, panier, promo...).

function getCustomerInfo() {
  try {
    const saved = localStorage.getItem(CUSTOMER_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveCustomerInfo(info) {
  const current = getCustomerInfo();
  const merged = { ...current, ...info };
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(merged));
}
