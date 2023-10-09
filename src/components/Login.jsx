import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user";

const Login = () => {
  const [pass, setPass] = useState("password");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const apiClient = new ApiClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      setLoading(true);
      const response = await apiClient.login(user);
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      console.log(response.data.userData);
      dispatch(addUser(response.data.userData));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.userData));
      navigate("/");
      return;
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  const eyeHandler = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <form
          className="flex flex-col justify-between items-center gap-3"
          onSubmit={handleSubmit}
        >
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
            {loading ? "Cargando" : "Ingresar"}
            {loading && (
              <span className="loading loading-dots loading-xs"></span>
            )}
          </button>
        </form>
        <div className="divider">ó</div>

        <div className="flex w-full mx-auto">
          <div className="grid h-20 flex-grow card rounded-box place-items-center">
            <Link to={"/register"} className="link text-center">
              Registrarse
            </Link>
          </div>

          <div className="grid h-20 flex-grow card rounded-box place-items-center">
            <Link to={"/recover"} className="link text-center">
              Olvide mi clave
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
