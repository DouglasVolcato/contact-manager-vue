<template>
  <Title text="Edit Contact" />
  <form class="border-solid max-w-screen w-6 m-auto mt-3 surface-300">
    <div class="m-5 flex flex-row flex-wrap justify-content-evenly">
      <div class="p-float-label m-5 ml-2 mr-2" v-for="input in form.inputList">
        <InputText
          :id="input.name"
          :type="input.type"
          v-model="form[input.name]"
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
  <Spinner :loading="loading" />
</template>

<script>
import Title from "../components/Title.vue";
import Spinner from "../components/Spinner.vue";
import ContactService from "../services/contact-services";

export default {
  name: "EditContact",
  components: { Title, Spinner },
  data() {
    return {
      contactId: this.$route.params.contactId,
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
        this.form.name = contact.name;
        this.form.photoUrl = contact.photoUrl;
        this.form.email = contact.email;
        this.form.mobile = contact.mobile;
        this.form.company = contact.company;
        this.form.title = contact.title;
        this.loading = false;
      }, 1000);
    },
    editContact() {
      this.loading = true;
      setTimeout(() => {
        const body = {
          name: this.form.name,
          photoUrl: this.form.photoUrl,
          email: this.form.email,
          mobile: this.form.mobile,
          company: this.form.company,
          title: this.form.title,
        };
        ContactService.updateContact(this.contactId, body);
        this.loading = false;
        this.$router.push("/");
      }, 1000);
    },
    getPhoto() {
      return this.form.photoUrl.trim() === ""
        ? this.anonymousProfileImage
        : this.form.photoUrl;
    },
  },
};
</script>

<style scoped></style>
