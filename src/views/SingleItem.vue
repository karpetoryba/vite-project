<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;

console.log("Single item id : ", id);

const item = ref({});

const fetchProduct = () => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Single item data : ", data);
      item.value = data;
    });
};

onMounted(() => {
  console.log("On mounted app");
  fetchProduct();
});
</script>

<template>
  <img :src="item.image" alt="" />
  <h1>{{ item.title }}</h1>
  <p>{{ item.description }}</p>
</template>
