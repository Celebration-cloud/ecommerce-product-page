import { v4 as uuid } from "uuid";
import pic1 from "../../images/image-product-1.jpg";
import pic2 from "../../images/image-product-2.jpg";
import pic3 from "../../images/image-product-3.jpg";
import pic4 from "../../images/image-product-4.jpg";
import pic1_1 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_2 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_3 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_4 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_5 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_6 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_ from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_1 from "../../images/ice-coffee-with-whipped-cream.jpg";
import pic1_1 from "../../images/ice-coffee-with-whipped-cream.jpg";
const shoppingCart = [
  {
    id: uuid(),
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
    price: 250,
    imageUrls: [pic1, pic2, pic3, pic4],
    image: pic1,
    discount: 50,
  },
  {
    id: uuid(),
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
    price: 250,
    imageUrls: [pic1, pic2, pic3, pic4],
    image: pic1,
    discount: 50,
  },
];
export default shoppingCart;
