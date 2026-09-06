import { inventory, extractProductInfo, summarizeCart } from "./storeData.js";

const total = summarizeCart(25.99, 89, 99, 19.99);

const priceThreshold = 20.0;

//Filter for items in stock and priced above the threshold
const availableProducts = inventory.filter(
  (item) => item.inStock && item.price > priceThreshold,
);

//Transform the filtered products into formatted srings
const formattedProducts = availableProducts.map(
  (item) => `Item: ${item.name} - $${item.price.toFixed(2)}`,
);

// 1. find(): Locate the first product with a specific target ID
const targetId = 3;
const targetProduct = inventory.find((item) => item.id === targetId);

//2. includes(): Check is the found product's tags contain "electronics"
const isElectronics = targetProduct
  ? targetProduct?.tags.includes("electronics")
  : false;

// 3. some(): Check is any product in the inventory is out of stock
const hasOutOfStockItems = inventory.some((item) => !item.inStock);

// 4. every(): Check if all products have a price grater than 0
const allPricesValid = inventory.every((item) => item.price > 0);

formattedProducts.forEach((productString) => {
  console.log(`Featured produuct: ${productString}`);
});
