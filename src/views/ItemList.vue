<script setup>
import { ref, computed, onMounted } from "vue";

const title = ref("Hello Vuejs");
// create ref to store all items
const itemList = ref([]);

// fetch all items on mounter app (https://fakestoreapi.com/products)
const fetchAllItems = computed(async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log("fetchAllItems : ", data);

  itemList.value = data;
});

onMounted(() => {
  console.log("On mounted app");

  fetchAllItems.value;
});
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="item-list">
    <div class="card" v-for="item in itemList" :key="item.id">
      <img :src="item.image" alt="" />
      <h2>{{ item.title }}</h2>

      <RouterLink :to="`/single-item/${item.id}`">
        Go to Single Item
      </RouterLink>

      <button @click="$emit('addItemIntoCard', item)">Add to cart</button>
    </div>
  </div>
</template>

<style scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
}
h2 {
  font-size: 1.3rem;
}
.card {
  margin: 10px;
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
img {
  max-width: 100%;
  max-height: 200px;
}
</style>
