import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data.utils";

export default function Popular() {
  const popularGames = getGamesByCategory("popular");
  return (
    <main>
      <CardsList id="Popular" title="Популярные" data={popularGames} />
    </main>
  );
}
