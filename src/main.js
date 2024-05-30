import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ItemList from "./views/ItemList.vue";
import About from "./views/About.vue";
import Single from "./views/Single.vue";
import { createMemoryHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  { path: "/", component: ItemList },
  { path: "/about", component: About },
  { path: "/single/:id", component: Single },
  //creaate route for single page product
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
