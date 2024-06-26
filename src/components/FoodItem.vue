<template>
  <div class="food-item-details container mt-4">
    <button class="btn btn-primary mb-4" @click="downloadMenu">Преузми јеловник</button>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Јеловник</router-link></li>
        <li class="breadcrumb-item"><router-link :to="{ name: 'FoodGroup', params: { groupName: groupName }}">{{ groupName }}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ item.name }}</li>
      </ol>
    </nav>
    <h2 class="text-center">{{ item.name }}</h2>
    <div class="card mb-3">
      <img :src="item.image" class="card-img-top" :alt="item.name">
      <div class="card-body">
        <h4 class="card-title">{{ item.name }}</h4>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text">Мала порција: {{ item.smallPortionPrice }} дин</p>
        <p class="card-text">Велика порција: {{ item.largePortionPrice }} дин</p>
        <div class="mt-3">
          <label for="quantity">Колицина:</label>
          <input type="number" id="quantity" v-model.number="quantity" class="form-control" min="1" />
        </div>
        <div class="mt-3">
          <label for="portionSize">Величина порције:</label>
          <select id="portionSize" v-model="portionSize" class="form-control">
            <option value="Мала">Мала</option>
            <option value="Велика">Велика</option>
          </select>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <button @click="addToCartItem(item)" class="btn btn-success">Додај у корпу</button>
          <span>Просечна оцена: {{ averageRating }}</span>
        </div>
        <div class="mt-2">
          <label for="rating">Оцени јело:</label>
          <select v-model="userRating" @change="handleRateItem" class="form-control">
            <option disabled value="">Одабери оцену</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import rolls from '../assets/rolls.jpg';
import soup from '../assets/soup.jpg';
import salata from '../assets/salata.jpg';
import patka1 from '../assets/patka1.webp';
import ribs from '../assets/ribs.jpg';
import batak from '../assets/batak.jpg';
import sladoled from '../assets/sladoled.jpg';
import pohocoko from '../assets/pohocoko.jpg';
import banana from '../assets/banana.jpg';

export default {
  name: 'FoodItem',
  data() {
    return {
      groupName: '',
      item: {},
      quantity: 1,
      portionSize: 'Мала',
      userRating: ''
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'getItemRatings']),
    averageRating() {
      const ratings = this.getItemRatings(this.item.name);
      if (ratings.length === 0) {
        return 'Нема оцена';
      }
      const sum = ratings.reduce((a, b) => a + b, 0);
      return (sum / ratings.length).toFixed(1);
    }
  },
  created() {
    this.groupName = this.$route.params.groupName;
    this.loadFoodItem();
  },
  methods: {
    ...mapActions(['addToCart', 'rateItem']),
    loadFoodItem() {
      const allFoodItems = {
        'Пролећне ролнице': { name: 'Пролећне ролнице', description: 'Укусне ролнице пуњене свежим поврћем.', smallPortionPrice: 200, largePortionPrice: 350, image: rolls },
        'Супа са киселом краставцем': { name: 'Супа са киселом краставцем', description: 'Освежавајућа супа са киселом краставцем.', smallPortionPrice: 150, largePortionPrice: 250, image: soup },
        'Мини кифлице': { name: 'Мини кифлице', description: 'Салата са кинеским купусом и туњевином.', smallPortionPrice: 100, largePortionPrice: 200, image: salata },
        'Печена патка': { name: 'Печена патка', description: 'Сочна печена патка са хрскавом кожицом.', smallPortionPrice: 600, largePortionPrice: 1000, image: patka1 },
        'Свињски ребарца': { name: 'Свињски ребарца', description: 'Ребарца припремљена на кинески начин.', smallPortionPrice: 550, largePortionPrice: 950, image: ribs },
        'Пилећи батак': { name: 'Пилећи батак', description: 'Пикантни пилећи батак.', smallPortionPrice: 400, largePortionPrice: 700, image: batak },
        'Поховани сладолед': { name: 'Поховани сладолед', description: 'Кремасти сладолед у хрскавом омоту.', smallPortionPrice: 250, largePortionPrice: 400, image: sladoled },
        'Похована чоколада': { name: 'Похована чоколада', description: 'Чоколада у хрскавом омоту.', smallPortionPrice: 300, largePortionPrice: 450, image: pohocoko },
        'Ролнице са бананом': { name: 'Ролнице са бананом', description: 'Слатке ролнице пуњене бананом.', smallPortionPrice: 200, largePortionPrice: 350, image: banana }
      };

      this.item = allFoodItems[this.$route.params.itemName] || {};
    },
    addToCartItem(item) {
      if (!this.isAuthenticated) {
        alert('Морате бити пријављени да бисте додали јело у корпу.');
        return;
      }
      this.addToCart({ item, quantity: this.quantity, portionSize: this.portionSize });
    },
    handleRateItem() {
      if (this.userRating) {
        this.rateItem({ itemName: this.item.name, rating: parseInt(this.userRating) });
        this.userRating = '';
      }
    },
    downloadMenu() {
      const link = document.createElement('a');
      link.href = require('../assets/menu.pdf'); // Path to your PDF file
      link.download = 'menu.pdf';
      link.click();
    }
  }
};
</script>

<style scoped>
.card-img-top {
  height: 400px;
  object-fit: cover;
}
</style>
