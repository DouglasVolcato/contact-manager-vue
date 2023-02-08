<template>
  <NavbarComponent/>
  <RouterView/>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue"
export default {
  name: 'App',
  components:{NavbarComponent}
}
</script>

<style scoped>
</style>
