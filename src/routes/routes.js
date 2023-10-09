import Home from "../Pages/Home";
import Error404 from "../components/Error404";
import AdminHome from "../components/Admin/AdminHome";
const routes = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/admin",
    Element: AdminHome,
  },
  {
    path: "/*",
    Element: Error404,
  },
];

export { routes };
