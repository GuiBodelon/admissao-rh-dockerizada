<template>
  <div class="q-pt-lg full-width">
    <q-table
      title="Colaboradores"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filterUsersTable"
      :loading="loadingUsersTable"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>

      <template v-slot:top>
        <q-btn
          color="primary"
          icon="person_add"
          class="q-mr-md"
          to="/configuracoes/cadastro-de-usuarios"
          ><q-tooltip>Adicionar novo Colaborador</q-tooltip></q-btn
        >
        <q-btn
          icon="refresh"
          :outline="isDarkActive"
          :color="isDarkActive ? 'warning' : 'dark'"
          @click="removeIdParam"
        >
          <q-tooltip>Atualizar Tabela</q-tooltip>
        </q-btn>
        <q-space />
        <q-input
          dense
          debounce="300"
          v-model="filterUsersTable"
          placeholder="Procurar"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            :class="isDarkActive ? 'text-white' : ''"
          >
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
          <q-td key="vinculo" :props="props">
            {{ props.row.vinculo }}
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

          <q-td key="status_formulario_admissao" :props="props">
            <q-badge
              :class="
                props.row.status_formulario_admissao == '0'
                  ? 'bg-yellow text-white'
                  : 'bg-primary text-white'
              "
            >
              {{
                props.row.status_formulario_admissao == '0'
                  ? 'Não enviado'
                  : 'Enviado'
              }}
            </q-badge>
          </q-td>
          <q-td key="created_at" :props="props">
            {{ props.row.created_at }}
          </q-td>
          <q-td key="updated_at" :props="props">
            {{ props.row.updated_at }}
          </q-td>
          <q-td
            key="acoes"
            class="row justify-center items-center"
            style="min-width: 200px"
          >
            <q-btn
              :disabled="props.row.status_formulario_admissao == '0'"
              icon="cloud_download"
              color="primary"
              dense
              @click="gerarContrato(props.row.id, props.row.vinculo)"
            >
              <q-tooltip> Clique para Gerar o Contrato </q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script src="./index.ts"></script>
<style scoped>
.email_corporativoColumn {
  cursor: pointer;
}
</style>
