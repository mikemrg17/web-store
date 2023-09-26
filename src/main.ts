import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//Bootstrap styling
import "bootstrap/dist/css/bootstrap.css";

//Import personalized styles
import "@/assets/scss/custom-bootstrap.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.min";
