import { v4 as uuid } from "uuid";
import pic1 from "../../images/image-product-1.jpg";
import pic2 from "../../images/image-product-2.jpg";
import pic3 from "../../images/image-product-3.jpg";
import pic4 from "../../images/image-product-4.jpg";
import pic1_1 from "../../images/pair-trainers (1).jpg";
import pic1_2 from "../../images/pair-trainers (2).jpg"
import pic1_3 from "../../images/pair-trainers (3.jpg";
import pic1_4 from "../../images/pair-trainers-4.jpg";
// import pic1_5 from "../../images/pair-trainers (5).jpg";
// import pic1_6 from "../../images/pair-trainers (6).jpg";
// import pic1_7 from "../../images/pair-trainers (7).jpg";
// import pic1_8 from "../../images/pair-trainers (8).jpg";
// import pic1_9 from "../../images/pair-trainers.jpg";
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
    company: "Racool_studio",
    productName: "A Pair Of Sneakers",
    description: `Create great designs, faster
Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more`,
    price: 500,
    imageUrls: [pic1_1, pic1_2, pic1_3, pic1_4],
    image: pic1_2,
    discount: 50,
  },
];
export default shoppingCart;
