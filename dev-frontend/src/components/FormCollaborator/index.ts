import { defineComponent, ref, onMounted } from 'vue';
import { apiLocalidades, apiCEP, apiBanks } from 'boot/axios';
import { Notify } from 'quasar';
import { apiBackendLaravel } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';
//import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'FormCollaborator',

  setup() {
    //const router = useRouter();
    const ufList = ref(null);
    const citiesList = ref(null);
    const userStore = useUserStore();
    const token = userStore.user.token;
    const userPermission = userStore.user.permissions;
    //let formSentStatus = userStore.user.statusFormularioAdmissao;

    //Form Inputs
    const nome = ref('');
    const cpf = ref('');
    //const rg = ref('');
    const emailCorporativo = ref('');
    const emailPessoal = ref('');
    const contato = ref('');
    const estado = ref('');
    const cidade = ref('');
    const cep = ref('');
    const bairro = ref('');
    const rua = ref('');
    const numero = ref('');
    const complemento = ref('');
    const cargo = ref('');
    const dataContratacao = ref('');
    const unidade = ref('');
    const nivel = ref('');
    const salarioBase = ref('');
    const equipe = ref('');
    const cnpj = ref('');
    const razaoSocial = ref('');
    const time = ref('');
    const vinculo = ref('');
    /*const trilhaTicket = ref(null);
    const trilhaValue = ref('');
    const trilhaTicketOptions = [
      {
        label: 'Vale Alimentação (mercados e hortifrútis)',
        value: 'VA',
      },
      {
        label: 'Vale Restaurante (restaurantes, padarias e lanchonetes)',
        value: 'VR',
      },
      {
        label:
          'Auxílio Home Office (para pagamento de contas, água, luz, internet ou gás)',
        value: 'AuxHome',
      },
      {
        label:
          'Bem -Estar (farmácias e perfumarias que são parceiras da ticket)',
        value: 'BemEstar',
      },
      {
        label:
          'Educação (para pagamento de mensalidade de cursos, parceiro ticket)',
        value: 'Educacao',
      },
    ];
    const VA = ref('');
    const VR = ref('');
    const AuxHome = ref('');
    const BemEstar = ref('');
    const Educacao = ref('');*/
    const banco = ref('');
    const agencia = ref('');
    const conta = ref('');
    const digito = ref('');
    const nomeMae = ref('');
    const nomePai = ref('');
    const instituicaoEnsino = ref('');
    const instituicaoEnsinoEnd = ref('');
    const curso = ref('');
    const matricula = ref('');
    const semestre = ref('');
    const periodo = ref('');

    function getPartialFormData() {
      nome.value = userStore.user.name
      emailCorporativo.value = userStore.user.email_corporativo
      vinculo.value = userStore.user.vinculo
      dataContratacao.value = userStore.user.data_contratacao
      cargo.value = userStore.user.cargo
      equipe.value = userStore.user.equipe
      unidade.value = userStore.user.unidade
      nivel.value = userStore.user.nivel
      salarioBase.value = userStore.user.salarioBase
    }

    async function autoCompleteAddress(cep: number) {
      await apiCEP.get(cep.toString()).then((response) => {
        bairro.value = response.data.neighborhood;
        rua.value = response.data.street;
        estado.value = response.data.state;
        cidade.value = response.data.city;
      });
    }

    function goToBuscaCEP() {
      window.open('https://buscacepinter.correios.com.br/app/endereco/index.php', '_blank');
    }

    const bankOptions = ref([]);
    const bankOptionsAux = ref([]);
    async function getAllBankInfos() {
      await apiBanks.get('banks/v1')
        .then((response) => {
          bankOptions.value = response.data.map(
            (item: { isbp: string, fullName: string }) => {
              return {
                value: item.isbp,
                label: item.fullName,
                description: item.fullName,
              };
            }
          );
          bankOptionsAux.value = bankOptions.value
        })
    }

    onMounted(() => {
      getPartialFormData();
    });

    /*async function getUFs() {
      await apiLocalidades
        .get('estados')
        .then((response) => {
          ufList.value = response.data.map(
            (item: { id: bigint; sigla: string; nome: string }) => {
              return {
                value: item.id,
                label: item.sigla,
                description: item.nome,
              };
            }
          );
        })
        .catch((error) => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'top',
            message: 'Loading failed' + error,
            icon: 'warning',
          });
        });
    }*/

    async function getCities(estado: { label: string }) {
      cidade.value = ''
      cep.value = ''
      bairro.value = ''
      rua.value = ''
      numero.value = ''
      complemento.value = ''
      await apiLocalidades
        .get('estados/' + estado.label + '/municipios')
        .then((response) => {
          citiesList.value = response.data.map(
            (item: { id: bigint; nome: string }) => {
              return {
                value: item.id,
                label: item.nome,
                description: item.nome,
              };
            }
          );
        })
        .catch((error) => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'top',
            message: 'Loading failed' + error,
            icon: 'warning',
          });
        });
    }

    //Get today date as DD/MM/YYYY
    const today = new Date();
    //const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    //End today date

    const dataNascimento = ref('');
    const buttonLoading = ref(false);
    //End Form Inputs

    //Form Submit Function
    function onSubmit(
      cpf: string,
      //rg: string,
      emailPessoal: string,
      contato: string,
      dataNascimento: string,
      cep: string,
      estado: string,
      cidade: string,
      bairro: string,
      rua: string,
      numero: string,
      complemento: string,
      cnpj: string,
      razaoSocial: string,
      groupDivulgaAniversario: string,
      groupAutorizaImagem: string,
      groupGenero: string,
      groupOrientacaoSexual: string,
      groupEtnia: string,
      groupEscolaridade: string,
      groupFilhos: string,
      groupPCD: string,
      groupPet: string,
      groupSignos: string,
      time: string,
      /*VA: string,
      VR: string,
      AuxHome: string,
      BemEstar: string,
      Educacao: string,*/
      banco: string,
      agencia: string,
      conta: string,
      digito: string,
      nomeMae: string,
      nomePai: string,
      instituicaoEnsino: string,
      instituicaoEnsinoEnd: string,
      curso: string,
      matricula: string,
      semestre: string,
      periodo: string,
    ) {
      buttonLoading.value = true;
      const user = userStore.user
      const id = user.id
      /*function calcularIdade(dtNasicmento: Date) {
        const ageDifMs = Date.now() - dtNasicmento.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }*
      function pegarAnoContratacao(str: string): string {
        return str.substring(str.length - 4, str.length);
      }*/
      const formData = new FormData();
      const sheetName = ref('')
      if (vinculo.value == 'Fixo' || vinculo.value == 'Estagiário') {
        sheetName.value = 'banco do colaborador';
      } else if (vinculo.value == 'Temporário' || vinculo.value == 'Freelancer') {
        sheetName.value = 'rede';
      }
      formData.append('nome completo', user.name)
      formData.append('vínculo', user.vinculo)
      formData.append('', user.nivel)
      formData.append('', user.salarioBase)
      formData.append('status', user.statusColaborador == '1' ? 'Ativo' : 'Inativo')
      formData.append('Sexo', groupGenero)
      formData.append('data de nascimento', dataNascimento)
      formData.append('CPF', cpf)
      //formData.append('RG', rg)
      formData.append('celular', contato)
      formData.append('e-mail', user.email_corporativo)
      formData.append('endereço', rua + ', ' + numero + ' - ' + complemento + ' - CEP: ' + cep)
      formData.append('cidade', cidade)
      formData.append('UF', estado)
      formData.append('data de contratação', user.data_contratacao)
      /*formData.append('VA', VA)
      formData.append('VR', VR)
      formData.append('auxílio home office', AuxHome)*/
      formData.append('cargo', user.cargo)
      formData.append('área', user.equipe)
      formData.append('unidade', user.unidade)
      formData.append('nivel', user.nivel)
      formData.append('salarioBase', user.salarioBase)
      formData.append('gênero', groupGenero)
      formData.append('orientação sexual', groupOrientacaoSexual)
      formData.append('filhos', groupFilhos)
      formData.append('escolaridade', groupEscolaridade)
      formData.append('etnia', groupEtnia)
      formData.append('pcd', groupPCD)
      formData.append('', nomeMae)
      formData.append('', nomePai)
      formData.append('', instituicaoEnsino)
      formData.append('', instituicaoEnsinoEnd)
      formData.append('', curso)
      formData.append('', matricula)
      formData.append('', semestre)
      formData.append('', periodo)
      formData.append('sheetName', sheetName.value);
      fetch(
        'https://script.google.com/macros/s/AKfycbzyXWV_r5qccTY2HCfg6n_j3-B5FQfiEWCDzZDEWOEiSnpVJiJjL7R4HM-XScUaHsCc0w/exec',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log('Error:', error);
        });
      const payload = {
        email_pessoal: emailPessoal,
        data_nascimento: dataNascimento,
        cpf: cpf,
        //rg: rg,
        cep: cep,
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        uf: estado,
        celular: contato,
        cnpj: cnpj,
        razao_social: razaoSocial,
        is_divulga_aniversario: groupDivulgaAniversario,
        is_autoriza_imagem: groupAutorizaImagem,
        genero: groupGenero,
        orientacao_sexual: groupOrientacaoSexual,
        etnia: groupEtnia,
        escolaridade: groupEscolaridade,
        filhos: groupFilhos,
        pcd: groupPCD,
        pet: groupPet,
        signo: groupSignos,
        time: time,
        /*va: VA,
        vr: VR,
        aux_home_office: AuxHome,
        aux_bem_estar: BemEstar,
        aux_educacao: Educacao,*/
        banco: banco,
        agencia: agencia,
        conta: conta,
        digito: digito,
        status_formulario_admissao: 0,
        nome_mae: nomeMae,
        nome_pai: nomePai,
        instituicao_ensino: instituicaoEnsino,
        instituicao_ensino_endereco: instituicaoEnsinoEnd,
        curso: curso,
        matricula: matricula,
        semestre: semestre,
        periodo: periodo,
      }
      apiBackendLaravel
        .put('users/' + id, payload, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          if (response) {
            buttonLoading.value = false;
            //userStore.changestatusFormularioAdmissao('1');
            //formSentStatus = userStore.user.statusFormularioAdmissao;
            const payloadNotification = {
              sent_by: 'Sistema',
              receiver_id: null,
              visible_to_permissions: 'rh',
              title: 'Ficha Admissão',
              message: nome.value + ' enviou a Ficha de Admissão',
              button_route: '/rh/ficha-admissao/' + id,
              button_label: 'visualizar',
            }
            apiBackendLaravel
              .post('notifications', payloadNotification, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
            Notify.create({
              progress: true,
              color: 'positive',
              position: 'bottom',
              message: 'Formulário enviado com sucesso!',
              icon: 'check',
            });
            //router.push('/dashboard');
          }
        })
        .catch(() => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'bottom',
            message: 'O email "' + emailPessoal + '" já esta sendo utilizado!',
            icon: 'warning',
          });
          buttonLoading.value = false;
        })
    }
    //End Form Submit Function

    /*const checkedTrilhaInputs = ref(false);
    function checkTrilhaValue(
      VA: string,
      VR: string,
      AuxHome: string,
      BemEstar: string,
      Educacao: string
    ) {
      const sum =
        Number(VA) +
        Number(VR) +
        Number(AuxHome) +
        Number(BemEstar) +
        Number(Educacao);
      if (sum > 500) {
        Notify.create({
          progress: true,
          color: 'yellow-8',
          textColor: 'dark',
          position: 'bottom',
          message: 'A soma das trilhas passou de R$500,00',
          icon: 'warning',
        });
        checkedTrilhaInputs.value = false;
      } else if (sum < 500) {
        Notify.create({
          progress: true,
          color: 'yellow-8',
          textColor: 'dark',
          position: 'bottom',
          message: 'A soma das trilhas não atingiu os R$500,00',
          icon: 'warning',
        });
        checkedTrilhaInputs.value = false;
      } else if (sum == 500) {
        Notify.create({
          progress: true,
          color: 'positive',
          position: 'bottom',
          message: 'A soma das trilhas atingiu os R$500,00!',
          icon: 'check',
        });
        checkedTrilhaInputs.value = true;
      }
    }*/

    return {
      //formSentStatus,
      autoCompleteAddress,
      goToBuscaCEP,
      getAllBankInfos,
      ufList,
      //getUFs,
      getCities,
      citiesList,
      //Form Submit Function
      onSubmit,
      //Form Inputs
      nome,
      cpf,
      //rg,
      emailCorporativo,
      emailPessoal,
      dataNascimento,
      dataContratacao,
      contato,
      cep,
      bairro,
      rua,
      numero,
      complemento,
      cidade,
      estado,
      cargo,
      unidade,
      equipe,
      vinculo,
      nivel,
      salarioBase,
      cnpj,
      razaoSocial,
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
      groupOrientacaoSexual: ref(''),
      optionsOrientacaoSexual: [
        {
          label: 'Heterossexual',
          value: 'Heterossexual',
        },
        {
          label: 'Homossexual',
          value: 'Homossexual',
        },
        {
          label: 'Bissexual',
          value: 'Bissexual',
        },
        {
          label: 'Assexual',
          value: 'Assexual',
        },
        {
          label: 'Pansexual',
          value: 'Pansexual',
        },
        {
          label: 'Experimentando',
          value: 'Experimentando',
        },
        {
          label: 'Prefiro não responder',
          value: 'Prefiro não responder',
        },
      ],
      groupGenero: ref(''),
      optionsGeneros: [
        {
          label: 'Mulher Cisgênero',
          value: 'Mulher Cisgênero',
        },
        {
          label: 'Homem Cisgênero',
          value: 'Homem Cisgênero',
        },
        {
          label: 'Mulher Transgênero',
          value: 'Mulher Transgênero ',
        },
        {
          label: 'Homem Transgênero',
          value: 'Homem Transgênero ',
        },
        {
          label: 'Não-binário',
          value: 'Não-binário',
        },
        {
          label: 'Prefiro não responder',
          value: 'Prefiro não responder',
        },
      ],
      groupEtnia: ref(''),
      optionsEtnia: [
        {
          label: 'Amarelo',
          value: 'Amarelo',
        },
        {
          label: 'Branco',
          value: 'Branco',
        },
        {
          label: 'Indígena',
          value: 'Indígena',
        },
        {
          label: 'Pardo',
          value: 'Pardo',
        },
        {
          label: 'Preto',
          value: 'Preto',
        },
        {
          label: 'Prefiro não responder',
          value: 'Prefiro não responder',
        },
      ],
      groupEscolaridade: ref(''),
      optionsEscolaridade: [
        {
          label: 'Ensino médio',
          value: 'Ensino médio',
        },
        {
          label: 'Graduação',
          value: 'Graduação',
        },
        {
          label: 'Mestrado',
          value: 'Mestrado',
        },
        {
          label: 'Doutorado',
          value: 'Doutorado',
        },
        {
          label: 'MBA / Especialização / Pós Graduação',
          value: 'MBA / Especialização / Pós Graduação',
        },
      ],
      groupPCD: ref(''),
      optionsPCD: [
        {
          label: 'Sim',
          value: 'Sim',
        },
        {
          label: 'Não',
          value: 'Não',
        },
      ],
      groupFilhos: ref(''),
      optionsFilhos: [
        {
          label: 'Sim',
          value: 'Sim',
        },
        {
          label: 'Não',
          value: 'Não',
        },
      ],
      groupPet: ref(''),
      optionsPet: [
        {
          label: 'Sim',
          value: 'Sim',
        },
        {
          label: 'Não',
          value: 'Não',
        },
      ],
      groupSignos: ref(''),
      optionsSignos: [
        {
          label: 'Aries',
          value: 'Aries'
        },
        {
          label: 'Touro',
          value: 'Touro'
        },
        {
          label: 'Gêmeos',
          value: 'Gêmeos'
        },
        {
          label: 'Câncer',
          value: 'Câncer'
        },
        {
          label: 'Leão',
          value: 'Leão'
        },
        {
          label: 'Virgem',
          value: 'Virgem'
        },
        {
          label: 'Libra',
          value: 'Libra'
        },
        {
          label: 'Escorpião',
          value: 'Escorpião'
        },
        {
          label: 'Sagitário',
          value: 'Sagitário'
        },
        {
          label: 'Capricórnio',
          value: 'Capricórnio'
        },
        {
          label: 'Aquário',
          value: 'Aquário'
        },
        {
          label: 'Peixes',
          value: 'Peixes'
        },
        {
          label: 'Não acredito em signos',
          value: 'Não acredito em signos'
        }
      ],
      groupDivulgaAniversario: ref(''),
      optionsDivulgaAniversario: [
        {
          label: 'Sim',
          value: 'Sim',
        },
        {
          label: 'Não',
          value: 'Não',
        },
        {
          label: 'Sim, mas sem e-mail no dia',
          value: 'Sim, mas sem e-mail no dia',
        },
      ],
      groupAutorizaImagem: ref(''),
      optionsAutorizaImagem: [
        {
          label: 'Sim',
          value: 'Sim',
        },
        {
          label: 'Não',
          value: 'Não',
        },
      ],
      //trilhaTicket,
      //trilhaTicketOptions,
      //trilhaValue,
      time,
      //VA,
      //VR,
      //AuxHome,
      //BemEstar,
      //Educacao,
      bankOptions,
      bankOptionsAux,
      banco,
      agencia,
      conta,
      digito,
      nomeMae,
      nomePai,
      instituicaoEnsino,
      instituicaoEnsinoEnd,
      curso,
      matricula,
      semestre,
      periodo,
      periodoOptions: [
        'Manhã',
        'Vespertino',
        'Noturno'
      ],
      //checkTrilhaValue,
      //checkedTrilhaInputs,
      buttonLoading,
      userPermission,
      filterFn(val: string, update: (cb: () => void) => void) {
        update(() => {
          const needle = val.toLowerCase()
          bankOptions.value = bankOptionsAux.value.filter(
            (v: { label: string }) =>
              v.label.toLowerCase().indexOf(needle) > -1
          );
        })
      }
    };
  },

  async created() {
    //await this.getUFs();
    await this.getAllBankInfos();
  },
});
