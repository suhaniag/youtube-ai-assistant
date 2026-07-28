import PercentageBar from "./components/percentage-bar";
import { featureStats } from "./dataa/mockstats";

export default function Home() {
  return (
    <div className="main-page">
      <h1 className="text-3xl text-white-900 tracking-tight text-center">K-Create</h1>
      <p>Your one-stop destination for creating the best K-pop dance videos</p>
      <div className="flex gap-8 mt-8">
        <PercentageBar title="Posting Time" metrics={featureStats.postingTime} />
        <PercentageBar title="Trending Songs" metrics={featureStats.trendingSongs} />
        <PercentageBar title="Titles" metrics={featureStats.titles} />
      </div>
    </div>
  );
}
