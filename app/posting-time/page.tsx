"use client";
import { useState } from "react";
import { getPostingTimeResult } from "../actions/getPostingTimeResult";

export default function PostingTime() {
  const [result, setResult] = useState<{
    mostCommonHour: number;
    daysAnalyzed: number;
    timesItWasPeak: number;
  } | null>(null);

  async function handleClick() {
    const data = await getPostingTimeResult();
    setResult(data);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Best posting time</h1>
      <button
        onClick={handleClick}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
      >
        Generate best posting time
      </button>

      {result && (
        <p className="mt-6 text-lg">
          Out of {result.daysAnalyzed} days analyzed,{" "}
          <span className="font-semibold text-pink-600">{result.mostCommonHour}:00</span>{" "}
          was your top-performing hour on {result.timesItWasPeak} of those days.
        </p>
      )}
    </div>
  );
}