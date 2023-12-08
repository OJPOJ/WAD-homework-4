import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "../views/SignupView.vue";

const routes = [{
    path: '/',
    name: 'Home',
    component: HomeView
}, {
    path: '/signup',
    name: 'Signup',
    component: SignupView
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router