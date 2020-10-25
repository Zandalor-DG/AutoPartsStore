import { autoPartsCatalogAPI } from "../api/api";

const ADD_MODEL_CAR = "ADD_MODEL_CAR";
const UPDATE_MODEL_CAR_NAME = "UPDATE_MODEL_CAR_NAME";
const SET_AUTO_PARTS_CATALOG = "SET_AUTO_PARTS_CATALOG";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  manufacturerCar: [
    {
      id: 1,
      manufacturer: "Audi",
      modelCars: [],
    },
    {
      id: 2,
      manufacturer: "Suzuki",
      modelCars: [],
    },
    {
      id: 3,
      manufacturer: "Toyota",
      modelCars: [],
    },
    {
      id: 4,
      manufacturer: "Mazda",
      modelCars: [],
    },
    {
      id: 5,
      manufacturer: "Volkswagen",
      modelCars: [],
    },
  ],
  nameElement: "",
  isFetching: true,
};

const autoPartsCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODEL_CAR:
      return {
        ...state,
        nameElement: "",
        manufacturerCar: [
          ...state.manufacturerCar,
          {
            manufacturer: state.nameElement,
            modelCars: [],
          },
        ],
      };

    case UPDATE_MODEL_CAR_NAME: {
      return { ...state, nameElement: action.newNameElement };
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

export const addModelCarElement = () => ({
  type: ADD_MODEL_CAR,
});
export const updateModelCarName = (newNameElement) => ({
  type: UPDATE_MODEL_CAR_NAME,
  newNameElement,
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
  autoPartsCatalogAPI
    .postAutoPartsStoreCatalogManufacturer(value)
    .then((data) => {
      dispatch(addModelCarElement());
      dispatch(toggleIsFetching(false));
    });
};

export default autoPartsCatalogReducer;
