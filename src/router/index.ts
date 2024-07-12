import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BaseCatalog from '@/components/templates/BaseCatalog.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'catalog',
		component: BaseCatalog,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
