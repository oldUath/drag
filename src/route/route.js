import Vue from 'vue';
import VueRouter from 'vue-router';
import Drag from '../components/Drag.vue';
import Resize from '../components/Resize.vue';

Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        component:Drag
    },{
        path: '/resize',
        component: Resize
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router