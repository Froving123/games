import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function shooter() {
    const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
  return (
    <main>
      <CardsList id="Shooter" title="Шутеры" data={shooterGames} />
    </main>
  );
}
