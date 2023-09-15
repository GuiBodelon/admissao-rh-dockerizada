<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Página não encontrada.</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        :to="token ? '/dashboard' : '/'"
        label="Voltar"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from 'src/stores/user-store';

export default defineComponent({
  name: 'ErrorNotFound',

  setup() {
    const userStore = useUserStore();
    const token = userStore.user.token;
    return {
      token,
    };
  },
});
</script>
