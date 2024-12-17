<template>
    <div class="min-h-screen flex items-center justify-center bg-[#222222] p-4">
      <div class="w-full max-w-md">
        <img src="../assets/images/dp1.jpg" alt="Matrix Trading Tech" class="h-12 mb-8 mx-auto" />
        <div class="bg-[#00D647] rounded-lg p-8">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">
            Get 3-Day Free Demo Now
          </h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Your name"
              class="w-full p-3 rounded-md bg-[#00FF55] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <input
              type="tel"
              v-model="formData.mobile"
              placeholder="Your Mobile number"
              class="w-full p-3 rounded-md bg-[#00FF55] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email Id (Optional)"
              class="w-full p-3 rounded-md bg-[#00FF55] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <select
              v-model="formData.role"
              class="w-full p-3 rounded-md bg-[#00FF55] text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="" disabled selected>You're a</option>
              <option value="trader">Trader</option>
              <option value="investor">Investor</option>
              <option value="both">Both</option>
            </select>
            
            <button
              type="submit"
              class="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors"
            >
              Get Free Demo
            </button>
          </form>
  
          <div class="mt-8 text-center">
            <div class="flex justify-center -space-x-2 mb-3">
              <img src="../assets/images/dp1.jpg" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="../assets/images/dp2.jpg" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="../assets/images/dp3.jpg" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
             
            </div>
            <p class="text-white text-sm font-medium">
              Trusted by 7000+ Customer across the globe
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formData = ref({
    name: '',
    mobile: '',
    email: '',
    role: ''
  })
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData.value)
    // Add your form submission logic here
  }
  </script>