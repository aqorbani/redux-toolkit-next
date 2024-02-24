"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "@/redux/features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>{counter}</h2>
      <div>
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
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(+count));
          }}
        >
          {count}
        </button>
      </div>
    </div>
  );
};

export default Counter;
