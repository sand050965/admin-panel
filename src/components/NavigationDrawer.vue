<script setup>
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
      rail-width="70"
  >
    <v-card
        class="mt-2 ml-1 mr-2 h-auto d-flex justify-center align-center"
        color="#c1dbd0"
        to="/"
    >
      <v-avatar
          size="x-large"
          rounded="0"
      >
        <v-img
            size="150"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Old_Nike_logo.jpg/200px-Old_Nike_logo.jpg"
            cover
        />
      </v-avatar>
      <!--      <v-card-title>-->
      <!--        Nike-->
      <!--      </v-card-title>-->
    </v-card>

    <v-divider
        class="mt-5 text-lg divider"
    ></v-divider>

    <v-list
        class="pt-0 pr-0 ml-2"
        theme="light"
        density="comfortable"
    >
      <v-list-item
          class="mt-10"
          v-bind="props"
          prepend-icon="fa:fas fa-tachometer-alt"
          to="/dashboard"
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
      >
        <h3>
          Users Management
        </h3>
      </v-list-item>

      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-paste"
          to="/post"
      >
        <h3>
          Posts Management
        </h3>
      </v-list-item>

      <v-list-item
          v-bind="props"
          prepend-icon="fa:fas fa-tags"
          to="/tag"
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

.divider {
  height: 2px;
  max-height: 1px;
  background-color: #c1dbd0;
  border: none;
  opacity: 1;
}

.v-list-item {
  height: 60px;
  padding: 10px;
  margin: 60px 0;
  line-height: 60px;
  color: var(--white);
  text-align: start;
  white-space: nowrap;
  overflow: visible;
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
  cursor: pointer;
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