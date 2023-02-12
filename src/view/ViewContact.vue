<template>
  <Title text="View Contact" />
  <div class="border-solid max-w-screen w-6 m-auto mt-3 surface-300">
    <div class="m-5 flex flex-row flex-wrap justify-content-evenly">
      <div class="m-5 ml-2 mr-2" v-for="input in data.dataList">
        <label class="mr-2" :for="input.name">{{ input.label }}:</label>
        <InputText
          :id="input.name"
          :type="input.type"
          class="p-invalid max-w-screen border-blue-800"
          readonly
          disabled
          :value="input.value"
        />
      </div>
    </div>
    <div class="w-min m-auto mb-5">
      <img
        :src="getPhoto()"
        alt="Profile"
        class="h-8rem w-8rem border-circle border-solid"
      />
    </div>
  </div>
  <Spinner :loading="data.loading" />
</template>

<script setup>
import Title from "../components/Title.vue";
import ContactService from "../services/contact-services";
import Spinner from "../components/Spinner.vue";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const data = reactive({
  contactId: route.params.contactId,
  loading: false,
  anonymousProfileImage:
    "https://play-lh.googleusercontent.com/_FY955G6x8cRVOLb-seFqoZfIVWBGprb6WzaGDx8bqTi1KuOKqlqPKWt5KXyjm8lVyA",
  dataList: [
    { name: "name", type: "text", label: "Name", value: "Douglas" },
    {
      name: "photoUrl",
      type: "text",
      label: "PhotoUrl",
      value: "",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      value: "",
    },
    {
      name: "mobile",
      type: "number",
      label: "Mobile",
      value: "230422342",
    },
    { name: "company", type: "text", label: "Company", value: "" },
    {
      name: "title",
      type: "text",
      label: "Title",
      value: "",
    },
  ],
});

onMounted(() => {
  getContact();
});

function getContact() {
  data.loading = true;
  setTimeout(() => {
    const contact = ContactService.getContact(data.contactId);
    data.dataList[0].value = contact.name;
    data.dataList[1].value = contact.photoUrl;
    data.dataList[2].value = contact.email;
    data.dataList[3].value = contact.mobile;
    data.dataList[4].value = contact.company;
    data.dataList[5].value = contact.title;
    data.loading = false;
  }, 1000);
}

function getPhoto() {
  return data.dataList[1].value.trim() === ""
    ? data.anonymousProfileImage
    : data.dataList[1].value;
}
</script>
