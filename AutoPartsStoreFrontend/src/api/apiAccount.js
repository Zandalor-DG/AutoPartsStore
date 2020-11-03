import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:44370/api/Account/',
  headers: {
    'Content-Type': 'application/json',
    //   "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
  },
});

export const accountAPI = {
  getAutoPartsStoreCatalogManufacturer() {
    return instance.get(`ManufacturerCars`).then(response => {
      return response.data;
    });
  },

  postLoginUser({ email, password }) {
    return instance
      .post(`Login`, { email, password })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  postRegisterUser(email, password, confirmPassword) {
    debugger;
    return instance
      .post(`Register`, { email, password, confirmPassword })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  deleteLogOutUser(manufacturerId) {
    return instance
      .delete(`Account/${manufacturerId}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};
