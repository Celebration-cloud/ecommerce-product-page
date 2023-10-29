import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import './CartInfo.css'
function notificationsLabel(count) {
  
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

function CartInfo({ detail, handleRemove }) {
  const [cart, setCart] = React.useState(null);
  const [total, setTotal] = useState([])
  const handleClick = (event) => {
    setCart(event.currentTarget);
  };

  const handleTotal = (price) =>{
    setTotal(prev => prevm)
  }
  const handleCartClose = () => {
    setCart(null);
  };

  const handleDelete = (id) => {
    handleRemove(id)
  };

  const open = Boolean(cart);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton
        style={{ marginRight: "0px", marginTop: "5px" }}
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
            <p className="noCart">Your cart is empty.</p>
          ) : (
            detail?.map((item) => (
              <>
                <div
                  style={{padding: "3px", gap: "6px" }}
                  className="row cartInfo"
                  key={item.id}
                >
                  <div className="col-2">
                    <img src={item.img} alt="" height="50" width="50" />
                  </div>
                  <div className="col-8">
                    <p>{item.name}</p>
                    <p>
                      ${item.initialPrice} x {item.count}
                      <span>
                        <strong> Total: ${item.price}</strong>
                      </span>
                    </p>
                  </div>
                  <div className="col-1">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="deleteIcon"
                    >
                      <DeleteIcon style={{ marginTop: "15px" }} />
                    </button>
                  </div>
                </div>
                <button
                  style={{ width: "50%", border: "none", height: "40px", backgroundColor: "orangered" }}
                >
                  Checked
                </button>
              </>
            ))
          )}
          {detail.length > 0 && (
            <>
              <hr />
              <button
                style={{ width: "100%", border: "none", height: "40px", backgroundColor: "orangered" }}
              >
                Total: 
              </button>
            </>
          )}
        </Typography>
      </Popover>
    </>
  );
}

export default CartInfo
