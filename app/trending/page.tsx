"use client";

import { useState } from "react";
import { getTrendingSongsResult } from "../actions/getTrendingSongsResult";

export default function Trending() {
  const [results, setResults] = useState<{
    title: string;
    postedAt: string;
    views: number;
  }[]>([]);

  async function handleClick() {
    const data = await getTrendingSongsResult();
    setResults(data);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-semibold mb-4">Top Trending Songs</h1>

      <button
        onClick={handleClick}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
      >
        Generate trending songs
      </button>

      {results.length > 0 && (
        <ul className="mt-6 space-y-2">
          {results.map((item) => (
            <li key={item.title} className="text-lg">
              {item.title} — {item.views.toLocaleString()} views
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}