import React, { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { routes } from "./routes/routes";
import Inicio from ".//Pages/Inicio";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {routes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Route>
  )
);

function App() {
  const [log, setLog] = useState(false);

  const usuario = useSelector((store) => store.usuario);
  useEffect(() => {
    if (usuario.email !== "") {
      setLog(true);
    } else {
      setLog(false);
    }
  }, [usuario]);

  return <>{log ? <RouterProvider router={router} /> : <Inicio />}</>;
}

export default App;
