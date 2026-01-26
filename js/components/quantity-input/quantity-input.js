export function qtyInputRender(container) {
    const qtyElement = createQtyInputHTML();
    container.appendChild(qtyElement);
    qtyInputLogic(qtyElement);
}

function createQtyInputHTML() {
    const container = document.createElement('div');
    container.classList.add('quantity');

    const html = `
        <div class="quantity-input body-txt-b1">
            <button type="button" class="btn body-txt-b1 js-qty-btn-decrement">-</button>
            <input
                type="number"
                class="qty-input js-qty-input"
                value="1"
                min="1"
                max="99"
            >
            <button type="button" class="btn body-txt-b1 js-qty-btn-increment">+</button>
        </div>
    `;
    container.innerHTML = html;
    return container;
}

function qtyInputLogic(container) {
    const increment = container.querySelector('.js-qty-btn-increment');
    const decrement = container.querySelector('.js-qty-btn-decrement');
    const input = container.querySelector('.js-qty-input');

    increment.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue < 99) {
            input.value = currentValue + 1;
        }
    });

    decrement.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });

    input.addEventListener('input', () => {
        let value = parseInt(input.value) || 1;
        if (value < 1) value = 1;
        if (value > 99) value = 99;
        input.value = value;
    });
}
