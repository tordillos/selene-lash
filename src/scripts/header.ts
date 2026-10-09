/**
 * Header: estado "scrolled" y menú móvil (apertura, cierre, Escape, foco).
 */
const header = document.querySelector<HTMLElement>('[data-header]');
const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const openButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');

if (header) {
  const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

if (menu && openButton) {
  const focusables = () => Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));

  const setOpen = (open: boolean) => {
    menu.toggleAttribute('data-open', open);
    menu.inert = !open;
    openButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
    if (open) focusables()[0]?.focus();
    else openButton.focus({ preventScroll: true });
  };

  openButton.addEventListener('click', () => setOpen(true));
  menu.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', () => setOpen(false)));

  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') return setOpen(false);
    if (event.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  // Si se pasa a escritorio con el menú abierto, cerrarlo
  window.matchMedia('(min-width: 1080px)').addEventListener('change', (e) => {
    if (e.matches && menu.hasAttribute('data-open')) setOpen(false);
  });
}
