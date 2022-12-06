import {useContext} from 'react';
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
