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
                // project
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
        },
        // error
        {
            path: '/500',
            name: '500',
            component: () => import('@/views/error/500')
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/views/error/404')
        }
    ]
});

Vue.use(Router);

export default router;
