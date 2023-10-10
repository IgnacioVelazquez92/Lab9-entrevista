import axios from "axios";

const token = localStorage.getItem("token");

export class ApiClient {
  client;
  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BACKEND,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "access-token": token,
      },
    });
  }

  async getAllUsers() {
    return this.client.get("/user/get-all-user");
  }

  async getUsersName(name) {
    return this.client.get(`/user/get-by-name/${name}`);
  }

  async createUser(user) {
    return this.client.post(`/user/create-user`, user);
  }

  async login(user) {
    return this.client.post(`/login`, user);
  }

  async editUser(FormData) {
    return this.client.patch(`user/edit-user/${FormData.id}`, FormData);
  }

  async editUserMail(FormData) {
    return this.client.patch(`user/edit-mail-user/${FormData.id}`, FormData);
  }

  async recoverPass(userData) {
    return this.client.patch(`user/recover-pass`, userData);
  }

  async deleteUser(id) {
    return this.client.delete(`user/delete-user/${id}`);
  }

  async disabledUser(id, disabled) {
    return this.client.patch(`user/disable-user/${id}/${disabled}`);
  }

  async isAdministrator(id, isAdmin) {
    return this.client.patch(`user/isAdmin-user/${id}/${isAdmin}`);
  }
}
