import axios from 'axios';

const UpdateCategory = () => {
  return axios({
    crossDomain: true,
    method: 'put',
    url: 'https://dev-ideas.digitalamoeba.id/categorymanagement/update',
    data: {
      id: '1',
      data: {
        parentId: '0',
        name: 'kategori inovasi 4',
        createdBy: '1',
        isRequired: '1',
        activeFlag: '1',
        type: 'idea',
      },
    },
    validateStatus: false,
  })
    .then((response, status) => {
      // console.log(response.data.status);
      return response.data.status;
    })
    .catch(function (error) {
      console.log(error);
      // need handling error
    });
};

export default UpdateCategory;
