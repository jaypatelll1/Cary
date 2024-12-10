import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phoneNumber: "", // Added phoneNumber to initial state
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber; // Add phoneNumber
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name; // Update name
      state.phoneNumber = action.payload.phoneNumber; // Update phoneNumber
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.phoneNumber = ""; // Reset phoneNumber
      state.token = null;
    },
  },
});

export const { setUser, updateUser, logout } = userSlice.actions;
export default userSlice.reducer;
