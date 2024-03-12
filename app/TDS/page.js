"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function TDS() {
  const TDSGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {TDSGames ? (
        <CardsList id="TDS" title="TDS" data={TDSGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 