import { defineComponent, ref, onBeforeMount } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { apiBackendLaravel, apiCEP, apiBanks } from 'boot/axios';
import { useRoute, useRouter } from 'vue-router';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'EditarUsuario',

  setup() {
    const userStore = useUserStore();
    const token = userStore.user.token;
    const route = useRoute();
    const router = useRouter();
    const currentEditingUser = ref('');
    const id = ref('');
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const vinculo = ref('');
    const nivel = ref('');
    const salarioBase = ref('');
    const cnpj = ref('');
    const razaoSocial = ref('');
    const dataContratacao = ref('');
    const cargo = ref('');
    const equipe = ref('');
    const unidade = ref('');
    const emailPessoal = ref('');
    const dataNascimento = ref('');
    const cpf = ref('');
    const cep = ref('');
    const rua = ref('');
    const numero = ref('');
    const complemento = ref('');
    const bairro = ref('');
    const cidade = ref('');
    const uf = ref('');
    const celular = ref('');
    const isDivulgaAniversario = ref('');
    const isAutorizaImagem = ref('');
    const genero = ref('');
    const orientacaoSexual = ref('');
    const etnia = ref('');
    const escolaridade = ref('');
    const filhos = ref('');
    const pcd = ref('');
    const pet = ref('');
    const signo = ref('');
    const time = ref('');
    /*const va = ref('')
    const vr = ref('')
    const auxHomeOffice = ref('')
    const auxBemEstar = ref('')
    const auxEducacao = ref('')*/
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
    const nameInitials = ref('');
    const bankOptions = ref([]);
    const bankOptionsAux = ref([]);
    const loadingUser = ref(false);

    async function getAllBankInfos() {
      await apiBanks.get('banks/v1').then((response) => {
        bankOptions.value = response.data.map(
          (item: { isbp: string; fullName: string }) => {
            return {
              value: item.isbp,
              label: item.fullName,
              description: item.fullName,
            };
          }
        );
        bankOptionsAux.value = bankOptions.value;
      });
    }

    async function getCurrentEditingUser() {
      loadingUser.value = true;
      await apiBackendLaravel
        .get('/users/' + route.params.id, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          (currentEditingUser.value = response.data),
            (id.value = response.data.id),
            (name.value = response.data.name),
            (email.value = response.data.email),
            (password.value = response.data.password),
            (vinculo.value = response.data.vinculo),
            (nivel.value = response.data.nivel),
            (salarioBase.value = response.data.salarioBase),
            (cnpj.value = response.data.cnpj),
            (razaoSocial.value = response.data.razao_social),
            (dataContratacao.value = response.data.data_contratacao),
            (cargo.value = response.data.cargo),
            (equipe.value = response.data.equipe),
            (unidade.value = response.data.unidade),
            (emailPessoal.value = response.data.email_pessoal),
            (dataNascimento.value = response.data.data_nascimento),
            (cpf.value = response.data.cpf),
            (cep.value = response.data.cep),
            (rua.value = response.data.rua),
            (numero.value = response.data.numero),
            (complemento.value = response.data.complemento),
            (bairro.value = response.data.bairro),
            (cidade.value = response.data.cidade),
            (uf.value = response.data.uf),
            (celular.value = response.data.celular),
            (isDivulgaAniversario.value = response.data.is_divulga_aniversario),
            (isAutorizaImagem.value = response.data.is_autoriza_imagem),
            (genero.value = response.data.genero),
            (orientacaoSexual.value = response.data.orientacao_sexual),
            (etnia.value = response.data.etnia),
            (escolaridade.value = response.data.escolaridade),
            (filhos.value = response.data.filhos),
            (pcd.value = response.data.pcd),
            (pet.value = response.data.pet),
            (signo.value = response.data.signo),
            (time.value = response.data.time),
            /*va.value = response.data.va,
            vr.value = response.data.vr,
            auxHomeOffice.value = response.data.aux_home_office,
            auxBemEstar.value = response.data.aux_bem_estar,
            auxEducacao.value = response.data.aux_educacao,*/
            (banco.value = response.data.banco),
            (agencia.value = response.data.agencia),
            (conta.value = response.data.conta),
            (digito.value = response.data.digito),
            (nomeMae.value = response.data.nomeMae),
            (nomePai.value = response.data.nomePai),
            (instituicaoEnsino.value = response.data.instituicaoEnsino),
            (instituicaoEnsinoEnd.value = response.data.instituicaoEnsinoEnd),
            (curso.value = response.data.curso),
            (matricula.value = response.data.matricula),
            (semestre.value = response.data.semestre),
            (periodo.value = response.data.periodo);

          const words = response.data.name.split(' ');
          if (words.length > 1) {
            const firstLetterFirstWord = words[0].charAt(0);
            const firstLetterSecondWord = words[1].charAt(0);
            nameInitials.value = firstLetterFirstWord + firstLetterSecondWord;
          } else {
            nameInitials.value = name.value.charAt(0);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          loadingUser.value = false;
        });
    }

    async function autoCompleteAddress(cep: string) {
      bairro.value = '';
      rua.value = '';
      uf.value = '';
      cidade.value = '';
      await apiCEP.get(cep.toString()).then((response) => {
        bairro.value = response.data.neighborhood;
        rua.value = response.data.street;
        uf.value = response.data.state;
        cidade.value = response.data.city;
      });
    }

    function updateUser(
      name: string,
      cpf: string,
      emailPessoal: string,
      celular: string,
      dataNascimento: string,
      cep: string,
      uf: string,
      cidade: string,
      bairro: string,
      rua: string,
      numero: string,
      complemento: string,
      email: string,
      cargo: string,
      dataContratacao: string,
      equipe: string,
      unidade: string,
      vinculo: string,
      nivel: string,
      salarioBase: string,
      cnpj: string,
      razaoSocial: string,
      isDivulgaAniversario: string,
      isAutorizaImagem: string,
      banco: string,
      agencia: string,
      conta: string,
      digito: string,
      genero: string,
      orientacaoSexual: string,
      escolaridade: string,
      filhos: string,
      pcd: string,
      pet: string,
      signo: string,
      time: string,
      /*va: string,
      vr: string,
      auxHomeOffice: string,
      auxBemEstar: string,
      auxEducacao: string*/
      nomeMae: string,
      nomePai: string,
      instituicaoEnsino: string,
      instituicaoEnsinoEnd: string,
      curso: string,
      matricula: string,
      semestre: string,
      periodo: string,
    ) {
      const payload = {
        name: name,
        cpf: cpf,
        emailPessoal: emailPessoal + '@gruporeport.com.br',
        celular: celular,
        data_nascimento: dataNascimento,
        cep: cep,
        uf: uf,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        complemento: complemento,
        email: email,
        cargo: cargo,
        data_contratacao: dataContratacao,
        equipe: equipe,
        unidade: unidade,
        vinculo: vinculo,
        nivel: nivel,
        salario_base: salarioBase,
        cnpj: cnpj,
        razao_social: razaoSocial,
        is_divulga_aniversario: isDivulgaAniversario,
        is_autoriza_imagem: isAutorizaImagem,
        banco: banco,
        agencia: agencia,
        conta: conta,
        digito: digito,
        genero: genero,
        orientacao_sexual: orientacaoSexual,
        escolaridade: escolaridade,
        filhos: filhos,
        pcd: pcd,
        pet: pet,
        signo: signo,
        time: time,
        nome_mae: nomeMae,
        nome_pai: nomePai,
        instituicao_ensino: instituicaoEnsino,
        instituicao_ensino_endereco: instituicaoEnsinoEnd,
        curso: curso,
        matricula: matricula,
        semestre: semestre,
        periodo: periodo,
        /*va: va,
        vr: vr,
        aux_home_office: auxHomeOffice,
        aux_bem_estar: auxBemEstar,
        aux_educacao: auxEducacao*/
      };

      /*const sum =
        Number(va) +
        Number(vr) +
        Number(auxHomeOffice) +
        Number(auxBemEstar) +
        Number(auxEducacao);
      if (sum > 500) {
        Notify.create({
          progress: true,
          color: 'yellow-8',
          textColor: 'dark',
          position: 'bottom',
          message: 'A soma das trilhas passou de R$500,00',
          icon: 'warning',
        });
      } else if (sum < 500) {
        Notify.create({
          progress: true,
          color: 'yellow-8',
          textColor: 'dark',
          position: 'bottom',
          message: 'A soma das trilhas não atingiu os R$500,00',
          icon: 'warning',
        });
      } else if (sum == 500) {*/
      apiBackendLaravel
        .put('users/' + route.params.id, payload, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((response) => {
          if (response) {
            Notify.create({
              progress: true,
              color: 'green-6',
              position: 'bottom',
              message: response.data.message,
              icon: 'check',
            });
          }
        })
        .catch((response) => {
          Notify.create({
            progress: true,
            color: 'yellow-8',
            textColor: 'dark',
            position: 'top',
            message: 'Loading failed - ' + response.data,
            icon: 'warning',
          });
        })
        .finally(() => {
          router.push('/rh/banco-de-dados');
        });
      //}
    }

    function goToBuscaCEP() {
      window.open(
        'https://buscacepinter.correios.com.br/app/endereco/index.php',
        '_blank'
      );
    }

    function cancelEditing() {
      router.go(-1);
    }

    onBeforeMount(() => {
      getCurrentEditingUser();
      getAllBankInfos();
    });

    return {
      getCurrentEditingUser,
      getAllBankInfos,
      autoCompleteAddress,
      goToBuscaCEP,
      currentEditingUser,
      id,
      name,
      email,
      password,
      vinculo,
      nivel,
      salarioBase,
      cnpj,
      razaoSocial,
      dataContratacao,
      cargo,
      equipe,
      unidade,
      emailPessoal,
      dataNascimento,
      cpf,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      celular,
      isDivulgaAniversario,
      isAutorizaImagem,
      genero,
      orientacaoSexual,
      etnia,
      escolaridade,
      filhos,
      pcd,
      pet,
      signo,
      time,
      /*va,
      vr,
      auxHomeOffice,
      auxBemEstar,
      auxEducacao,*/
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
      nameInitials,
      bankOptions,
      filterFn(val: string, update: (cb: () => void) => void) {
        update(() => {
          const needle = val.toLowerCase();
          bankOptions.value = bankOptionsAux.value.filter(
            (v: { label: string }) => v.label.toLowerCase().indexOf(needle) > -1
          );
        });
      },
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
      unidadeOptions: ['rpt.s', 'rpt.e', 'rpt.com', 'rpt.edu', 'grupo'],
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
      vinculoOptions: ['Fixo', 'Estagiário', 'Temporário', 'Freelancer'],
      nivelOptions: ['Júnior', 'Pleno', 'Sênior'],
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
      optionsSignos: [
        {
          label: 'Aries',
          value: 'Aries',
        },
        {
          label: 'Touro',
          value: 'Touro',
        },
        {
          label: 'Gêmeos',
          value: 'Gêmeos',
        },
        {
          label: 'Câncer',
          value: 'Câncer',
        },
        {
          label: 'Leão',
          value: 'Leão',
        },
        {
          label: 'Virgem',
          value: 'Virgem',
        },
        {
          label: 'Libra',
          value: 'Libra',
        },
        {
          label: 'Escorpião',
          value: 'Escorpião',
        },
        {
          label: 'Sagitário',
          value: 'Sagitário',
        },
        {
          label: 'Capricórnio',
          value: 'Capricórnio',
        },
        {
          label: 'Aquário',
          value: 'Aquário',
        },
        {
          label: 'Peixes',
          value: 'Peixes',
        },
        {
          label: 'Não acredito em signos',
          value: 'Não acredito em signos',
        },
      ],
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
      updateUser,
      loadingUser,
      cancelEditing,
    };
  },
});
