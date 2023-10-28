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
    price: 950,
    imageUrls: [pic1, pic2, pic3, pic4],
  },
];
function TheBody() {
  return (
    <div className="container">
      <div className="content row">
        {shoppingContent.push.map((item) => (
          <
        ))}
        <ImageSlide/>
        <ShoppingContent/>
      </div>
    </div>
  );
}

export default TheBody
