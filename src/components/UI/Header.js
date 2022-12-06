import { Fragment } from "react";
import { Link } from "react-router-dom";
import {useEffect,useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  const[num,setnum]=useState(0);
  useEffect(() => {
    const fetchitems = () => {
      fetch("http://localhost:3001/number")
        .then((response) => response.json())
        .then((data) => {
          setnum(data.total)
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, [num]);
  console.log(num);
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <h1 style={{ color: "white" }}>STOCKIT</h1>
        </Link>
        <Link to="stocks">
          <h2 style={{ color: "white" }}>All Stocks={num}</h2>
        </Link>
        
        <Link to="cart">
          {/* <HeaderCartButton /> */}
          {num}
        </Link>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
