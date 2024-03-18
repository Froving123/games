"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function TdsGames() {
  const TdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className="main-inner">
      {TdsGames ? (
        <CardsListSection id="TDS" title="ТДС" data={TdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
