// Map is a method that allows to transform arrays into new arrays
// Map doesn't change the length of the array
// Map also behave as a loop over the array

import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  const [label, setLabel] = useState('');
  // 1. Create the state variable
  const [usernameInput, setUsernameInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* Boolean operator */}
      {label !== '' && <p>Username: {label}</p>}
      {/* 2. Connect the state with the input value */}
      <input
        value={usernameInput}
        onChange={(event) => {
          // 3. update state on change event
          setUsernameInput(event.currentTarget.value);
        }}
      />
      {/* Ternary operator */}
      {usernameInput === '' ? (
        ' please type ⌨️'
      ) : (
        <button
          onClick={() => {
            setLabel(usernameInput);
          }}
        >
          update label
        </button>
      )}
    </form>
  );
}
