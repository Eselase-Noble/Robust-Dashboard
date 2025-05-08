<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>

<template>
  <div class="p-6">
    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Menu Management</h3>

    <SidebarSection
      title="Menus"
      :items="[
        { label: 'Add Menu', to: '/menu/add' },
        { label: 'Edit Menu', to: '/menu/edit' },
        { label: 'Audit Menus', to: '/menu/audit' }
      ]"
    />

  </div>
</template>


