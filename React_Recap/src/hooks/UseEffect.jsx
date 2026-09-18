import React, { useEffect, useState } from "react";

const UseEffect = () => {
  // Accepts two arguments. Second argument optional
  //useEffect(<function>, <dependency>)
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    setCalculation(() => count * 2);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h3>I've rendered {count} times!</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default UseEffect;
