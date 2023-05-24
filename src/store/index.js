import {createStore} from 'vuex';

export default createStore({
  state: {items: [], totalAmount: 0, isInfoPopupVisible: false},
  getters: {
    cartCtx: (state) => state.items,
    isInfoPopupVisible: (state) => state.isInfoPopupVisible,
  },
  actions: {
    addItem({commit}, item) {
      commit('add_item', item);
    },
    removeItem({commit}, item) {
      commit('remove_item', item);
    },
    closePopup({commit}, item) {
      commit('close_popup', item);
    },
    openPopup({commit}) {
      commit('open_popup');
    },
  },
  mutations: {
    close_popup(state) {
      state.isInfoPopupVisible = false;
    },
    open_popup(state) {
      state.isInfoPopupVisible = true;
    },
    add_item(state, action) {
      const updatedTotalAmount =
        state.totalAmount + action.price * action.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action);
      }
      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },

    remove_item(state, id) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== id);
      } else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
  },

  modules: {},
});

