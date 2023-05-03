import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    console.log('before', isOn); // This shows the outdated value
    setIsOn(!isOn); // This schedule a state update after the function finished
    console.log('after', isOn); // This also shows the outdated value -- Not what expected
  }

  return (
    <div>
      light bulb is {isOn ? 'on 🌝' : 'off 🌑'}
      <button onClick={() => toggleLight()}>toggle</button>
    </div>
  );
}
