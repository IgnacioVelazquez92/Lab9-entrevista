import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";

const Register = () => {
  const [pass, setPass] = useState("password");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const apiClient = new ApiClient();
  const navigate = useNavigate();

  const eyeHandler = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await apiClient.createUser(user);
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.errors[0].msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <form
          className="flex flex-col justify-between items-center gap-3"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl">Entrevista Lab9</h1>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={handleChange}
            required
          />
          <input
            type="text "
            name="lastName"
            placeholder="Ingresa tu apellido"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu mail"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={handleChange}
            required
          />
          <div className="mx-0 px-0  w-full max-w-xs relative">
            <input
              type={pass}
              name="password"
              placeholder="Ingresa tu contraseña"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange}
              required
            />
            <div className="absolute bottom-2 right-5 z-10">
              <label className="swap">
                <input type="checkbox" onChange={eyeHandler} />
                <div className="swap-on">
                  <AiFillEye className="text-primary" />
                </div>
                <div className="swap-off">
                  <AiFillEyeInvisible className="text-primary" />
                </div>
              </label>
            </div>
          </div>

          <button className="btn btn-primary">
            {loading ? "Cargando" : "Registrarme"}
            {loading && (
              <span className="loading loading-dots loading-xs"></span>
            )}
          </button>
        </form>
        <div className="divider">ó</div>
        <Link to={"/login"} className="link text-center">
          Iniciar sesión
        </Link>
      </div>
    </>
  );
};

export default Register;
