import Image from "next/image";
import styles from "./page.module.css";
import {Banner} from "./components/Banner/Banner.jsx";
import {PopularCardList} from "./components/CardList/PopularCardList.jsx";
import { NewCardList} from "./components/CardList/NewCardList.jsx"
import {Promo} from "./components/Promo/Promo.jsx";

export default function Home() {
  return (
      <main className="main">
        <Banner/>
        <PopularCardList/>
        <NewCardList/>
        <Promo/>
      </main>
  )
}
