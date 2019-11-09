import Vue from 'vue';
import Router from 'vue-router';

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/index',
            component: () => import('@/layout/index'),
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('@/views/index')
                },
                {
                    path: '/doc',
                    name: 'doc',
                    component: () => import('@/views/doc')
                }
            ]
        }
    ]
});

Vue.use(Router);

export default router;
