import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter(counter + 1);
  };

  const counterDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Counter Demo</h1>
      </div>
      <div>
        <h3>Counter: {counter}</h3>
      </div>
      <div>
        <button onClick={counterIncrement}>Increment Counter</button>
        <button onClick={counterDecrement}>Decrement Counter</button>
      </div>
    </>
  );
};

export default Counter;
