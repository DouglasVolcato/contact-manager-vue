import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import "primeicons/primeicons.css";
import router from "./router/index.js";
import TabMenu from "primevue/tabmenu";
import "/node_modules/primeflex/primeflex.css";
// import ToastService from "primevue/toastservice";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
// app.use(ToastService);

app.component("PrimeButton", Button);
app.component("PrimeInputText", InputText);
app.component("PrimeToast", Toast);
app.component("PrimeTabMenu", TabMenu);

app.mount("#app");
