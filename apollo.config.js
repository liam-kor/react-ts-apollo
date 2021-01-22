module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    clientOnlyDirectives: ["connection", "type"],
    clientSchemaDirectives: ["client", "rest"],
    service: {
      name: "real-estate-admin-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
