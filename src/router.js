import { createRouter, createWebHashHistory } from "vue-router"

import reg from "./layers/sublayers/Register.vue"
import login from "./layers/sublayers/Login.vue"
import profile from "./layers/Profile.vue"
import home from "./layers/Home.vue"
import library from "./layers/Library.vue"
import dragonfly from "./layers/Dragonfly.vue"
import post from "./layers/Post.vue"
import catched from "./layers/Catched.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: home},
       {path: "/login", component: login},
       {path: "/reg", component: reg},
       {path: "/profile", component: profile},
       {path: "/profile/post", component: post},
       {path: "/profile/catched", component: catched},
       {path: "/library", component: library},
       {path: "/library/:name", component: dragonfly}
    ]
})