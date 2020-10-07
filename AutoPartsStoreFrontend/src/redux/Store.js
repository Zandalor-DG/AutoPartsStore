let store = {
  _state: {
    autoPartsCatalog: {
      modelCars: [{
          id: 1,
          modelAuto: "Audi",
          cars: [{
              id: 1,
              car: "TT",
              spareParts: [{
                  id: 1,
                  sparePart: "Ходовая"
                },
                {
                  id: 2,
                  sparePart: "Двигатель"
                },
                {
                  id: 3,
                  sparePart: "Кузовщина"
                },
                {
                  id: 4,
                  sparePart: "Электро оборудование"
                },
                {
                  id: 5,
                  sparePart: "Отделка салона"
                },
              ],
            },
            {
              id: 2,
              car: "Q6",
              spareParts: [{
                  id: 1,
                  sparePart: "Ходовая"
                },
                {
                  id: 2,
                  sparePart: "Двигатель"
                },
                {
                  id: 3,
                  sparePart: "Кузовщина"
                },
                {
                  id: 4,
                  sparePart: "Электро оборудование"
                },
                {
                  id: 5,
                  sparePart: "Отделка салона"
                },
              ],
            },
            {
              id: 3,
              car: "Q5",
              spareParts: [{
                  id: 1,
                  sparePart: "Ходовая"
                },
                {
                  id: 2,
                  sparePart: "Двигатель"
                },
                {
                  id: 3,
                  sparePart: "Кузовщина"
                },
                {
                  id: 4,
                  sparePart: "Электро оборудование"
                },
                {
                  id: 5,
                  sparePart: "Отделка салона"
                },
              ],
            },
          ],
        },
        {
          id: 2,
          modelAuto: "Mazda"
        },
        {
          id: 3,
          modelAuto: "Suzuki"
        },
        {
          id: 4,
          modelAuto: "Mercedes"
        },
        {
          id: 5,
          modelAuto: "BMW"
        },
      ],
    },
    relatedProducts: {
      products: [{
          id: 1,
          product: "Ключи"
        },
        {
          id: 2,
          product: "Данкраты"
        },
        {
          id: 3,
          product: "Отвертки"
        },
        {
          id: 4,
          product: "Электро инструмент"
        },
        {
          id: 5,
          product: "Наборы"
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },
};

export default store;