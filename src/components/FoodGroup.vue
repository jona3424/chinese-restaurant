<template>
  <div class="food-group container mt-4">
    <button class="btn btn-primary mb-4" @click="downloadMenu">Преузми јеловник</button>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/menu">Јеловник</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ groupName }}</li>
      </ol>
    </nav>
    <h2 class="text-center">{{ groupName }}</h2>
    <div class="d-flex justify-content-end mb-3">
      <button @click="sortByName" class="btn btn-secondary mr-2">Сортирај по називу</button>
      <button @click="sortByPrice" class="btn btn-secondary">Сортирај по цени</button>
    </div>
    <div class="food-items mt-4">
      <div v-for="item in sortedFoodItems" :key="item.name" class="food-item card mb-3">
        <img :src="item.image" class="card-img-top" :alt="item.name">
        <div class="card-body">
          <h4 class="card-title">{{ item.name }}</h4>
          <p class="card-text">{{ item.description }}</p>
          <p class="card-text">Мала порција: {{ item.smallPortionPrice }} дин</p>
          <p class="card-text">Велика порција: {{ item.largePortionPrice }} дин</p>
          <router-link :to="{ name: 'FoodItem', params: { groupName: groupName, itemName: item.name }}" class="btn btn-primary">Погледај детаље</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  name: 'FoodGroup',
  data() {
    return {
      groupName: '',
      foodItems: [],
      sortKey: '' // Dodajemo sortKey za sortiranje
    };
  },
  computed: {
    sortedFoodItems() {
      let items = this.foodItems.slice();
      if (this.sortKey === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortKey === 'price') {
        items.sort((a, b) => a.smallPortionPrice - b.smallPortionPrice);
      }
      return items;
    }
  },
  created() {
    this.groupName = this.$route.params.groupName;
    this.loadFoodItems();
  },
  methods: {
    loadFoodItems() {
      const allFoodGroups = {
        'Предјела': [
          { name: 'Пролећне ролнице', description: 'Укусне ролнице пуњене свежим поврћем.', smallPortionPrice: 200, largePortionPrice: 350, image: rolls },
          { name: 'Супа са киселом краставцем', description: 'Освежавајућа супа са киселом краставцем.', smallPortionPrice: 150, largePortionPrice: 250, image: soup },
          { name: 'Мини кифлице', description: 'Салата са кинеским купусом и туњевином.', smallPortionPrice: 100, largePortionPrice: 200, image: salata }
        ],
        'Главна јела': [
          { name: 'Печена патка', description: 'Сочна печена патка са хрскавом кожицом.', smallPortionPrice: 600, largePortionPrice: 1000, image: patka1 },
          { name: 'Свињски ребарца', description: 'Ребарца припремљена на кинески начин.', smallPortionPrice: 550, largePortionPrice: 950, image: ribs },
          { name: 'Пилећи батак', description: 'Пикантни пилећи батак.', smallPortionPrice: 400, largePortionPrice: 700, image: batak }
        ],
        'Дезерти': [
          { name: 'Поховани сладолед', description: 'Кремасти сладолед у хрскавом омоту.', smallPortionPrice: 250, largePortionPrice: 400, image: sladoled },
          { name: 'Похована чоколада', description: 'Чоколада у хрскавом омоту.', smallPortionPrice: 300, largePortionPrice: 450, image: pohocoko },
          { name: 'Ролнице са бананом', description: 'Слатке ролнице пуњене бананом.', smallPortionPrice: 200, largePortionPrice: 350, image: banana }
        ]
      };

      this.foodItems = allFoodGroups[this.groupName] || [];
    },
    sortByName() {
      this.sortKey = 'name';
    },
    sortByPrice() {
      this.sortKey = 'price';
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
.food-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.food-item {
  flex: 1 1 300px;
  max-width: 300px;
  margin-bottom: 20px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
