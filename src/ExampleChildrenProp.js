function Header(props) {
  return <div>Level: 3: {props.username}</div>;
}

function Main(props) {
  return <div>Main {props.children}</div>;
}

function Profile(props) {
  return <div>Profile {props.children}</div>;
}

export default function ExampleChildrenProp() {
  const username = 'Antje';
  return (
    <div>
      <Profile>
        <Main>
          <Header username={username} />
        </Main>
      </Profile>
    </div>
  );
}
