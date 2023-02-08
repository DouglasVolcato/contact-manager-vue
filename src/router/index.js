import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ContactManagerPage from "../views/ContactManager.vue";
import AddContactPage from "../views/AddContact.vue";
import EditContactPage from "../views/EditContact.vue";
import ViewContactPage from "../views/ViewContact.vue";
import NotFoundPage from "../views/NotFound.vue";

const routes = [
  { path: "/", redirect: "/contacts", component: HomePage },
  { path: "/contacts", component: ContactManagerPage },
  { path: "/contacts/add", component: AddContactPage },
  {
    path: "/contacts/edit/:contactId",
    component: EditContactPage,
  },
  {
    path: "/contacts/view/:contactId",
    component: ViewContactPage,
  },
  {
    path: "/:patchMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
