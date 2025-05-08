<template>
  <div class="bg-gray-700 text-white h-full flex flex-col overflow-y-auto">
    <!-- User info section -->
    <div class="p-6 border-b border-gray-600 flex items-center space-x-4">
      <img :src="currentUser.avatar" alt="User" class="w-12 h-12 rounded-full" />
      <div>
        <div class="font-medium">{{ currentUser.name }}</div>
        <div class="text-sm text-gray-300">{{ currentUser.role }}</div>
      </div>
    </div>

    <!-- Dynamic sidebar content -->
    <component :is="activeSidebarComponent" class="flex-1 overflow-y-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useRoute } from 'vue-router'

// Import all sidebar modules
import DashboardSidebar from '@/components/sidebars/DashboardSidebar.vue'
import ProductsSidebar from '@/components/sidebars/ProductsSidebar.vue'
import UsersSidebar from '@/components/sidebars/UsersSidebar.vue'
import SalesSidebar from '@/components/sidebars/SalesSidebar.vue'
import StocksSidebar from '@/components/sidebars/StocksSidebar.vue'
import PortalSidebar from '@/components/sidebars/PortalSidebar.vue'

interface User {
  name: string
  role: string
  avatar: string
}

export default defineComponent({
  name: 'Sidebar',
  props: {
    currentUser: {
      type: Object as PropType<User>,
      required: true
    }
  },
  setup() {
    const route = useRoute()

    // Map route prefixes to sidebar components
    const sidebarMap: Record<string, any> = {
      '/dashboard': DashboardSidebar,
      '/products': ProductsSidebar,
      '/user': UsersSidebar,
      '/sales': SalesSidebar,
      '/stocks': StocksSidebar,
      '/portal': PortalSidebar,
    }

    // Compute which sidebar component to render
    const activeSidebarComponent = computed(() => {
      const matchedPrefix = Object.keys(sidebarMap).find(prefix =>
        route.path.startsWith(prefix)
      )
      return matchedPrefix ? sidebarMap[matchedPrefix] : null
    })

    return {
      activeSidebarComponent
    }
  }
})
</script>
