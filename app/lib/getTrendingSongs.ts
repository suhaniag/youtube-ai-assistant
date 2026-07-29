import { mockSongs } from "../dataa/mockSongs";

export function getTrendingSongs() {
  const top10: { song: string; artist: string; percentIncrease: number }[] = [];

  for (const song of mockSongs) {
    top10.push({
      song: song.song,
      artist: song.artist,
      percentIncrease: (song.viewsNow - song.viewsTenDaysAgo) / song.viewsTenDaysAgo * 100
    });
  }

  return top10.sort((a, b) => b.percentIncrease - a.percentIncrease).slice(0, 10);
}