// ══════════════════════════════════════════
//  HOSNA KIDS — Panier (stocké dans le navigateur)
// ══════════════════════════════════════════

const CART_KEY     = 'hosna_cart';
const CUSTOMER_KEY = 'hosna_customer';
const ABANDON_KEY  = 'hosna_abandon_refs';

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
    cart[idx].quantite = Math.min(cart[idx].quantite + item.quantite, cart[idx].max || 99);
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
    else if (quantite <= (cart[idx].max || 99)) { cart[idx].quantite = quantite; }
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

// ── INFOS CLIENT (saisies sur la page produit, réutilisées dans le panier) ──
function getCustomerInfo() {
  try {
    const saved = localStorage.getItem(CUSTOMER_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

// Ne sauvegarde que les champs remplis : un formulaire vide n'écrase pas les infos déjà connues
function saveCustomerInfo(info) {
  const merged = { ...getCustomerInfo() };
  Object.keys(info).forEach(k => { if (info[k]) merged[k] = info[k]; });
  try { localStorage.setItem(CUSTOMER_KEY, JSON.stringify(merged)); } catch (e) {}
}

// ── ABANDONS : références gardées pour être supprimées quand la commande du panier est validée ──
function rememberAbandonRef(ref) {
  try {
    const refs = JSON.parse(localStorage.getItem(ABANDON_KEY) || '[]');
    if (!refs.includes(ref)) { refs.push(ref); localStorage.setItem(ABANDON_KEY, JSON.stringify(refs)); }
  } catch (e) {}
}

function getAbandonRefs() {
  try { return JSON.parse(localStorage.getItem(ABANDON_KEY) || '[]'); } catch (e) { return []; }
}

function setAbandonRefs(refs) {
  try { localStorage.setItem(ABANDON_KEY, JSON.stringify(refs)); } catch (e) {}
}

function takeAbandonRefs() {
  try {
    const refs = JSON.parse(localStorage.getItem(ABANDON_KEY) || '[]');
    localStorage.removeItem(ABANDON_KEY);
    return refs;
  } catch (e) {
    return [];
  }
}

// ── STOCK / SOLD OUT ──
// Un produit est "sold out" quand son stock total est à 0 (même règle que l'admin).
function isProductSoldOut(p) {
  if (!p || !p.stock) return false;
  const total = Object.values(p.stock).reduce((s, v) => s + Number(v), 0);
  return total <= 0;
}

// Quantité encore disponible pour une taille (taille sans stock défini = 99, comme sur la fiche produit)
function availableQty(p, taille) {
  if (!p || isProductSoldOut(p)) return 0;
  if (taille && p.stock && p.stock[taille] !== undefined) return Number(p.stock[taille]);
  return 99;
}

// Stock actuel lu directement dans Supabase (pas dans le cache du navigateur)
async function fetchLiveProducts(ids) {
  const { data, error } = await sb.from('produits').select('id,nom,stock,tailles').in('id', ids);
  if (error) throw error;
  return data || [];
}
