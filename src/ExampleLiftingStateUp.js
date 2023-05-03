import { useState } from 'react';

function Bulb(props) {
  return <div>light bulb is {props.isOn ? 'on 🌝' : 'off 🌑'}</div>;
}

function Switch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>toggle</button>;
}

export default function ExampleLiftingStateUp() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <Bulb isOn={isOn} />
      <Switch isOn={isOn} setIsOn={setIsOn} />
    </>
  );
}
