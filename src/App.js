import Home from "./components/Home/home";
import Header from "./components/UI/Header";
import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks/Stocks";
function App() {
  return (
    <>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </>
  );
}

export default App;
