import Login from "../components/Login";
import Register from "../components/Register";
import Emailjs from "../components/Emailjs";

const loginRoutes = [
  {
    path: "/",
    Element: Login,
  },
  {
    path: "/register",
    Element: Register,
  },

  {
    path: "/recover",
    Element: Emailjs,
  },
];

export { loginRoutes };
