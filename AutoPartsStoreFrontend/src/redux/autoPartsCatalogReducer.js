const ADD_MODEL_CAR = "ADD-MODEL-CAR";
const UPDATE_MODEL_CAR_NAME = "UPDATE-MODEL-CAR-NAME";

let initialState = {
  carsModel: [
    {
      id: 1,
      modelAuto: "Audi",
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
    { id: 2, modelAuto: "Mazda" },
    { id: 3, modelAuto: "Suzuki" },
    { id: 4, modelAuto: "Mercedes" },
    { id: 5, modelAuto: "BMW" },
  ],

  newCreateModelCarElement: "",
};

const autoPartsCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODEL_CAR:
      let newModelCarElement = {
        id: 6,
        modelAuto: state.newCreateModelCarElement,
      };
      state.carsModel.push(newModelCarElement);
      state.newCreateModelCarElement = "";
      return state;
    case UPDATE_MODEL_CAR_NAME:
      state.newCreateModelCarElement = action.newText;
      return state;
    default:
      return state;
  }
};

export const addModelCarElementCreator = () => ({ type: ADD_MODEL_CAR });
export const updateModelCarElementCreator = (text) => ({
  type: UPDATE_MODEL_CAR_NAME,
  newText: text,
});

export default autoPartsCatalogReducer;
