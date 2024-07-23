import React from "react";
import { RiBarChart2Line, RiPieChartLine } from "react-icons/ri";

const CardMetric = ({ metric, value, description, onViewChart }) => {
  let status = "";
  let textColor = "";

  switch (metric) {
    case "voltaje":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "proIngresosHr":
      status = "bg-purple-500/10 text-purple-500";
      textColor = "text-purple-500";
      break;
    default:
      status = "bg-gray-500/10 text-gray-500";
      textColor = "text-gray-500";
      break;
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <RiBarChart2Line className={`text-4xl ${status} p-2 box-content rounded-xl`} />
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{value}</h1>
        <p className={textColor}>{description}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div>
        <button onClick={() => onViewChart(metric)} className="flex items-center gap-2 text-white hover:underline">
          <RiPieChartLine />
          <span>Ver Gráfico</span>
        </button>
      </div>
    </div>
  );
};

export default CardMetric;
