<template>
  <div class="essential-links">
    <ul style="list-style: none">
      <li v-for="link in links" :key="link.id">
        <q-item clickable v-ripple @click="redirectToRoute(link.route)">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const links = ref([
  { id: 1, label: "Alunos", icon: "person", route: "/painel" },
  { id: 2, label: "Módulos", icon: "description", route: "/" },
]);

const redirectToRoute = (route) => {
  router.push(route);
};
</script>
