const modal = document.querySelector('#image-dialog');
const photo = document.querySelector('#dialog-img');
const caption = document.querySelector('#dialog-caption');
const original = document.querySelector('#original-image');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    photo.src = button.dataset.image;
    photo.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    original.href = button.dataset.image;
    modal.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => document.body.classList.remove('dialog-open'));
modal.addEventListener('click', event => {
  const bounds = modal.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) modal.close();
});
