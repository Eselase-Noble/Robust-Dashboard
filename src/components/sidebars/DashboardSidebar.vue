<template>
  <div class="p-6">
    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Dashboard</h3>
    <SidebarSection
      title="Dashboard"
      :items="[
        { label: 'Analytics', to: '/dashboard/analytic' },
        { label: 'Add Other', to: '/dashboard/add-other' }
      ]"
    />
    <SidebarSection
      title="Summary"
      :items="[
        { label: 'Graphs', to: '/dashboard/graphs' },
        { label: 'Charts', to: '/dashboard/charts' },
      ]"
    />
    <SidebarSection
      title="History"
      :items="[
        { label: 'Sales', to: '/dashboard/sales' },
        { label: 'Products', to: '/dashboard/products' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>
