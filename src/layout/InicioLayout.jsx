import React from "react";
import { Outlet } from "react-router-dom";

const InicioLayout = () => {
  return (
    <div className="flex justify-center gap-6 items-center h-screen bg-default fondoAnimado">
      <div className="hidden lg:block w-1/2">
        <img src="/assets/designer-0.svg" alt="dev" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default InicioLayout;
