"use client";

import { useState } from "react";
import { getTitleResults } from "../actions/getTitleResults";
import { getTitleInsight } from "../actions/getTitleInsight";

export default function titleRec() {
  const [questionMarkResult, setQuestionMarkResult] = useState<string | null>(null);
  const [groupNameResult, setGroupNameResult] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<string | null>(null);

  async function handleClick() {
    const data = await getTitleResults();
    setQuestionMarkResult(data.questionMarkResult);
    setGroupNameResult(data.groupNameResult);

    const insight = await getTitleInsight();
    setAiInsight(insight);
}

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-semibold mb-4">Title recommendations</h1>

      <button
        onClick={handleClick}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
      >
        Generate title recommendations
      </button>

      {questionMarkResult && <p className="mt-6 text-lg">Question marks: {questionMarkResult}</p>}
      {groupNameResult && <p className="mt-6 text-lg">Group names: {groupNameResult}</p>}
      {aiInsight && (
        <div className="mt-6 p-4 bg-pink-50 rounded-2xl">
          <p className="font-semibold text-black mb-2">AI Insight:</p>
          <p className="whitespace-pre-line text-black">{aiInsight}</p>
        </div>
)}
    </div>
  );
}