import React from "react";
import CameraView from "../../components/CameraView";

const Camaras = () => {
  const cameraUrls = [
    "http://example.com/stream1.mp4",
    "http://example.com/stream2.mp4",
    "http://example.com/stream3.mp4",
    "http://example.com/stream4.mp4",
    "http://example.com/stream5.mp4",
    "http://example.com/stream6.mp4",
    // Agrega más URLs de cámaras según sea necesario
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl text-white mb-10">Vistas de las Cámaras</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cameraUrls.map((url, index) => (
          <CameraView key={index} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Camaras;
