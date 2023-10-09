import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  isAdmin: "",
  isDisabled: "",
};

const local = JSON.parse(localStorage.getItem("user"));

export const userSlice = createSlice({
  name: "usuario",
  initialState: local || initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, lastName, email, isAdmin, isDisabled } = action.payload;
      state.name = name;
      state.lastName = lastName;
      state.email = email;
      state.isAdmin = isAdmin;
      state.isDisabled = isDisabled;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
