import { useState } from 'react';
import './ShoppingContent.css'
function ShoppingContent({ item, handleDetail }) {
  const [implement, setImplement] = useState(0);

  const slash = (item.price * item.discount) / 100;
  const handleCount = (e) => {
    setImplement(e.target.value);
  };
  const plus = () => {
    setImplement((prev) => prev + 1);
  };

  const minus = () => {
    if (implement <= 0) return;
    setImplement((prev) => prev - 1);
  };
  const handleSubmit = () => {
    const result = {
      name: item.productName,
      price: slash * implement,
      initialPrice: slash,
      count: implement,
      img: item.image,
      id: item.id
    };
    handleDetail(result);
  };

  return (
    <div className="details col">
      <p>
        <strong style={{ color: "orangered" }}>{item.company}</strong>
      </p>
      <h2>
        <strong>{item.productName}</strong>
      </h2>
      <p>{item.description}</p>
      <span>
        <strong style={{ fontSize: 20 }}>${slash.toFixed(2)}</strong>{" "}
        <span className="percent">{item.discount}%</span>
      </span>
      <p className="slashAmount">${item.price.toFixed(2)}</p>
      <div className="row implement">
        <span className="col-auto">
          <button onClick={minus} className="addQuantity">
            -
          </button>
          <input
            name="total"
            value={implement}
            onChange={handleCount}
            className="count"
            type="number"
          />
          <button onClick={plus} className="addQuantity">
            +
          </button>
        </span>
        <button onClick={handleSubmit} className="CartBtn col">
          <span className="IconContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)"
              className="cart"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
          </span>
          <p className="text">Add to Cart</p>
        </button>
      </div>
    </div>
  );
}

export default ShoppingContent
