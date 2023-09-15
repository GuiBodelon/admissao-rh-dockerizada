import { defineComponent, ref } from 'vue';
//import { useUserStore } from 'src/stores/user-store';
//import { apiBackendLaravel } from 'boot/axios';

export default defineComponent({
  name: 'DashboardPage',

  setup() {
    //const userStore = useUserStore()
    //const token = userStore.user.token
    const users = ref([])
    const relacaoStatusColaborador = ref()

    /*async function getUsers() {
      await apiBackendLaravel.get('users', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then((response) => {
          const colaboradoresAtivos = response.data.filter(item => item.status_colaborador === 1).length;
          const colaboradoresInativos = response.data.filter(item => item.status_colaborador === 0).length;
          relacaoStatusColaborador.value = [{
            labels: ['Ativos', 'Inativos'],
            datasets: [
              {
                label: 'Número de Colaboradores',
                backgroundColor: '#f87979',
                data: [colaboradoresAtivos, colaboradoresInativos],
              },
            ],
          }];
        });
    }

    onMounted(() => {
      getUsers();
    })*/

    return {
      //getUsers,
      users,
      relacaoStatusColaborador,
    };
  },
});
