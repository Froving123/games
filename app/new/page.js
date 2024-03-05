import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";


export default async function New() {
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
  return (
    <main>
      <CardsList id="New" title="Новинки" data={newGames} />
    </main>
  );
}
