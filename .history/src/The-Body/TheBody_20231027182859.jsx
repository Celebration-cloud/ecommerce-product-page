import ImageSlide from './ImageSlide';
import ShoppingContent from './ShoppingContent';
import './TheBody.css'
const shoppingContent = [
  {
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
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
