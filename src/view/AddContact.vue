<template>
  <Title text="Add Contact" />
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
    <div class="w-min m-auto mb-5">
      <Button class="p-button-success" @click="createContact">Create</Button>
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
import ContactService from "../services/contact-services";
import Spinner from "../components/Spinner.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
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

function getPhoto() {
  return data.form.photoUrl.trim() === ""
    ? data.anonymousProfileImage
    : data.form.photoUrl.trim();
}

function createContact() {
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
    ContactService.createContact(body);
    data.loading = false;
    router.push("/");
  }, 1000);
}
</script>

<style scoped></style>
