// function Tweet(props) {
// props.user
// props.message
// props.likes
// }

// props destructuring
function Tweet({ user, message, likes }) {
  return (
    <div style={{ border: '2px solid' }}>
      <h2>
        user:
        {user}
      </h2>
      <p>{message}</p>
      <span>likes:{likes}</span>
    </div>
  );
}

export default function ExamplePropDestructuring() {
  return (
    <>
      Not all the types are rendered by react:
      {[12, 'text', [5, 'text2'], true]}
      <br />
      stringified version:
      {JSON.stringify([12, 'text', [5, 'text2'], true])}
      <hr />
      <Tweet user="Jose" message="i think coding is cool" likes={10} />
      <Tweet user="Karl" message="please post it on slack" likes={2} />
    </>
  );
}
