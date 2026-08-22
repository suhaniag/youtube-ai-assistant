"use server";

import { fetchYoutubeVideos } from "../lib/fetchYoutubeVideos";
import { buildTitlePrompt } from "../lib/buildTitlePrompt";
import { callGemini } from "../lib/callGemini";

export async function getTitleInsight() {
  const videos = await fetchYoutubeVideos("UCsPnWr79s_eoWQgQW3hKtlQ");
  const prompt = buildTitlePrompt(videos);
  const insight = await callGemini(prompt);
  return insight;
}