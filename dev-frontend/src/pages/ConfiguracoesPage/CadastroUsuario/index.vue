<template>
  <div class="row q-py-md">
    <q-form class="col-12 q-gutter-y-lg" @submit.prevent="
      addUser(
        nome,
        emailCorporativo,
        vinculo,
        nivel,
        salarioBase,
        dataContratacao,
        cargo,
        equipe,
        unidade
      )
      ">
      <div class="row q-gutter-x-lg">
        <q-input class="col-xl col-lg col-md col-sm-12 col-xs-12" v-model="nome" label="Nome" color="primary"
          text-color="dark" lazy-rules :rules="[
            (val) => (val && val.length > 0) || 'Informe o nome do colaborador',
          ]">
          <template v-slot:prepend>
            <q-icon name="badge" />
          </template>
        </q-input>

        <q-input class="col-xl col-lg col-md col-sm-12 col-xs-12" v-model="emailCorporativo" label="Email Corporativo"
          suffix="@gruporeport.com.br" lazy-rules :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Informe o email corporativo do colaborador',
          ]">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-select class="col-xl col-lg col-md col-sm-12 col-xs-12" v-model="vinculo" :options="vinculosList"
          label="Vínculo" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Informe o vínculo']">
          <template v-slot:prepend>
            <q-icon name="hub" />
          </template>
        </q-select>
      </div>

      <div class="row q-gutter-x-lg">
        <q-select class="col-xl col-lg col-md col-sm-12 col-xs-12" v-model="nivel" :options="nivelList" label="Nível" v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          lazy-rules :rules="[(val) => (val && val.length > 0) || 'Informe o nível']">
          <template v-slot:prepend>
            <q-icon name="contact_emergency" />
          </template>
        </q-select>

        <q-input v-model="salarioBase" label="Salário Base" name="salariobase" prefix="R$" v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          class="col-xl col-lg col-md col-sm-12 col-xs-12" mask="##.###,##" fill-mask="0" lazy-rules :rules="[
            (val) => (val && val.length > 0) || 'Informe o salário base',
          ]">
          <template v-slot:prepend>
            <q-icon name="payments" />
          </template>
        </q-input>

        <q-input label="Data de Contratação" v-model="dataContratacao" mask="##/##/####" :date="['dataContratacao']" v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          class="col-xl col-lg col-md col-sm-12 col-xs-12" lazy-rules :rules="[
            (val) => (val && val.length > 0) || 'Informe a data de contratação',
          ]">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="dataContratacao" subtitle="Data de Contratação" mask="DD/MM/YYYY" :locale="myLocale"
                  name="Data de Contratação" today-btn default-view="Months">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Fechar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:prepend> </template>
        </q-input>
      </div>

      <div class="row q-gutter-x-lg">
        <q-input v-model="cargo" label="Cargo" name="Cargo" lazy-rules v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          :rules="[(val) => (val && val.length > 0) || 'Informe o cargo']"
          class="col-xl col-lg col-md col-sm-12 col-xs-12">
          <template v-slot:prepend>
            <q-icon name="work" />
          </template>
        </q-input>

        <q-select v-model="equipe" :options="equipeOptions" class="col-xl col-lg col-md col-sm-12 col-xs-12" v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          label="Equipe" name="Equipe" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Informe a equipe']">
          <template v-slot:prepend>
            <q-icon name="groups" />
          </template>
        </q-select>

        <q-select v-model="unidade" :options="unidadeOptions" label="Unidade" name="Unidade" v-if="vinculo == 'Fixo' || vinculo == 'Estagiário'"
          class="col-xl col-lg col-md col-sm-12 col-xs-12" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Informe a unidade']">
          <template v-slot:prepend>
            <q-icon name="store" />
          </template>
        </q-select>
      </div>
      <div class="row justify-end">
        <q-btn color="positive" label="Cadastrar Colaborador" type="submit" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
