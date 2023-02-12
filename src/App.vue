<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
