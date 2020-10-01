const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerAPI.getSpeakers();
    return speakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0
    );
  },
};
