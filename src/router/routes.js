const routes = [
    {
        path: '/',
        name: 'home',
        meta: { title: 'home', isAuth: false },     //User need the token to acess this page, when isAuth is true
        component:()=>import('./../views/home.vue'),
        children:[
            {
                name:'menu',
                meta: { title: 'menu', isAuth: false },
                path: '/',
                component:()=>import('./../views/menu.vue')
            },
            {
                name:'base',
                meta: { title: 'menu', isAuth: false },
                path: 'base',
                component:()=>import('./../views/code/base.vue')
            },
            {
                name:'hmac',
                meta:{title:'hmac', isAuth: false},
                path:'hmac',
                component: ()=>import('./../views/code/hmac.vue')
            },
            {
                name:'md5',
                meta:{title:'md5',isAuth:false},
                path:'md5',
                component:()=>import('./../views/code/md.vue')
            },
            {
                name:'sm3',
                meta:{title:'sm3',isAuth:false},
                path:'sm3',
                component:()=>import('./../views/code/sm3.vue')
            },
            {
                name:'sha1',
                meta:{title:'sha1',isAuth:false},
                path:'sha1',
                component:()=>import('./../views/code/sha1.vue')
            },
            {
                name:'sha2',
                meta:{title:'sha2',isAuth:false},
                path:'sha2',
                component:()=>import('./../views/code/sha2.vue')
            },
            {
                name:'sha3',
                meta:{title:'sha3',isAuth:false},
                path:'sha3',
                component:()=>import('./../views/code/sha3.vue')
            }
        ]
    }
]

export default routes