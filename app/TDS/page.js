import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function TDS() {
    const TDSGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main>
      <CardsList id="TDS" title="TDS" data={TDSGames} />
    </main>
  );
}
