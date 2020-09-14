function CartFooter(props) {
  const products=props.products;
  let subTotal=products[0].price*products[0].quantity+products[1].price*products[1].quantity;
  let tax=subTotal*0.1;
  let total=subTotal+tax;
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${subTotal}</span>
          </li>
          <li>
            Tax <span>${subTotal /10}</span>
          </li>
          <li className="total">
            Total <span>${subTotal + tax}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
