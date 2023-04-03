import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

function SecretPiniaPlugin() {
  return { secret: "the cake is lie" };
}

const app = createApp(App);
const pinia = createPinia();
pinia.use(SecretPiniaPlugin);

// pinia.use(({ store }) => {
//   store.recret = "the cake is lie";
// });
app.use(router).use(pinia).mount("#app");
