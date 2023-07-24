<script setup>
import {ref, reactive} from 'vue';
// import {RouterLink, RouterView} from 'vue-router'
import AppBar from "@/components/AppBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <v-app>

    <v-layout>

      <NavigationDrawer/>

      <AppBar/>

      <v-main>

        <Main/>

        <Footer/>

      </v-main>

    </v-layout>

  </v-app>
</template>

<style scoped>
</style>
