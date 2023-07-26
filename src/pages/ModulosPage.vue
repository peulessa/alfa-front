<template>
  <q-page padding>
    <Tabela
      :tableData="tableData"
      :columns="columns"
      route="/gerenciarmodulos"
    />
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
    name: "nota",
    align: "center",
    label: "Nota",
    field: "nota",
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
  { modulo: "Lógica de Programação", nota: 6 },
  { modulo: "JavaScript", nota: 6 },
  { modulo: "HTML", nota: 6 },
  { modulo: "CSS", nota: 6 },
  { modulo: "Componentização com Vue", nota: 6 },
  { modulo: "Boas Práticas", nota: 6 },
]);

const rotas = ref([]);
</script>
