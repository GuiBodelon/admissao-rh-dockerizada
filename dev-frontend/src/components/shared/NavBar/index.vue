<template>
  <q-header
    reveal
    elevated
    class="bg-dark text-white flex items-center"
    style="height: 65px; margin: 10px 10px 0 10px; border-radius: 5px"
    :style="{ left: activeLeft }"
  >
    <q-toolbar>
      <q-toolbar-title>
        Bem vindo - {{ userStore.user.name }}!
      </q-toolbar-title>

      <Notifications />

      <q-toggle
        v-model="isDarkModeActive"
        checked-icon="dark_mode"
        color="primary"
        unchecked-icon="light_mode"
        @update:model-value="setDarkMode(isDarkModeActive)"
      >
        <q-tooltip>{{ isDarkActive ? 'Light Mode' : 'Dark Mode' }}</q-tooltip>
      </q-toggle>

      <q-avatar class="cursor-pointer q-ml-md userAvatar">
        <q-avatar
          :color="isDarkActive ? 'primary' : 'white'"
          :text-color="isDarkActive ? 'white' : 'dark'"
          size="40px"
          rounded
        >
          {{ nameInitials }}
        </q-avatar>

        <q-tooltip>Perfil</q-tooltip>
        <q-menu :offset="[0, 18]" style="min-width: 360px">
          <div class="row no-wrap q-pa-md justify-around">
            <div class="column">
              <q-list dark padding style="width: 180px">
                <q-item clickable v-ripple to="/meu-perfil">
                  <q-item-section avatar>
                    <q-icon
                      :color="isDarkActive ? 'white' : 'dark'"
                      name="fa-solid fa-user-circle"
                    />
                  </q-item-section>
                  <q-item-section
                    class="text-bold"
                    :class="isDarkActive ? 'text-white' : 'text-dark'"
                  >
                    Perfil
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple @click="logout()">
                  <q-item-section avatar>
                    <q-icon
                      :color="isDarkActive ? 'white' : 'dark'"
                      name="fa-solid fa-arrow-right-from-bracket"
                    />
                  </q-item-section>

                  <q-item-section
                    class="text-bold"
                    :class="isDarkActive ? 'text-white' : 'text-dark'"
                  >
                    Sair
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar
                :color="isDarkActive ? 'white' : 'dark'"
                :text-color="isDarkActive ? 'dark' : 'white'"
                size="72px"
                rounded
                >{{ nameInitials }}</q-avatar
              >
            </div>
          </div>
        </q-menu>
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" src="./index.ts" />
