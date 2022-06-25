import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
    const counter = useSelector((state) => state.Counter.Count);

  console.log(counter);

  return (
    <div className="app">
      <div>
        <h2>Here is value</h2>
   {counter==undefined?
   <></>:
        <h3 class="count">{counter}</h3>
    }

      </div>
    </div>
  );
}
