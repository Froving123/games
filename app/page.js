import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsList/CardList";
import { Promo } from "./components/Promo/Promo";
import { getNormalizedGamesDataByCategory } from "./api/api-utils";

export default async function Home() {
  const popularGames = await getNormalizedGamesDataByCategory(
    "https://api-code-2.practicum-team.ru/games",
    "popular"
  );
  const newGames = await getNormalizedGamesDataByCategory(
    "https://api-code-2.practicum-team.ru/games",
    "new"
  );

  console.log(newGames);
  return (
    <main>
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
