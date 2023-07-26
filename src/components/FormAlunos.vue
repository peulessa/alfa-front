<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="formData.name"
        label="Seu nome *"
        hint="Nome e sobrenome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Insira o Nome']"
      />

      <q-input
        mask="###.###.###-##"
        unmasked-value
        filled
        v-model="formData.cpf"
        label="CPF *"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Insira o CPF']"
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
  cpf: "",
});

function onSubmit() {
  console.log(formData.cpf, formData.name);
}
</script>
