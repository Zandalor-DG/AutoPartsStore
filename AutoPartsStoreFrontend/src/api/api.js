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
    return instance.post(`ManufacturerCars`, value).then((response) => {
      return response.data;
    });
  },
};

export const modelCarsAPI = {
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
