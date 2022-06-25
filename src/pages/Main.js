import React, { useState } from "react";
import Button from "../components/Button";
import "../assets/css/style.css";
import { Increment, Decrement } from "../actions/EventActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function App() {
  const counter = useSelector((state) => state.Counter.Count);
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div>
        <div>
          <h3 className="count">{counter}</h3>
        </div>
        <div className="buttons">
          <Button title={"+"} onClick={() => dispatch(Increment())} />
          <Button title={"-"} onClick={() => dispatch(Decrement())} />
        </div>
        <div className="count1" >
        <Link to="/count">
          <button className="countbtn" >
          check count
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
