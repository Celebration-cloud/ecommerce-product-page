const shoppingContent = [
  {
    company: "SNEAKER COMPANY",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`
  },
];
function ShoppingContent() {
  return (
    <div className="col">
      <p>
        <strong style={{ color: "orangered" }}>SNEAKER COMPANY</strong>
      </p>
      <h2>
        <strong>Fall Limited Edition Sneakers</strong>
      </h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <strong style={{fontSize}}>$125.00</strong>
    </div>
  );
}

export default ShoppingContent
