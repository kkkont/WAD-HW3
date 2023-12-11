import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignupView from '../views/SignupView.vue'
import AddPostView from '../views/AddPostView.vue'
import PostView from '../views/PostView.vue'
import LogIn from "../views/LogInView.vue";
import Contacts from "../views/ContactsView.vue"
import auth from "../auth";


const routes = [{
        path: '/',
        name: 'home',
        component: MainView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
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
    },
    {   path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    {   path: "/apost",
        name: "apost",
        component: PostView,
    },
    {   path: "/contacts",
    name: "Contacts",
    component: Contacts
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router