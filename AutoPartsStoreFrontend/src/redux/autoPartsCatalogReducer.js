const ADD_MODEL_CAR = "ADD_MODEL_CAR";
const UPDATE_MODEL_CAR_NAME = "UPDATE_MODEL_CAR_NAME";
const SET_AUTO_PARTS_CATALOG = "SET_AUTO_PARTS_CATALOG";

let initialState = {
  manufacturerCar: [
    {
      id: 1,
      manufacturer: "Audi",
      cars: [
        {
          id: 1,
          car: "TT",
          SpareParts: [
            { id: 1, sparePart: "Ходовая" },
            { id: 2, sparePart: "Двигатель" },
            { id: 3, sparePart: "Кузовщина" },
            { id: 4, sparePart: "Электро оборудование" },
            { id: 5, sparePart: "Отделка салона" },
          ],
        },
        {
          id: 2,
          car: "Q6",
          SpareParts: [
            { id: 1, sparePart: "Ходовая" },
            { id: 2, sparePart: "Двигатель" },
            { id: 3, sparePart: "Кузовщина" },
            { id: 4, sparePart: "Электро оборудование" },
            { id: 5, sparePart: "Отделка салона" },
          ],
        },
        {
          id: 3,
          car: "Q5",
          SpareParts: [
            { id: 1, sparePart: "Ходовая" },
            { id: 2, sparePart: "Двигатель" },
            { id: 3, sparePart: "Кузовщина" },
            { id: 4, sparePart: "Электро оборудование" },
            { id: 5, sparePart: "Отделка салона" },
          ],
        },
      ],
    },
    { id: 2, manufacturer: "Suzuki" },
    { id: 3, manufacturer: "Toyota" },
    { id: 4, manufacturer: "Mazda" },
    { id: 5, manufacturer: "Volkswagen" },
  ],

  newCreateModelCarElement: "",
};

const autoPartsCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODEL_CAR:
      return {
        ...state,
        newCreateModelCarElement: "",
        ManufacturerCar: [
          ...state.carsModel,
          { id: 6, ManufacturerCar: state.newCreateModelCarElement },
        ],
      };

    case UPDATE_MODEL_CAR_NAME:
      return { ...state, newCreateModelCarElement: action.newText };

    case SET_AUTO_PARTS_CATALOG: {
      return { ...state, manufacturerCar: action.manufacturerCar };
    }

    default:
      return state;
  }
};

export const addModelCarElement = () => ({ type: ADD_MODEL_CAR });
export const setAutoPartsCatalog = (manufacturerCar) => ({
  type: SET_AUTO_PARTS_CATALOG,
  manufacturerCar,
});
export const updateModelCarElement = (text) => ({
  type: UPDATE_MODEL_CAR_NAME,
  newText: text,
});

export default autoPartsCatalogReducer;
