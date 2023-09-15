import { computed, ref, defineComponent, onMounted } from 'vue';
import { apiBackendLaravel } from 'boot/axios';
import { useQuasar, Notify } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';

export default defineComponent({
  name: 'LoginForm',

  setup() {
    const email = ref('');
    const password = ref('');
    const $q = useQuasar();
    const router = useRouter();
    const userStore = useUserStore();
    const appStore = useAppStore();
    const isDarkModeActive = ref(false);
    const csrfToken = ref('');

    function setDarkMode(val: boolean) {
      $q.dark.set(val);
      appStore.setDarkMode(val);
    }

    function onSubmitLogin() {
      const meta = document.querySelector('meta[name="csrf-token"]');
      csrfToken.value = meta ? meta.getAttribute('content') ?? '' : '';
      apiBackendLaravel
        .post('/auth/login', {
          email: email.value,
          password: password.value,
        }, {
          headers: {
            'Accept': 'application/json',
            'X-CSRF-TOKEN': csrfToken.value
          }
        })
        .then((response) => {
          if (response.data.status === true) {
            userStore.updateWholeStore(
              response.data.id,
              response.data.name,
              response.data.email,
              response.data.vinculo,
              response.data.nivel,
              response.data.salario_base,
              response.data.data_contratacao,
              response.data.cargo,
              response.data.equipe,
              response.data.unidade,
              response.data.status_colaborador,
              response.data.status_formulario_admissao,
              response.data.token,
              response.data.permissions[0],
            );
            if (userStore.user.statusColaborador == '0') {
              Notify.create({
                progress: true,
                textColor: 'white',
                icon: 'warning',
                color: 'red-6',
                message: 'Esta e-mail está inativo.',
              });
            } else {
              Notify.create({
                progress: true,
                color: 'positive',
                textColor: 'white',
                icon: 'cloud_done',
                message: response.data.message,
              });
              router.push('/dashboard');
            }
          } else {
            Notify.create({
              progress: true,
              color: 'red-6',
              textColor: 'white',
              icon: 'warning',
              message: response.data.message,
            });
          }
        })
        .catch((error) => {
          Notify.create({
            progress: true,
            color: 'red-6',
            textColor: 'white',
            icon: 'warning',
            message: error.response.data.message,
          });
        });
    }

    onMounted(() => {
      isDarkModeActive.value = appStore.dark;
      setDarkMode(false);
    })
    return {
      email,
      password,
      onSubmitLogin,
      isPwd: ref(true),
      rememberMe: ref(false),
      isDarkModeActive,
      appStore,
      setDarkMode,
      isDarkActive: computed(() => appStore.isDarkActive),
    };
  },
});
