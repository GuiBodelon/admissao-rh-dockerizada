import { computed, ref, onMounted } from 'vue';
import { useAppStore } from 'src/stores/app-store';
import LoginForm from 'src/components/LoginForm/index.vue';

export default {
  components: {
    LoginForm,
  },

  setup() {
    const appStore = useAppStore();
    const isDarkModeActive = ref(false);
    onMounted(() => {
      appStore.setDarkMode(false);
    })
    return {
      isDarkModeActive,
      appStore,
      isDarkActive: computed(() => appStore.isDarkActive),
    };
  },
};
