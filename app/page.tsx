import { getChannelStatsResult } from "./actions/getChannelStatsResult";

export default async function Home() {
  const stats = await getChannelStatsResult();

  return (
    <div className="main-page p-8">
      <h1 className="text-3xl text-white-900 tracking-tight text-center">K-Create</h1>
      <p className="text-center">Your one-stop destination for creating the best K-pop dance videos</p>

      <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600">Subscribers</p>
          <p className="text-2xl font-semibold text-pink-600">
            {stats.subscriberCount.toLocaleString()}
          </p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600">Total Videos</p>
          <p className="text-2xl font-semibold text-pink-600">
            {stats.videoCount.toLocaleString()}
          </p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600">Avg Likes (last 10)</p>
          <p className="text-2xl font-semibold text-pink-600">
            {stats.averageLikes.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-600">Avg Comments (last 10)</p>
          <p className="text-2xl font-semibold text-pink-600">
            {stats.averageComments.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
    </div>
  );
}