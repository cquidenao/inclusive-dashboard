import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Registrar todos los componentes
Chart.register(...registerables);

const ChartComponent = ({ metric, value }) => {
  const data = {
    labels: [metric],
    datasets: [
      {
        label: `${metric.charAt(0).toUpperCase() + metric.slice(1)}`,
        data: [parseFloat(value)],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
