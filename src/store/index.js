import { createStore } from 'vuex';

const store = createStore({
  state: {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    users: JSON.parse(localStorage.getItem('users')) || {},
    ratings: JSON.parse(localStorage.getItem('ratings')) || {}
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
    },
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },
    addUser(state, user) {
      state.users[user.email] = user;
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    updateUser(state, user) {
      state.users[user.email] = user;
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    updateRatings(state, { itemName, rating }) {
      if (!state.ratings[itemName]) {
        state.ratings[itemName] = [];
      }
      state.ratings[itemName].push(rating);
      localStorage.setItem('ratings', JSON.stringify(state.ratings));
    }
  },
  actions: {
    login({ commit, state }, { email, password }) {
      const user = state.users[email];
      if (user && user.password === password) {
        commit('setUser', { email });
      } else {
        throw new Error('Invalid email or password');
      }
    },
    logout({ commit }) {
      commit('logout');
    },
    register({ commit, state }, { email, password }) {
      if (state.users[email]) {
        throw new Error('User already exists');
      }
      const user = {
        email,
        password,
        cart: [],
        orders: []
      };
      commit('addUser', user);
    },
    addToCart({ commit, state }, { item, quantity, portionSize }) {
      const user = state.users[state.currentUser.email];
      const existingItem = user.cart.find(cartItem => cartItem.name === item.name && cartItem.portionSize === portionSize);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        user.cart.push({ ...item, quantity, portionSize });
      }
      commit('updateUser', user);
    },
    removeFromCart({ commit, state }, index) {
      const user = state.users[state.currentUser.email];
      user.cart.splice(index, 1);
      commit('updateUser', user);
    },
    placeOrder({ commit, state }) {
      const user = state.users[state.currentUser.email];
      if (!user.orders) {
        user.orders = [];
      }
      user.orders.push({ date: new Date(), items: user.cart });
      user.cart = [];
      commit('updateUser', user);
    },
    rateItem({ commit }, { itemName, rating }) {
      commit('updateRatings', { itemName, rating });
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.currentUser;
    },
    cartItems(state) {
      if (!state.currentUser) return [];
      return state.users[state.currentUser.email].cart || [];
    },
    orderHistory(state) {
      if (!state.currentUser) return [];
      return state.users[state.currentUser.email].orders || [];
    },
    currentUserEmail(state) {
      return state.currentUser ? state.currentUser.email : '';
    },
    getItemRatings: (state) => (itemName) => {
      return state.ratings[itemName] || [];
    },
    getAverageRating: (state) => (itemName) => {
      const ratings = state.ratings[itemName] || [];
      if (ratings.length === 0) {
        return 'Нема оцена';
      }
      const sum = ratings.reduce((a, b) => a + b, 0);
      return (sum / ratings.length).toFixed(1);
    }
  }
});

export default store;
