<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="page-container">
   <RouterView />
  <footer>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img src="./assets/Home.svg"></RouterLink>
        <RouterLink to="/about"><img src="./assets/Widgets.svg"></RouterLink>
        <RouterLink to="/post"><img src="./assets/Profil.svg"></RouterLink>
      </nav>
    </div>
    
  </footer>
</div>
</template>

<style scoped>

.page-container{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push the footer to the bottom */
}

footer {
  background-color: #f0f0f0; /* Set the background color for the footer */
  line-height: 1.5;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 1rem;
  background: #9CB68F;
}

nav a {
  display: inline-block;
  padding: 0 2.5rem;

}


@media (min-width: 1024px) {
  footer {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  footer .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
