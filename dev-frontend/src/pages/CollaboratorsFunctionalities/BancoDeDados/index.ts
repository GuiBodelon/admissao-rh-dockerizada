import { defineComponent, computed, ref, onMounted } from 'vue';
import { Notify } from 'quasar';
import { apiBackendLaravel } from 'boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useAppStore } from 'src/stores/app-store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'BancoDeDados',

  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const appStore = useAppStore();
    const token = userStore.user.token;
    const rows = ref([]);
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
        label: 'Email Corporativo',
        field: 'email',
        sortable: true,
      },
      {
        name: 'email_pessoal',
        align: 'left',
        label: 'Email Pessoal',
        field: 'email_pessoal',
        sortable: true,
      },
      {
        name: 'data_nascimento',
        align: 'left',
        label: 'Data de Nascimento',
        field: 'data_nascimento',
        sortable: true,
      },
      /*{
        name: 'rg',
        align: 'left',
        label: 'RG',
        field: 'rg',
        sortable: true,
      },*/
      {
        name: 'cpf',
        align: 'left',
        label: 'CPF',
        field: 'cpf',
        sortable: true,
      },
      {
        name: 'cep',
        align: 'left',
        label: 'CEP',
        field: 'cep',
        sortable: true,
      },
      {
        name: 'rua',
        align: 'left',
        label: 'Rua',
        field: 'rua',
        sortable: true,
      },
      {
        name: 'numero',
        align: 'left',
        label: 'Número',
        field: 'numero',
        sortable: true,
      },
      {
        name: 'complemento',
        align: 'left',
        label: 'Complemento',
        field: 'complemento',
        sortable: true,
      },
      {
        name: 'bairro',
        align: 'left',
        label: 'Bairro',
        field: 'bairro',
        sortable: true,
      },
      {
        name: 'cidade',
        align: 'left',
        label: 'Cidade',
        field: 'cidade',
        sortable: true,
      },
      {
        name: 'uf',
        align: 'left',
        label: 'UF',
        field: 'uf',
        sortable: true,
      },
      {
        name: 'celular',
        align: 'left',
        label: 'Celular',
        field: 'celular',
        sortable: true,
      },
      {
        name: 'cnpj',
        align: 'left',
        label: 'CNPJ',
        field: 'cnpj',
        sortable: true,
      },
      {
        name: 'razao_social',
        align: 'left',
        label: 'Razão Social',
        field: 'razao_social',
        sortable: true,
      },
      {
        name: 'data_contratacao',
        align: 'left',
        label: 'Data de Contratação',
        field: 'data_contratacao',
        sortable: true,
      },
      {
        name: 'cargo',
        align: 'left',
        label: 'Cargo',
        field: 'cargo',
        sortable: true,
      },
      {
        name: 'equipe',
        align: 'left',
        label: 'Equipe',
        field: 'equipe',
        sortable: true,
      },
      {
        name: 'unidade',
        align: 'left',
        label: 'Unidade',
        field: 'unidade',
        sortable: true,
      },
      {
        name: 'vinculo',
        align: 'left',
        label: 'Vínculo',
        field: 'vinculo',
        sortable: true,
      },
      {
        name: 'nivel',
        align: 'left',
        label: 'Nível',
        field: 'nivel',
        sortable: true,
      },
      {
        name: 'salario_base',
        align: 'left',
        label: 'Salário Base',
        field: 'salario_base',
        sortable: true,
      },
      {
        name: 'is_divulga_aniversario',
        align: 'left',
        label: 'Divulga Aniversário',
        field: 'is_divulga_aniversario',
        sortable: true,
      },
      {
        name: 'is_autoriza_imagem',
        align: 'left',
        label: 'Autoriza Imagem',
        field: 'is_autoriza_imagem',
        sortable: true,
      },
      {
        name: 'genero',
        align: 'left',
        label: 'Gênero',
        field: 'genero',
        sortable: true,
      },
      {
        name: 'orientacao_sexual',
        align: 'left',
        label: 'Orientação Sexual',
        field: 'orientacao_sexual',
        sortable: true,
      },
      {
        name: 'etnia',
        align: 'left',
        label: 'Etnia',
        field: 'etnia',
        sortable: true,
      },
      {
        name: 'escolaridade',
        align: 'left',
        label: 'Escolaridade',
        field: 'escolaridade',
        sortable: true,
      },
      {
        name: 'filhos',
        align: 'left',
        label: 'Filhos',
        field: 'filhos',
        sortable: true,
      },
      {
        name: 'pcd',
        align: 'left',
        label: 'PCD',
        field: 'pcd',
        sortable: true,
      },
      {
        name: 'pet',
        align: 'left',
        label: 'Pet',
        field: 'pet',
        sortable: true,
      },
      {
        name: 'signo',
        align: 'left',
        label: 'Signo',
        field: 'signo',
        sortable: true,
      },
      {
        name: 'time',
        align: 'left',
        label: 'Time',
        field: 'time',
        sortable: true,
      },
      {
        name: 'nome_mae',
        align: 'left',
        label: 'Nome da Mãe',
        field: 'nome_mae',
        sortable: true,
      },
      {
        name: 'nome_pai',
        align: 'left',
        label: 'Nome do Pai',
        field: 'nome_pai',
        sortable: true,
      },
      {
        name: 'instituicao_ensino',
        align: 'left',
        label: 'Instituição de Ensino',
        field: 'instituicao_ensino',
        sortable: true,
      },
      {
        name: 'instituicao_ensino_endereco',
        align: 'left',
        label: 'Endereço da Instituição de Ensino',
        field: 'instituicao_ensino_endereco',
        sortable: true,
      },
      {
        name: 'curso',
        align: 'left',
        label: 'Curso',
        field: 'curso',
        sortable: true,
      },
      {
        name: 'matricula',
        align: 'left',
        label: 'Matrícula',
        field: 'matricula',
        sortable: true,
      },
      {
        name: 'semestre',
        align: 'left',
        label: 'Semestre',
        field: 'semestre',
        sortable: true,
      },
      {
        name: 'periodo',
        align: 'left',
        label: 'Período',
        field: 'periodo',
        sortable: true,
      },
      /*
      {
        name: 'va',
        align: 'left',
        label: 'VA',
        field: 'va',
        sortable: true,
      },
      {
        name: 'vr',
        align: 'left',
        label: 'VR',
        field: 'vr',
        sortable: true,
      },
      {
        name: 'aux_home_office',
        align: 'left',
        label: 'Auxílio Home Office',
        field: 'aux_home_office',
        sortable: true,
      },
      {
        name: 'aux_bem_estar',
        align: 'left',
        label: 'Auxílio Bem Estar',
        field: 'aux_bem_estar',
        sortable: true,
      },
      {
        name: 'aux_educacao',
        align: 'left',
        label: 'Auxílio Educação',
        field: 'aux_educacao',
        sortable: true,
      },*/
      {
        name: 'status_colaborador',
        align: 'center',
        label: 'Status Colaborador',
        field: 'status_colaborador',
        sortable: true,
      },
      {
        name: 'data_demissao',
        align: 'left',
        label: 'Data de Demissão',
        field: 'data_demissao',
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
    ]
    const loadingUsersTable = ref(false);
    const modalChangeUserStatus = ref(false);
    const currentUserStatus = ref(undefined);
    const statusDataAdmissao = ref('');
    const statusDataDemissao = ref('');


    function getUsers() {
      loadingUsersTable.value = true;
      apiBackendLaravel
        .get('/users', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          if (response.data) {
            rows.value = response.data.data.filter(
              (item: { vinculo: string }) => item.vinculo !== null
            );
            loadingUsersTable.value = false;
          }
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

    function changeUserStatus(id: string, status: number) {
      const payload = {
        status_colaborador: status
      }
      apiBackendLaravel
        .put('users/' + id, payload, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then(() => {
          getUsers()
        })
    }

    function updateColaborador(id: string) {
      router.push('/configuracoes/editar-usuario/' + id)
    }

    onMounted(() => {
      getUsers();
    });

    return {
      isDarkActive: computed(() => appStore.isDarkActive),
      token,
      rows,
      columns,
      loadingUsersTable,
      filterUsersTable: ref(''),
      getUsers,
      updateColaborador,
      modalChangeUserStatus,
      changeUserStatus,
      currentUserStatus,
      statusDataAdmissao,
      statusDataDemissao
    }
  }
})
