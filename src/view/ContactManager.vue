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
      v-for="contact in contactList"
      :title="contact.name"
      :number="contact.number"
      :email="contact.email"
      :imageUrl="contact.imageUrl"
    />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import ContactCard from "../components/ContactCard.vue";

export default {
  name: "ContactManager",
  components: { Title, ContactCard },
  data() {
    return {
      contactList: [
        {
          name: "teste1",
          number: "342343424",
          email: "teste@gmail.com",
          imageUrl:
            "https://images.pexels.com/photos/15272872/pexels-photo-15272872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "teste2",
          number: "3423434244234",
          email: "teste2@gmail.com",
          imageUrl:
            "https://images.pexels.com/photos/14666143/pexels-photo-14666143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "teste3",
          number: "34267657",
          email: "teste3@gmail.com",
          imageUrl:
            "https://images.pexels.com/photos/14666143/pexels-photo-14666143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
