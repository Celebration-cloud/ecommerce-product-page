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
      <span><strong style={{fontSize: 20}}>$125.00</strong> <span style={{backgroundColor: "GrayText", color: "orangered", borderRadius:"5px", padding: "5px"}}>50%</span></span>
      <p className="sla" style={{textDecoration: "line-through", fontWeight: "lighter"}}>$250.00</p><br/>
      <div>
        <span><button>-</button><input style={{width: "50px", padding: "8px", border: "none"}}  defaultValue={0}/><button style={{backgroundColor: "transparent", color: "orange"}}>+</button></span>
      </div>
      
    </div>
  );
}

export default ShoppingContent
