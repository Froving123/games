"use client";

import Styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { getJWT, getMe, isResponseOk, removeJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const pathname = usePathname();

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };

  useEffect(() => {
    const jwt = getJWT();
    if (jwt) {
      getMe(endpoints.me, jwt).then((userData) => {
        if (isResponseOk(userData)) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          removeJWT();
        }
      });
    }
  }, []);

  const handleLogout = () => {
    setIsAuthorized(false);
    removeJWT();
  };

  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img className={Styles["logo__image"]} src="./images/logo.svg" alt="Логотип Pindie" />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooter"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooter" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runner"
              className={`${Styles["menu__link"]} ${
                pathname === "/runner" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/TDS"
              className={`${Styles["menu__link"]} ${
                pathname === "/TDS" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {isAuthorized ? (
            <button button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup} />
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm close={closePopup} setAuth={setIsAuthorized} />
      </Popup>
    </header>
  );
};
