import Vuex from 'vuex';
import axios from 'axios';

//  Создается некое хранилище
let store = new Vuex.Store({
  // Сосотояния. Хранятся все переменные, объекты, массивы, и прочее
  state: {
    products: [], // массив с товарами
    cart: [], // Массив корзины
  },

  // Меняем данные из state. Они синхронны. Идут по очереди
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    SET_CART(state, product) {
      if (state.cart.length) {
        let isProdectExist = false; // Если есть одинаковый продукт меняем на true
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProdectExist = true;
            item.quantity += 1;
          }
        });
        if (!isProdectExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
  },

  // Если не хотим ждать очереди. Они ассинхронны
  actions: {
    // Создаем метод получения данных из state
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios
        .get('http://localhost:3000/products')
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
  },

  // Короткий путь до получении информации о данных в state
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
