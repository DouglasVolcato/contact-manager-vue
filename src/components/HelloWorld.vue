<script setup>
import { ref } from 'vue'

function teste(){
  alert("teste")
}

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<div class="flex justify-content-evenly flex-wrap">
  <Button @click="teste" >Teste</Button>
  <Button label="Primary" />
  <Button label="Secondary" class="p-button-secondary" />
  <Button label="Success" class="p-button-success" />
  <Button label="Info" class="p-button-info" />
  <Button label="Warning" class="p-button-warning" />
  <Button label="Warning" class="p-button-help" />
  <Button label="Danger" class="p-button-danger" />
</div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    |
    <a href="https://www.primefaces.org/primevue" target="_blank">PrimeVue Documentation</a>
  </p>

  <Button @click="count++" label="Count"></Button>
  <h5>{{ count }}</h5>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
