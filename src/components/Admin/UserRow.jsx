import React, { useState } from "react";
import { ApiClient } from "../../api/services";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const UserRow = ({ user }) => {
  const apiClient = new ApiClient();
  const [admin, setAdmin] = useState(user.isAdmin);
  const [disabled, setDisabled] = useState(user.disabled);

  const handleAdminChange = async () => {
    try {
      const response = await apiClient.isAdministrator(user._id, !admin);
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setAdmin(!admin);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.errors[0].msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleDisabledChange = async () => {
    try {
      const response = await apiClient.disabledUser(user._id, !disabled);
      Swal.fire({
        title: "¡Éxito!",
        text: response.data.msg,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setDisabled(!disabled);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.errors[0].msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const deleteUser = async () => {
    try {
      Swal.fire({
        title: "Estas seguro de eliminar al usuario?",
        text: "No podrás revertirlo.!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const response = apiClient.deleteUser(user._id);
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "¡Error!",
        text: error.response
          ? error.response.data.errors[0].msg
          : "☹ ups.. algo fallo, intente más tarde",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <tr>
      <th>{user._id}</th>
      <td>
        {user.name} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>
        <input
          type="checkbox"
          className="toggle toggle-success"
          checked={admin}
          onChange={handleAdminChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          className="toggle toggle-info"
          checked={disabled}
          onChange={handleDisabledChange}
        />
      </td>
      <td>
        <button className="btn" onClick={deleteUser}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
