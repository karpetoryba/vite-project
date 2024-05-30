<script setup>
import { ref } from "vue";
import CardItemsList from "./components/CardItemsList.vue";

const cardItemsList = ref([
  {
    id: 9999,
    title: "card test",
  },
]);
</script>
<template>
  <h1>App component</h1>

  <nav>
    <router-link to="/">Home</router-link> /
    <router-link to="/about">About</router-link> /
  </nav>
  <RouterView />

  <CardItemsList></CardItemsList>
</template>
