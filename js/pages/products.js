import { renderCatalog, createdProductsCardsHTML, categoryFilter} from "../components/catalog/catalog.js";
import { products } from "../../data/products.js";

export function init(productsParams) {
    const category = productsParams[0];
    const productsCategory = categoryFilter(products, category);

    const catalogContainer = document.querySelector('.js-catalog');
    const productsCards = createdProductsCardsHTML(productsCategory);
    renderCatalog(productsCards, catalogContainer);

    console.log('catalog page loaded');
}