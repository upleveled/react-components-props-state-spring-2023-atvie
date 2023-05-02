import { useState } from 'react';

export default function ExampleStateEmail() {
  // 1. Create state variable and setter function
  // with default ''
  const [email, setEmail] = useState('');

  return (
    <>
      Sign up for our newsletter
      <br />
      <label>
        Email:
        <input
          type="email"
          placeholder="karl@example.com"
          // 2. Use the state variable
          value={email}
          // 3. Set a new value for the state variable
          onChange={(event) => {
            // const userInput = event.currentTarget.value
            // isValidEmail(userInput)

            setEmail(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <button
        onClick={() =>
          // 3. Set a new value for the state variable
          setEmail('karl@example.com')
        }
      >
        I'm karl
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          // console.log('event', event);
          // console.log('input element', event.currentTarget);
          // console.log('user input', event.currentTarget.value);
          console.log('current user input', email);
        }}
      >
        submit
      </button>
    </>
  );
}
