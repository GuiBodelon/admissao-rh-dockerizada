<template>
  <q-splitter v-model="splitterModel">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical>
        <q-tab
          name="account_settings"
          icon="account_circle"
          label="Configurações da Conta"
        />
        <q-tab name="change_password" icon="key" label="Alterar Senha" />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="account_settings">
          <div class="text-h4 q-mb-md">
            <q-icon name="account_circle" size="2.5em" class="q-mr-lg" />
            {{ usuario.nome }}
          </div>
          <div class="q-gutter-md row items-start q-mt-lg q-mb-xl">
            <q-avatar
              :color="isDarkActive ? 'white' : 'dark'"
              :text-color="isDarkActive ? 'dark' : 'white'"
              size="72px"
              rounded
            >
              {{ usuario.initials }}
            </q-avatar>
            <div class="row q-gutter-x-sm">
              <q-fab
                color="primary"
                square
                padding="xs"
                vertical-actions-align="left"
                label="Alterar Foto"
                label-position="left"
                icon="keyboard_arrow_right"
                direction="down"
                class="q-ml-lg"
                disable
              >
                <q-file
                  filled
                  bottom-slots
                  v-model="profilePicture"
                  label="Selecione a Foto"
                  counter
                  style="width: 300px"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      name="close"
                      @click.stop="profilePicture = null"
                      class="cursor-pointer"
                    />
                  </template>
                  <template v-slot:hint>Insira apenas imagens.</template>
                </q-file>
              </q-fab>
              <q-btn
                :color="isDarkActive ? 'warning' : 'dark'"
                label="Remover Foto"
                outline
                disable
              ></q-btn>
            </div>
          </div>
          <q-form class="q-gutter-y-md">
            <div class="row q-gutter-md">
              <q-input
                v-model="usuario.nome"
                class="col"
                label="Nome Completo"
                :disable="usuario.permissions !== 'admin'"
              >
                <template v-slot:prepend>
                  <q-icon name="badge" />
                </template>
              </q-input>
              <q-input
                class="col-xl col-lg col-md col-sm-12 col-xs-12"
                v-model="usuario.emailCorporativo"
                :disable="usuario.permissions !== 'admin'"
                label="Email Corporativo"
                suffix="@gruporeport.com.br"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Informe o email corporativo do colaborador',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>
            <div class="row q-gutter-md">
              <q-select
                class="col-xl col-lg col-md col-sm-12 col-xs-12"
                v-model="usuario.vinculo"
                :options="vinculosList"
                label="Vínculo"
                lazy-rules
                :rules="[
                  (val) => (val.label && val.length > 0) || 'Informe o vínculo',
                ]"
                :disable="usuario.permissions !== 'admin'"
              >
                <template v-slot:prepend>
                  <q-icon name="hub" />
                </template>
              </q-select>
              <q-input
                v-model="usuario.cargo"
                label="Cargo"
                name="Cargo"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Informe o cargo']"
                class="col-xl col-lg col-md col-sm-12 col-xs-12"
                :disable="usuario.permissions !== 'admin'"
              >
                <template v-slot:prepend>
                  <q-icon name="work" />
                </template>
              </q-input>
            </div>
            <div class="row q-gutter-md">
              <q-select
                v-model="usuario.equipe"
                :options="equipeOptions"
                class="col-xl col-lg col-md col-sm-12 col-xs-12"
                label="Equipe"
                name="Equipe"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Informe a equipe',
                ]"
                :disable="usuario.permissions !== 'admin'"
              >
                <template v-slot:prepend>
                  <q-icon name="groups" />
                </template>
              </q-select>

              <q-select
                v-model="usuario.unidade"
                :options="unidadeOptions"
                label="Unidade"
                name="Unidade"
                class="col-xl col-lg col-md col-sm-12 col-xs-12"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Informe a unidade',
                ]"
                :disable="usuario.permissions !== 'admin'"
              >
                <template v-slot:prepend>
                  <q-icon name="store" />
                </template>
              </q-select>
            </div>
            <div class="row justify-end">
              <q-btn
                color="positive"
                label="Atualizar Perfil"
                type="submit"
                :disable="usuario.permissions !== 'admin'"
              ></q-btn>
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="change_password">
          <div class="text-h4 q-mb-md">
            <q-icon name="key" size="2.5em" class="q-mr-lg" />Alterar Senha
          </div>
          <div class="q-gutter-md row q-mt-lg">
            <q-form
              style="width: 100vw"
              @submit="onSubmitPassword"
              @reset="onResetPassword"
            >
              <div class="row q-gutter-md">
                <q-input
                  v-model="oldPassword"
                  :type="isOldPwd ? 'password' : 'text'"
                  hint="Insira sua senha antiga"
                  class="col-xl col-lg col-md col-sm-12 col-xs-12"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isOldPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isOldPwd = !isOldPwd"
                    />
                  </template>
                </q-input>
                <q-input
                  v-model="newPassword"
                  :type="isNewPwd ? 'password' : 'text'"
                  hint="Insira sua senha nova"
                  class="col-xl col-lg col-md col-sm-12 col-xs-12"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isNewPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isNewPwd = !isNewPwd"
                    />
                  </template>
                </q-input>
                <q-input
                  v-model="newRtPassword"
                  :type="isNewRtPwd ? 'password' : 'text'"
                  hint="Repita sua senha nova"
                  class="col-xl col-lg col-md col-sm-12 col-xs-12"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isNewRtPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isNewRtPwd = !isNewRtPwd"
                    />
                  </template>
                </q-input>
                <div class="col-12">
                  <q-btn
                    color="negative"
                    label="Limpar Campos"
                    type="reset"
                    class="q-mr-sm"
                  ></q-btn>
                  <q-btn
                    color="positive"
                    label="Alterar Senha"
                    type="submit"
                  ></q-btn>
                </div>
              </div>
            </q-form>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

<script lang="ts" src="./index.ts" />
