import axios from 'axios';
const GetDataIdea = () => {
  return axios
    .get('https://dev-ideas.digitalamoeba.id/showideas')
    .then(response => {
      // setUpdate(response.data.data);
      return response.data.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export default GetDataIdea;
