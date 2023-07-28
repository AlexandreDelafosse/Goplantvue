<script setup>
  import WelcomeItem from './WelcomeItem.vue'
  import { ref } from 'vue';

// Use a reactive variable to track the expansion state of the profile
const isProfileExpanded = ref(false);

// Function to toggle the expansion state of the profile
const toggleProfileExpand = () => {
  isProfileExpanded.value = !isProfileExpanded.value;
  console.log('Click event triggered. Profile expanded:', isProfileExpanded.value);
};
</script>

<template>
  <WelcomeItem @header-click="toggleProfileExpand">
    <h1>Go Plant</h1>

    <img src="../assets/3DPlant.svg" class="imgPlant">

    <div class="profile" :class="{'scroll-up': isProfileExpanded}">
      <div class="header-profile" @click="toggleProfileExpand">
        <h3>Profile</h3>
      </div>

      <div class="info-profile">
        <img src="../assets/profilePic.svg" class="pfp">

        <h4>John Doe</h4>

        <div class="data-pairs">
          <div class="data-pair">
            <p>27</p>
            <p>Posts</p>
          </div>

          <div class="data-pair">
            <p>765</p>
            <p>Likes</p>
          </div>

          <div class="data-pair">
            <p>83</p>
            <p>Friends</p>
          </div>
        </div>

        <button class="editProfile">Edit Profile</button>

        <h5>Paris</h5>
        <div class="description-profile">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
        </div>


      </div>
    </div>
  </WelcomeItem>
</template>

<style scoped>
  h1 {
    margin-top: 15vh;
  }

  .imgPlant {
    margin-top: 7vh;
  }
  
  .profile{
    position: fixed;
    bottom: -22.5vh;
    transition: bottom 0.3s;
  }

  .profile.scroll-up {
  bottom: 7vh !important; /* Set it to the desired scrolled-up position */
}
  .header-profile {
    background-color: var(--background-nav);
    border-radius: 10px 10px 0 0;
  }

  .header-profile h3 {
    padding: 0.5rem;
    color: var(--beige);
  }

  .info-profile {
    background-color: var(--beige);
  }

  .info-profile h4, .data-pair p:first-child{
    font-weight: 700;
  }

  .info-profile .pfp{
    margin-top: 1vh;
    border: 2px solid var(--background-nav); /* Set your desired border properties here */
    border-radius: 50%; 
  }

  .data-pairs {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .data-pair {
    padding: 10px;
    text-align: center;
  }

  .description-profile {
   margin: 0 30px 0 30px;
  }

  .editProfile{
    background-color: var(--background-nav);
    padding: 5px 15px;
    border: none;
    color: var(--beige);
    border-radius: 10px;
  }

  h5{
    color: var(--grey);
  }
</style>