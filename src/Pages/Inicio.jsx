import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import InicioLayout from "../layout/InicioLayout";
import { loginRoutes } from "../routes/loginRoutes";

const routerLog = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<InicioLayout />}>
      {loginRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Route>
  )
);

const Inicio = () => {
  return <RouterProvider router={routerLog} />;
};

export default Inicio;
