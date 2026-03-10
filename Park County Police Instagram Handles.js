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
  document.getElementById('hit-counter').textContent =
    String(4821 + Math.floor(Math.random() * 200)).padStart(6, '0');
