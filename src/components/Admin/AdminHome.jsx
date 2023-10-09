import React from "react";

const AdminHome = () => {
  return (
    <div className="overflow-x-auto justify-center ">
      <table className="table table-lg table-zebra">
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Correo</th>
            <th>Admin</th>
            <th>Bloquear</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
