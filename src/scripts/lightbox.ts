/**
 * Conecta disparadores [data-lightbox-open="<dialogId>"][data-index] con su <dialog data-lightbox>.
 */
function initLightbox(dialog: HTMLDialogElement) {
  const slides = Array.from(dialog.querySelectorAll<HTMLElement>('[data-slide]'));
  let current = 0;

  const show = (index: number) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => (slide.hidden = i !== current));
  };

  document.querySelectorAll<HTMLElement>(`[data-lightbox-open="${dialog.id}"]`).forEach((trigger) => {
    trigger.addEventListener('click', () => {
      show(Number(trigger.dataset.index ?? 0));
      dialog.showModal();
      document.body.classList.add('is-locked');
    });
  });

  dialog.addEventListener('close', () => document.body.classList.remove('is-locked'));
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(current - 1));
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(current + 1));

  // Cerrar al pulsar fuera de la imagen (como en el diseño)
  dialog.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target === dialog || target.classList.contains('lightbox__stage')) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
}

document.querySelectorAll<HTMLDialogElement>('dialog[data-lightbox]').forEach(initLightbox);
