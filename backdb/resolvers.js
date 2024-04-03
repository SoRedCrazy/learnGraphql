
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
    
      // Vérifier si l'utilisateur avec le même email existe déjà
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
    
      // Si l'utilisateur n'existe pas, créer un nouvel utilisateur
      const newUser = new Users({
        email,
        name,
        age,
      });
      await newUser.save();
      return newUser;
    },
    update: async (parent, args) => {
      const { id } = args;
      const result = await Users.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (parent, args) => {
      const { id } = args;
      const result = await Users.findByIdAndDelete(id);
      return result;
    },
  },
};

module.exports = { resolvers };