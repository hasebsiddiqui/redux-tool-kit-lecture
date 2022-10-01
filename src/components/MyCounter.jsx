import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setByValue } from "../store/slices/counterSlice";
const MyCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter.value}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input
        type="number"
        onChange={(e) => {
          dispatch(setByValue(e.target.value));
        }}
      />
    </div>
  );
};

export default MyCounter;
