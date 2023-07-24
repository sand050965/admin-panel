import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useDrawerStore = defineStore('drawer', () => {
    const drawer = ref(true);

    const toggleDrawer = () => {
        drawer.value = !drawer.value;
    }

    const openDrawer = () => {
        drawer.value = true;
    }

    const closeDrawer = () => {
        drawer.value = false;
    }

    return {drawer, toggleDrawer, openDrawer, closeDrawer}

})