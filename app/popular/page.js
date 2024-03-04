import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function Popular() {
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
  return (
    <main>
      <CardsList id="Popular" title="Популярные" data={popularGames} />
    </main>
  );
}
