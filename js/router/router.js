const container = document.getElementById('content');

/* =========================
   PARSE ROUTE
========================= */
function parseRoute(hash) {
    const cleanHash = hash.replace('#', '');
    const parts = cleanHash.split('/').filter(Boolean);

    return {
        page: parts[0] || 'home',
        params: parts.slice(1)
    };
}

/* =========================
   LOAD PAGE
========================= */
async function loadPage() {
    const { page, params } = parseRoute(window.location.hash);

    try {
        const response = await fetch(`pages/${page}.html`);
        if (!response.ok) throw new Error('Page not found');

        container.innerHTML = await response.text();

        document.dispatchEvent(
            new CustomEvent('contentUpdated', {
                detail: { page, params }
            })
        );

        await loadPageScript(page, params);

    } catch (error) {
        const response404 = await fetch(`pages/404.html`);
        container.innerHTML = await response404.text();
    }
}

/* =========================
   LOAD PAGE SCRIPT
========================= */
async function loadPageScript(page, params) {
    try {
        const module = await import(`../pages/${page}.js`);
        if (module.init) {
            module.init(params);
        }
        console.log(`JS loaded: ${page}`);
    } catch {
        console.log(`No JS for page: ${page}`);
    }
}

/* =========================
   EVENTS
========================= */
window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);
