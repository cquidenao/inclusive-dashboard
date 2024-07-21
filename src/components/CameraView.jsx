import React from "react";

const CameraView = ({ url }) => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h2 className="text-2xl text-white mb-4">Vista de Cámara</h2>
      <video className="w-full h-auto" controls>
        <source src={url} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default CameraView;
