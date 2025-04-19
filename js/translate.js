// js/translate.js
// Логіка зміни мови для кнопок бічної панелі

const translations = {
    ua: {
        universe: 'Всесвіт',
        geography: 'Географія',
        money: 'Гроші',
        time: 'Час',
        custom: 'Довільно',
        language: 'Мова',
        faq: 'FAQ'
    },
    en: {
        universe: 'Universe',
        geography: 'Geography',
        money: 'Money',
        time: 'Time',
        custom: 'Custom',
        language: 'Language',
        faq: 'FAQ'
    },
    es: {
        universe: 'Universo',
        geography: 'Geografía',
        money: 'Dinero',
        time: 'Tiempo',
        custom: 'Personalizado',
        language: 'Idioma',
        faq: 'FAQ'
    }
};

// Послідовність мов для циклічного перемикання
const langOrder = ['ua', 'en', 'es'];
let currentLangIndex = 0; // початкова мова — ua

// Застосовує переклади до кнопок згідно data-block
function applyTranslations() {
    const lang = langOrder[currentLangIndex];
    document.querySelectorAll('.block-btn').forEach(btn => {
        const key = btn.dataset.block;
        const label = translations[lang]?.[key];
        if (label) {
            // Оновлюємо лише текст кнопки, зберігаючи стрілку в span.arrow
            const arrowSpan = btn.querySelector('.arrow');
            btn.textContent = label;
            if (arrowSpan) btn.appendChild(arrowSpan);
        }
    });
}

// Циклічне перемикання мови
function cycleLanguage() {
    currentLangIndex = (currentLangIndex + 1) % langOrder.length;
    applyTranslations();
}

// Ініціалізація перекладу
function initTranslate() {
    applyTranslations();
    const langBtn = document.querySelector('.block-btn[data-block="language"]');
    if (langBtn) {
        langBtn.addEventListener('click', cycleLanguage);
    }
}

document.addEventListener('DOMContentLoaded', initTranslate);
