import Vue from 'vue';
import VueRouter from 'vue-router';
import DashBoard from '@/views/DashBoard.vue';
import ProjectsView from '@/views/ProjectsView';
import TeamView from '@/views/TeamView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: DashBoard,
    },
    {
        path: '/project',
        name: 'project',
        component: ProjectsView,
    },
    {
        path: '/team',
        name: 'team',
        component: TeamView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
