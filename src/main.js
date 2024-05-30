import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ItemList from "./views/ItemList.vue";
import About from "./views/About.vue";
import { createMemoryHistory } from "vue-router";
import { createRouter } from "vue-router";
import SingleItem from "./views/SingleItem.vue";

const routes = [
  { path: "/", component: ItemList },
  { path: "/about", component: About },
  // create route for single page product
  { path: "/single-item/:id", component: SingleItem },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
