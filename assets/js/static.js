document.addEventListener('DOMContentLoaded', function () {
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const icon = themeButton.querySelector('i');
      if (icon) icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    });
  }
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('header .menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      const open = menu.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '✕ Tutup Menu' : '☰ Menu';
    });
  }
  const form = document.getElementById('contact-mailto-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get('subjek') || 'Pesan dari website Politeknik Bhakti Kartini');
      const body = encodeURIComponent(
        'Nama: ' + (data.get('nama') || '') + '\\n' +
        'Email: ' + (data.get('email') || '') + '\\n\\n' +
        (data.get('pesan') || '')
      );
      window.location.href = 'mailto:info@bhaktikartini.ac.id?subject=' + subject + '&body=' + body;
    });
  }
});