import axios from 'axios';

const GetDataTrackRecord = () => {
  return axios({
    crossDomain: true,
    method: 'post',
    url: 'https://dev-users.digitalamoeba.id/trackrecord',
    data: {
      userId: '1',
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
  //   axios({
  //     crossDomain: true,
  //     method: 'post',
  //     url: 'https://dev-users.digitalamoeba.id/trackrecord?userId=1',
  //     validateStatus: false,
  //   })
  //     .then(function ({status, data}) {
  //       if (status === 200) {
  //         console.log('berhasil');
  //         return data.data;
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('gagal');
  //       console.log(error);
  //       // need handling error
  //     });
};

export default GetDataTrackRecord;
