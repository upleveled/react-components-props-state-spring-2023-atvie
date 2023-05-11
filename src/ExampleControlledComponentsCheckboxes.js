import { useState } from 'react';

export default function ExampleControlledComponentsCheckboxes() {
  // 1. Create state for the input data
  const [isCookiePolicyAccepted, setIsCookiePolicyAccepted] = useState(false);

  // ⚠️⚠️⚠️⚠️ don't use  document.querySelector or document.getElementById

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Cooke policy accepted?
        {/* // 2.  use the current value of the state as the checked property of the input*/}
        <input
          checked={isCookiePolicyAccepted}
          type="checkbox"
          // 3. update the state value with the event.currentTarget.checked
          onChange={(event) => {
            setIsCookiePolicyAccepted(event.currentTarget.checked);
          }}
        />
        <button>Accept</button>
      </label>
    </form>
  );
}
