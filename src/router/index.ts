import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Example authentication check function (replace with actual logic later)
const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('user'); // Fake check for user authentication
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // Redirect to login by default
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/dashboard',
    component: () => import('@/views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/dashboards/Analytics.vue'),
        meta: { title: 'Dashboard Analytics' }
      },
      {
        path: 'add-other',
        component: () => import('@/views/dashboards/AddOther.vue'),
        meta: { title: 'Add Other' }
      }
    ],

  },
  {
    path: '/products',
    component: () => import('@/views/ProductsView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/products/ViewProducts.vue'),
        meta: { title: 'View Products' }
      },
      {
        path: 'add',
        component: () => import('@/views/products/AddProduct.vue'),
        meta: { title: 'Add Product' }
      },
      {
        path: 'audit',
        component: () => import('@/views/products/AuditProducts.vue'),
        meta: { title: 'Audit Products' }
      }
    ],
  },
  // Other routes will follow the same pattern...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Set document title dynamically
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Dashboard` : 'Dashboard'
  next()
})

export default router
