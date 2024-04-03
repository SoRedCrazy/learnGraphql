import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query {
    users{
      id
      name
      email
      age
    }
}
`;

const MY_MUTATION = gql`
mutation Create($email: String, $name: String, $age: Int) {
  create(email: $email, name: $name, age: $age) {
    age
    email
    id
    name
  }
}
`;

function App() {
  var [mutateFunction ,{ data, loading, error } ]= useMutation(MY_MUTATION);
  var { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            <strong>Nom:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Id:</strong> {user.id}, <strong>Age:</strong> {user.age}
          </li>
        ))}

      </ul>
      <button onClick={() => { mutateFunction({ variables: { email: "sored" , name: "Giorno", age: 15}})}} > ADD perso </button>
    </div>
  );
}



//const [mutateFunction, { data, loading, error }] = useMutation(MY_MUTATION);

export default App;
