import { useMachine } from '@xstate/react';
import { useReducer, useState } from 'react';
import { createMachine } from 'xstate';

function StateManagementUseState() {
  const [lightbulb, setLightbulb] = useState({ status: 'on' });
  return (
    <div>
      <h2>State Management useState</h2>
      <div>lightbulb: {lightbulb.status}</div>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'on' }
              : { status: 'broken' },
          )
        }
      >
        ON
      </button>
      <button
        onClick={() =>
          setLightbulb(
            lightbulb.status !== 'broken'
              ? { status: 'off' }
              : { status: 'broken' },
          )
        }
      >
        OFF
      </button>
      <button onClick={() => setLightbulb({ status: 'broken' })}>BREAK</button>
    </div>
  );
}

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn': {
      if (lightbulb.status !== 'broken') {
        return { status: 'on' };
      }
      return lightbulb;
    }
    case 'turnOff': {
      if (lightbulb.status !== 'broken') {
        return { status: 'off' };
      }
      return lightbulb;
    }
    case 'broken':
      return { status: 'broken' };
    default:
      throw new Error('Unknown action');
  }
}

function StateManagementUseReducer() {
  const [lightbulb, dispatchLightbulb] = useReducer(lightbulbReducer, {
    status: 'on',
  });

  return (
    <div>
      <h2>State Management useReducer</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <button onClick={() => dispatchLightbulb({ type: 'turnOn' })}>ON</button>
      <button onClick={() => dispatchLightbulb({ type: 'turnOff' })}>
        OFF
      </button>
      <button onClick={() => dispatchLightbulb({ type: 'broken' })}>
        BREAK
      </button>
    </div>
  );
}

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transitions when it is broken
      },
    },
  },
});

function StateManagementXState() {
  const [lightbulb, send] = useMachine(lightbulbMachine);
  return (
    <div>
      <h2>State Management XState</h2>
      <div>Lightbulb: {lightbulb.value}</div>
      <button onClick={() => send('TURN_ON')}>ON</button>
      <button onClick={() => send('TURN_OFF')}>OFF</button>
      <button onClick={() => send('BREAK')}>BREAK</button>
    </div>
  );
}

export default function ExampleStateManagement() {
  return (
    <div>
      <StateManagementUseState />
      <StateManagementUseReducer />
      <StateManagementXState />
    </div>
  );
}
