// blocks_dropdown.js
document.querySelectorAll('.block-btn').forEach(btn => {
  const hasArrow = btn.dataset.arrow !== 'false';
  const block = btn.dataset.block;
  const dropdown = document.getElementById(`dropdown-${block}`);
  if (!hasArrow || !dropdown) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    dropdown.classList.toggle('active');
  });
});
