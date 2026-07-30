
export function calculateBestPostingTime(
    videos: { postedAt: string; views: number }[]
) {
  const videosByDay: Record<string, { hour: number; views: number }[]> = {};

  videos.forEach((video: { postedAt: string; views: number }) => {
    const date = new Date(video.postedAt);
    const day = date.toISOString().split("T")[0];
    const hour = date.getHours();

    if (!videosByDay[day]) {
      videosByDay[day] = [];
    }
    videosByDay[day].push({ hour, views: video.views });
  });

  const peakHourPerDay: number[] = [];

  for (const day in videosByDay) {
    const videosThatDay = videosByDay[day];
    const topVideo = videosThatDay.reduce((best, current) =>
      current.views > best.views ? current : best
    );
    peakHourPerDay.push(topVideo.hour);
  }

  const hourFrequency: Record<number, number> = {};
  peakHourPerDay.forEach((hour) => {
    hourFrequency[hour] = (hourFrequency[hour] || 0) + 1;
  });

  let mostCommonHour = 0;
  let highestCount = 0;

  for (const hour in hourFrequency) {
    if (hourFrequency[hour] > highestCount) {
      highestCount = hourFrequency[hour];
      mostCommonHour = Number(hour);
    }
  }

  return {
    mostCommonHour,
    daysAnalyzed: peakHourPerDay.length,
    timesItWasPeak: highestCount,
  };
}