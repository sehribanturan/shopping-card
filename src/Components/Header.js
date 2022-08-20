import React from "react";
import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.header__h}> Necklace Store </h1>
    </div>
  );
}
export default Header;
