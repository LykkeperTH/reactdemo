import React, { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    {
      setCount(currentCount => currentCount + 1);
    }

  const handleDecrement = () =>
    setCount(currentCount => currentCount - 1);
    
  return (
    <div>
      
      <h1>{count}</h1>

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default About;
