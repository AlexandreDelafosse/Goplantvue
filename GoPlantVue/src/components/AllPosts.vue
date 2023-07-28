<script setup lang="ts">
import {db} from "@/firebase";
import {onMounted, ref} from "vue";
import {collection, getDocs, getDoc, DocumentReference  } from "firebase/firestore";
import type {Post, User} from "@/types";



const posts = ref<Post[]>([]);

onMounted(async () =>{
  let postsCollection = await getDocs(collection(db, "posts"));

  const getUser = async (creatorRef: DocumentReference ) => {
    const userSnap = await getDoc(creatorRef);
    return { ...userSnap.data(), id: userSnap.id };
  };

  for (const post of postsCollection.docs) {
    const postData = post.data();
    const creatorRef = postData.creator;
    const creator: User = await getUser(creatorRef);

    const newPost: Post = {
      ...postData,
      id: post.id,
      creator: creator,
    };

    posts.value.push(newPost);
    console.log(posts.value)

  }
})

</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <p>{{post.title}}</p>
      <p>{{post.creator.name}}</p>
    </div>
  </div>

</template>

<style scoped>

</style>