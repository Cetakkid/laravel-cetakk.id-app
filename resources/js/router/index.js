/* eslint-disable */
import Vue from 'vue'
/* const Router = () => import('vue-router') */
import Router from 'vue-router'
const Based = () => import(/* webpackChunkName: "based" */ '../components/layouter/Based')

const Home = () => import(/* webpackChunkName: "home" */ '../components/homepage/Home.vue')
const TentangKami = () => import(/* webpackChunkName: "tentang-kami" */ '../components/homepage/TentangKami.vue')
const CaraPrint = () => import(/* webpackChunkName: "cara-print" */ '../components/homepage/CaraPrint.vue')
const NotFound = () => import(/* webpackChunkName: "page-not-found" */ '../components/PageNotFound.vue')

/* import DashboardCustomer from '../components/customer/DashboardCustomer' */
const PilihVendor = () => import(/* webpackChunkName: "pilih-vendor" */ '../components/customer/PilihVendor.vue')
const OrderForm = () => import(/* webpackChunkName: "order" */ '../components/customer/OrderForm.vue' )

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '*',
        redirect: '/page-not-found'
      },
      {
        path: '/page-not-found',
        component: NotFound,
        name: 'page-not-found'
      },
      { 
        path: '/', 
        name: 'based',
        component: Based,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: '/home',
                component: Home,
                name: 'home'
            },
            { 
                path: '/tentang', 
                component: TentangKami,
                name: 'tentang-kami' 
            },
            { 
                path: '/cara', 
                component: CaraPrint,
                name: 'cara-print' 
            },
            { 
              path: '/dashboard-customer', 
              component: PilihVendor,
              name: 'pilih-vendor'
            },
            { 
              path: '/order/:id', 
              component: OrderForm,
              name: 'order'
            },
        ]
      },
      /*
      {
        path: '/dashboard-customer',
        name: 'DashboardCustomer',
        component: DashboardCustomer,
        children: [
          {
            path: '',
            component: PilihVendor
          },
          {
            path: '/pilih-vendor',
            component: PilihVendor
          }
        ]
      }, 
      */
    ]
  })
}