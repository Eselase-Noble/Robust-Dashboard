<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>

<template>
  <div class="p-6 space-y-6">
    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Products Management</h3>
    <SidebarSection
      title="Products"
      :items="[
        { label: 'View Products', to: '/products/list' },
        { label: 'Add Product', to: '/products/add' },
        { label: 'Audit Products', to: '/products/audit' }
      ]"
    />
    <SidebarSection
      title="Categories"
      :items="[
        { label: 'View Categories', to: '/categories/list' },
        { label: 'Add Category', to: '/categories/add' }
      ]"
    />
  </div>
</template>


