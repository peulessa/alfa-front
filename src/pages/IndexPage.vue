<template>
  <div class="q-pa-md">
    <q-page>
      <div class="flex justify-center items-center" style="height: 50vh">
        <q-card class="text-center" style="max-height: max-content; width: 25%">
          <q-card-section>
            <div class="text-h6 q-mb-md">Login</div>
            <q-form @submit="login">
              <q-input
                v-model="email"
                label="Email"
                filled
                type="email"
                dense
                autofocus
              />
              <q-input
                v-model="password"
                label="Password"
                filled
                type="password"
                dense
              />
              <q-btn
                type="submit"
                label="Login"
                color="primary"
                class="q-mt-md"
                :loading="loading"
                @click="login"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const loading = ref(false);

function login() {
  if (email.value === "user@example.com" && password.value === "123") {
    const authToken = "seu_token_gerado";
    sessionStorage.setItem("authToken", authToken);
    router.push("/painel");
  } else {
    console.log("credenciasi inválidas");
  }
}
</script>
