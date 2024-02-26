import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data.utils";

export default function Runner() {
    const runnerGames = getGamesByCategory("runner");
  return (
    <main>
      <CardsList id="Runner" title="Ранеры" data={runnerGames} />
    </main>
  );
}
