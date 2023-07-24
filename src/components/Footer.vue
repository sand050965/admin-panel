<script setup>
import {computed} from 'vue';

const year = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <v-footer class="bg-grey-lighten-3 pa-0">
    <div class="px-4 py-2 text-center w-100">
      {{ year }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>