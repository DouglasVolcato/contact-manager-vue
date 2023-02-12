<template>
  <Title text="Edit Contact" />
  <form class="border-solid max-w-screen w-6 m-auto mt-3 surface-300">
    <div class="m-5 flex flex-row flex-wrap justify-content-evenly">
      <div
        class="p-float-label m-5 ml-2 mr-2"
        v-for="input in data.form.inputList"
      >
        <InputText
          :id="input.name"
          :type="input.type"
          v-model="data.form[input.name]"
          class="p-invalid max-w-screen"
        />
        <label :for="input.name">{{ input.label }}</label>
      </div>
    </div>
    <div class="w-min m-auto mb-5" @click="editContact">
      <Button>Update</Button>
    </div>
  </form>
  <div class="p-3 flex justify-content-center">
    <img
      :src="getPhoto()"
      alt="Profile"
      class="h-8rem w-8rem border-circle border-solid"
    />
  </div>
  <Spinner :loading="data.loading" />
</template>

<script setup>
import Title from "../components/Title.vue";
import Spinner from "../components/Spinner.vue";
import ContactService from "../services/contact-services";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const data = reactive({
  contactId: route.params.contactId,
  loading: false,
  anonymousProfileImage:
    "https://play-lh.googleusercontent.com/_FY955G6x8cRVOLb-seFqoZfIVWBGprb6WzaGDx8bqTi1KuOKqlqPKWt5KXyjm8lVyA",
  form: {
    name: "",
    photoUrl: "",
    email: "",
    mobile: "",
    company: "",
    title: "",
    inputList: [
      { name: "name", type: "text", label: "Name" },
      { name: "photoUrl", type: "text", label: "PhotoUrl" },
      { name: "email", type: "email", label: "Email" },
      { name: "mobile", type: "number", label: "Mobile" },
      { name: "company", type: "text", label: "Company" },
      { name: "title", type: "text", label: "Title" },
    ],
  },
});

onMounted(() => {
  getContact();
});

function getContact() {
  data.loading = true;
  setTimeout(() => {
    const contact = ContactService.getContact(data.contactId);
    data.form.name = contact.name;
    data.form.photoUrl = contact.photoUrl;
    data.form.email = contact.email;
    data.form.mobile = contact.mobile;
    data.form.company = contact.company;
    data.form.title = contact.title;
    data.loading = false;
  }, 1000);
}

function editContact() {
  data.loading = true;
  setTimeout(() => {
    const body = {
      name: data.form.name,
      photoUrl: data.form.photoUrl,
      email: data.form.email,
      mobile: data.form.mobile,
      company: data.form.company,
      title: data.form.title,
    };
    ContactService.updateContact(data.contactId, body);
    data.loading = false;
    router.push("/");
  }, 1000);
}

function getPhoto() {
  return data.form.photoUrl.trim() === ""
    ? data.anonymousProfileImage
    : data.form.photoUrl;
}
</script>

<style scoped></style>
