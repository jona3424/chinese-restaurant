<template>
  <div class="about-us container mt-4">
    <h2>О нама</h2>
    <p>
      Добродошли у наш кинески ресторан! Наша мисија је да вам пружимо најбоље од кинеске кухиње,
      уз врхунски квалитет и услугу. Посетите нас и уживајте у аутентичним јелима припремљеним од стране наших мајстора кухиње.
    </p>

    <div class="row mt-4">
      <div class="contact-info col-md-6">
        <h3>Контакт информације</h3>
        <p>Адреса: Нека Улица 123, Београд, Србија</p>
        <p>Телефон: +381 11 234 5678</p>
        <p>Email: info@kineskirestoranK24.com</p>
        <div class="working-hours">
          <h3>Радно време</h3>
          <p>Понедељак - Петак: 8:00 - 24:00</p>
          <p>Субота: 10:00 - 24:00</p>
          <p>Недеља: 12:00 - 24:00</p>
        </div>
        <div class="specialties ">
          <h3>Наши специјалитети</h3>
          <ul class="list-unstyled">
            <li>Пролећне ролнице</li>
            <li>Пекиншка патка</li>
            <li>Слатко-кисела пилетина</li>
          </ul>
        </div>
      </div>
      <div class="working-hours col-md-6">
        <div class="map-container">
          <h3>Наша локација</h3>
          <LeafletMap />
        </div>
      </div>
    </div>

    

    <div class="gallery mt-4">
      <h3>Галерија</h3>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="../assets/rolnica1.jpg" class="d-block w-100 zoom-on-hover" alt="Slika restorana 1">
            </div>
            <div class="carousel-item">
              <img src="../assets/rolnica2.jpg" class="d-block w-100 zoom-on-hover" alt="Slika restorana 2">
            </div>
            <div class="carousel-item">
              <img src="../assets/patka1.webp" class="d-block w-100 zoom-on-hover" alt="Slika restorana 3">
            </div>
            <div class="carousel-item">
              <img src="../assets/patka2.webp" class="d-block w-100 zoom-on-hover" alt="Slika restorana 3">
            </div>

        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon black" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon black" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div> 


 

    <div class="message-form mt-4">
      <h3>Оставите поруку</h3>
      <form @submit.prevent="submitMessage" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Име:</label>
          <input type="text" id="name" v-model="message.name" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="message.email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Порука:</label>
          <textarea id="message" v-model="message.text" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Пошаљи</button>
      </form>
      <div v-if="showAlert" ref="alertSuccess" class="alert alert-success mt-3" role="alert" tabindex="-1">
        Ваша порука је успешно послата!
      </div>
      <div v-if="showAlert1" ref="alertError" class="alert alert-danger mt-3" role="alert" tabindex="-1">
        Морате унијети сва поља!
      </div>
    </div>
  </div>
</template>

<script>
import LeafletMap from './LeafletMap.vue';

export default {
  name: 'AboutUs',
  components: {
    LeafletMap
  },
  data() {
    return {
      message: {
        name: '',
        email: '',
        text: ''
      },
      showAlert: false,
      showAlert1: false
    };
  },
  methods: {
    submitMessage() {
      if (this.message.name === '' || this.message.email === '' || this.message.text === '') {
        this.showAlert1 = true;
        this.$nextTick(() => {
          this.$refs.alertError.scrollIntoView({ behavior: 'smooth' });
        });
        setTimeout(() => {
          this.showAlert1 = false;
        }, 3000);
      } else {
        this.showAlert = true;
        this.$nextTick(() => {
          this.$refs.alertSuccess.scrollIntoView({ behavior: 'smooth' });
        });
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }

      this.message.name = '';
      this.message.email = '';
      this.message.text = '';
    }
  }
};
</script>

<style scoped>
.about-us {
  padding: 20px;
}

.carousel-item img {
  max-height: 500px;
  object-fit: scale-down;
  transition: transform 0.5s ease;
}

.zoom-on-hover:hover {
  transform: scale(1.1);
}
.black {
  background-color: gray;
}
</style>
