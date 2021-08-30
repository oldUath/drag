import Vue from 'vue';
import VueRouter from 'vue-router';
import Drag from '../components/Drag.vue';
import Tdrag from '../components/Tdrag.vue';

Vue.use(VueRouter);
const routes=[
    {
        path: '/',
        component:Drag
    },{
        path: '/t',
        component: Tdrag
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router