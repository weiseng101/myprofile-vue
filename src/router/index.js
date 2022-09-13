// @ts-ignore
/* eslint-disable */
import {createRouter, createWebHistory} from 'vue-router'
import testView from '../views/testView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import dayView from "@/views/dayView";
import NotFoundView from "@/views/NotFoundView";
import productView from "@/views/productView";
import HomePage from "@/views/HomePage";
import randomView from "@/views/randomView";
import md5View from "@/views/md5View";
import todoView from "@/views/todoView";


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/test',
            name: 'test',
            component: testView
        },
        {
            path: '/test/:thetime',
            name: 'testView',
            component: testView
        },
        {
            path: '/date',
            name: 'date',
            component: dayView
        },
        {
            path: '/todo',
            name: 'todo',
            component: todoView
        },
        {
            path: '/random',
            name: 'random',
            component: randomView
        },
        {
            path: '/md5',
            name: 'md5',
            component: md5View
        },
        {path: '/date/:thedate', component: dayView},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView},
    ]
})

export default router
