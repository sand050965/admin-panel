import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useRailStore = defineStore('rail', () => {
    const rail = ref(true);

    const toggleRail = () => {
        rail.value = !rail.value;
    }

    const openRail = () => {
        rail.value = true;
    }

    const closeRail = () => {
        rail.value = false;
    }

    return {rail, toggleRail, openRail, closeRail}

})