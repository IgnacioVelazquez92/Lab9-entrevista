import React from "react";
import { useNavigate } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

const Error404 = () => {
  const back = useNavigate();
  const handleBack = () => {
    back(-1);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="grid place-content-center">
            <TbFaceIdError className="text-9xl text-primary text-center" />
          </div>
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p className="py-6">
            ¡Oops! Parece que te has perdido en el ciberespacio. La página que
            buscas no se encuentra en este rincón de la web. Pero no te
            preocupes, estamos aquí para ayudarte a volver al camino correcto.
          </p>
          <button onClick={handleBack} className="btn btn-primary">
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
