import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: '',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apiLocalidades = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apiCEP = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apiBanks = axios.create({
  baseURL: 'https://brasilapi.com.br/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apiBackendLaravel = axios.create({
  baseURL: 'https://api.gruporeport.com.br/api',
  /*headers: {
    'Access-Control-Allow-Origin': '*',
  },*/
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  app.config.globalProperties.$apiLocalidades = apiLocalidades;
  app.config.globalProperties.$apiCEP = apiCEP;
  app.config.globalProperties.$apiBanks = apiBanks;
  app.config.globalProperties.$apiBackendLaravel = apiBackendLaravel;
});

export { axios, api, apiLocalidades, apiCEP, apiBanks, apiBackendLaravel };
