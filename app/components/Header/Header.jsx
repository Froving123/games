"use client";

import Styles from "./Header.module.css";
import Link from 'next/link';
import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };

  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img className={Styles["logo__image"]} src="./images/logo.svg" alt="Логотип Pindie" />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link href="/new" className={Styles["menu__link"]}>
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/popular" className={Styles["menu__link"]}>
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/shooter" className={Styles["menu__link"]}>
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/runner" className={Styles["menu__link"]}>
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/pixel" className={Styles["menu__link"]}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/TDS" className={Styles["menu__link"]}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          <button className={Styles["auth__button"]} onClick={openPopup}>
            Войти
          </button>
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup}/>
      <Popup isOpened={popupIsOpened} close={closePopup}>
          <AuthForm />
      </Popup>
    </header>
  );
};
