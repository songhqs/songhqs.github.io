const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 2,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];

// Tính lại dựa vào PRODUCTS ở trên
const taxPercent = 0.1;
let numberItems = 0;
let subTotal = 0;
// Thuế = 10% subTotal

for (let i = 0; i < PRODUCTS.length; i++) {
  subTotal += PRODUCTS[i].price * PRODUCTS[i].quantity;
  numberItems += PRODUCTS[i].quantity;
}
let tax = subTotal * taxPercent;

ReactDOM.render(
  <main>
    <CartHeader numberItems={numberItems} title="Shopping Cart" />

    <CartBody products={PRODUCTS} />

    <CartFooter subTotal={subTotal} tax={tax} />
  </main>,
  document.getElementById("root")
);
