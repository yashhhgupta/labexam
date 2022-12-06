import classes from "./StockItem.module.css";
import Form from "./Form";
import LineChart from "../UI/LineChart"

const StockItem=(props)=>{

  const createFakeData=()=>{
  // This function creates data that doesn't look entirely random
  const data = []

  for (let x = 0; x <= 30; x++) {
    const random = Math.random();
    const temp = data.length > 0 ? data[data.length-1].y : 50;
    const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
    data.push({x,y})
  }
  return data;
}
  return (
    <li className={classes.meal}>
      <div style={{ padding: "1rem" }}>
        <div className="header">Graph [part 1]</div>
        <LineChart data={createFakeData()} />
        <LineChart data={createFakeData()} color={"#F44336"} />
        {/* <img src={props.image} width="170" alt="Meal"></img> */}
      </div>
      <div>
        <h3>{props.name}</h3>
        <h3>{props.symbol}</h3>
        {/* {console.log(props.id)} */}
        <div className={classes.price}>${props.price}</div>
      </div>

      <div>
        <Form id={props.id} />
      </div>
    </li>
  );
}
export default StockItem;