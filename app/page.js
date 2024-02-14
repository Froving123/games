import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardsList";
import { getGamesByCategory } from "./data/data.utils";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main>
      <Banner />
      <CardsList id="Popular" title="Популярные" data={popularGames} />
      <CardsList id="New" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
