import React from "react";
import style from "./Product.module.scss";

const Product = ({ product, basket, setBasket }) => {
  const basketProduct = basket.find((item) => item.id === product.id);
  function addBasket() {
    const addFind = basket.find((item) => item.id === product.id);
    if (addFind) {
      addFind.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          amount: addFind.amount,
        },
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          amount: 1,
        },
      ]);
    }
  }
  function removeBasket() {
    const removeFind = basket.find((item) => item.id === product.id);
    removeFind.amount -= 1;
    if (removeFind.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          amount: removeFind.amount,
        },
      ]);
    }
  }
  return (
    <div>
      <div className={style.product}>
        <div className={style.product__count}>
          <button className={style.product__button} onClick={addBasket}>
            +
          </button>
          <b>{(basketProduct && basketProduct.amount) || 0}</b>
          <button
            className={style.product__button}
            disabled={!basketProduct}
            onClick={removeBasket}
          >
            -
          </button>
        </div>
        <img src={product.image} className={style.product__photo} />
        <div className={style.product__info}>
          <p className={style.product__p}>{product.title}</p>
          <p className={style.product__p}>{product.price} TL </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
