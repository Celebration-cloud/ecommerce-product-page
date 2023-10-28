import ImageSlide from './ImageSlide';
import ShoppingContent from './ShoppingContent';
import {v4 as uuid} from 'uuid'
import './TheBody.css'
im
function TheBody({ handleDetail }) {
  return (
    <div style={{ padding: "20px" }} className="container">
      {shoppingContent.map((item) => (
        <div key={item.id} className="content row">
          <ImageSlide item={item} />
          <ShoppingContent handleDetail={handleDetail} item={item} />
        </div>
      ))}
    </div>
  );
}

export default TheBody
