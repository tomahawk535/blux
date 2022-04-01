import {createRouter, createWebHistory} from "vue-router";
import AppFeatures from "../pages/AppFeatures.vue";
import AppPrice from "../pages/AppPrice.vue";
import AppServices from "../pages/AppServices.vue";
import AppHome from "../pages/AppHome.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'AppHome',
            component: AppHome
        },
        {
            path: '/price',
            name: 'AppPrice',
            component: AppPrice
        },
        {
            path: '/service',
            name: 'AppServices',
            component: AppServices
        },
        {
            path: '/features',
            name: 'AppFeatures',
            component: AppFeatures
        },

    ]
})

export default router

