
const container = document.getElementById('content');

async function loadPage() {
    const fileName = window.location.hash.replace('#','') || 'home';
    
    try {
        const response = await fetch(`pages/${fileName}.html`);

        if(!response.ok){
            throw new Error('Page not found');
        }

        const content = await (response).text();
        container.innerHTML = content;
        document.dispatchEvent(new CustomEvent('contentUpdated'));
        loadPageScript(fileName);

    } catch (error) {
        const content = await (await fetch(`pages/404.html`)).text();  
        container.innerHTML = content;
        document.dispatchEvent(new CustomEvent('contentUpdated'));
    }
   
    
}

async function loadPageScript(fileName) {
    try {
        await import(`../pages/${fileName}.js`);
        console.log(`Loaded page module: ${fileName}`);
    } catch (error) {
        console.log(`No JS module for page: ${fileName}`);
    }
}

window.addEventListener('hashchange', loadPage);

loadPage();