<script setup lang="ts">
import {db} from "@/firebase";
import {onMounted} from "vue";
import {collection, getDocs} from "firebase/firestore";

// const users = ref([]);

onMounted(async () =>{
  console.log("hi");
  let usersCollection = await getDocs(collection(db, "users"));
  usersCollection.forEach((user) => {
    console.log(user.data(), user.id)
  })
})

</script>

<template>
<!--  <div v-for="{id, name} in users" :key="id">-->
<!--    <p>{{name}}</p>-->
<!--  </div>-->
  <div>
    hallo
  </div>
</template>

<style scoped>

</style>