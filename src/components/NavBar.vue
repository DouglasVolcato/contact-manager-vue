<template>
  <TabMenu :model="items" />
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        {
          label: "ContactManager",
          icon: "pi pi-fw pi-calendar",
          to: "/contacts",
        },
        {
          label: "AddContact",
          icon: "pi pi-fw pi-pencil",
          to: "/contacts/add",
        },
        {
          label: "EditContact",
          icon: "pi pi-fw pi-file",
          to: "/contacts/edit/:contactId",
        },
        {
          label: "ViewContact",
          icon: "pi pi-fw pi-cog",
          to: "/contacts/view/:contactId",
        },
      ],
    };
  },
};
</script>
