"use server";

import { fetchYoutubeVideos } from "../lib/fetchYoutubeVideos";
import { comparePattern } from "../lib/compareTitlePatterns";
import { hasQuestionMark, hasGroupName } from "../lib/titleCheckers";

export async function getTitleResults() {
  const videos = await fetchYoutubeVideos("UCsPnWr79s_eoWQgQW3hKtlQ");  
  const questionMarkResult = comparePattern(videos, hasQuestionMark);
  const groupNameResult = comparePattern(videos, hasGroupName);
  return { questionMarkResult, groupNameResult };
}