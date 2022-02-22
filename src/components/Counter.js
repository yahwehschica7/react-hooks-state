import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>Click Me {count} times</button>;
}

export default Counter;

