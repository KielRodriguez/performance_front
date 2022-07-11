import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ReviewView from '@/views/ReviewView'
import EmployeeView from '@/views/EmployeeView'
import LoginView from '@/views/LoginView'
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
    path: '/employee',
    name: 'Employee',
    component: EmployeeView
},
{
    path: '/login',
    name: 'Login',
    component: LoginView
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