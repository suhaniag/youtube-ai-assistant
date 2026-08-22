export function buildTitlePrompt(videos: { title: string; views: number }[]) {
  const recentVideos = videos.slice(0, 20);

  const videoLines = recentVideos.map(
    (video) => `${video.title} - ${video.views.toLocaleString()} views`
  );

  const videoListText = videoLines.join("\n");

  const prompt = `Here are YouTube video titles from a K-pop dance channel, along with their view counts:

${videoListText}

Based on this data, identify patterns in the titles that seem to correlate with higher view counts. Give a numbered list of 2-3 specific, actionable recommendations for writing better titles, based only on what you observe in this data.`;

  return prompt;
}