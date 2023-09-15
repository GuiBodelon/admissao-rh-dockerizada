import { defineComponent, ref, computed } from 'vue';
import { apiBackendLaravel } from 'boot/axios';
import { useAppStore } from 'src/stores/app-store';
import { useUserStore } from 'src/stores/user-store';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'PerfilPage',

  setup() {
    const appStore = useAppStore();
    const userStore = useUserStore();
    const token = userStore.user.token;
    const emailCorporativo = userStore.user.email_corporativo
    const newEmailCorporativo = emailCorporativo.substr(0, emailCorporativo.length - 19);

    const usuario = {
      nome: userStore.user.name,
      initials: userStore.user.name.charAt(0),
      emailCorporativo: newEmailCorporativo,
      vinculo: userStore.user.vinculo,
      equipe: userStore.user.equipe,
      cargo: userStore.user.cargo,
      unidade: userStore.user.unidade,
      permissions: userStore.user.permissions
    }

    const oldPassword = ref('')
    const newPassword = ref('')
    const newRtPassword = ref('')

    const alterarSenhaVisible = ref(false)
    const alterarFotoVisible = ref(false)
    function showAlterarSenha() {
      alterarFotoVisible.value = false,
        alterarSenhaVisible.value = !alterarSenhaVisible.value
    }

    function onSubmitPassword() {
      if (newPassword.value !== newRtPassword.value) {
        Notify.create({
          progress: true,
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'As senhas não coincidem. Por favor tente novamente.'
        })
      }
      else {
        const payload = {
          oldPassword: oldPassword.value,
          newPassword: newPassword.value,
          newPasswordConfirmation: newRtPassword.value,
        }
        apiBackendLaravel
          .post('auth/change-password', payload, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then((response) => {
            Notify.create({
              progress: true,
              color: 'positive',
              textColor: 'white',
              icon: 'cloud_done',
              message: response.data.message
            })
          })
          .catch((error) => {
            Notify.create({
              progress: true,
              color: 'amber',
              textColor: 'white',
              icon: 'warning',
              message: error.response.data.message
            })
          })
          .finally(() => {
            oldPassword.value = ''
            newPassword.value = ''
            newRtPassword.value = ''
          })
      }
    }

    function showAlterarFoto() {
      alterarSenhaVisible.value = false,
        alterarFotoVisible.value = !alterarFotoVisible.value
    }

    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      usuario,
      vinculosList: [
        'Fixo',
        'Estagiário',
        'Temporário',
        'Freelancer',
      ],
      equipeOptions: [
        'Negócios',
        'Gestão',
        'Consultoria',
        'Conteúdo',
        'Design',
        'Web',
        'Projetos',
        'Comunicação',
        'RH',
        'Educação Corporativa',
      ],
      unidadeOptions: ['rpt.s', 'rpt.e', 'rpt.com', 'rpt.edu', 'grupo'],
      tab: ref('account_settings'),
      splitterModel: ref(20),
      profilePicture: ref(null),
      isOldPwd: ref(true),
      isNewPwd: ref(true),
      isNewRtPwd: ref(true),
      oldPassword,
      newPassword,
      newRtPassword,
      showAlterarSenha,
      showAlterarFoto,
      onResetPassword() {
        oldPassword.value = ''
        newPassword.value = ''
        newRtPassword.value = ''
      },
      onSubmitPassword,
    }
  }

});
