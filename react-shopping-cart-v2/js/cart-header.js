function CartHeader(props) {
  return (
    <header className="container">
      <h1>{props.title}</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>{props.title}</li>
      </ul>
      <span className="count">{props.numberItems} items in the bag</span>
    </header>
  );
}
