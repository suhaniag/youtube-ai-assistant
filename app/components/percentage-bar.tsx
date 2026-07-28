"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function PercentageBar({
  title,
  metrics,
}: {
  title: string;
  metrics: Record<string, number>;
}) {
  const labels = Object.keys(metrics);
  const values = Object.values(metrics);

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#D4537E", "#AFA9EC", "#F0997B"],
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-semibold text-gray-700 mb-2">{title}</p>
      <div style={{ width: "220px", height: "200px" }}>
        <Bar
          data={data}
          options={{
            plugins: { legend: { display: false } },
            scales: {
              y: { ticks: { callback: (value) => `${value}%` } },
            },
          }}
        />
      </div>
    </div>
  );
}