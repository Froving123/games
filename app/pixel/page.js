"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className="main-inner">
      {pixelGames ? (
        <CardsList id="pixel" title="Пиксельные" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 