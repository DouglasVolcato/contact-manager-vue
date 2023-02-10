import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import ContactManager from "../view/ContactManager.vue";
import AddContact from "../view/AddContact.vue";
import EditContact from "../view/EditContact.vue";
import ViewContact from "../view/ViewContact.vue";
import NotFound from "../view/NotFound.vue";

const routes = [
  { path: "/", name: "Home", redirect: "/contacts", component: Home },
  { path: "/contacts", name: "ContactManager", component: ContactManager },
  { path: "/contacts/add", name: "AddContact", component: AddContact },
  {
    path: "/contacts/edit/:contactId",
    name: "EditContact",
    component: EditContact,
  },
  {
    path: "/contacts/view/:contactId",
    name: "ViewContact",
    component: ViewContact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
