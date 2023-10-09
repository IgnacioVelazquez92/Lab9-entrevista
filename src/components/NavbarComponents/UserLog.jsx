import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { useSelector } from "react-redux";

const UserLog = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const userlog = useSelector((store) => store.usuario);

  return (
    <>
      <details className="dropdown dropdown-end">
        <summary className="w-12 m-1 btn btn-ghost">
          <div className="flex justify-center items-center">
            <BiUserCircle className="text-5xl" />
          </div>
        </summary>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link>Perfil</Link>
          </li>
          <li>
            {userlog.isAdmin && (
              <Link to="/admin" className="w-full">
                <div className="flex flex-row justify-end items-center w-full">
                  <span>Administrador</span>
                  <span className="badge badge-primary">
                    <GrUserAdmin className="text-sm text-primary" />
                  </span>
                </div>
              </Link>
            )}
          </li>
          <li>
            <a onClick={logOut}>Cerrar sesión</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default UserLog;
