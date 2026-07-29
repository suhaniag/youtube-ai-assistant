"use client";

import { useState } from "react";
import { comparePattern } from "../lib/compareTitlePatterns";
import { hasQuestionMark, hasGroupName } from "../lib/titleCheckers";
import { mockTitles } from "../dataa/mockTitles";

export default function titleRec() {
  const [questionMarkResult, setQuestionMarkResult] = useState<string | null>(null);
  const [groupNameResult, setGroupNameResult] = useState<string | null>(null);

  function handleClick() {
    setQuestionMarkResult(comparePattern(mockTitles, hasQuestionMark));
    setGroupNameResult(comparePattern(mockTitles, hasGroupName));
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

      {questionMarkResult && <p className="mt-6 text-lg">{questionMarkResult}</p>}
      {groupNameResult && <p className="mt-6 text-lg">{groupNameResult}</p>}
    </div>
  );
}