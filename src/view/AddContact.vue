<template>
  <Title text="Add Contact" />
  <form class="border-solid max-w-screen w-6 m-auto mt-3">
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
    <div class="bg-primary w-min m-auto mb-5">
      <Button class="p-button-success">Create</Button>
    </div>
  </form>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  name: "AddContact",
  components: { Title },
  data() {
    return {
      form: {
        name: "",
        photoUrl: "",
        email: "",
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
};
</script>

<style scoped></style>
