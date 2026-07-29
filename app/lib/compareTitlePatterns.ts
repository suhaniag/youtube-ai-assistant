export function comparePattern(
  videos: { title: string; views: number }[],
  checker: (title: string) => boolean
): string {
  const withFeature = videos.filter((video) => checker(video.title));
  const withoutFeature = videos.filter((video) => !checker(video.title));

  let totalViewsWithFeature = 0;
  let totalViewsWithoutFeature = 0;

  for (const video of withFeature) {
    totalViewsWithFeature += video.views;
  }
  const averageViewsWithFeature =
    withFeature.length > 0 ? totalViewsWithFeature / withFeature.length : 0;

  for (const video of withoutFeature) {
    totalViewsWithoutFeature += video.views;
  }
  const averageViewsWithoutFeature =
    withoutFeature.length > 0 ? totalViewsWithoutFeature / withoutFeature.length : 0;

  if (averageViewsWithoutFeature > averageViewsWithFeature) {
    return "Videos without the feature perform better on average.";
  } else if (averageViewsWithFeature > averageViewsWithoutFeature) {
    return "Videos with the feature perform better on average.";
  }

  return "Both groups perform about the same on average.";
}
