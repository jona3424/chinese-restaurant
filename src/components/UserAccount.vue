<template>
  <div class="account container mt-4">
    <h2>Мој налог</h2>

    <div v-if="!isAuthenticated">
      <h3>Регистрација</h3>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="registerEmail" class="form-label">Email:</label>
          <input type="email" id="registerEmail" v-model="registerEmail" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="registerPassword" class="form-label">Лозинка:</label>
          <input type="password" id="registerPassword" v-model="registerPassword" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Региструј се</button>
      </form>

      <h3 class="mt-4">Пријава</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="loginEmail" class="form-label">Email:</label>
          <input type="email" id="loginEmail" v-model="loginEmail" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Лозинка:</label>
          <input type="password" id="loginPassword" v-model="loginPassword" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Пријави се</button>
      </form>
    </div>

    <div v-else>
      <h3>Добродошли, {{ currentUserEmail }}</h3>
      <button @click="logout" class="btn btn-danger mb-4">Одјави се</button>

      <h3>Корпа</h3>
      <div v-if="cartItems.length === 0">Ваша корпа је празна.</div>
      <ul class="list-group mb-4" v-else>
        <li class="list-group-item" v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.quantity }} - {{ item.portionSize }} порција
          <button @click="removeFromCart(index)" class="btn btn-danger btn-sm float-end">Уклони</button>
        </li>
      </ul>
      <button @click="placeOrder" class="btn btn-success mb-4" :disabled="cartItems.length === 0">Финализуј наруџбину</button>

      <h3>Историја наруџбина</h3>
      <div v-if="orderHistory.length === 0">Немате претходних наруџбина.</div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(order, index) in orderHistory" :key="index">
          <h5>Наруџбина #{{ index + 1 }}</h5>
          <ul>
            <li v-for="(item, idx) in order.items" :key="idx">{{ item.name }} - {{ item.quantity }} - {{ item.portionSize }} порција</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserAccount',
  data() {
    return {
      registerEmail: '',
      registerPassword: '',
      loginEmail: '',
      loginPassword: ''
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'cartItems', 'orderHistory', 'currentUserEmail'])
  },
  methods: {
    ...mapActions(['login', 'logout', 'placeOrder', 'register', 'removeFromCart']),
    async register() {
      try {
        await this.$store.dispatch('register', { email: this.registerEmail, password: this.registerPassword });
        alert('Регистрација успешна! Сада се можете пријавити.');
        this.registerEmail = '';
        this.registerPassword = '';
      } catch (error) {
        alert(error.message);
      }
    },
    async login() {
      try {
        await this.$store.dispatch('login', { email: this.loginEmail, password: this.loginPassword });
        this.loginEmail = '';
        this.loginPassword = '';
      } catch (error) {
        alert(error.message);
      }
    },
    logout() {
      this.$store.dispatch('logout');
    },
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
    placeOrder() {
      this.$store.dispatch('placeOrder');
    }
  }
};
</script>

<style scoped>
.account {
  padding: 20px;
}
</style>
