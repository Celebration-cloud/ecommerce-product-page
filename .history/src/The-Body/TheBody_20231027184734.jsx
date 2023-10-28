import ImageSlide from './ImageSlide';
import ShoppingContent from './ShoppingContent';
import './TheBody.css'
import pic1 from "../../images/image-product-1.jpg";
import pic2 from "../../images/image-product-2.jpg";
import pic3 from "../../images/image-product-3.jpg";
import pic4 from "../../images/image-product-4.jpg";
const shoppingContent = [
  {
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
    price: 950,
  },
];
function TheBody() {
  return (
    <div className="container">
      <div className="content row">
        <ImageSlide/>
        <ShoppingContent/>
      </div>
    </div>
  );
}

export default TheBody
