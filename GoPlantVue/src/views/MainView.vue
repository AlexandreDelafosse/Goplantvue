<script setup lang="ts">
import AllPosts from '@/components/AllPosts.vue';
import HeaderHome from '@/components/layouts/HeaderHome.vue';
import HeaderHomeNotifs from '@/components/layouts/HeaderHomeNotifs.vue'
</script>

<template>
  <main>
  <HeaderHomeNotifs />
  <HeaderHome />
    <AllPosts />
  </main>
</template>
