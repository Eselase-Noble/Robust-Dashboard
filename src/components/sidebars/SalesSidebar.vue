<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>

<template>
  <div class="p-6 space-y-6">

    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Sales</h3>

    <SidebarSection
      title="POS"
      :items="[
        { label: 'POS Dashboard', to: '/pos/dashboard' },
        { label: 'POS Settings', to: '/pos/settings' },
        { label: 'Transactions', to: '/pos/transactions' }
      ]"
    />

    <SidebarSection
      title="Sales"
      :items="[
        { label: 'Overview', to: '/sales/overview' },
        { label: 'Reports', to: '/sales/reports' },
        { label: 'Invoices', to: '/sales/invoices' }
      ]"
    />


  </div>
</template>


