/* ==========================================================================
   ProgramBlocker - small progressive-enhancement JS
   - Toggles the mobile sidebar nav
   - (PayPal Hosted Buttons are rendered via inline scripts next to each
   -  container, NOT here, so they behave exactly like the original site.)
   ========================================================================== */
(function () {
  'use strict';

  function setupNavToggle() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    var toggle = sidebar.querySelector('.nav-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavToggle);
  } else {
    setupNavToggle();
  }
})();
