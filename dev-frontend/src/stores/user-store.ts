import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({
      id: '',
      name: '',
      email_corporativo: '',
      vinculo: '',
      nivel: '',
      salarioBase: '',
      data_contratacao: '',
      cargo: '',
      equipe: '',
      unidade: '',
      statusColaborador: '',
      statusFormularioAdmissao: '',
      token: '',
      permissions: '',
      notificationsVisualized: false,
    });

    const changeName = (newName: string) => {
      user.value.name = newName;
    };

    const changeEmail = (newEmail: string) => {
      user.value.email_corporativo = newEmail;
    };

    const changeToken = (newToken: string) => {
      user.value.token = newToken;
    };

    const changePermission = (newPermission: string) => {
      user.value.permissions = newPermission;
    }

    const changestatusFormularioAdmissao = (newStatusFormularioAdmissao: string) => {
      user.value.statusFormularioAdmissao = newStatusFormularioAdmissao;
    }
    const changeNotificationsVisualized = (newNotificationsVisualized: boolean) => {
      user.value.notificationsVisualized = newNotificationsVisualized;
    }

    const clearStore = () => {
      user.value.id = ''
      user.value.name = ''
      user.value.email_corporativo = ''
      user.value.vinculo = ''
      user.value.nivel = ''
      user.value.salarioBase = ''
      user.value.data_contratacao = ''
      user.value.cargo = ''
      user.value.equipe = ''
      user.value.unidade = ''
      user.value.statusColaborador = ''
      user.value.statusFormularioAdmissao = ''
      user.value.token = ''
      user.value.permissions = ''
      user.value.notificationsVisualized = false
    }

    const updateWholeStore = (
      newId: string,
      newNome: string,
      newEmailCorporativo: string,
      newVinculo: string,
      newNivel: string,
      newSalarioBase: string,
      newDataContratacao: string,
      newCargo: string,
      newEquipe: string,
      newUnidade: string,
      newStatusColaborador: string,
      newStatusFormularioAdmissao: string,
      newToken: string,
      newPermissions: string
    ) => {
      user.value.id = newId
      user.value.name = newNome
      user.value.email_corporativo = newEmailCorporativo
      user.value.vinculo = newVinculo
      user.value.nivel = newNivel
      user.value.salarioBase = newSalarioBase
      user.value.data_contratacao = newDataContratacao
      user.value.cargo = newCargo
      user.value.equipe = newEquipe
      user.value.unidade = newUnidade
      user.value.statusColaborador = newStatusColaborador
      user.value.statusFormularioAdmissao = newStatusFormularioAdmissao
      user.value.token = newToken
      user.value.permissions = newPermissions
    }

    return {
      user,
      changeName,
      changeEmail,
      changeToken,
      changePermission,
      changestatusFormularioAdmissao,
      changeNotificationsVisualized,
      clearStore,
      updateWholeStore,
    };
  },
  {
    persist: true,
  }
);
