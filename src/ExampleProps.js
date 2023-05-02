// 3. Accept `props` as a parameter - this will
// always be an object.
//
// In our case, it will contain `abc` and `user`:
// {
//   abc: 123,
//   user: { id: 123, name: 'Karl' },
// }
export default function ExampleProps(props) {
  console.log('props', props);
  console.log('name', props.user.name);
  return (
    <>
      <div
        style={{
          border: '2px solid #ccc',
          borderRadius: 5,
          padding: 10,
          margin: 20,
        }}
      >
        Profile:
        <br />
        {/* 4. Use the prop (show it on the page) */}
        id: {props.user.id}
        <br />
        name: {props.user.name}
        <br />
      </div>
      props.abc: {props.abc}
      {/* Trick to show an object like props on the screen */}
      Props:
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}
