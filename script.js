function showPage(id, navEl) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#nav-menu a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    if (navEl) navEl.classList.add('active');
    document.getElementById('nav-menu').classList.remove('open');
    window.scrollTo(0, 0);
  }

  function goTo(id) {
    showPage(id, document.getElementById('nav-' + id));
  }

  // Auto date — fills all [data-auto-date] elements and the topbar badge
  (function() {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const tz = 'MST';
    const dateStr = mm + '/' + dd + '/' + yyyy;
    const fullStr = 'Last updated: ' + dateStr + ' — ' + hh + ':' + min + ' ' + tz;

    document.querySelectorAll('[data-auto-date]').forEach(el => el.textContent = fullStr);

    const topbar = document.getElementById('topbar-date');
    if (topbar) topbar.textContent = 'Last Updated: ' + dateStr;
  })();
