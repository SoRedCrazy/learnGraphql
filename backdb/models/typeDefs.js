const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    hello: String
    welcome(name: String): String
    users: [Users] #return array of students
    user(id: ID): Users #return student by id
  }

  # Student object
  type Users {
    id: ID
    email: String
    name: String
    age: Int
  }

  # Mutation
  type Mutation {
    create(email: String, name: String, age: Int): Users
    update(id: ID, firstName: String, lastName: String, age: Int): Users
  }
`;

module.exports = { typeDefs };