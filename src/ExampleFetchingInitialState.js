import { Fragment, useEffect, useState } from 'react';

export default function ExampleFetchingInitialState() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getUser() {
    const response = await fetch('https://randomuser.me/api');

    const data = await response.json();

    // // 1. copy state
    // const newUsers = [...users];
    // // 2. update state
    // newUsers.push(data.results[0]);
    // // 3. set new State
    // setUsers(newUsers);

    // using spread operator syntax
    setUsers([...users, data.results[0]]);
  }

  // useEffect()
  // 1. when we want to trigger an action on first render
  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://randomuser.me/api');

      const data = await response.json();

      setUsers([data.results[0]]);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []); // triggers only on the first render

  // 2. when we want to trigger an action on every render (Not recommended)
  // useEffect(() => {}); // triggers on every render
  // 3. when we want to trigger an action after a variable update

  useEffect(() => {
    if (users.length > 0) {
      setIsLoading(false);
    }
  }, [users]); // trigger every time users is updated

  if (isLoading) {
    return 'Loading ...';
  }

  return (
    <>
      {users.map((user) => {
        return (
          <Fragment key={`user-profile-${user.uuid}`}>
            <img alt="user pic" src={user.picture.medium} />
            {user.gender === 'female' ? '♀' : '♂'}
            <h6>
              {user.name.title} {user.name.first} {user.name.last}
            </h6>
            <div>
              <p>city: {user.location.city}</p>
              <p>country: {user.location.country}</p>
            </div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <br />
          </Fragment>
        );
      })}
      <button onClick={async () => await getUser()}>get User</button>
    </>
  );
}
