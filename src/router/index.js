import {createRouter, createWebHistory} from 'vue-router';
import DashboardView from "@/views/DashboardView.vue"
import AccountView from "@/views/AccountView.vue";
import PostView from "@/views/PostView.vue";
import TagView from "@/views/TagView.vue";
import UserView from "@/views/UserView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    base: '/admin',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/account',
            name: 'account',
            component: AccountView
        },
        {
            path: '/post',
            name: 'post',
            component: PostView
        },
        {
            path: '/tag',
            name: 'tag',
            component: TagView
        },
        {
            path: '/user',
            name: 'user',
            component: UserView
        },
    ]
})

export default router
