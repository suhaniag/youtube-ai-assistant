import { fetchYoutubeVideos } from "./fetchYoutubeVideos";

const API_KEY = process.env.YOUTUBE_API_KEY;

export async function fetchChannelInfo(channelId: string) {
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();

  return {
    videoCount: Number(channelData.items[0].statistics.videoCount),
    subscriberCount: Number(channelData.items[0].statistics.subscriberCount),
  };
}

export async function fetchChannelStats(channelId: string) {
  const info = await fetchChannelInfo(channelId);
  const videos = await fetchYoutubeVideos(channelId);
  const recentVideos = videos.slice(0, 10);

  let totalLikes = 0;
  let totalComments = 0;

  for (const video of recentVideos) {
    totalLikes += video.likeCount;
    totalComments += video.commentCount;
  }

  const averageLikes = totalLikes / recentVideos.length;
  const averageComments = totalComments / recentVideos.length;

  return {
    videoCount: info.videoCount,
    subscriberCount: info.subscriberCount,
    averageLikes,
    averageComments,
  };
}