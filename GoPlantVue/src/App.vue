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
        <div class="icons">
          <RouterLink to="/"><img src="./assets/Home.svg" class="nav-icon"></RouterLink>
        <RouterLink to="/about"><img src="./assets/Widgets.svg" class="nav-icon"></RouterLink>
        <RouterLink to="/post"><img src="./assets/Profil.svg" class="nav-icon"></RouterLink>
        </div>
    
      </nav>
    </div>
    
  </footer>
</div>
</template>

<style scoped>

.page-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push the header to the bottom */

}


.icons{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  height: 7vh;
  z-index: 2;
  position: fixed;
  bottom: 0;
  background-color: var(--background-nav);
}



nav a {
  display: inline-block;
  padding: 0 2.5rem;

}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
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
