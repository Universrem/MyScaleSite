// js/blocks_loader.js
// Завантажує шаблон лівої панелі та ініціалізує dropdown

async function loadBlocksPanel() {
    try {
        const response = await fetch('components/blocks_panel.html');
        if (!response.ok) {
            throw new Error(`Failed to fetch components/blocks_panel.html: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById('left-bar');
        container.innerHTML = html;

        // Після вставки шаблону підключаємо логіку dropdown
        await import('./blocks_dropdown.js');
        await import('./translate.js');
    } catch (error) {
        console.error('Error loading blocks panel:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadBlocksPanel);

