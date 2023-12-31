import ImageSlide from './ImageSlide';
import ShoppingContent from './ShoppingContent';
import './TheBody.css'
import shoppingCart from '../shopping/ShoppingCart';
function TheBody({ handleDetail }) {
  return (
    <div style={{ padding: "20px" }} className="container">
      {shoppingCart.map((item) => (
        <div key={item.id} className="content row">
          <ImageSlide item={item} />
          <ShoppingContent handleDetail={handleDetail} item={item} />
        </div>
      ))}
    </div>
  );
}

export default TheBody
