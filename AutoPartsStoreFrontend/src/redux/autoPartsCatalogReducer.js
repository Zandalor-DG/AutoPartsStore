import { autoPartsCatalogAPI } from '../api/api';

const ADD_MANUFACTURER_CAR = 'ADD_MANUFACTURER_CAR';
const SET_AUTO_PARTS_CATALOG = 'SET_AUTO_PARTS_CATALOG';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_AUTO_PARTS_CATALOG = 'DELETE_AUTO_PARTS_CATALOG';

let initialState = {
  manufacturerCar: [
    {
      id: 1,
      manufacturer: 'Audi',
      modelCars: [],
    },
    {
      id: 2,
      manufacturer: 'Suzuki',
      modelCars: [],
    },
    {
      id: 3,
      manufacturer: 'Toyota',
      modelCars: [],
    },
    {
      id: 4,
      manufacturer: 'Mazda',
      modelCars: [],
    },
    {
      id: 5,
      manufacturer: 'Volkswagen',
      modelCars: [],
    },
  ],
  nameElement: '',
  isFetching: true,
};

const autoPartsCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANUFACTURER_CAR:
      return {
        ...state,
        manufacturerCar: [
          ...state.manufacturerCar,
          {
            manufacturer: action.newOrUpdateManufacturerCar,
            modelCars: [],
          },
        ],
      };

    case DELETE_AUTO_PARTS_CATALOG: {
      return {
        ...state,
        manufacturerCar: [...state.manufacturerCar.filter(a => a.id !== action.manufacturerId)],
      };
    }

    case SET_AUTO_PARTS_CATALOG: {
      return { ...state, manufacturerCar: action.manufacturerCar };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const addOrUpdateManufacturerCar = (newOrUpdateManufacturerCar) => ({
  type: ADD_MANUFACTURER_CAR,
  newOrUpdateManufacturerCar,
});

export const deleteAutoPartsCatalogElement = manufacturerId => ({
  type: DELETE_AUTO_PARTS_CATALOG,
  manufacturerId,
});

export const setAutoPartsCatalog = (manufacturerCar) => ({
  type: SET_AUTO_PARTS_CATALOG,
  manufacturerCar,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAutoPartsCatalogManufacturer = () => (dispatch) => {
  autoPartsCatalogAPI.getAutoPartsStoreCatalogManufacturer().then((data) => {
    dispatch(setAutoPartsCatalog(data));
    dispatch(toggleIsFetching(false));
  });
};

export const postAutoPartsCatalogManufacturer = (value) => (dispatch) => {
  autoPartsCatalogAPI.postAutoPartsStoreCatalogManufacturer(value).then(() => {
    dispatch(addOrUpdateManufacturerCar(value));
    dispatch(toggleIsFetching(false));
  });
};

export const putAutoPartsCatalogManufacturer = (value, manufacturerId) => (dispatch) => {
  autoPartsCatalogAPI.putAutoPartsStoreCatalogManufacturer(value, manufacturerId).then(() => {
    dispatch(toggleIsFetching(false));
  });
};

export const deleteAutoPartsCatalogManufacturer = (manufacturerId) => (dispatch) => {
  autoPartsCatalogAPI.deleteAutoPartsStoreCatalogManufacturer(manufacturerId).then(() => {
    dispatch(deleteAutoPartsCatalogElement(manufacturerId));
    dispatch(toggleIsFetching(false));
  });
};

export default autoPartsCatalogReducer;
