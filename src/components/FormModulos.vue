<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="formData.name"
        label="Nome do Módulo *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Insira o nome do módulo']"
      />

      <q-input
        unmasked-value
        filled
        v-model="formData.notas.nota1"
        label="Nota 1 *"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Insira a nota']"
      />

      <q-input
        unmasked-value
        filled
        v-model="formData.notas.nota2"
        label="Nota 2 *"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Insira a nota']"
      />

      <q-input
        unmasked-value
        filled
        v-model="formData.notas.nota3"
        label="Nota 3 *"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Insira a nota']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const formData = ref({
  name: "",
  notas: {
    nota1: "",
    nota2: "",
    nota3: "",
  },
});

function onSubmit() {
  console.log(formData.cpf, formData.name);
}
</script>
