<script setup>
import {ref} from "vue";
import {useDrawerStore} from "@/stores/drawer";
import {useRailStore} from "@/stores/rail";

const drawerStore = useDrawerStore();

const railStore = useRailStore();
</script>

<template>
  <v-navigation-drawer
      class="bg-teal "
      v-model="drawerStore.drawer"
      :rail="railStore.rail"
      permanent
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
    >
    </v-list-item>

    <v-divider class="my-2"></v-divider>

    <v-list
        class="pr-0"
        nav
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-list-item
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            prepend-icon="fa:fas fa-tachometer-alt"
            title="Dashboard"
            to="/dashboard"
        ></v-list-item>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-list-item
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            prepend-icon="fa:fas fa-users"
            title="Users Management"
            to="/user"
        ></v-list-item>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-list-item
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            prepend-icon="fa:fas fa-newspaper"
            title="Posts Management"
            to="/post"
        ></v-list-item>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-list-item
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            prepend-icon="fa:fas fa-tags"
            title="Tags Management"
            to="/tag"
        ></v-list-item>
      </v-hover>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-list-item:is(.on-hover) {
  color: var(--green);
  background-color: var(--white);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.v-list-item::before:is(.on-hover) {
  content: '';
  position: absolute;
  right: 0;
  
}

.v-list-item:not(.on-hover) {
  transition: opacity .4s ease-in-out;
}
</style>