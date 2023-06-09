import { install } from "@icon-park/vue-next/es/all";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@icon-park/vue-next/styles/index.css";

const app = createApp(App);
install(app);
app.mount("#app");
