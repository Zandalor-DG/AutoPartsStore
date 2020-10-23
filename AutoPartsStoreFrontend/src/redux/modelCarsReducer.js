const SET_MODEL_CARS = "SET_MODEL_CARS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  modelCars: [
    {
      id: 1,
      manufacturer: "Audi",
      modelCars: [],
    },
    { id: 2, manufacturer: "Suzuki", modelCars: [] },
    { id: 3, manufacturer: "Toyota", modelCars: [] },
    { id: 4, manufacturer: "Mazda", modelCars: [] },
    { id: 5, manufacturer: "Volkswagen", modelCars: [] },
  ],
  isFetching: true,
};

const modelCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL_CARS: {
      return {
        ...state,
        modelCars: action.modelCars,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const setModelCars = (modelCars) => ({
  type: SET_MODEL_CARS,
  modelCars,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default modelCarsReducer;
