<script setup>
import {ref} from "vue";
import {useDrawerStore} from "@/stores/drawer";
import {useRailStore} from "@/stores/rail";

const drawerStore = useDrawerStore();

const railStore = useRailStore();

</script>

<template>
  <v-navigation-drawer
      class="bg-teal navigation-drawer"
      v-model="drawerStore.drawer"
      :rail="railStore.rail"
      permanent
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list
        class="pr-0 pt-8"
        theme="light"
    >
      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-tachometer-alt"
          to="/dashboard"
          :ripple="{ class: 'ripple-expand' }"
          variant="text"
      >
        <h3>
          Dashboard
        </h3>
      </v-list-item>

      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-users"
          to="/user"
          :ripple="true"
      >
        <h3>
          Users Management
        </h3>
      </v-list-item>

      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-paste"
          to="/post"
          :ripple="true"
      >
        <h3>
          Posts Management
        </h3>
      </v-list-item>

      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-tags"
          to="/tag"
          :ripple="true"
      >
        <h3>
          Tags Management
        </h3>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.navigation-drawer {
  border: 0;
}

.v-list-item {
  height: 60px;
  padding: 10px;
  margin: 50px 0;
  line-height: 60px;
  color: var(--white);
  text-align: start;
  white-space: nowrap;
}

.v-list-item::after {
  transition: none;
}

.v-list-item:hover,
.v-list-item--active {
  color: var(--green);
  background-color: var(--white);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: 0.1s ease-in;
}

.v-list-item:hover::before,
.v-list-item--active::before {
  content: '';
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px var(--white);
  pointer-events: none;
}

.v-list-item:hover::after,
.v-list-item--active::after {
  content: '';
  position: absolute;
  right: 0;
  left: calc(100% - 50px);
  top: 100%;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 35px -35px 0 10px var(--white);
  pointer-events: none;
  opacity: 1;
  border: 0;
  z-index: -1;
}
</style>