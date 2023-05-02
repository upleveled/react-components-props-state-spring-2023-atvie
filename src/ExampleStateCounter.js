import { useState } from 'react';

export default function ExampleStateCounter() {
  // 1. Create a state variable (count) and
  // setter (setCount) and set the starting
  // value to 0
  const [count, setCount] = useState(0);

  // // Warning: Running the setter function outside of
  // // an event handler will cause an endless loop
  // setCount(count + 1)

  return (
    <>
      {/* 2. Show the state variable value on the page */}
      {count}
      <br />
      {/* 3. Set a new value for the state variable using the setter function */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 100)}>+100</button>
      <button onClick={() => setCount(100)}>100</button>
      <button
        onClick={() => {
          // DO NOT DO THIS
          // it will not work and be very confusing
          count = 200;
        }}
      >
        200
      </button>
    </>
  );
}
