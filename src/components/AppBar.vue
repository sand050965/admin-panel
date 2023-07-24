<script setup>
import {ref} from "vue";
import {useRailStore} from "@/stores/rail";

const railStore = useRailStore();

</script>

<template>
  <v-app-bar :elevation="2" flat>
    <v-app-bar-nav-icon @click="railStore.toggleRail()"></v-app-bar-nav-icon>

    <v-hover v-slot="{ isHovering, props }">
      <v-card :elevation="0"
              :class="{ 'on-hover': isHovering }"
              class="logo-container pa-1 ml-3"
              v-bind="props"
              to="/">
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Old_Nike_logo.jpg/200px-Old_Nike_logo.jpg"
               class="w-100 h-100"/>
      </v-card>
    </v-hover>

    <v-spacer></v-spacer>

    <v-responsive max-width="260">
      <v-text-field
          density="compact"
          hide-details
          variant="solo"
      ></v-text-field>
    </v-responsive>
  </v-app-bar>
</template>

<style scoped>
.logo-container {
  width: 80px;
  cursor: pointer;
}

.v-card {
  opacity: 0.6;
}

.v-card:not(.on-hover) {
  transition: opacity .4s ease-in-out;
  opacity: 1;
}
</style>