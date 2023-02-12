import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Image from "primevue/image";
import ProgressSpinner from "primevue/progressspinner";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

const app = createApp(App);

app.use(router);
// app.use(store);
app.use(PrimeVue);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Image", Image);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("TabMenu", TabMenu);
app.component("Button", Button);
app.mount("#app");
