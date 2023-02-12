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
        :src="imageLink"
        alt="Profile"
        class="h-8rem w-8rem border-circle border-solid"
      />
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";

export default {
  name: "ViewContact",
  components: { Title },
  data() {
    return {
      imageLink: "https://avatars.githubusercontent.com/u/106124397?v=4",
      dataList: [
        { name: "name", type: "text", label: "Name", value: "Douglas" },
        {
          name: "photoUrl",
          type: "text",
          label: "PhotoUrl",
          value: "https://avatars.githubusercontent.com/u/106124397?v=4",
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          value: "doug@gmail.com",
        },
        {
          name: "mobile",
          type: "number",
          label: "Mobile",
          value: "23042-2342",
        },
        { name: "company", type: "text", label: "Company", value: "DB-Seller" },
        {
          name: "title",
          type: "text",
          label: "Title",
          value: "Fullstack Developer",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
