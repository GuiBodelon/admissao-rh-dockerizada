import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar, Notify } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';
import Notifications from '../Notifications/index.vue';

export default defineComponent({
  name: 'NavBar',

  components: {
    Notifications
  },

  props: {
    activeLeft: {
      type: String,
      default: '348px',
    },
  },

  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const userStore = useUserStore();
    const appStore = useAppStore();
    const isDarkModeActive = ref(false);
    const userName = userStore.user.name;
    const nameInitials = userName.charAt(0);

    function setDarkMode(val: boolean) {
      $q.dark.set(val);
      appStore.setDarkMode(val);
    }

    onMounted(() => {
      isDarkModeActive.value = appStore.dark;
      setDarkMode(appStore.dark);
    });

    function logout() {
      userStore.clearStore();
      appStore.setDarkMode(false);
      router.push('/');
      Notify.create({
        progress: true,
        color: 'positive',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Você foi deslogado com sucesso. Até breve!',
      });
    }

    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      setDarkMode,
      isDarkModeActive,
      logout,
      appStore,
      userStore,
      nameInitials,
      userName,
    };
  },
});
