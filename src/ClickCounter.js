import React, { useState } from "react";
import {useErrorHandler} from 'react-error-boundary'

const ClickCounter = () => {
  const MAX_COUNT_ALLOWED = 5;
  const [count, setCount] = useState(0);

  const handleError = useErrorHandler()
  const handleClick = () => {
    try {
      if (count > MAX_COUNT_ALLOWED) {
        throw new Error("Max count Exceeded");
      } else {
        setCount((c) => c + 1);
      }
    } catch (error) {
      handleError(error)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Counter{count}</button>
    </div>
  );
};

export default ClickCounter;
