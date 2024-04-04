const { shield } = require("graphql-shield");

const  { isAuthorized }= require('./rules/index.js');

module.exports = {
    permissions: shield({
      Query: {
        getuser: isAuthorized,
      },
      Mutation: {
        deleteuser: isAuthorized,
        updateuser: isAuthorized,
      },
    })
  };