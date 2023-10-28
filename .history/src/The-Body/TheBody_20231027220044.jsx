import ImageSlide from './ImageSlide';
import ShoppingContent from './ShoppingContent';
import {v4 as uuid} from 'uuid'
import './TheBody.css'
import pic1 from "../../images/image-product-1.jpg";
import pic2 from "../../images/image-product-2.jpg";
import pic3 from "../../images/image-product-3.jpg";
import pic4 from "../../images/image-product-4.jpg";
const shoppingContent = [
  {
    id: uuid(),
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
    price: 250,
    imageUrls: [pic1, pic2, pic3, pic4],
    discount: 90
  },
];
function TheBody() {
  return (
    <div style={{padding: "20px"}} className="container">
      {shoppingContent.map((item) => (
        <div key={item.id} className="content row">
          <ImageSlide item={item}/>
          <ShoppingContent item={item}/>
        </div>
      ))}
    </div>
  );
}

export default TheBody
