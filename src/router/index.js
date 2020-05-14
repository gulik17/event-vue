import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { layout: 'main' },
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/event',
    name: 'Event',
    meta: { layout: 'main' },
    component: () => import('../views/Event.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    meta: { layout: 'main' },
    component: () => import('../views/Tickets.vue')
  },
  {
    path: '/masterclasses',
    name: 'Masterclasses',
    meta: { layout: 'main' },
    component: () => import('../views/Masterclasses.vue')
  },
  {
    path: '/ticket-tpl',
    name: 'TicketTpl',
    meta: { layout: 'main' },
    component: () => import('../views/TicketTpl.vue')
  },
  {
    path: '/badge-tpl',
    name: 'BadgeTpl',
    meta: { layout: 'main' },
    component: () => import('../views/BadgeTpl.vue')
  },
  {
    path: '/mailsettings',
    name: 'Mailsettings',
    meta: { layout: 'main' },
    component: () => import('../views/Mailsettings.vue')
  },
  {
    path: '/users',
    name: 'Users',
    meta: { layout: 'main' },
    component: () => import('../views/Users.vue')
  },
  {
    path: '/docs/loadtickets',
    name: 'Loadtickets',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Loadtickets.vue')
  },
  {
    path: '/docs/intro',
    name: 'Intro',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Intro.vue')
  },
  {
    path: '/docs/auth',
    name: 'Auth',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Auth.vue')
  },
  {
    path: '/docs/search',
    name: 'Search',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Search.vue')
  },
  {
    path: '/docs/get',
    name: 'Get',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Get.vue')
  },
  {
    path: '/docs/pass-attempt',
    name: 'PassAttempt',
    meta: { layout: 'main' },
    component: () => import('../views/docs/PassAttempt.vue')
  },
  {
    path: '/docs/set-printed',
    name: 'SetPrinted',
    meta: { layout: 'main' },
    component: () => import('../views/docs/SetPrinted.vue')
  },
  {
    path: '/docs/ticket-save',
    name: 'TicketSave',
    meta: { layout: 'main' },
    component: () => import('../views/docs/TicketSave.vue')
  },
  {
    path: '/docs/ticket-delete',
    name: 'TicketDelete',
    meta: { layout: 'main' },
    component: () => import('../views/docs/TicketDelete.vue')
  },
  {
    path: '/docs/masterclasses',
    name: 'MasterclassesDocs',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Masterclasses.vue')
  },
  {
    path: '/docs/masterclass-save',
    name: 'MasterclassSave',
    meta: { layout: 'main' },
    component: () => import('../views/docs/MasterclassSave.vue')
  },
  {
    path: '/docs/masterclass-delete',
    name: 'MasterclassDelete',
    meta: { layout: 'main' },
    component: () => import('../views/docs/MasterclassDelete.vue')
  },
  {
    path: '/docs/volunteers',
    name: 'Volunteers',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Volunteers.vue')
  },
  {
    path: '/docs/templates',
    name: 'Templates',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Templates.vue')
  },
  {
    path: '/docs/ticket-dispatch',
    name: 'TicketDispatch',
    meta: { layout: 'main' },
    component: () => import('../views/docs/TicketDispatch.vue')
  },
  {
    path: '/docs/reg-widget',
    name: 'RegWidget',
    meta: { layout: 'main' },
    component: () => import('../views/docs/RegWidget.vue')
  },
  {
    path: '/docs/stat',
    name: 'Stat',
    meta: { layout: 'main' },
    component: () => import('../views/docs/Stat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
