import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

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
      <h1>Example: </h1>
      <h1>Example: </h1>
      <h1>Example: </h1>
      <h1>Example: </h1>
      <h1>Example: </h1>
      <h1>Example: </h1>
      <h1>Example: </h1>
    </div>
  );
}
