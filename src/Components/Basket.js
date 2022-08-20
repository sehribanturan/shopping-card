import React from "react";
import style from "./Basket.module.scss";
const Basket = ({ basket, cost }) => {
  return (
    <div className={style.basket}>
      <div className={style.basket__main}>
        <div className={style.basket__show}>
          <h2 className={style.basket__h2}>Basket</h2>
          {(basket.length === 0 && <p>not found result</p>) || null}
          {basket.map((item) => (
            <div className={style.basket__list}>
              <img className={style.basket__img} width="100" src={item.image} />
              <p className={style.basket__p}>
                {item.title} x {item.amount}
              </p>
              <p> {item.price * item.amount} TL</p>
            </div>
          ))}
          {basket && <p>Total : {cost} TL</p>}
        </div>
      </div>
    </div>
  );
};

export default Basket;
