<template>
  <q-page padding>
    <Tabela :tableData="tableData" :columns="columns" route="/modulos" />
    <div class="flex justify-center">
      <q-btn to="/gerenciar-alunos">Adicionar Aluno</q-btn>
    </div>
  </q-page>
</template>

<script setup>
import Tabela from "components/Tabela.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const columns = ref([
  {
    name: "name",
    required: true,
    label: "Aluno",
    align: "left",
    field: "name",
  },
  {
    name: "media",
    align: "center",
    label: "Média Geral",
    field: "media",
    sortable: true,
  },
  {
    name: "cpf",
    align: "center",
    label: "CPF",
    field: "cpf",
    sortable: true,
  },
  {
    name: "actions",
    label: "Módulos",
    field: "actions",
    align: "center",
  },
  {
    name: "delete",
    label: "Deletar Aluno",
    field: "delete",
    align: "center",
  },
]);

const tableData = ref([
  { name: "Fabinho Popó", media: 6, cpf: "000.000.000-00" },
  { name: "Jack Wick", media: 6, cpf: "000.000.000-00" },
  { name: "Samba da Polly", media: 6, cpf: "000.000.000-00" },
  { name: "Luiz Molejo", media: 6, cpf: "000.000.000-00" },
  { name: "Matheuzão", media: 6, cpf: "000.000.000-00" },
  { name: "Pedrinho Gogó", media: 6, cpf: "000.000.000-00" },
]);
</script>
