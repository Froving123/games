"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function RunnersGames() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsList id="runner" title="Раннеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
