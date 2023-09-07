import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({
  fat_mass_percentage_pie,
  bone_mass_percentage_pie,
  residual_mass_percentage_pie,
  muscle_mass_percentage_pie,
}) {
  const [chartData, setChartData] = useState({
    labels: ["Masa Grasa", "Masa Ósea", "Masa Residual", "Masa Muscular"],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [
            fat_mass_percentage_pie,
            bone_mass_percentage_pie,
            muscle_mass_percentage_pie,
            residual_mass_percentage_pie,
          ],
        },
      ],
    });
  }, [
    fat_mass_percentage_pie,
    bone_mass_percentage_pie,
    muscle_mass_percentage_pie,
    residual_mass_percentage_pie,
  ]);

  return (
    <div className="bg-white rounded p-4 shadow-md px-8 pt-6 pb-8 mt-2 flex justify-center w-1/3">
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
