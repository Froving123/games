import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function Runner() {
    const runnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
  return (
    <main>
      <CardsList id="Runner" title="Ранеры" data={runnerGames} />
    </main>
  );
}
