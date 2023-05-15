/* eslint-disable react/jsx-key */
import ExampleArrayOfObjectsInReact from './ExampleArrayOfObjectsInReact';
import ExampleChildrenProp from './ExampleChildrenProp';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleControlledComponentsCheckboxes from './ExampleControlledComponentsCheckboxes';
import ExampleDerivingState from './ExampleDerivingState';
import ExampleFetchingInitialState from './ExampleFetchingInitialState';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExamplePropDrilling from './ExamplePropDrilling';
import ExampleProps from './ExampleProps';
import ExamplePropTypes from './ExamplePropTypes';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateManagement from './ExampleStateManagement';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStylingOptions from './ExampleStylingOptions';

export default function App() {
  // 1. Data for the prop gets created
  const user1 = { id: 123, name: 'Karl' };
  return (
    <div>
      <h1>Example: Components</h1>
      <ExampleComponents />
      <h1>Example: Props</h1>
      <ExampleProps
        // 2. Pass a prop
        abc={123}
        user={user1}
      />
      <h1>Example: State (Counter)</h1>
      <ExampleStateCounter />
      <h1>Example: State (Email)</h1>
      <ExampleStateEmail />
      <h1>Example: State Not Synchronous</h1>
      <ExampleStateNotSynchronous />
      <h1>Example: Props Destructuring</h1>
      <ExamplePropDestructuring />
      <h1>Example: Mapping Over Arrays</h1>
      <ExampleMappingOverArrays />
      <h1>Example: Forms With Controlled Components</h1>
      <ExampleFormsWithControlledComponents />
      <h1>Example: Lifting State Up </h1>
      <ExampleLiftingStateUp />
      <h1>Example: Styling Options</h1>
      <ExampleStylingOptions />
      <h1>Example: Class to Function</h1>
      <ExampleClassToFunctionClass
        user={{
          details: 'details',
          name: 'jose',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <h1>Example: Children Props</h1>
      <ExampleChildrenProps />
      <h1>Example: PropTypes</h1>
      <ExamplePropTypes />
      <h1>Example: Controlled Components Checkboxes</h1>
      <ExampleControlledComponentsCheckboxes />
      <h1>Example: Array Of Objects Nn React</h1>
      <ExampleArrayOfObjectsInReact />
      <h1>Example: Fetching Initial State</h1>
      <ExampleFetchingInitialState />
      <h1>Example: Deriving State</h1>
      <ExampleDerivingState />
      <h1>Example: Prop Drilling</h1>
      <ExamplePropDrilling />
      <h1>Example: Children Prop</h1>
      <ExampleChildrenProp />
      <h1>Example: State Management</h1>
      <ExampleStateManagement />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
