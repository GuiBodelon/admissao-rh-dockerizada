<template>
  <div>
    <q-table title="Colaboradores" :rows="rows" :columns="columns" row-key="name" :filter="filterUsersTable"
      :loading="loadingUsersTable">
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>

      <template v-slot:top>
        <q-btn icon="refresh" :outline="isDarkActive" :color="isDarkActive ? 'warning' : 'dark'" @click="getUsers()">
          <q-tooltip>Atualizar Tabela</q-tooltip>
        </q-btn>
        <q-space />
        <q-input dense debounce="300" v-model="filterUsersTable" placeholder="Procurar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props" :class="isDarkActive ? 'text-white' : ''">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="email_pessoal" :props="props">
            {{ props.row.email_pessoal }}
          </q-td>
          <q-td key="data_nascimento" :props="props">
            {{ props.row.data_nascimento }}
          </q-td>
          <q-td key="rg" :props="props">
            {{ props.row.rg }}
          </q-td>
          <q-td key="cpf" :props="props">
            {{ props.row.cpf }}
          </q-td>
          <q-td key="cep" :props="props">
            {{ props.row.cep }}
          </q-td>
          <q-td key="rua" :props="props">
            {{ props.row.rua }}
          </q-td>
          <q-td key="numero" :props="props">
            {{ props.row.numero }}
          </q-td>
          <q-td key="complemento" :props="props">
            {{ props.row.complemento }}
          </q-td>
          <q-td key="bairro" :props="props">
            {{ props.row.bairro }}
          </q-td>
          <q-td key="cidade" :props="props">
            {{ props.row.cidade }}
          </q-td>
          <q-td key="uf" :props="props">
            {{ props.row.uf }}
          </q-td>
          <q-td key="celular" :props="props">
            {{ props.row.celular }}
          </q-td>
          <q-td key="cnpj" :props="props">
            {{ props.row.cnpj }}
          </q-td>
          <q-td key="razao_social" :props="props">
            {{ props.row.razao_social }}
          </q-td>
          <q-td key="data_contratacao" :props="props">
            {{ props.row.data_contratacao }}
          </q-td>
          <q-td key="cargo" :props="props">
            {{ props.row.cargo }}
          </q-td>
          <q-td key="equipe" :props="props">
            {{ props.row.equipe }}
          </q-td>
          <q-td key="unidade" :props="props">
            {{ props.row.unidade }}
          </q-td>
          <q-td key="vinculo" :props="props">
            {{ props.row.vinculo }}
          </q-td>
          <q-td key="nivel" :props="props">
            {{ props.row.nivel }}
          </q-td>
          <q-td key="salario_base" :props="props">
            {{ props.row.salario_base }}
          </q-td>
          <q-td key="is_divulga_aniversario" :props="props">
            {{ props.row.is_divulga_aniversario }}
          </q-td>
          <q-td key="is_autoriza_imagem" :props="props">
            {{ props.row.is_autoriza_imagem }}
          </q-td>
          <q-td key="genero" :props="props">
            {{ props.row.genero }}
          </q-td>
          <q-td key="orientacao_sexual" :props="props">
            {{ props.row.orientacao_sexual }}
          </q-td>
          <q-td key="etnia" :props="props">
            {{ props.row.etnia }}
          </q-td>
          <q-td key="escolaridade" :props="props">
            {{ props.row.escolaridade }}
          </q-td>
          <q-td key="filhos" :props="props">
            {{ props.row.filhos }}
          </q-td>
          <q-td key="pcd" :props="props">
            {{ props.row.pcd }}
          </q-td>
          <q-td key="pet" :props="props">
            {{ props.row.pet }}
          </q-td>
          <q-td key="signo" :props="props">
            {{ props.row.signo }}
          </q-td>
          <q-td key="time" :props="props">
            {{ props.row.time }}
          </q-td>
          <q-td key="nome_mae" :props="props">
            {{ props.row.nome_mae }}
          </q-td>
          <q-td key="nome_pai" :props="props">
            {{ props.row.nome_pai }}
          </q-td>
          <q-td key="instituicao_ensino" :props="props">
            {{ props.row.instituicao_ensino }}
          </q-td>
          <q-td key="instituicao_ensino_endereco" :props="props">
            {{ props.row.instituicao_ensino_endereco }}
          </q-td>
          <q-td key="curso" :props="props">
            {{ props.row.curso }}
          </q-td>
          <q-td key="matricula" :props="props">
            {{ props.row.matricula }}
          </q-td>
          <q-td key="semestre" :props="props">
            {{ props.row.semestre }}
          </q-td>
          <q-td key="periodo" :props="props">
            {{ props.row.periodo }}
          </q-td>
          <!--
          <q-td key="va" :props="props">
            {{ props.row.va }}
          </q-td>
          <q-td key="vr" :props="props">
            {{ props.row.vr }}
          </q-td>
          <q-td key="aux_home_office" :props="props">
            {{ props.row.aux_home_office }}
          </q-td>
          <q-td key="aux_bem_estar" :props="props">
            {{ props.row.aux_bem_estar }}
          </q-td>
          <q-td key="aux_educacao" :props="props">
            {{ props.row.aux_educacao }}
          </q-td>-->
          <q-td key="status_formulario_admissao" :props="props">
            {{ props.row.status_formulario_admissao }}
          </q-td>
          <q-td key="status_colaborador" :props="props">
            <q-badge :class="props.row.status_colaborador == '0'
              ? 'bg-red text-white'
              : 'bg-green-4 text-white'
              ">
              {{ props.row.status_colaborador == '0' ? 'Inativo' : 'Ativo' }}
            </q-badge>
          </q-td>
          <q-td key="data_demissao" :props="props">
            {{ props.row.data_demissao }}
          </q-td>
          <q-td key="created_at" :props="props">
            {{ props.row.created_at }}
          </q-td>
          <q-td key="updated_at" :props="props">
            {{ props.row.updated_at }}
          </q-td>
          <q-td key="acoes" class="row justify-center items-center q-gutter-x-sm" style="min-width: 200px">
            <q-btn icon="edit" color="primary" dense @click="updateColaborador(props.row.id)">
              <q-tooltip> Clique para Editar o colaborador </q-tooltip>
            </q-btn>
            <q-btn @click="
              (modalChangeUserStatus = true),
              (currentUserStatus = props.row.status_colaborador)
              " :color="props.row.status_colaborador == 0 ? 'positive' : 'negative'
    " :icon="props.row.status_colaborador == 0 ? 'add' : 'remove'" dense>
              <q-tooltip>{{
                props.row.status_colaborador
                ? 'Desativar Colaborador'
                : 'Ativar Colaborador'
              }}</q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="modalChangeUserStatus" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">
            {{
              currentUserStatus == 0 ? 'Data de Readmissão' : 'Data de Demissão'
            }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input filled :v-model="currentUserStatus == 0 ? statusDataAdmissao : statusDataDemissao
            " mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Atualizar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script src="./index.ts"></script>
