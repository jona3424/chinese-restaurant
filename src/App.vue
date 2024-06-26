<template>
  <div id="app">
    <SiteHeader />
    <div id="main-content" class="container mt-4">
      <router-view /> <!-- This is where the matched component will be rendered -->
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;700&display=swap');
@import 'bootstrap/dist/css/bootstrap.min.css';

body {
  font-family: 'Noto Serif SC', serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
  padding-bottom: 60px; /* Space for the footer */
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin-right: 15px;
}

nav ul li a {
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

nav ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }

  #main-content {
    padding: 80px 15px 60px; /* Adjust padding for smaller screens */
  }
}
</style>
