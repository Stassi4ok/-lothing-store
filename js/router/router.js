
const container = document.getElementById('content');

async function loadPage() {
    const fileName = window.location.hash.replace('#','') || 'home';
    const content = await (await fetch(`pages/${fileName}.html`)).text();

    container.innerHTML = content;
    document.dispatchEvent(new CustomEvent('contentUpdated'));
    
}

window.addEventListener('hashchange', loadPage);

loadPage();