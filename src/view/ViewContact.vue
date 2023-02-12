<template>
  <Title text="View Contact" />
  <div class="border-solid max-w-screen w-6 m-auto mt-3 surface-300">
    <div class="m-5 flex flex-row flex-wrap justify-content-evenly">
      <div class="m-5 ml-2 mr-2" v-for="input in dataList">
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
  <Spinner :loading="loading" />
</template>

<script>
import Title from "../components/Title.vue";
import ContactService from "../services/contact-services";
import Spinner from "../components/Spinner.vue";

export default {
  name: "ViewContact",
  components: { Title, Spinner },
  data() {
    return {
      contactId: this.$route.params.contactId,
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
    };
  },
  created() {
    this.getContact();
  },
  methods: {
    getContact() {
      this.loading = true;
      setTimeout(() => {
        const contact = ContactService.getContact(this.contactId);
        this.dataList[0].value = contact.name;
        this.dataList[1].value = contact.photoUrl;
        this.dataList[2].value = contact.email;
        this.dataList[3].value = contact.mobile;
        this.dataList[4].value = contact.company;
        this.dataList[5].value = contact.title;
        this.loading = false;
      }, 1000);
    },
    getPhoto() {
      return this.dataList[1].value.trim() === ""
        ? this.anonymousProfileImage
        : this.dataList[1].value;
    },
  },
};
</script>

<style scoped></style>
