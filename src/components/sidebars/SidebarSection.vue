<template>
  <div>
    <button
      class="w-full flex justify-between items-center px-3 py-2 rounded-md text-left hover:bg-gray-600"
      @click="expanded = !expanded"
    >
      <span>{{ title }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform"
           :class="{ 'rotate-90': expanded }"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <ul v-if="expanded" class="pl-4 mt-1 space-y-1">
      <li v-for="item in items" :key="item.label">
        <router-link
          :to="item.to"
          class="block px-3 py-2 rounded-md hover:bg-gray-600"
          active-class="bg-gray-600"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  title: string
  items: Array<{ label: string; to: string }>
}>()

const expanded = ref(false)
</script>
