<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
/*------SCROLL BAR------*/
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 3px solid transparent;
  background-clip: content-box;
  background-color: #2b2b2bb4;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #2b2b2b;
}
::-webkit-scrollbar-thumb:window-active {
  background: rgba(255, 0, 0, 0.4);
}
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  margin-bottom: 1px;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  -webkit-text-fill-color: $dark !important;
}
</style>
