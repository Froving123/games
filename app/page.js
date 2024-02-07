import { Banner } from "./components/Banner/Banner";
import { NewCardList } from "./components/CardsList/NewCardsList";
import { PopularCardList } from "./components/CardsList/PopularCardsList";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  return (
    <main>
      <Banner />
      <PopularCardList />
      <NewCardList />
      <Promo />
    </main>
  );
}
