<template>
  <div>
    <q-table :rows="tableData" :columns="columns" style="margin: 1.5em">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-icon
            name="edit"
            v-on:click="editRow(props.row)"
            style="cursor: pointer"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-icon
            name="delete"
            v-on:click="confirmDelete(props.row)"
            style="cursor: pointer; color: red"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const columns = ref([
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
  },
  {
    name: "age",
    align: "center",
    label: "Age",
    field: "age",
    sortable: true,
  },
  {
    name: "city",
    align: "center",
    label: "City",
    field: "city",
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
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
  { name: "Bob Johnson", age: 35, city: "Chicago" },
]);

function editRow() {
  console.log("editou");
}

function confirmDelete() {
  console.log("deletou");
}
</script>
