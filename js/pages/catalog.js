import { renderCatalog, createdCardHTML , createdProductsCardsHTML} from "../components/catalog/catalog.js";
import { products } from "../../data/products.js";

const catalogContainer = document.querySelector('.js-catalog');

const productsCards = createdProductsCardsHTML(products);
renderCatalog(productsCards, catalogContainer);

console.log('catalog page loaded');