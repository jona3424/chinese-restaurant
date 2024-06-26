<template>
  <div class="food-menu-overview container mt-4">
    <button class="btn btn-primary mb-4" @click="downloadMenu">Преузми јеловник</button>
    <h2 class="text-center">Јеловник</h2>
    <div id="foodGroupCarousel" class="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="4000">
      <div class="carousel-inner">
        <div class="carousel-item" :class="{ active: index === 0 }" v-for="(image, index) in carouselImages" :key="index">
          <img :src="image.src" class="d-block w-100" :alt="image.alt">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ image.group }}</h5>
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#foodGroupCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#foodGroupCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    <div class="card-deck">
      <div class="card" v-for="group in foodGroups" :key="group.name">
        <div class="card-body">
          <h5 class="card-title">{{ group.name }}</h5>
          <p class="card-text">{{ group.description }}</p>
          <router-link :to="{ name: 'FoodGroup', params: { groupName: group.name }}" class="btn btn-primary">Погледај {{ group.name }}</router-link>
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
  name: 'FoodMenuOverview',
  data() {
    return {
      foodGroups: [
        { name: 'Предјела', description: 'Укусни предјела за ваш оброк.', image: rolls },
        { name: 'Главна јела', description: 'Сочна и укусна главна јела.', image: patka1 },
        { name: 'Дезерти', description: 'Слатки и укусни дезерти.', image: sladoled }
      ],
      carouselImages: [
        { src: rolls, alt: 'Пролећне ролнице', group: 'Предјела', description: 'Укусне ролнице пуњене свежим поврћем.' },
        { src: soup, alt: 'Супа са киселом краставцом', group: 'Предјела', description: 'Освежавајућа супа са киселом краставцом.' },
        { src: salata, alt: 'Мини кифлице', group: 'Предјела', description: 'Салата са кинеским купусом и туњевином.' },
        { src: patka1, alt: 'Печена патка', group: 'Главна јела', description: 'Сочна печена патка са хрскавом кожицом.' },
        { src: ribs, alt: 'Свињски ребарца', group: 'Главна јела', description: 'Ребарца припремљена на кинески начин.' },
        { src: batak, alt: 'Пилећи батак', group: 'Главна јела', description: 'Пикантни пилећи батак.' },
        { src: sladoled, alt: 'Поховани сладолед', group: 'Дезерти', description: 'Кремасти сладолед у хрскавом омоту.' },
        { src: pohocoko, alt: 'Похована чоколада', group: 'Дезерти', description: 'Чоколада у хрскавом омоту.' },
        { src: banana, alt: 'Ролнице са бананом', group: 'Дезерти', description: 'Слатке ролнице пуњене бананом.' }
      ]
    };
  },
  methods: {
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
.card-deck {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
  flex: 1 1 300px;
}

.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}
</style>
