import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMetric from "../../components/CardMetric";
import ChartComponent from "../../components/ChartComponent";
import { RiDownloadLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const [metrics, setMetrics] = useState({
    temperature: "0",
    humidity: "0"
  });
  const [loading, setLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState(null);

  useEffect(() => {
    const fetchSolarData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setMetrics(response.data);
        setLoading(false); // Terminar la carga una vez obtenidos los datos
      } catch (error) {
        console.error('Error al obtener los datos del panel solar:', error);
        setLoading(false); // Terminar la carga en caso de error
      }
    };

    fetchSolarData();
    const interval = setInterval(fetchSolarData, 5000); // Actualiza cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleViewChart = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Dashboard</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiDownloadLine className="hover:cursor-pointer hover:text-white transition-colors" onClick={() => alert('Descargando informe...')} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          <div className="text-white">Cargando métricas...</div>
        ) : (
          <>
            <CardMetric metric="temperature" value={`${metrics.temperature} °C`} description="Temperatura" onViewChart={handleViewChart} />
            <CardMetric metric="humidity" value={`${metrics.humidity} %`} description="Humedad" onViewChart={handleViewChart} />
          </>
        )}
      </div>
      {selectedMetric && (
        <div className="bg-secondary-100 p-8 rounded-xl h-128 mt-10">
          <h1 className="text-2xl text-white my-10">Gráfico de {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}</h1>
          <ChartComponent metric={selectedMetric} value={metrics[selectedMetric]} />
        </div>
      )}
    </div>
  );
};

export default Home;
