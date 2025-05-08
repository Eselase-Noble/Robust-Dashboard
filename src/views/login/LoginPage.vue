<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input id="email" v-model="email" type="email" class="w-full p-3 border border-gray-300 rounded-md mt-2" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input id="password" v-model="password" type="password" class="w-full p-3 border border-gray-300 rounded-md mt-2" required />
        </div>
        <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
  // Simple login simulation
  if (email.value === 'user@example.com' && password.value === 'password') {
    // Save user data to localStorage for persistence (use real authentication in production)
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe', role: 'Admin' }))

    // Redirect to dashboard after successful login
    router.push('/dashboard')
  } else {
    alert('Invalid credentials, please try again.')
  }
}
</script>
