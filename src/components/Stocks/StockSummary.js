import classes from "./StockSummary.module.css";

const StockSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Want Some Reliable Investment? Want to earn by just sitting?</h2>
      <div className={classes.body}>
        <p>Stay home earn</p>
        <p>
          Choose your favorite stocks from our broad selection of All Stocks and buy and sell them anytime
        </p>
      </div>
    </section>
  );
};

export default StockSummary;
