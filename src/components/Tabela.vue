<template>
  <div>
    <q-table :rows="tableData" :columns="columns" style="margin: 1.5em">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-icon
            name="edit"
            v-on:click="editRow(tableData.name)"
            style="cursor: pointer"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-icon
            name="delete"
            v-on:click="confirmDelete(props.columns)"
            style="cursor: pointer; color: red"
          />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  tableData: {
    typeof: [],
  },
  columns: {
    typeof: [],
  },
  route: {
    typeof: [],
  },
});

function editRow() {
  router.push(props.route);
}

function confirmDelete(row) {
  const index = this.tableData.indexOf(row);
  if (index !== -1) {
    this.tableData.splice(index, 1);
  }
}
</script>
