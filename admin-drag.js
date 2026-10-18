// ══════════════════════════════════════════════════════════════
//  HOSNA KIDS ADMIN — Réorganiser les produits par glisser-déposer
//  À charger APRÈS le script principal de admin.html :
//    <script src="admin-drag.js"></script>
// ══════════════════════════════════════════════════════════════
(function () {
  // Attend que le script principal de admin.html soit chargé (le fichier marche dans <head> ou en bas de page)
  function boot() {
  const SORTABLE_URL = 'https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js';

  // ── Styles (ajoutés ici pour ne pas toucher au CSS de admin.html) ──
  const style = document.createElement('style');
  style.textContent = `
    .drag-hint{padding:10px 20px;font-size:12px;color:var(--gray);background:#fafafa;border-bottom:1px solid var(--border)}
    th.drag-col,td.drag-cell{width:44px;padding-left:12px;padding-right:0;text-align:center}
    .drag-handle{display:inline-block;cursor:grab;user-select:none;color:#9ca3af;font-size:18px;line-height:1;letter-spacing:-2px;padding:8px 6px;border-radius:6px}
    .drag-handle:hover{background:var(--gl);color:var(--black)}
    .drag-handle:active{cursor:grabbing}
    tr.drag-ghost td{background:#eef2ff !important;opacity:.6}
    tr.drag-chosen td{background:#fafafa}
  `;
  document.head.appendChild(style);

  let sortable  = null;
  let saveChain = Promise.resolve(); // les enregistrements se font l'un après l'autre

  function rowId(tr) {
    const btn = tr.querySelector('[onclick^="openEditModal"]');
    const m = btn && btn.getAttribute('onclick').match(/\((\d+)\)/);
    return m ? m[1] : '';
  }

  // ── Ajoute la poignée de glissement à chaque ligne ──
  function enhanceTable(isFiltered) {
    const wrap  = document.getElementById('tableWrap');
    const table = wrap && wrap.querySelector('table');
    if (!table || !window.Sortable) return; // pas prêt : les flèches d'origine restent actives

    const hint = document.createElement('div');
    hint.className = 'drag-hint';
    hint.textContent = isFiltered
      ? '🔍 Efface la recherche pour réorganiser les produits.'
      : '⋮⋮ Glisse-dépose une ligne par sa poignée pour changer l\'ordre sur le site (défilement automatique près des bords).';
    wrap.insertBefore(hint, table);

    const headRow = table.querySelector('thead tr');
    if (headRow) {
      const th = document.createElement('th');
      th.className = 'drag-col';
      headRow.insertBefore(th, headRow.firstChild);
    }

    table.querySelectorAll('tbody tr').forEach(tr => {
      tr.dataset.id = rowId(tr);
      tr.querySelectorAll('[onclick^="moveProduct"]').forEach(b => b.remove()); // plus de flèches
      const td = document.createElement('td');
      td.className = 'drag-cell';
      td.innerHTML = isFiltered ? '' : '<span class="drag-handle" title="Glisser pour déplacer">⋮⋮</span>';
      tr.insertBefore(td, tr.firstChild);
    });

    if (isFiltered) return;

    sortable = Sortable.create(table.querySelector('tbody'), {
      handle: '.drag-handle',
      animation: 150,
      ghostClass: 'drag-ghost',
      chosenClass: 'drag-chosen',
      scroll: true,
      bubbleScroll: true,
      scrollSensitivity: 120,
      scrollSpeed: 20,
      onEnd: evt => { if (!evt || evt.oldIndex !== evt.newIndex) saveOrder(); }
    });
  }

  // ── Enregistre le nouvel ordre ──
  function saveOrder() {
    const ids   = [...document.querySelectorAll('#tableWrap tbody tr')].map(tr => tr.dataset.id);
    const byId  = new Map(products.map(p => [String(p.id), p]));
    const newList = ids.map(id => byId.get(id));

    if (newList.length !== products.length || newList.some(p => !p)) {
      showToast('⚠️ Ordre non enregistré, tableau rechargé', 'red');
      window.renderTable();
      return;
    }

    // On réutilise les valeurs "ordre" existantes (seules les lignes déplacées changent).
    // Si elles ne sont pas toutes différentes, on renumérote 0, 1, 2…
    let slots = products.map(p => Number(p.ordre)).sort((a, b) => a - b);
    if (slots.some(n => !Number.isFinite(n)) || new Set(slots).size !== slots.length) {
      slots = newList.map((_, i) => i);
    }

    const changes = [];
    newList.forEach((p, i) => {
      if (Number(p.ordre) !== slots[i]) changes.push({ id: p.id, ordre: slots[i] });
      p.ordre = slots[i];
    });
    products.splice(0, products.length, ...newList);
    try { localStorage.setItem('hosna_products_backup', JSON.stringify(products)); } catch (e) {}

    if (!changes.length) return;
    showToast('⏳ Enregistrement de l\'ordre…');

    saveChain = saveChain.then(async () => {
      const errors = await runPool(changes, c => sb.from('produits').update({ ordre: c.ordre }).eq('id', c.id), 6);
      if (errors.length) {
        showToast('❌ Erreur de sauvegarde — rechargement des produits', 'red');
        await loadProducts();
      } else {
        showToast('✅ Ordre mis à jour sur le site', 'green');
      }
    });
  }

  // Envoie les mises à jour par petits groupes en parallèle (jusqu'à 120 produits à décaler)
  async function runPool(items, worker, size) {
    const errors = [];
    let i = 0;
    await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
      while (i < items.length) {
        const item = items[i++];
        try {
          const res = await worker(item);
          if (res && res.error) errors.push(res.error);
        } catch (e) { errors.push(e); }
      }
    }));
    return errors;
  }

  // ── On enveloppe renderTable : même affichage + poignée de glissement ──
  const originalRender = window.renderTable;
  window.renderTable = function (list) {
    if (sortable) { try { sortable.destroy(); } catch (e) {} sortable = null; }
    originalRender.apply(this, arguments);
    const filtered = list !== undefined && list.length !== products.length;
    enhanceTable(filtered);
  };

  // ── Chargement de la bibliothèque de glisser-déposer ──
  function ready() { if (products.length) window.renderTable(); }
  if (window.Sortable) {
    ready();
  } else {
    const s = document.createElement('script');
    s.src = SORTABLE_URL;
    s.onload  = ready;
    s.onerror = () => console.log('Sortable indisponible : les flèches restent actives.');
    document.head.appendChild(s);
  }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
