import { hasMV, isRecent } from "./trendingCheckers";
import { fetchYoutubeVideos } from "./fetchYoutubeVideos";
export async function fetchTrendingSongs() {


    const channelIDs = [
    "UCzgxx_DM2Dcb9Y1spb9mUJA",
    "UC7Q3HUnJA3nvjZR2JeMn2Cw",
    "UCEpFoWeCMCo5z3EvWaz6hQQ"
    ];

    const allVids: { title: string; postedAt: string; views: number }[] = [];
    for (const channelID of channelIDs) {
    allVids.push(...await fetchYoutubeVideos(channelID));    }

    const filteredVids = allVids.filter((video) => hasMV(video.title) && isRecent(video.postedAt));

    const sorted = filteredVids.sort((a, b) => b.views - a.views);
    return sorted.slice(0, 10);

}