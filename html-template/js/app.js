ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );

  <main>
  <header classname="container">
    <h1>Shopping Cart</h1>
    <ul classname="breadcrumb">
      <li>Home</li>
      <li>Shopping Cart</li>
    </ul>
    <span classname="count">3 items in the bag</span>
  </header>
  <section classname="container">
    <ul classname="products">
      <li classname="row">
        <div classname="col left">
          <div classname="thumbnail">
            <a href="#">
              <img src="https://via.placeholder.com/200x150" alt />
            </a>
          </div>
          <div classname="detail">
            <div classname="name"><a href="#">PRODUCT ITEM NUMBER 1</a></div>
            <div classname="description">
              Description for product item number 1
            </div>
            <div classname="price">$5.99</div>
          </div>
        </div>
        <div classname="col right">
          <div classname="quantity">
            <input type="number" classname="quantity" step="{1}" defaultvalue="{2}" />
          </div>
          <div classname="remove">
            <svg version="1.1" classname="close" xmlns="//www.w3.org/2000/svg" xmlnsxlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enablebackground="new 0 0 60 60" xmlspace="preserve">
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
            </svg>
          </div>
        </div>
      </li>
      <li classname="row">
        <div classname="col left">
          <div classname="thumbnail">
            <a href="#">
              <img src="https://via.placeholder.com/200x150" alt />
            </a>
          </div>
          <div classname="detail">
            <div classname="name"><a href="#">PRODUCT ITEM NUMBER 2</a></div>
            <div classname="description">
              Description for product item number 2
            </div>
            <div classname="price">$9.99</div>
          </div>
        </div>
        <div classname="col right">
          <div classname="quantity">
            <input type="number" classname="quantity" step="{1}" defaultvalue="{1}" />
          </div>
          <div classname="remove">
            <svg version="1.1" classname="close" xmlns="//www.w3.org/2000/svg" xmlnsxlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enablebackground="new 0 0 60 60" xmlspace="preserve">
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <section classname="container">
    <div classname="promotion">
      <label htmlfor="promo-code">Have A Promo Code?</label>
      <input type="text" id="promo-code" /> <button type="button">
      </button></div>
    <div classname="summary">
      <ul>
        <li>Subtotal <span>$21.97</span></li>
        <li>Tax <span>$5.00</span></li>
        <li classname="total">Total <span>$26.97</span></li>
      </ul>
    </div>
    <div classname="checkout">
      <button type="button">Check Out</button>
    </div>
  </section>
</main>
