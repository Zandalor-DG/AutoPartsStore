import autoPartsCatalogReducer from "./autoPartsCatalogReducer";
import relatedProductsReducer from "./relatedProductsReducer";

const ADD_SEARCH = "ADD-SEARCH";
const UPDATE_SEARCH_TEXT = "UPDATE-SEARCH-TEXT";

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
      newCreateModelCarElement: "",
    },

    relatedProducts: {
      products: [
        { id: 1, product: "Ключи" },
        { id: 2, product: "Данкраты" },
        { id: 3, product: "Отвертки" },
        { id: 4, product: "Электро инструмент" },
        { id: 5, product: "Наборы" },
      ],
      newRelatedProductElement: "",
    },

    newSearchText: "",
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
    this._state.autoPartsCatalog = autoPartsCatalogReducer(
      this._state.autoPartsCatalog,
      action
    );

    this._state.relatedProducts = relatedProductsReducer(
      this._state.relatedProducts,
      action
    );

    this._callSubscriber(this.state);
  },
};

export const addSearchAction = () => ({ type: ADD_SEARCH });
export const updateSearchTextActionCreator = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  newText: text,
});

export default store;
window.store = store;
