import React, { useState, useEffect } from "react";

const Contador = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(54);

  useEffect(() => {
    const interval = setInterval(() => {
      // Verificar si todos los valores son 0 y detener la cuenta regresiva
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
        return;
      }

      // Restar 1 segundo de los segundos y ajustar los valores cuando lleguen a 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        // Restar 1 minuto
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
          // Restar 1 hora
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);
            // Restar 1 día
            if (days > 0) {
              setDays(days - 1);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  const formatNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <div className="border border-neutral rounded-xl border-dotted py-3 flex flex-col justify-center items-center shadow-xl">
      <h2 className="text-center  my-2">Se aproxima CiberMonday</h2>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            {formatNumber(days)}
          </span>
          días
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            {formatNumber(hours)}
          </span>
          horas
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            {formatNumber(minutes)}
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            {formatNumber(seconds)}
          </span>
          seg
        </div>
      </div>
    </div>
  );
};

export default Contador;
