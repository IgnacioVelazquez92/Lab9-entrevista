import Home from "../Pages/Home";
import Error404 from "../components/Error404";
import AdminHome from "../components/Admin/AdminHome";
import AboutMe from "../Pages/AboutMe";
import Contact from "../components/Contact";
const routes = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/about",
    Element: AboutMe,
  },
  {
    path: "/admin",
    Element: AdminHome,
  },
  {
    path: "/contact",
    Element: Contact,
  },
  {
    path: "/*",
    Element: Error404,
  },
];

export { routes };
