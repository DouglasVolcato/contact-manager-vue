import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);

app.use(router);
// app.use(store);
app.use(PrimeVue);
app.component("Button", Button);
app.mount("#app");
