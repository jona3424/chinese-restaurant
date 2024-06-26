<template>
  <div class="home-page container mt-4">
    <div id="carouselBanners" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="https://wolt.rs" target="_blank">
            <img src="../assets/banner1.jpg" class="d-block w-100" alt="Banner 1">
          </a>
        </div>
        <div class="carousel-item">
          <a href="https://delivery.glovoapp.com/rs/" target="_blank">
            <img src="../assets/banner2.jpg" class="d-block w-100" alt="Banner 2">
          </a>
        </div>
        <div class="carousel-item scaled">
          <a href="https://www.minecraft.net" target="_blank">
            <img src="../assets/banner3.jpg" class="d-block w-100" alt="Banner 3">
          </a>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselBanners" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselBanners" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h2 class="mt-4 text-center">Добродошли у наш кинески ресторан!</h2>
    <p class="text-center">Овде можете пронаћи најбоља јела кинеске кухиње.</p>
    <section id="najbolja-jela">
      <h3 class="text-center">Три најбоље оцењена јела</h3>
      <div class="jela-container">
        <div v-for="jelo in najboljaJela" :key="jelo.name" class="jelo">
          <img :src="jelo.image" :alt="jelo.name" style="width:100%; height: 260px;">
          <h4>{{ jelo.name }}</h4>
          <p>Оцена: {{ jelo.averageRating === 0 ? defaultRating : jelo.averageRating }}</p>
        </div>
      </div>
    </section>

    <section id="aktuelnosti" class="mt-4">
      <h3 class="text-center">Актуелности</h3>
      <div class="aktuelnosti-container">
        <div v-for="aktuelnost in aktuelnosti" :key="aktuelnost.naslov" class="aktuelnost">
          <h4>{{ aktuelnost.naslov }}</h4>
          <p>{{ aktuelnost.opis }}</p>
        </div>
      </div>
    </section>
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
  data() {
    return {
      defaultRating :'Нема оцена',
      aktuelnosti: [
        { naslov: 'Акција на сва јела!', opis: 'Уживајте у попусту од 20% на сва јела током викенда.' },
        { naslov: 'Отварање нове локације', opis: 'Срећни смо да најавимо отварање новог ресторана у Новом Саду.' }
      ],
      allFoodItems: [
        { name: 'Пролећне ролнице', description: 'Укусне ролнице пуњене свежим поврћем.', smallPortionPrice: 200, largePortionPrice: 350, image: rolls, averageRating: 0},
        { name: 'Супа са киселом краставцем', description: 'Освежавајућа супа са киселом краставцем.', smallPortionPrice: 150, largePortionPrice: 250, image: soup, averageRating: 0 },
        { name: 'Мини кифлице', description: 'Салата са кинеским купусом и туњевином.', smallPortionPrice: 100, largePortionPrice: 200, image: salata , averageRating: 0},
        { name: 'Печена патка', description: 'Сочна печена патка са хрскавом кожицом.', smallPortionPrice: 600, largePortionPrice: 1000, image: patka1, averageRating: 0 },
        { name: 'Свињски ребарца', description: 'Ребарца припремљена на кинески начин.', smallPortionPrice: 550, largePortionPrice: 950, image: ribs , averageRating: 0},
        { name: 'Пилећи батак', description: 'Пикантни пилећи батак.', smallPortionPrice: 400, largePortionPrice: 700, image: batak, averageRating: 0 },
        { name: 'Поховани сладолед', description: 'Кремасти сладолед у хрскавом омоту.', smallPortionPrice: 250, largePortionPrice: 400, image: sladoled , averageRating: 0},
        { name: 'Похована чоколада', description: 'Чоколада у хрскавом омоту.', smallPortionPrice: 300, largePortionPrice: 450, image: pohocoko, averageRating: 0 },
        { name: 'Ролнице са бананом', description: 'Слатке ролнице пуњене бананом.', smallPortionPrice: 200, largePortionPrice: 350, image: banana , averageRating: 0}
      ]
    };
  },
  computed: {
    najboljaJela() {
      const storedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
      const foodItemsWithRatings = this.allFoodItems.map(item => {
        const ratings = storedRatings[item.name] || [];
        if (ratings.length > 0) {
          item.averageRating = (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1);
        } else {
          item.averageRating = 0;
        }
        return item;
      });

      foodItemsWithRatings.sort((a, b) => b.averageRating - a.averageRating);
      console.log(foodItemsWithRatings);

      return foodItemsWithRatings.slice(0, 3);
    }
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}

.carousel-item.scaled img {
  object-fit: scale-down;
}

.jela-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.jelo {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 40px); /* For small screens */
  max-width: 300px; /* For larger screens */
  text-align: center;
}

.aktuelnosti-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.aktuelnost {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 40px); /* For small screens */
  max-width: 500px; /* For larger screens */
  text-align: center;
}

@media (min-width: 600px) {
  .jelo, .aktuelnost {
    width: calc(50% - 40px); /* For medium screens */
  }
}

@media (min-width: 768px) {
  .jelo {
    width: calc(33.33% - 40px); /* For larger screens */
  }

  .aktuelnost {
    width: calc(50% - 40px); /* For larger screens */
  }
}

.text-center {
  text-align: center;
}
</style>
