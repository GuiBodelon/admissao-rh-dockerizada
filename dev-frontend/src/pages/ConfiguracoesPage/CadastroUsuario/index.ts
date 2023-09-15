import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import { apiBackendLaravel } from 'boot/axios';

export default defineComponent({
  name: 'CadastroUsuario',

  setup() {
    const userStore = useUserStore();
    const userPermission = userStore.user.permissions;
    const token = userStore.user.token;

    const nome = ref('');
    const emailCorporativo = ref('');
    const vinculo = ref('');
    const salarioBase = ref('');
    const nivel = ref('');
    const cargo = ref('');
    const equipe = ref('');
    const unidade = ref('');
    //Get today date as DD/MM/YYYY
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    //End today date
    const dataContratacao = ref(day + '/' + month + '/' + year);


    function addUser(
      nome: string,
      emailCorporativo: string,
      vinculo: string,
      nivel: string,
      salarioBase: string,
      dataContratacao: string,
      cargo: string,
      equipe: string,
      unidade: string) {
      const payload = {
        name: nome.trim(),
        email: emailCorporativo.trim() + '@gruporeport.com.br',
        password: '123'.trim(),
        confirm_password: '123'.trim(),
        vinculo: vinculo,
        nivel: nivel,
        salario_base: salarioBase,
        data_contratacao: dataContratacao,
        cargo: cargo,
        equipe: equipe,
        unidade: unidade,
        permission: 'user'
      };
      apiBackendLaravel
        .post('auth/register', payload, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          Notify.create({
            progress: true,
            color: 'positive',
            position: 'bottom',
            message: response.data.message,
            icon: 'cloud_done',
          });
        })
        .catch(() => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'bottom',
            message: 'O email "' + emailCorporativo + '" já esta sendo utilizado!',
            icon: 'warning',
          });
        })
        .finally(() => {
          nome = ''
          emailCorporativo = ''
          vinculo = ''
          salarioBase= ''
          nivel = ''
          cargo = ''
          equipe = ''
          unidade = ''
        });
    }
    return {
      userPermission,
      tab: ref('user'),
      splitterModel: ref(20),
      addUser,
      nome,
      emailCorporativo,
      vinculo,
      vinculosList: [
        'Fixo',
        'Estagiário',
        'Temporário',
        'Freelancer',
      ],
      salarioBase,
      nivel,
      nivelList: [
        'Júnior',
        'Pleno',
        'Sênior',
      ],
      cargo,
      equipe,
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
      unidade,
      unidadeOptions: ['rpt.s', 'rpt.e', 'rpt.com', 'rpt.edu', 'grupo'],
      //Format DatePicker
      myLocale: {
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        months:
          'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
          ),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
          '_'
        ),
        firstDayOfWeek: 1,
        format24h: true,
        pluralDay: 'dias',
      },
      dataContratacao
    }
  },
});
