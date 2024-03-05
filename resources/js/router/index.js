import { createRouter, createWebHistory } from "vue-router";

import Store from '../pages/Store.vue';
import Pos from '../pages/Pos.vue';
import Transection from '../pages/Transection.vue';
import Report from '../pages/Report.vue';
import noPage from '../pages/NoPage.vue';
import Login from '../pages/login.vue';

export const routes = [
    {
        name: 'store',
        path: '/',
        component: Store
    },
    {
        name: 'pos',
        path: '/pos',
        component: Pos
    },
    {
        name: 'transection',
        path: '/transection',
        component: Transection
    },
    {
        name: 'report',
        path: '/report',
        component: Report
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'nopage',
        path: '/:pathMatch(.*)*',
        component: noPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0)
    },
});

export default router;