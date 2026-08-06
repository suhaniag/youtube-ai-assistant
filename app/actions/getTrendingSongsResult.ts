"use server";

import { fetchTrendingSongs } from "../lib/fetchTrendingSongs";

export async function getTrendingSongsResult() {
  return fetchTrendingSongs();
}