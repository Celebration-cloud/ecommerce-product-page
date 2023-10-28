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
            <Badge badgeContent={d} color="success">
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
            <Typography sx={{ p: 2 }}>{}</Typography>
          </Popover>
    </>
  );
}

export default CartInfo
