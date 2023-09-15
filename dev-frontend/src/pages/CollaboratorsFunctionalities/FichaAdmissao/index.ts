import { defineComponent, ref, computed, onBeforeMount, watch } from 'vue';
import { Notify } from 'quasar';
import { apiBackendLaravel } from 'boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'FichaAdmissao',

  setup() {
    const userStore = useUserStore();
    const appStore = useAppStore();
    const token = userStore.user.token;
    const route = useRoute();
    const router = useRouter();
    const rows = ref([{
      id: String
    }]);
    const columns = [
      {
        name: 'id',
        align: 'left',
        label: 'ID',
        field: 'id',
        sortable: true,
      },
      {
        name: 'name',
        align: 'left',
        label: 'Nome',
        field: 'name',
        sortable: true,
      },
      {
        name: 'email',
        align: 'left',
        label: 'E-mail Corporativo',
        field: 'email',
        sortable: true,
      },
      {
        name: 'vinculo',
        align: 'left',
        label: 'Vínculo',
        field: 'vinculo',
        sortable: false
      },
      {
        name: 'data_contratacao',
        align: 'left',
        label: 'Data de Contratação',
        field: 'data_contratacao',
        sortable: false
      },
      {
        name: 'cargo',
        align: 'left',
        label: 'Cargo',
        field: 'cargo',
        sortable: false
      },
      {
        name: 'equipe',
        align: 'left',
        label: 'Equipe',
        field: 'equipe',
        sortable: false
      },
      {
        name: 'unidade',
        align: 'left',
        label: 'Unidade',
        field: 'unidade',
        sortable: false
      },
      {
        name: 'status_formulario_admissao',
        align: 'center',
        label: 'Status do Formulário',
        field: 'status_formulario_admissao',
        sortable: true,
      },
      {
        name: 'created_at',
        align: 'center',
        label: 'Criado Em',
        field: 'created_at',
        sortable: true,
      },
      {
        name: 'updated_at',
        align: 'center',
        label: 'Atualizado Em',
        field: 'updated_at',
        sortable: true,
      },
      {
        name: 'acoes',
        align: 'center',
        label: 'Ações',
        field: 'acoes',
        sortable: false,
      },
    ];
    const loadingUsersTable = ref(false);

    function getUsers() {
      loadingUsersTable.value = true;
      let routeApi = ''
      if (route.params.id) {
        routeApi = 'users/' + route.params.id
      } else {
        routeApi = 'users'
      }
      apiBackendLaravel
        .get(routeApi, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          if (route.params.id) {
            rows.value = [response.data.data]
          } else {
            rows.value = response.data.data.filter((item: { vinculo: string }) => {
              return item.vinculo !== null && item.vinculo !== 'Estagiário'
            })
          }
          loadingUsersTable.value = false;
        })
        .catch((error) => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'bottom',
            message: error,
            icon: 'warning',
          });
        });
    }

    function removeIdParam() {
      if (route.params.id) {
        route.params.id = ''
        router.push({ name: 'Ficha de Admissão - RH' })
      }
      getUsers();
    }

    onBeforeMount(() => {
      getUsers();
    });

    watch(() => route.params.id, () => {
      getUsers();
    });

    function gerarContrato(id: BigInteger, vinculo: string) {
      const notificacaoContrato = Notify.create({
        progress: true,
        group: false,
        spinner: true,
        timeout: 0,
        message: 'O Contrato esta sendo gerado, por favor aguarde...'
      })
      const payload = {
        id: id,
        vinculo: vinculo
      }
      apiBackendLaravel
        .get('gerar-contrato/filename', {
          params: payload,
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          const filename = response.data.filename
          apiBackendLaravel
            .get('gerar-contrato/', {
              params: payload,
              responseType: 'blob',
              headers: {
                Authorization: 'Bearer ' + token,
              },
            })
            .then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', filename);
              document.body.appendChild(link);
              link.click();
              notificacaoContrato({
                type: 'positive',
                icon: 'done',
                spinner: false,
                message: 'Contrato gerado com sucesso!',
                timeout: 2500
              })
            })
        })

    }

    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      //Tabela
      getUsers,
      rows,
      columns,
      loadingUsersTable,
      filterUsersTable: ref(''),
      //Ações => Gerar Contrato
      gerarContrato,
      removeIdParam
    };
  },
});
