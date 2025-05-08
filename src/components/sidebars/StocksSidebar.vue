<template>
  <div class="p-6 space-y-6">
    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Stocks Management</h3>

    <SidebarSection
      title="Stocks"
      :items="[
        { label: 'View Stock', to: '/stocks/view' },
        { label: 'Adjust Stock', to: '/stocks/adjust' },
      ]"
    />

    <SidebarSection
      title="Alerts"
      :items="[
        { label: 'Audit Stock', to: '/stocks/audit' },
        { label: 'Stock Alerts', to: '/stocks/alerts' },
      ]"
    />

    <SidebarSection
      title="Reports"
      :items="[

        { label: 'Stock History', to: '/stocks/history' },
        { label: 'Stock Reports', to: '/stocks/reports' },
        { label: 'Stock Categories', to: '/stocks/categories' },

      ]"
    />
    <SidebarSection
      title="Transfer"
      :items="[
        { label: 'Stock Transfers', to: '/stocks/transfer' },
        { label: 'Import/Export Stocks', to: '/stocks/import-export' },
        { label: 'Stock Replenishment', to: '/stocks/replenishment' }
      ]"
    />
  </div>

</template>

<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>
