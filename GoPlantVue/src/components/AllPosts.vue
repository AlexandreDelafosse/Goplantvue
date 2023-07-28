<script setup lang="ts">
import {db} from "@/firebase";
import {onMounted, ref} from "vue";
import {collection, getDocs} from "firebase/firestore";

const posts = ref([]);

onMounted(async () =>{
  let postsCollection = await getDocs(collection(db, "posts"));
  postsCollection.forEach((post) => {
    posts.value.push({...post.data(), id: post.id})
    console.log(posts.value.length)
  })
})

</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <p>{{post.title}}</p>
    </div>
  </div>

</template>

<style scoped>

</style>