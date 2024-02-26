import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data.utils";

export default function shooter() {
    const shooterGames = getGamesByCategory("shooter");
  return (
    <main>
      <CardsList id="Shooter" title="Шутеры" data={shooterGames} />
    </main>
  );
}
