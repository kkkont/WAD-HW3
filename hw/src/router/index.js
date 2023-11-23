import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'
import AddPostView from '../views/AddPostView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: MainView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupView
    },
    {
        path: '/addpost',
        name: 'addpost',
        component: AddPostView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router