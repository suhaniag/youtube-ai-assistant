const API_KEY = process.env.YOUTUBE_API_KEY;

export async function fetchYoutubeVideos(CHANNEL_ID: string) {  // 1. Get the channel's uploads playlist ID
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
  );
  const channelData = await channelRes.json();
  const uploadsPlaylistId =
    channelData.items[0].contentDetails.relatedPlaylists.uploads;

  // 2. Get video IDs from that uploads playlist
  const playlistRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
  );
  const playlistData = await playlistRes.json();
  const videoIds = playlistData.items.map(
    (item: any) => item.contentDetails.videoId
  );

  // 3. Get stats for those specific videos
  const videosRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
  );
  const videosData = await videosRes.json();

  // 4. Reshape into the same format your mock data used
  return videosData.items.map((video: any) => ({
    title: video.snippet.title,
    postedAt: video.snippet.publishedAt,
    views: Number(video.statistics.viewCount),
    likeCount: Number(video.statistics.likeCount),
    commentCount: Number(video.statistics.commentCount),
  }));
}