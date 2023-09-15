<template>
  <div class="q-gutter-lg full-width text-montserrat">
    <!--
    <q-banner
      inline-actions
      rounded
      class="bg-dark text-white"
      v-if="formSentStatus !== 0 || vinculo == 'Estagiário'"
    >
      <template v-slot:avatar>
        <q-icon name="warning" color="warning" />
      </template>
      <div v-if="formSentStatus !== 0">
        Você já enviou o formulário de admissão.
      </div>
      <div v-if="vinculo == 'Estagiário'">
        Estágiarios não precisam enviar formulário de admissão
      </div>

      <template v-slot:action>
        <q-btn to="/dashboard" label="voltar" color="negative" />
      </template>
    </q-banner>
    -->
    <div>
      <div class="text-center">
        <h3>Ficha de Admissão <span v-if="vinculo">-</span> {{ vinculo }}</h3>
        <q-icon name="edit_note" size="150px" />
      </div>
      <q-form @submit.prevent="
        onSubmit(
          cpf,
          //rg,
          emailPessoal,
          contato,
          dataNascimento,
          cep,
          estado,
          cidade,
          bairro,
          rua,
          numero,
          complemento,
          cnpj,
          razaoSocial,
          groupDivulgaAniversario,
          groupAutorizaImagem,
          groupGenero,
          groupOrientacaoSexual,
          groupEtnia,
          groupEscolaridade,
          groupFilhos,
          groupPCD,
          groupPet,
          groupSignos.label,
          time,
          //VA,
          //VR,
          //AuxHome,
          //BemEstar,
          //Educacao,
          banco.label,
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
        )
        " class="full-width justify-center q-gutter-y-xl q-mt-md q-mb-xl">
        <section class="fieldset">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="person" />
            <span> Dados Pessoais </span>
          </h1>
          <div class="row q-gutter-xl">
            <q-input v-model="nome" label="Nome completo" name="Nome completo"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" disable />
            <q-input v-model="cpf" label="CPF" name="CPF" class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10"
              mask="###.###.###-##" fill-mask lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu CPF']" />
            <!--<q-input
              v-model="rg"
              label="RG"
              name="RG"
              class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10"
              mask="##.###.###-#"
              fill-mask
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu RG']"
              v-if="vinculo !== 'Temporário' && vinculo !=='Freelancer'"
            />-->
            <q-input v-model="emailPessoal" type="email" label="E-mail pessoal" name="E-mail pessoal"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" lazy-rules :rules="[
                (val) =>
                  (val && val.length > 0) || 'Informe seu e-mail pessoal',
                (val, rules) =>
                  rules.email(val) || 'Por favor insira um email válido',
              ]" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" />
            <q-input v-model="contato" label="Contato" name="Contato"
              class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10" mask="(##) #####-####" fill-mask lazy-rules :rules="[
                (val) => (val && val.length > 0) || 'Informe seu celular',
              ]" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" />
            <q-input label="Data de Nascimento" v-model="dataNascimento" mask="##/##/####" :date="['dataNascimento']"
              lazy-rules :rules="[
                (val) =>
                  (val && val.length > 0) || 'Informe sua data de nascimento',
              ]" class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="dataNascimento" :title="nome" subtitle="Data de Nascimento de:" mask="DD/MM/YYYY"
                      :locale="myLocale" name="Data de Nascimento" today-btn default-view="Years">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </section>

        <section class="fieldset" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="place" />
            <span>Endereço</span>
          </h1>
          <div class="row q-gutter-xl">
            <q-input bottom-slots v-model="cep" label="CEP" name="cep" mask="#####-###" fill-mask
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" @keyup="autoCompleteAddress(cep)" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu CEP']">
              <template v-slot:append>
                <q-btn round dense flat icon="help" @click="goToBuscaCEP">
                  <q-tooltip>Não sei meu CEP.</q-tooltip>
                </q-btn>
              </template>
            </q-input>

            <q-select v-model="estado" label="Estado" name="Estado" class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10"
              disable />

            <q-select v-model="cidade" label="Cidade" name="Cidade" class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10"
              disable />

            <q-input v-model="bairro" label="Bairro" name="bairro" class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10"
              disable />

            <q-input v-model="rua" label="Rua" name="rua" class="col-xl-3 col-lg-3 col-md-5 col-sm-10 col-xs-10"
              disable />

            <q-input v-model="numero" type="number" label="Número" name="numero"
              class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10" lazy-rules :rules="[
                (val) =>
                  (val && val.length > 0) ||
                  'Informe o número de sua residência',
              ]" />

            <q-input v-model="complemento" label="Complemento" name="complemento"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" />
          </div>
        </section>

        <section class="fieldset">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="work" />
            <span>Dados Corporativos</span>
          </h1>
          <div class="row q-gutter-xl">
            <q-input v-model="emailCorporativo" type="email" label="E-mail corporativo" name="E-mail corporativo"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" disable />

            <q-input v-model="cargo" label="Cargo" name="Cargo" disable
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" />

            <q-input label="Data de Início na Report" v-model="dataContratacao" mask="##/##/####"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" :date="['dataContratacao']" disable
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="dataContratacao" subtitle="Data de início Report" mask="DD/MM/YYYY"
                      :locale="myLocale" name="Data de ínicio report" today-btn>
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-select v-model="equipe" class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" label="Equipe" name="Equipe" disable />

            <q-select v-model="unidade" label="Unidade" name="Unidade"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" disable />

            <q-select v-model="vinculo" label="Vínculo" name="vinculo"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" disable />

            <q-input v-model="salarioBase" label="Salário Base" name="salariobase" prefix="R$"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" disable>
            </q-input>

            <q-select v-model="nivel" class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" label="Nível" hint="Selecione o seu nível"
              disable />

            <q-input v-model="cnpj" label="CNPJ" name="CNPJ" class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10"
              mask="##.###.###/####-##" fill-mask lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu CNPJ']" />



            <q-input v-model="razaoSocial" label="Razão Social" name="Razão Social"
              class="col-xl-4 col-lg-4 col-md-5 col-sm-10 col-xs-10" lazy-rules :rules="[
                (val) => (val && val.length > 0) || 'Informe sua Razão social',
              ]" />

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10 q-gutter-y-md"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
              <span class="text-h6">Podemos incluir seu aniversário no Google Calendário da
                report?</span>
              <q-option-group v-model="groupDivulgaAniversario" :options="optionsDivulgaAniversario" color="primary"
                name="Divulgar aniversário" lazy-rules :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Informe se podemos divulgar seu aniversário',
                ]" />
            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10 q-gutter-y-md"
              v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
              <span class="text-h6">Você autoriza o uso da sua imagem em ações internas e externas?
                (aniversários, ações de engajamentos, posts nas redes sociais
                etc.)</span>
              <q-option-group v-model="groupAutorizaImagem" :options="optionsAutorizaImagem" color="primary"
                name="Autorização de uso de imagem" lazy-rules :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Informe se você autoriza o uso de sua imagem',
                ]" />
            </div>
          </div>
        </section>

        <section class="fieldset">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="account_balance_wallet" />
            <span>Dados Bancários</span>
          </h1>
          <div class="row q-gutter-xl justify-start items-center">
            <q-select v-model="banco" :options="bankOptions" hint="Selecione o seu banco" use-input hide-selected
              fill-input input-debounce="0" label="Banco" @filter="filterFn"
              class="col-xl-3 col-lg-3 col-md-3 col-sm-10 col-xs-10">
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-input v-model="agencia" type="number" label="Agência"
              class="col-xl-2 col-lg-2 col-md-2 col-sm-10 col-xs-10" :rules="[
                (val) => (val && val.length > 0) || 'Informe sua agência',
                (val) => val.length <= 4 || 'Máximo de 4 caracteres',
              ]" />
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-10 row justify-start items-baseline">
              <q-input v-model="conta" type="number" label="Conta" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"
                :rules="[
                  (val) => (val && val.length > 0) || 'Informe sua conta',
                  (val) => val.length <= 17 || 'Máximo de 17 caracteres',
                ]" />
              <div class="text-bold q-mx-md">-</div>
              <q-input v-model="digito" type="number" label="Dígito" class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-4"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Informe o dígito de sua conta',
                  (val) => val.length <= 2 || 'Máximo de 2 caracteres',
                ]" />
            </div>
          </div>
        </section>

        <section class="fieldset" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="more_horiz" />
            <span>Outros</span>
          </h1>
          <div class="row q-gutter-xl justify-start">
            <div class="q-gutter-y-md">
              <span class="text-h6">Gênero</span>
              <q-option-group v-model="groupGenero" :options="optionsGeneros" color="primary" name="Gênero" lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Informe seu genêro',
                ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">Orientação Sexual</span>
              <q-option-group v-model="groupOrientacaoSexual" :options="optionsOrientacaoSexual" color="primary"
                name="Orientação sexual" lazy-rules :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Informe sua orientação sexual',
                ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">Etnia</span>
              <q-option-group v-model="groupEtnia" :options="optionsEtnia" color="primary" name="Etnia" lazy-rules :rules="[
                (val) => (val && val.length > 0) || 'Informe sua etnia',
              ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">Escolaridade</span>
              <q-option-group v-model="groupEscolaridade" :options="optionsEscolaridade" color="primary"
                name="Escolaridade" lazy-rules :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Informe sua escolaridade',
                ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">Filhos</span>
              <q-option-group v-model="groupFilhos" :options="optionsFilhos" color="primary" name="Filhos" lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Informe se você possuí filhos',
                ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">PCD ?</span>
              <q-option-group v-model="groupPCD" :options="optionsPCD" color="primary" name="PCD" lazy-rules :rules="[
                (val) => (val && val.length > 0) || 'Informe se possuí PCD',
              ]" />
            </div>
            <div class="q-gutter-y-md">
              <span class="text-h6">Tem pet ?</span>
              <q-option-group v-model="groupPet" :options="optionsPet" color="primary" name="Pet" lazy-rules :rules="[
                (val) => (val && val.length > 0) || 'Informe se tem pet',
              ]" />
            </div>
            <div class="q-gutter-y-md col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-11">
              <span class="text-h6">Qual o seu signo ?</span>
              <q-select v-model="groupSignos" :options="optionsSignos" label="Signo" hint="Selecione o seu signo"
                color="primary" name="Signo" :rules="[
                  (val) => (val && val.label.length > 0) || 'Informe seu signo',
                ]" />
            </div>

            <div class="q-gutter-y-md col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-11">
              <span class="text-h6">Qual time você torce ?</span>
              <q-input v-model="time" label="Ex.: Corinthians" color="primary" name="Time" />
            </div>

            <!--<div
              class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-xs-10 q-gutter-y-md row justify-between items-end"
            >
              <span class="text-h6"
                >Qual trilha melhor te atende no cartão ticket? Lembrando que
                você pode distribuir os R$500,00 em mais de uma trilha.</span
              >
              <q-select
                class="col-12"
                label="Selecione até 2 opções"
                use-chips
                use-input
                v-model="trilhaTicket"
                :options="trilhaTicketOptions"
                multiple
                max-values="2"
                @update:model-value="
                  (VA = 0),
                    (VR = 0),
                    (AuxHome = 0),
                    (BemEstar = 0),
                    (Educacao = 0)
                "
              />
              <div
                v-for="trilha in trilhaTicket"
                :key="trilha.index"
                class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
              >
                <transition
                  appear
                  enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut"
                >
                  <div class="row content-between" style="height: 125px">
                    <span>
                      {{ trilha.label }}
                    </span>
                    <q-input
                      v-if="trilha.value == 'VA'"
                      outlined
                      v-model="VA"
                      prefix="R$"
                      mask="#.##"
                      fill-mask="0"
                      reverse-fill-mask
                      input-class="text-right"
                      :disable="checkedTrilhaInputs"
                    />
                    <q-input
                      v-if="trilha.value == 'VR'"
                      outlined
                      v-model="VR"
                      prefix="R$"
                      mask="#.##"
                      fill-mask="0"
                      reverse-fill-mask
                      input-class="text-right"
                      :disable="checkedTrilhaInputs"
                    />
                    <q-input
                      v-if="trilha.value == 'AuxHome'"
                      outlined
                      v-model="AuxHome"
                      prefix="R$"
                      mask="#.##"
                      fill-mask="0"
                      reverse-fill-mask
                      input-class="text-right"
                      :disable="checkedTrilhaInputs"
                    />
                    <q-input
                      v-if="trilha.value == 'BemEstar'"
                      outlined
                      v-model="BemEstar"
                      prefix="R$"
                      mask="#.##"
                      fill-mask="0"
                      reverse-fill-mask
                      input-class="text-right"
                      :disable="checkedTrilhaInputs"
                    />
                    <q-input
                      v-if="trilha.value == 'Educacao'"
                      outlined
                      v-model="Educacao"
                      prefix="R$"
                      mask="#.##"
                      fill-mask="0"
                      reverse-fill-mask
                      input-class="text-right"
                      :disable="checkedTrilhaInputs"
                    />
                  </div>
                </transition>
              </div>
              <transition-group
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
              >
                <q-btn
                  v-if="trilhaTicket && checkedTrilhaInputs == false"
                  label="confirmar valores"
                  color="primary"
                  @click="checkTrilhaValue(VA, VR, AuxHome, BemEstar, Educacao)"
                ></q-btn>
                <q-btn
                  v-if="trilhaTicket && checkedTrilhaInputs"
                  label="alterar valores"
                  color="primary"
                  @click="checkedTrilhaInputs = false"
                ></q-btn>
              </transition-group>
            </div>-->
          </div>
        </section>

        <section class="fieldset" v-if="vinculo == 'Estagiário'">
          <h1 class="d-flex items-center q-gutter-x-sm">
            <q-icon name="diversity_2" />
            <span>E-Social</span>
          </h1>
          <div class="row q-gutter-xl justify-start">
            <q-input v-model="nomeMae" label="Nome da Mãe" name="nomeMae"
              class="col-xl-3 col-lg-3 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe o nome da sua mãe']" />
            <q-input v-model="nomePai" label="Nome do Pai" name="nomePai"
              class="col-xl-3 col-lg-3 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe o nome do seu pai']" />
            <q-input v-model="instituicaoEnsino" label="Nome da Instituição de Ensino" name="instituicaoEnsino"
              class="col-xl-4 col-lg-4 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe o nome da sua Instituição de Ensino']" />
            <q-input v-model="instituicaoEnsinoEnd" label="Endereço da Instituição de Ensino" name="instituicaoEnsinoEnd"
              class="col-xl-11 col-lg-11 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe o endereço da sua Instituição de Ensino']" />
            <q-input v-model="curso" label="Curso" name="curso" class="col-xl-3 col-lg-3 col-md-5 col-sm-10 col-xs-10"
              lazy-rules :rules="[(val) => (val && val.length > 0) || 'Informe seu curso']" />
            <q-input v-model="matricula" label="Matrícula" name="matricula" mask="####################"
              class="col-xl-2 col-lg-2 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe sua matrícula']" />
            <q-input v-model="semestre" label="Semestre" name="semestre" mask="##"
              class="col-xl-1 col-lg-1 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu semestre']" />
            <q-select v-model="periodo" :options="periodoOptions" label="Período" name="periodo"
              class="col-xl-3 col-lg-3 col-md-5 col-sm-10 col-xs-10" lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Informe seu período']" />
          </div>
        </section>

        <div class="row full-width q-gutter-x-md justify-end">
          <q-btn to="/dashboard" label="voltar" color="negative" />
          <!--<q-space />
          <q-btn
            label="Visualizar Planilha"
            color="primary"
            href="https://docs.google.com/spreadsheets/d/17DloYA5HkaqZkriTVj5sfQRzfJvYBkz7sqVdARcOh7c/edit#gid=1216559211"
            target="_blank"
          />-->
          <q-btn type="submit" :label="buttonLoading ? '' : 'Enviar'" color="positive">
            <q-spinner v-if="buttonLoading" color="white" />
          </q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
