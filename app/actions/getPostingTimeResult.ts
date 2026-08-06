"use server";

import { fetchYoutubeVideos } from "../lib/fetchYoutubeVideos";
import { calculateBestPostingTime } from "../lib/calculatePostingTime";

export async function getPostingTimeResult() {
  const videos = await fetchYoutubeVideos("UCsPnWr79s_eoWQgQW3hKtlQ");  
  return calculateBestPostingTime(videos);
}