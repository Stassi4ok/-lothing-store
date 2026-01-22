
const container = document.getElementById('content');

async function loadPage() {
    const fileName = window.location.hash.replace('#','') || 'home';
    const content = await (await fetch(`pages/${fileName}.html`)).text();

    container.innerHTML = content;
    document.dispatchEvent(new CustomEvent('contentUpdated'));
    
    
    try {
        await import(`../pages/${fileName}.js`);
    } catch (e) {
        console.log(`No JS module for page: ${fileName}`);
    }
}

window.addEventListener('hashchange', loadPage);

loadPage();