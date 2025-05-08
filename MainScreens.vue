<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-800 text-white h-16 w-full fixed top-0 left-0 z-10 flex items-center">
      <div class="w-64 flex-shrink-0 flex items-center justify-center border-r border-gray-700 h-full">
        <img src="@/assets/logo.png" alt="Logo" class="h-10" />
      </div>
      <div class="flex-1 flex justify-between items-center px-6">
        <nav>
          <ul class="flex space-x-6">
            <li v-for="menu in mainMenus" :key="menu.name">
              <router-link
                :to="menu.path"
                class="cursor-pointer hover:text-yellow-400 px-3 py-2 rounded"
                :class="{ 'bg-gray-700': route.path.startsWith(menu.path) }"
              >
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <button @click="logout" class="flex items-center text-sm hover:text-yellow-400">
          <span class="mr-2">{{ currentUser.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>

    <div class="flex pt-16 min-h-screen">
      <Sidebar :currentUser="currentUser" class="fixed left-0 top-16 bottom-0 w-64" />
      <MainContent class="ml-64 flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import MainContent from '@/components/MainContent.vue'

const route = useRoute()
const router = useRouter()

const currentUser = ref({
  name: 'John Doe',
  role: 'Administrator',
  avatar: '@/assets/user-avatar.png'
})

const mainMenus = ref([
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Sales', path: '/sales' },
  { name: 'Products', path: '/products' },
  { name: 'Stocks', path: '/stocks' },
  { name: 'Users', path: '/user' },
])

function logout() {
  console.log('Logging out...')

  // Clear user session (localStorage, sessionStorage, cookies, etc.)
  localStorage.removeItem('user')

  // Redirect to login page after logging out
  router.push('/login')
}
</script>
