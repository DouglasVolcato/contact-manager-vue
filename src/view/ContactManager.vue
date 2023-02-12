<template>
  <div class="flex flex-row flex-wrap justify-content-center">
    <Title text="Contact Manager" />
    <router-link to="/contacts/add" class="no-underline">
      <Button class="p-button-success m-2 mt-3"
        ><i class="pi pi-plus-circle text-xl"
      /></Button>
    </router-link>
  </div>
  <form class="flex flex-row flex-wrap justify-content-center mt-5">
    <InputText placeholder="Search name" />
    <Button class="ml-2"> <i class="pi pi-search mt-1 mb-1" /></Button>
  </form>
  <div class="flex flex-direction-row justify-content-center mt-5 flex-wrap">
    <ContactCard
      v-for="contact in data.contactList"
      :id="contact.id"
      :title="contact.name"
      :number="contact.mobile"
      :email="contact.email"
      :imageUrl="contact.photoUrl"
      :deleteContactFunction="deleteContact"
    />
  </div>
  <Spinner :loading="data.loading" />
</template>

<script setup>
import Title from "../components/Title.vue";
import ContactCard from "../components/ContactCard.vue";
import Spinner from "../components/Spinner.vue";
import ContactService from "../services/contact-services";
import { reactive, onMounted } from "vue";

const data = reactive({
  loading: false,
  contactList: [],
  errorMessage: null,
});

onMounted(() => {
  getAllContacts();
});

function getAllContacts() {
  data.loading = true;
  setTimeout(() => {
    const contacts = ContactService.getAllContacts();
    data.contactList = contacts;
    data.loading = false;
  }, 1000);
}
function deleteContact(id) {
  data.loading = true;
  setTimeout(() => {
    ContactService.deleteContact(id);
    data.loading = false;
  }, 1000);
}
</script>
