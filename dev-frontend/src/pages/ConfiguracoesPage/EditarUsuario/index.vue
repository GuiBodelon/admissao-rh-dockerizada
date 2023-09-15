<template>
  <div class="row text-montserrat">
    <q-form @submit.prevent="
      updateUser(
        name,
        cpf,
        emailPessoal,
        celular,
        dataNascimento,
        cep,
        uf,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        email,
        cargo,
        dataContratacao,
        equipe,
        unidade,
        vinculo,
        nivel,
        salarioBase,
        cnpj,
        razaoSocial,
        isDivulgaAniversario,
        isAutorizaImagem,
        banco,
        agencia,
        conta,
        digito,
        genero,
        orientacaoSexual,
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
        auxEducacao*/
        nomeMae,
        nomePai,
        instituicaoEnsino,
        instituicaoEnsinoEnd,
        curso,
        matricula,
        semestre,
        periodo,
      )
      ">
      <div class="col-12 row q-gutter-x-xl">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="person" />
          <span> Dados Pessoais </span>
        </h5>
        <q-input v-model="name" label="Nome completo" name="Nome completo"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />
        <q-input v-model="cpf" label="CPF" name="CPF" class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          mask="###.###.###-##" fill-mask />
        <q-input v-model="emailPessoal" type="email" label="E-mail pessoal" name="E-mail pessoal" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />
        <q-input v-model="celular" label="Contato" name="Contato" class="col-xl-1 col-lg-1 col-md-5 col-sm-11 col-xs-11" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          mask="(##) #####-####" fill-mask />
        <q-input label="Data de Nascimento" v-model="dataNascimento" mask="##/##/####" :date="['dataNascimento']" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="dataNascimento" :title="name" subtitle="Data de Nascimento de:" mask="DD/MM/YYYY"
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

      <div class="col-12 row q-gutter-x-xl" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="place" />
          <span>Endereço</span>
        </h5>

        <q-input bottom-slots v-model="cep" label="CEP" name="cep" mask="#####-###" fill-mask
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" @keyup="autoCompleteAddress(cep)">
          <template v-slot:append>
            <q-btn round dense flat icon="help" @click="goToBuscaCEP">
              <q-tooltip>Não sei o CEP.</q-tooltip>
            </q-btn>
          </template>
        </q-input>

        <q-select v-model="uf" label="Estado" name="Estado" class="col-xl-1 col-lg-1 col-md-5 col-sm-11 col-xs-11"
          disable />

        <q-select v-model="cidade" label="Cidade" name="Cidade" class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          disable />

        <q-input v-model="bairro" label="Bairro" name="bairro" class="col-xl-1 col-lg-1 col-md-5 col-sm-11 col-xs-11"
          disable />

        <q-input v-model="rua" label="Rua" name="rua" class="col-xl-3 col-lg-3 col-md-5 col-sm-11 col-xs-11" disable />

        <q-input v-model="numero" type="number" label="Número" name="numero"
          class="col-xl-1 col-lg-1 col-md-5 col-sm-11 col-xs-11" />

        <q-input v-model="complemento" label="Complemento" name="complemento"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />
      </div>

      <div class="col-12 row q-gutter-x-xl">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="work" />
          <span> Dados Corporativos </span>
        </h5>
        <q-input v-model="email" label="E-mail corporativo" name="E-mail corporativo"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" disable
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" />

        <q-input v-model="cargo" label="Cargo" name="Cargo" class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" />

        <q-input label="Data de Início na Report" v-model="dataContratacao" mask="##/##/####" :date="['dataContratacao']"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="dataContratacao" subtitle="Data de início Report" mask="DD/MM/YYYY" :locale="myLocale"
                  name="Data de ínicio report" today-btn>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Fechar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-select v-model="equipe" :options="equipeOptions" class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'" label="Equipe" name="Equipe" />

        <q-select v-model="unidade" :options="unidadeOptions" label="Unidade" name="Unidade"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />

        <q-select v-model="vinculo" :options="vinculoOptions" label="Vínculo" name="vinculo"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />

        <q-select v-model="nivel" :options="nivelOptions" label="Nível" name="nivel"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" />

        <q-input v-model="salarioBase" label="Salário Base" name="salariobase" prefix="R$"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'"
          class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11" mask="##.###,##" fill-mask="0" lazy-rules :rules="[
            (val) => (val && val.length > 0) || 'Informe o salário base',
          ]" />

      </div>

      <div class="col-12 row q-gutter-x-xl">
        <q-input v-model="cnpj" label="CNPJ" name="CNPJ" class="col-xl-2 col-lg-2 col-md-5 col-sm-11 col-xs-11"
          mask="##.###.###/####-##" fill-mask />

        <q-input v-model="razaoSocial" label="Razão Social" name="Razão Social"
          class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11" />

        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-xs-11 q-gutter-y-md q-mt-lg"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
          <span class="text-h6">
            Podemos incluir seu aniversário no Google Calendário da report?
          </span>
          <q-option-group v-model="isDivulgaAniversario" :options="optionsDivulgaAniversario" color="primary"
            name="Divulgar aniversário" />
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-11 col-xs-11 q-gutter-y-md q-mt-lg"
          v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
          <span class="text-h6">
            Você autoriza o uso da sua imagem em ações internas e externas?
            (aniversários, ações de engajamentos, posts nas redes sociais etc.)
          </span>
          <q-option-group v-model="isAutorizaImagem" :options="optionsAutorizaImagem" color="primary"
            name="Autorização de uso de imagem" />
        </div>
      </div>

      <div class="col-12 row q-gutter-x-xl">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="account_balance_wallet" />
          <span> Dados Bancários </span>
        </h5>
        <q-select v-model="banco" :options="bankOptions" hint="Selecione o banco" use-input hide-selected fill-input
          input-debounce="0" label="Banco" @filter="filterFn" class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-xs-11">
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input v-model="agencia" label="Agência" mask="####" class="col-xl-2 col-lg-2 col-md-2 col-sm-11 col-xs-11" />
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 row justify-start items-baseline">
          <q-input v-model="conta" mask="###########" label="Conta"
            class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-5" />
          <div class="text-bold q-mx-md">-</div>
          <q-input v-model="digito" mask="##" label="Dígito" class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4" />
        </div>
      </div>

      <div class="col-12 row q-gutter-x-xl q-mt-lg" v-if="vinculo !== 'Temporário' && vinculo !== 'Freelancer'">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="more_horiz" />
          <span> Outros </span>
        </h5>
        <div class="q-gutter-y-md">
          <span class="text-h6">Gênero</span>
          <q-option-group v-model="genero" :options="optionsGeneros" color="primary" name="Gênero" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">Orientação Sexual</span>
          <q-option-group v-model="orientacaoSexual" :options="optionsOrientacaoSexual" color="primary"
            name="Orientação sexual" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">Etnia</span>
          <q-option-group v-model="etnia" :options="optionsEtnia" color="primary" name="Etnia" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">Escolaridade</span>
          <q-option-group v-model="escolaridade" :options="optionsEscolaridade" color="primary" name="Escolaridade" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">Filhos</span>
          <q-option-group v-model="filhos" :options="optionsFilhos" color="primary" name="Filhos" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">PCD ?</span>
          <q-option-group v-model="pcd" :options="optionsPCD" color="primary" name="PCD" />
        </div>
        <div class="q-gutter-y-md">
          <span class="text-h6">Tem pet ?</span>
          <q-option-group v-model="pet" :options="optionsPet" color="primary" name="Pet" />
        </div>
        <div class="q-gutter-y-md col-xl-2 col-lg-2 col-md-4 col-sm-5 col-xs-11 q-mt-lg">
          <span class="text-h6">Qual o signo ?</span>
          <q-select v-model="signo" :options="optionsSignos" label="Signo" hint="Selecione o signo" color="primary"
            name="Signo" />
        </div>

        <div class="q-gutter-y-md col-xl-2 col-lg-2 col-md-4 col-sm-5 col-xs-11 q-mt-lg">
          <span class="text-h6">Qual time torce ?</span>
          <q-input v-model="time" label="Ex.: Corinthians" color="primary" name="Time" />
        </div>
      </div>
      <!--<div
          class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11 q-gutter-y-md row justify-between items-end"
        >
          <span class="text-h6 col-12">Benefícios</span>
          <q-input
            label="Vale Alimentação"
            v-model="va"
            prefix="R$"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            input-class="text-right"
          />
          <q-input
            label="Vale Refeição"
            v-model="vr"
            prefix="R$"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            input-class="text-right"
          />
          <q-input
            label="Auxílio Home Office"
            v-model="auxHomeOffice"
            prefix="R$"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            input-class="text-right"
          />
          <q-input
            label="Auxílio Bem Estar"
            v-model="auxBemEstar"
            prefix="R$"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            input-class="text-right"
          />
          <q-input
            label="Auxílio Educação"
            v-model="auxEducacao"
            prefix="R$"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            input-class="text-right"
          />
        </div>-->
      <div class="col-12 row q-gutter-x-xl" v-if="vinculo == 'Estagiário'">
        <h5 class="col-12 flex items-center q-gutter-x-sm">
          <q-icon name="diversity_2" />
          <span> E-Social </span>
        </h5>

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
      <div class="col-12 q-pt-lg q-pb-xl q-gutter-x-md justify-start">
        <q-btn @click="cancelEditing" label="Cancelar" color="negative" />
        <q-btn type="submit" label="Atualizar Usuário" color="positive">
        </q-btn>
    </div>
  </q-form>
</div></template>

<script lang="ts" src="./index.ts"></script>
