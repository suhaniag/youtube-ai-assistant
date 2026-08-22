"use server";

import { fetchChannelStats } from "../lib/fetchChannelStats";

export async function getChannelStatsResult() {
  return fetchChannelStats("UCsPnWr79s_eoWQgQW3hKtlQ");
}