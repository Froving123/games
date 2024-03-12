"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function Runner() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsList id="runner" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 