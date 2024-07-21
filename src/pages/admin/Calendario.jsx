import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../styles/Calendar.css'; // Importa tus estilos personalizados

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center  p-2 mt-8"> {/* Ajusta el margen superior aquí */}
      <h1 className="text-4xl text-white mb-10">Calendario</h1>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-lg">
        <Calendar onChange={onChange} value={date} />
        <p className="text-white mt-4 text-center">Fecha seleccionada: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default Calendario;
