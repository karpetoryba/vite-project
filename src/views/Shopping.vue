<script setup>
import { ref, computed, onMounted } from "vue";

const title = ref("Hello Vuejs");

//create ref to store all items
const itemList = ref([]);

// fetch all items on mounter app (https://fakestoreapi.com/products)
const fetchAllItems = computed(async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log("fetchAllItems :", data);

  itemList.value = data;
});

onMounted(() => {
  console.log("On mounted app");

  fetchAllItems.value;
});
</script>

<template></template>
