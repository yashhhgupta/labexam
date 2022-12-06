import Card from "../UI/Card";
import StockItem from "./StockItem";
import classes from "./Stocks.module.css";
// import Card from "./UI/Card";
import {useState, useEffect} from 'react';
const Stocks=()=>{
//     const stocks=[{
//         symbol: "AAPL",
//         name: "Apple Inc.",
//         price: 120.00,
//     },
//     {
//         symbol: "MSFT",
//         name: "Microsoft Corporation",
//         price: 200.00,

//     },
//     {
//         symbol: "GOOG",
//         name: "Alphabet Inc.",
//         price: 1500.00,
//     }

// ];
const [stocks, setStocks] = useState([]);
useEffect(() => {
  const fetchitems = () => {
    fetch("http://localhost:3001/stocks/")
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // const data = response.json();
  };
  fetchitems();
}, []);
const StocksList = stocks.map((stock) => {
  // console.log(meal.id)
  return (
    <StockItem
    //   id={meal.idMeal}
        symbol={stock.symbol}
      name={stock.name}
      price={stock.price}
    //   image={meal.strMealThumb}
    />
  );
});
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{StocksList}</ul>
          </Card>
        {/* </Card> */}
      </section>
    );
}
export default Stocks;