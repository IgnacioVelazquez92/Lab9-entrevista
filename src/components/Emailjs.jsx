import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ApiClient } from "../api/services";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Emailjs = () => {
  const [email, setEmail] = useState("");

  const back = useNavigate();
  const handleBack = () => {
    back(-1);
  };

  function generarCodigo() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let codigo = "";

    for (let i = 0; i < 8; i++) {
      codigo += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    return codigo;
  }
  const apiClient = new ApiClient();

  const sendEmail = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password: generarCodigo(),
    };

    const templateParamsFinal = {
      from_name: "Lab-9",
      email,
      user_name: email,
      password: userData.password,
      message: `tu nueva clave es ${userData.password}`,
    };

    try {
      console.log(userData);
      const response = await apiClient.recoverPass(userData);
      console.log(response);

      emailjs
        .send(
          "service_648ni5b",
          "template_g8ikg0r",
          templateParamsFinal,
          "FEoD25wDHjpMmuP9r"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(
          Swal.fire({
            title: "¡Éxito!",
            text: response.data.msg,
            icon: "success",
            confirmButtonText: "Aceptar",
          })
        );
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "¡Error!",
        text: error.response.data.msg,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-5">
        <h1 className="text-center">
          Ingresa tu correo para recuperar tu contraseña
        </h1>
        <form onSubmit={sendEmail}>
          <div className="join">
            <input
              className="input input-bordered join-item"
              type="email"
              id="validationMail"
              value={email}
              onChange={handleEmailChange}
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              required
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Recuperar</button>
          </div>
        </form>
        <div>
          <button
            onClick={handleBack}
            type="submit"
            className="btn btn-primary mx-auto"
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

export default Emailjs;
