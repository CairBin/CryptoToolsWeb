// this is about route configuration.For more details,please refer to https://router.vuejs.org/
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

/*
    global before guards
    please refer to https://router.vuejs.org/guide/advanced/navigation-guards.html
*/
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('token'))  //check token
            next()
        else {
            ElMessage({ type: 'warning', message: 'Please login first' })
            next('/')
        }
    } else
        next()
})

export default router