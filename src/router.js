import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ReviewView from '@/views/ReviewView'
import ErrorView from '@/views/ErrorView'


const routes = [{
    path: '/',
    name: 'Home',
    component: HomeView
},
{
    path: '/review',
    name: 'Review',
    component: ReviewView
},
{
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: ErrorView
}]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;