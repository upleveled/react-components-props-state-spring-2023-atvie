function Header(props) {
  return <div>Level: 3: {props.username}</div>;
}

function Main(props) {
  return <Header username={props.username} />;
}

function Profile(props) {
  return <Main username={props.username} />;
}

export default function ExamplePropDrilling() {
  const username = 'Antje';
  return (
    <div>
      <Profile username={username} />
    </div>
  );
}
