import React from "react";

const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hola soy Nacho </h1>
          <p className="py-6">
            Soy desarrollador FullStack MERN con más de 1 año de experiencia en
            la creación de aplicaciones web. Actualmente, ocupo el puesto de
            Team Leader en Startek, donde lidero a un equipo hacia el
            cumplimiento de KPIs. Sin embargo, mi verdadera pasión reside en el
            mundo de la tecnología y sueño con la oportunidad de realizar una
            transición formal hacia el sector IT
          </p>
          <a
            href="https://ignacio-velazquez.netlify.app/"
            target={"_blank"}
            className="btn btn-primary"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
