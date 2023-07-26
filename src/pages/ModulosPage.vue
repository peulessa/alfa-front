<template>
  <q-page padding>
    <Tabela :tableData="tableData" :columns="columns" route="/gerenciar" />
  </q-page>
</template>

<script setup>
import Tabela from "components/Tabela.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const columns = ref([
  {
    name: "modulo",
    required: true,
    label: "Módulo",
    align: "left",
    field: "modulo",
  },
  {
    name: "media",
    align: "center",
    label: "Média",
    field: "media",
    sortable: true,
  },
  {
    name: "actions",
    label: "Editar Módulo",
    field: "actions",
    align: "center",
  },
  {
    name: "delete",
    label: "Deletar Módulo",
    field: "delete",
    align: "center",
  },
]);

const tableData = ref([
  { modulo: "Lógica de Programação", media: 6 },
  { modulo: "JavaScript", media: 6 },
  { modulo: "HTML", media: 6 },
  { modulo: "CSS", media: 6 },
  { modulo: "Componentização com Vue", media: 6 },
  { modulo: "Boas Práticas", media: 6 },
]);

const rotas = ref([]);
</script>
