<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
// Create ref to store all items
const itemList = ref([]);

// Fetch all items on mounted app
const fetchAllItems = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      itemList.value = data;
      console.log("Single items data: ", data);
    });
};

// Fetch items when the component is mounted
onMounted(() => {
  console.log("On mounted app");
  fetchAllItems();
});

// Computed property to find the current item based on the route id
const currentItem = computed(() => {
  return itemList.value.find((item) => item.id == id);
});
</script>

<template>
  <div v-if="currentItem">
    <h1>{{ currentItem.title }}</h1>
    <img :src="currentItem.image" alt="Product image" />
    <p>{{ currentItem.description }}</p>
  </div>
  <div v-else></div>
  <RouterView />
</template>
