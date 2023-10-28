import React from 'react'
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ''
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
        <Badge badgeContent={detail.length} color="success">
          <ShoppingCart color="action" />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={cart}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <h4 style={{ textAlign: "left", padding: "5px" }}>Cart</h4>
          <hr />
          {detail.length <= 0 ? (
            <h5>Your cart is empty.</h5>
          ) : (
            detail?.map((item) => (
              <>
                <div className="row cartInfo" key={item.id}>
                  <div className="col-2">
                    <img src={item.img} alt="" height="50" width="50" />
                  </div>
                  <div className="col-7">
                    <p>{item.name}</p>
                    <p>
                      ${item.initialPrice.toFixed(2)} x {item.count}
                      <span>
                        <strong> Total: ${item.price.toFixed(2)}</strong>
                      </span>
                    </p>
                  </div>
                </div>
                <button className="CartBtn">
                  <p className="text">Checked</p>
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
