
const { Users } = require("./models/Users.js");

const resolvers = {
  Query: {
    hello: () => "GraphQL is Awesome",
    users: async () => await Users.find({}),
    user: async (parent, args) => await Users.findById(args.id),
  },
  Mutation: {
    create: async (parent, args) => {
      const { email, name, age } = args;
      const newUsers = new Users({
        email,
        name,
        age,
      });
      await newUsers.save();
      return newUsers;
    },
    update: async (parent, args) => {
      const { id } = args;
      const result = await Users.findByIdAndUpdate(id, args);
      return result;
    },
  },
};

module.exports = { resolvers };