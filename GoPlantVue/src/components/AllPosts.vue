<script setup lang="ts">
import { db } from "@/firebase";
import { onMounted, ref } from "vue";
import { Timestamp, collection, getDocs } from "firebase/firestore";


const posts = ref([]);

// Fonction pour mapper les catégories aux classes CSS
function getBackgroundColor(category: string) {
  switch (category) {
    case 'évènement':
      return 'category-A';
    case 'tutoriel':
      return 'category-B';
    case 'question':
      return 'category-C';
    default:
      return 'category-default';
  }
}

onMounted(async () => {
  let postsCollection = await getDocs(collection(db, "posts"));
  postsCollection.forEach((post) => {
    posts.value.push({ ...post.data(), id: post.id });
  });
});
</script>

<template>

  <section class="posts_container">
    <div v-for="post in posts" :key="post.id">
      <div :class="['postind', getBackgroundColor(post.category), {'white-text': getBackgroundColor(post.category) === 'category-B'}]" >
        <div>
          <div class="posts_container_picture"> 
            <img src="../assets/user.png">
          </div>
        </div>
        <div>
          <h3 class="posts_title" :class="['posts_title', getBackgroundColor(post.category), {'white-text': getBackgroundColor(post.category) === 'category-B'}]">{{ post.title }}</h3>
          <div class="posts_header" :class="['posts_header', getBackgroundColor(post.category), {'white-text': getBackgroundColor(post.category) === 'category-B'}]"> 
            <p class="posts_author" :class="['posts_author', getBackgroundColor(post.category), {'white-text': getBackgroundColor(post.category) === 'category-B'}]"> {{ "Alex" }}</p>
            <p class="posts_date" :class="['posts_author', getBackgroundColor(post.category), {'white-text': getBackgroundColor(post.category) === 'category-B'}]"> {{ new Date(post.dateOfPublication.seconds * 1000).toLocaleDateString("fr-fr", {year:"numeric", month:"short", day:"numeric"})  }}</p>
          </div>
              <!-- <p>{{ post.category }}</p> -->
              <p>{{ post.content }}</p>

          
          
          
          <!-- <div class="commentssec">
            <p>{{ post.comments }}</p>
          </div> -->
          <p>{{ post.likes }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.postind {
  background-color: #F0E8CA;
  border-radius: 15px;
  padding: 15px 15px;
  display: flex;
  gap: 5px;
}

.posts_title{
  text-align: center;
  margin: 5px 0px;
  color: #084531
}

.posts_header {
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
}

.posts_date{
  color: rgba(8, 69, 49, 0.6)
}

.posts_author {
  color: #084531
}

/* Styles pour les différentes catégories */
.category-A {
  background-color: #F0E8CA;
}

.category-B {
  background-color: #084531;
}

.category-C {
  background-color: #FFFFFF;
}

/* Style par défaut pour les autres catégories */
.postind.category-default {
  background-color: gray;
}

.white-text {
  color: white !important;
}

</style>