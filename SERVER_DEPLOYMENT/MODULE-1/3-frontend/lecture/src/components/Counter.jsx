import { useState } from "react";
// eslint-disable-next-line react/prop-types
export function Counter({ color = "grey" }) {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}
    >
      count: {count}
    </button>
  );
}