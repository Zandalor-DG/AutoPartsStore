const ADD_SEARCH = "ADD-SEARCH";
const UPDATE_SEARCH_TEXT = "UPDATE-SEARCH-TEXT";
const ADD_MODEL_CAR = "ADD-MODEL-CAR";
const UPDATE_MODEL_CAR_NAME = "UPDATE-MODEL-CAR-NAME";

let store = {
  _state: {
    autoPartsCatalog: {
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
    },

    newCreateModelCarElement: "Название модели машины",

    newSearchText: "",

    relatedProducts: {
      products: [
        { id: 1, product: "Ключи" },
        { id: 2, product: "Данкраты" },
        { id: 3, product: "Отвертки" },
        { id: 4, product: "Электро инструмент" },
        { id: 5, product: "Наборы" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },

  dispatch(action) {
    // { type: 'ADD-POST' }
    if (action.type === ADD_SEARCH) {
      debugger;
      let searchText = this._state.newSearchText;
      let search = this._state.autoPartsCatalog.carsModel.map((a) =>
        a.cars.map((b) =>
          b.SpareParts.filter((a) => a.sparePart === searchText)
        )
      );
      this._state.newSearchText = "";
      this._callSubscriber(search);
    } else if (action.type === UPDATE_SEARCH_TEXT) {
      this._state.newSearchText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MODEL_CAR) {
      let newModelCarElement = {
        id: 6,
        modelAuto: this._state.newCreateModelCarElement,
      };
      this._state.autoPartsCatalog.carsModel.push(newModelCarElement);
      this._state.newCreateModelCarElement = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MODEL_CAR_NAME) {
      this._state.newCreateModelCarElement = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addModelCarElement = () => ({ type: ADD_MODEL_CAR });
export const updateModelCarElementCreator = (text) => ({
  type: UPDATE_MODEL_CAR_NAME,
  newText: text,
});

export const addSearchAction = () => ({ type: ADD_SEARCH });
export const updateSearchTextActionCreator = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  newText: text,
});

export default store;
window.store = store;
