import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { getNormalizedGamesDataByCategory } from "./api/api-utils";
import { CardsList } from "./components/CardsListSection/CardsList";
import { CardsSlider } from "./components/CardsListSection/CardsSlider";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(
    "https://api-code-2.practicum-team.ru/games",
    "popular"
  );
  const newGames = await getNormalizedGamesDataByCategory(
    "https://api-code-2.practicum-team.ru/games",
    "new"
  );

  return (
    <main>
      <Banner />
      <CardsListSection id="popular" title="Популярные" data={popularGames} type = 'slider' />
      <CardsListSection id="new" title="Новинки" data={newGames} type = 'slider' />
      <Promo />
    </main>
  );
}
