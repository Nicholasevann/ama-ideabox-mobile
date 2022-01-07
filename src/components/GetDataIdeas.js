import axios from 'axios';


const getDataIdea = () => {
    // const URL = 'http://10.0.2.2:8080/getIdea'; //url ideaService
    const data = require('../modules/explore/data/data.json').data;


    return data;

    // axios(
    //   {
    //     method: 'GET',
    //     responseType: 'json',
    //     url: URL,
    //     header: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )
    //   .then(res => {
    //     if (res.status === 200 && res.data) {
    //       return (res.data.data);
    //       // console.log(res.data.data[1].id);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });


};
export default getDataIdea;