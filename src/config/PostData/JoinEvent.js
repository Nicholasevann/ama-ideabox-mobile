import axios from 'axios';

const JoinEvent = id => {
  return axios({
    crossDomain: true,
    method: 'post',
    url: 'https://dev-events.digitalamoeba.id/joinevent/',
    data: {
      userId: id,
    },
    validateStatus: false,
  })
    .then(function ({status, data}) {
      if (status === 200) {
        return data.data;
      }
    })
    .catch(function (error) {
      console.log(error);
      // need handling error
    });
};

export default JoinEvent;
