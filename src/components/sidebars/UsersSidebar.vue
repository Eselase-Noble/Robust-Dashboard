<script setup lang="ts">
import SidebarSection from '@/components/sidebars/SidebarSection.vue'
</script>

<template>
  <div class="p-6">
    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">User Management</h3>

    <SidebarSection
      title="Users"
      :items="[
        { label: 'Add User', to: '/user/add' },
        { label: 'Edit User', to: '/user/edit' },
        { label: 'Audit User', to: '/user/audit' }
      ]"
    />

    <SidebarSection
      title="Permissions"
      :items="[
        { label: 'Assign Permissions', to: '/user/permissions/assign' },
        { label: 'Audit Permissions', to: '/user/permissions/audit' }
      ]"
    />

    <SidebarSection
      title="Modules"
      :items="[
        { label: 'Manage Modules', to: '/user/modules/manage' },
        { label: 'Audit Modules', to: '/user/modules/audit' }
      ]"
    />

    <SidebarSection
      title="Privileges"
      :items="[
        { label: 'Add Privilege', to: '/user/privileges/add' },
        { label: 'Edit Privilege', to: '/user/privileges/edit' }
      ]"
    />

    <SidebarSection
      title="Roles"
      :items="[
        { label: 'Create Role', to: '/user/roles/create' },
        { label: 'Edit Role', to: '/user/roles/edit' }
      ]"
    />
  </div>
</template>


