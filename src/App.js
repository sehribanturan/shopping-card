import style from "./App.module.scss";
import Header from "./Components/Header";
import Product from "./Components/Product";
import products from "./products.json";
import Basket from "./Components/Basket";
import { useState, useEffect } from "react";
function App() {
  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState("");

  useEffect(() => {
    const totalPrice = basket.reduce(
      (pre, basket) => pre + basket.amount * basket.price,
      0
    );
    setCost(totalPrice);
  }, [basket]);
  return (
    <>
      <Header />
      <div className={style.app__productContainer}>
        <div className={style.app__productBox}>
          {products.map((product) => (
            <Product
              key={product.id}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          ))}
        </div>
        <Basket cost={cost} basket={basket} />
      </div>
    </>
  );
}

export default App;
