"use client";

import { useState } from "react";
import { getTitleResults } from "../actions/getTitleResults";

export default function titleRec() {
  const [questionMarkResult, setQuestionMarkResult] = useState<string | null>(null);
  const [groupNameResult, setGroupNameResult] = useState<string | null>(null);

  async function handleClick() {
  const data = await getTitleResults();
  setQuestionMarkResult(data.questionMarkResult);
  setGroupNameResult(data.groupNameResult);
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
    </div>
  );
}