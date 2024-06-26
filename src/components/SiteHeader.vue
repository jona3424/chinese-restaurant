<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Кинески ресторан <span>K24</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">Почетна</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery" active-class="active">Галерија</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu" active-class="active">Јеловник</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/account" active-class="active">Мој налог</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">О нама</router-link>
            </li>
          </ul>
          <div class="dropdown ms-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Превод
            </button>
            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
              <div id="google_translate_element"></div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style scoped>
.active {
  font-weight: bold;
  text-decoration: underline;
}
.navbar {
  background-color: #d93600;
}
span {
  color: black;
  font-weight: bold;
}
</style>
