"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function PopularGames() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className="main-inner">
      {popularGames ? (
        <CardsList id="popular" title="Популярные игры" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
