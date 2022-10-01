import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  age: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (user, action) => {
      user.name = action.payload;
    },
    setAge: (user, action) => {
      user.age = action.payload;
    },
    setEmail: (user, action) => {
      user.email = action.payload;
    },
  },
});

export const { setAge, setName, setEmail } = userSlice.actions;
export default userSlice.reducer;
