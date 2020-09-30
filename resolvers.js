module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      // dataSources conme from 'context'
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      // id comes from args
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};
