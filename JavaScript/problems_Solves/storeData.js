export const inventory = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    inStock: true,
    tags: ["electronics", "peripherals", "office"],
    details: { rating: 4.5 },
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    price: 150.0,
    inStock: false,
    tags: ["furniture", "office"],
    details: { rating: 4.8 },
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 89.99,
    inStock: true,
    tags: ["electronics", "gaming"],
    // details property intentionally omitted to test optional chaining
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 19.99,
    inStock: true,
    tags: ["electronics", "accessories"],
    details: { rating: null },
  },
];

const [
  first,
  { name: sName, price: sPrice },
  { name: tName, price: tPrice },
  { name: fourthName, price: fourthPrice }
] = inventory;

export const extractProductInfo = (product) => {
  const { name, price } = product;

  //Optional chainig and nullish coalescing for rating
  const rating = product.details?.rating ?? "No rating";

  //Array destructuring fpr the first two tags (with a fallback if tags is missing)
  const [firstTag = "none", secondTag = "none"] = product?.tags ?? [];

  return { name, price, rating, firstTag, secondTag };
};

export const summarizeCart = (...prices) => {
  return prices.reduce((total, currentPrice) => total + currentPrice, 0);
};
