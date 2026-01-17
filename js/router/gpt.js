const container = document.getElementById('content');

async function loadPage() {
    // Отримуємо назву файлу зі #hash, або 'home' за замовчуванням
    const fileName = window.location.hash.replace('#','') || 'home';
    
    try {
        // Підвантажуємо HTML
        const response = await fetch(`pages/${fileName}.html`);
        
        if (!response.ok) {
            container.innerHTML = '<h2>Сторінка не знайдена</h2>';
            return;
        }
        
        const content = await response.text();
        container.innerHTML = content;

        // Кастомний евент, якщо потрібно для JS
        document.dispatchEvent(new CustomEvent('contentUpdated'));

    } catch (err) {
        container.innerHTML = '<h2>Помилка завантаження сторінки</h2>';
        console.error(err);
    }
}

// Слухаємо зміни hash
window.addEventListener('hashchange', loadPage);

// Завантаження при старті
window.addEventListener('load', loadPage);
