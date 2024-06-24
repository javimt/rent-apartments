import { useState } from "react";

function useCounterHouses() {
  const [counter, setCounter] = useState(8);

  function handleCounter() {
    setCounter((prev) => prev + 8);
  }

  return {
    counter,
    handleCounter,
  };
}

export default useCounterHouses;
