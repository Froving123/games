import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data.utils";

export default function New() {
    const newGames = getGamesByCategory("new");
  return (
    <main>
      <CardsList id="New" title="Новинки" data={newGames} />
    </main>
  );
}
