const ADD_PRODUCT = "ADD-PRODUCT";
const UPDATE_PRODUCT = "UPDATE-PRODUCT";

let initialState = {
  products: [
    { id: 1, product: "Ключи" },
    { id: 2, product: "Данкраты" },
    { id: 3, product: "Отвертки" },
    { id: 4, product: "Электро инструмент" },
    { id: 5, product: "Наборы" },
  ],
  newRelatedProductElement: "",
};

const relatedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProductElement = {
        id: 6,
        product: state.newRelatedProductElement,
      };
      state.products.push(newProductElement);
      state.newRelatedProductElement = "";
      return state;
    case UPDATE_PRODUCT:
      state.newRelatedProductElement = action.newText;
      return state;
    default:
      return state;
  }
};

export const addProductElementCreator = () => ({ type: ADD_PRODUCT });
export const updateProductElementCreator = (text) => ({
  type: UPDATE_PRODUCT,
  newText: text,
});

export default relatedProductsReducer;
