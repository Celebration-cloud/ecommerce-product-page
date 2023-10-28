import React from 'react'
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}
function CartInfo({ detail }) {
  const [cart, setCart] = React.useState(null);

  const handleClick = (event) => {
    setCart(event.currentTarget);
  };

  const handleCartClose = () => {
    setCart(null);
  };

  const open = Boolean(cart);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton
        style={{ marginRight: "10px", marginTop: "5px" }}
        aria-label={notificationsLabel(100)}
        aria-describedby={id}
        onClick={handleClick}
      >
        <Badge badgeContent={0} color="success">
          <ShoppingCart color="action" />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorel={cart}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {detail.length <= 0 ? (
            <h5></h5>
          ) : (
            detail?.map((item) => (
              <>
                <div className="row" key={item.id}>
                  <div className="col-sm-2">
                    <img src={item.img} alt="" height="20" width="10" />
                  </div>
                  <div className="col-sm-8">
                    <p>{item.name}</p>
                    <p>
                      ${item.price} x {item.count}
                      <span>
                        <strong>${item.price}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                <button className="CartBtn col">
                  <span className="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(17, 17, 17)"
                      className="cart"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p className="text">Add</p>
                </button>
              </>
            ))
          )}
        </Typography>
      </Popover>
    </>
  );
}

export default CartInfo
