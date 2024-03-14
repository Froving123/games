"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function ShootersGames() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className="main-inner">
      {shootersGames ? (
        <CardsList id="shooter" title="Шутеры" data={shootersGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
