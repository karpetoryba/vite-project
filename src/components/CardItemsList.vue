<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  cardItemsList: Array,
});

console.log("props:", props.cardItemsList);
</script>

<template>
  <h2>{{ props.title }}</h2>

  <!-- List all items into cardList -->
  <ul>
    <li v-for="item in props.cardItemsList">
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }}</p>
      <button>Remove</button>
    </li>
  </ul>

  <p>Total price:</p>
</template>
