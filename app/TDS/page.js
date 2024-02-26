import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data.utils";

export default function TDS() {
    const TDSGames = getGamesByCategory("TDS");
  return (
    <main>
      <CardsList id="TDS" title="TDS" data={TDSGames} />
    </main>
  );
}
