"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardsList id="new" title="Новые" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
