<template>
  <Title text="Upload a file" />
  <div class="w-max m-auto mt-5 flex flex-column">
    <input type="file" @change="($event) => lerArquivo($event)" />
    <textarea class="mt-3" cols="30" rows="10">{{ fileData.text }}</textarea>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Title from "../components/Title.vue";

const fileData = reactive({ text: "" });

function lerArquivo(evento) {
  const arquivo = evento.target.files[0];
  const leitor = new FileReader();

  leitor.onload = function () {
    const conteudo = leitor.result;
    fileData.text = conteudo;
  };

  leitor.readAsText(arquivo);
}
</script>
