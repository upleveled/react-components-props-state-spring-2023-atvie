import { Fragment, useState } from 'react';

const people = [
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Freya',
      last: 'Walker',
    },
    location: {
      city: 'New Plymouth',
      state: 'Tasman',
      country: 'New Zealand',
      postcode: 48541,
      coordinates: {
        latitude: '52.7153',
        longitude: '44.1496',
      },
    },
    email: 'freya.walker@example.com',
    uuid: '5d28f38c-6990-49fd-b008-0d02fa210bdb',
    phone: '(610)-078-7031',
    picture: 'https://randomuser.me/api/portraits/med/women/95.jpg',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Beau',
      last: 'Zhang',
    },
    location: {
      city: 'Blenheim',
      state: 'Bay of Plenty',
      country: 'New Zealand',
      postcode: 52546,
      coordinates: {
        latitude: '52.6714',
        longitude: '-65.4066',
      },
    },
    email: 'beau.zhang@example.com',
    uuid: '2f3ab017-4367-4d76-88b3-542168ad3454',
    phone: '(456)-822-3273',
    picture: 'https://randomuser.me/api/portraits/med/men/8.jpg',
  },
];

export default function ExampleArrayOfObjectsInReact() {
  const [users, setUsers] = useState(people);
  console.log(users);

  return (
    <>
      {users.map((user) => {
        return (
          <Fragment key={`user-profile-${user.uuid}`}>
            <img alt="user pic" src={user.picture} />
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
      <button
        onClick={() => {
          // 0. create a variable for the new user
          const newUser = {
            gender: 'male',
            name: {
              title: 'Mr',
              first: 'Beau',
              last: 'Zhang',
            },
            location: {
              city: 'Blenheim',
              state: 'Bay of Plenty',
              country: 'New Zealand',
              postcode: 52546,
              coordinates: {
                latitude: '52.6714',
                longitude: '-65.4066',
              },
            },
            email: 'beau.zhang@example.com',
            uuid: `2f3ab017-4367-4d76-88b3-542168ad3454${Math.random() * 1000}`,
            phone: '(456)-822-3273',
            picture: 'https://randomuser.me/api/portraits/med/men/8.jpg',
          };

          // 1. Create a copy of the current state
          // 2. Update the copy created on step 1
          const newPeople = [...users, newUser];

          // 2. Update the copy created on step 1 (alternative with push)
          // newPeople.push(newUser);

          // 3.  Set state using the updated value of step 2
          setUsers(newPeople);
        }}
      >
        Add new User
      </button>
      <button
        onClick={() => {
          // 1. create a copy
          const newPeople = [...users];

          // 2. update the value
          newPeople[0].name.first = 'Lucia';
          // 3. set new state
          setUsers(newPeople);
        }}
      >
        Set first user name to Lucia
      </button>
      <button
        onClick={() => {
          // 1. create a copy
          const newPeople = [...users];

          // 2. update the value
          newPeople.length = newPeople.length - 1;

          // 3. set new state
          setUsers(newPeople);
        }}
      >
        Delete the last user
      </button>
    </>
  );
}
