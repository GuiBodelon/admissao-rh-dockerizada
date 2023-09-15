<template>
  <sidebar-menu
    :menu="filteredMenus"
    width="348px"
    @update:collapsed="toggleSidebar"
    :showOneChild="true"
    :theme="isDarkActive ? 'default' : 'white-theme'"
  >
    <template v-slot:header>
      <div
        class="logo-details row justify-center items-center"
        :class="{ dark: isDarkActive }"
      >
        <div
          v-if="activeLogo == 'default'"
          class="flex justify-start items-center"
        >
          <img
            src="/imgs/logo-report-dark.svg"
            alt="Logo Report"
            class="logoImage"
            :class="{ dark: isDarkActive }"
            style="width: 30%"
          />
        </div>
        <div v-else class="">
          <q-avatar
            rounded
            size="45px"
            font-size="45px"
            :color="isDarkActive ? 'dark' : 'primary'"
            text-color="white"
            icon="more_vert"
            class="mx-auto"
          />
        </div>
      </div>
      <q-spinner-orbit
        v-if="loadingSidebar"
        color="dark"
        class="absolute-center"
        size="4em"
      />
    </template>
    <template v-slot:dropdown-icon="{ isOpen }">
      <span v-if="!isOpen"><i class="fa-solid fa-caret-down"></i></span>
      <span v-else><i class="fa-solid fa-caret-up"></i></span>
    </template>

    <!--<template v-slot:footer>footer</template>-->
    <template v-slot:toggle-icon
      ><i class="fa-solid fa-bars navIcon"></i>
    </template>
  </sidebar-menu>
</template>
<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss"></style>
