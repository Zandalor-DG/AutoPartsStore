const SET_MODEL_CARS = "SET_MODEL_CARS";

let initialState = {
  modelCars: [
    // {
    //   id: 1,
    //   manufacturer: "Audi",
    //   modelCars: [],
    // },
    // { id: 2, manufacturer: "Suzuki", modelCars: [] },
    // { id: 3, manufacturer: "Toyota", modelCars: [] },
    // { id: 4, manufacturer: "Mazda", modelCars: [] },
    // { id: 5, manufacturer: "Volkswagen", modelCars: [] },
  ],
};

const autoPartsCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL_CARS: {
      return {
        ...state,
        manufacturer: [...state.manufacturerCar],
        modelCars: action.modelCars,
      };
    }

    default:
      return state;
  }
};

export const setModelCars = (modelCars) => ({
  type: SET_MODEL_CARS,
  modelCars,
});

export default autoPartsCatalogReducer;
