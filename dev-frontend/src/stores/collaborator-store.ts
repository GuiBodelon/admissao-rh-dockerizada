import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCollaboratorStore = defineStore(
  'collaborator',
  () => {
    const collaborator = ref({
      id: '',
      nome: '',
      email_corporativo: '',
      vinculo: '',
      data_contratacao: '',
      cargo: '',
      equipe: '',
      unidade: '',
      statusColaborador: '',
      statusFormularioAdmissao: ''
    });

    const changeId = (newId: string) => {
      collaborator.value.id = newId;
    };

    const changeEmailCorporativo = (newEmailCorporativo: string) => {
      collaborator.value.email_corporativo = newEmailCorporativo;
    };

    const changeStatus = (newStatusColaborador: string) => {
      collaborator.value.statusColaborador = newStatusColaborador;
    };

    const changeSent = (newStatusFormularioAdmissao: string) => {
      collaborator.value.statusFormularioAdmissao = newStatusFormularioAdmissao;
    };

    const clearStore = () => {
      collaborator.value.id = ''
      collaborator.value.nome = ''
      collaborator.value.email_corporativo = ''
      collaborator.value.vinculo = ''
      collaborator.value.data_contratacao = ''
      collaborator.value.cargo = ''
      collaborator.value.equipe = ''
      collaborator.value.unidade = ''
      collaborator.value.statusColaborador = ''
      collaborator.value.statusFormularioAdmissao = ''
    }

    const updateWholeStore = (
      newId: string,
      newNome: string,
      newEmailcorporativo: string,
      newVinculo: string,
      newDatacontratacao: string,
      newCargo: string,
      newEquipe: string,
      newUnidade: string,
      newStatusColaborador: string,
      newStatusFormularioAdmissao: string
    ) => {
      collaborator.value.id = newId
      collaborator.value.nome = newNome
      collaborator.value.email_corporativo = newEmailcorporativo
      collaborator.value.vinculo = newVinculo
      collaborator.value.data_contratacao = newDatacontratacao
      collaborator.value.cargo = newCargo
      collaborator.value.equipe = newEquipe
      collaborator.value.unidade = newUnidade
      collaborator.value.statusColaborador = newStatusColaborador
      collaborator.value.statusFormularioAdmissao = newStatusFormularioAdmissao
    }

    return {
      collaborator,
      changeId,
      changeEmailCorporativo,
      changeStatus,
      changeSent,
      clearStore,
      updateWholeStore
    };
  },
  {
    persist: true,
  }
);
