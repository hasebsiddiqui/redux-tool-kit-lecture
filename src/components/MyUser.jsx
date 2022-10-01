import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAge, setEmail } from "../store/slices/userSlice";
const MyUser = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h3>Email: {user.email}</h3>
      <h3>Age: {user.age}</h3>
      <button
        onClick={() => {
          dispatch(setName("Ali"));
          dispatch(setAge(18));
          dispatch(setEmail("bhai@gmail.com"));
        }}
      >
        Set Name to Ali Age to 8 and Email to bhai log
      </button>
    </div>
  );
};

export default MyUser;
