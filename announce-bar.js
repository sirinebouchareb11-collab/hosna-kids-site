// ══════════════════════════════════════════
//  HOSNA KIDS — Bandeau d'annonces défilant
//  Nécessite supabase-config.js chargé avant ce fichier.
// ══════════════════════════════════════════

const ANNONCE_SEPARATOR = '　🎀　';

async function loadAnnounceBar() {
  const bar = document.querySelector('.announce-bar');
  if (!bar) return;
  try {
    const { data, error } = await sb
      .from('annonces')
      .select('*')
      .eq('active', true)
      .order('ordre', { ascending: true });
    if (error) throw error;

    if (Array.isArray(data) && data.length > 0) {
      const texte = data.map(a => a.texte).join(ANNONCE_SEPARATOR) + ANNONCE_SEPARATOR;
      // Le texte est dupliqué pour un défilement continu sans coupure visible.
      bar.innerHTML = `<div class="announce-track"><span>${texte}</span><span>${texte}</span></div>`;
    }
    // Sinon : on garde le message par défaut déjà présent dans le HTML.
  } catch (e) {
    console.log('Annonce fetch error:', e);
  }
}

loadAnnounceBar();
