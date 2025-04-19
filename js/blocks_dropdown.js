// js/blocks_dropdown.js
// Додає поведінку відкриття/закриття dropdown під кнопками блоків

document.querySelectorAll('.block-btn[data-arrow="true"]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
    });
});


