import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://localhost:44370/api/",
  headers: {
    "Content-Type": "application/json",
    //   "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
  },
});

export const autoPartsCatalogAPI = {
  getAutoPartsStoreCatalogManufacturer() {
    return instance.get(`ManufacturerCars`).then((response) => {
      return response.data;
    });
  },
  postAutoPartsStoreCatalogManufacturer(value) {
<<<<<<< HEAD
    return instance.post(`ManufacturerCars`, value).then((response) => {
      return response.data;
    });
  },
};

export const modelCarsAPI = {
=======
    return instance
      .post(`ManufacturerCars/`, JSON.stringify(value))
      .then((response) => {
        return response.data;
      });
  },
>>>>>>> 4d6369884b107c69063757b0f2d3befc1e4a3e83
  getAutoPartsStoreModelCar(id) {
    return instance.get(`ManufacturerCars/${id}`).then((response) => {
      return response.data.map((a) => a.modelCarsVM);
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`account`);
  },
};
