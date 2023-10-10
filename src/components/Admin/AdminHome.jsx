import React, { useEffect, useState } from "react";
import { ApiClient } from "../../api/services";
import UserRow from "./UserRow";

const AdminHome = () => {
  const apiClient = new ApiClient();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await apiClient.getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto justify-center ">
      <h1 className="text-3xl text-primary text-center my-5">
        Administración de usuarios
      </h1>
      <table className="table table-lg table-zebra">
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Correo</th>
            <th>Admin</th>
            <th>Bloquear</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserRow key={user._id} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
