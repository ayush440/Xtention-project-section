<template>
  <div class="min-h-screen bg-[#222222]">
    <!-- Main Content -->
    <div class="w-full">
      <router-view></router-view>
    </div>
    
    <!-- Login Form Modal -->
    <transition name="modal">
      <div v-if="showLoginForm" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeLoginForm"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div 
            class="inline-block align-bottom bg-[#00b852] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            :class="{ 'sm:max-w-xl': !isSmallScreen }"
          >
            <div class="bg-[#00b852] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div class="flex justify-between items-center mb-4">
                    <h2 class="text-3xl sm:text-4xl font-bold text-white" id="modal-title">
                      We're SEBI Registered
                    </h2>
                    <button @click="closeLoginForm" class="text-white hover:text-gray-200">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p class="text-white text-base sm:text-lg text-center mb-6 sm:mb-8">Fill the form</p>
                  
                  <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
                    <input
                      type="text"
                      v-model="formData.name"
                      placeholder="Your name"
                      class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    
                    <input
                      type="tel"
                      v-model="formData.mobile"
                      placeholder="Your Mobile number"
                      class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    
                    <input
                      type="email"
                      v-model="formData.email"
                      placeholder="Email Id (Optional)"
                      class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    
                    <select
                      v-model="formData.role"
                      class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="" disabled selected>You're a</option>
                      <option value="trader">Trader</option>
                      <option value="investor">Investor</option>
                      <option value="both">Both</option>
                    </select>
                    
                    <button
                      type="submit"
                      class="w-full bg-black text-white py-4 sm:py-5 text-base sm:text-xl rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 mt-6 sm:mt-8"
                    >
                      <span>Get Demo</span>
                      <span class="bg-[#FFD700] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg">IT'S FREE</span>
                    </button>
                  </form>

                  <!-- Trust Indicator -->
                  <div class="mt-8 sm:mt-10 text-center">
                    <img src="/public/usersframe.png" alt="" class="mx-auto block" />
                    <p class="text-white text-base sm:text-lg font-medium">
                      Trusted by 7000+ Customer across the globe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Floating Login Form for larger screens -->
    <div 
      v-if="!isSmallScreen"
      ref="loginForm"
      class="fixed right-0 top-0 bottom-0 w-1/2 z-40 px-4 sm:px-6 lg:px-12 overflow-y-auto"
    >
      <div class="min-h-screen flex items-center justify-center py-12">
        <div class="w-full max-w-md lg:max-w-2xl bg-[#00b852] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 text-center">
            We're SEBI Registered
          </h2>
          <p class="text-white text-base sm:text-lg text-center mb-6 sm:mb-8">Fill the form</p>
          
          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Your name"
              class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <input
              type="tel"
              v-model="formData.mobile"
              placeholder="Your Mobile number"
              class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email Id (Optional)"
              class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <select
              v-model="formData.role"
              class="w-full p-4 sm:p-5 text-base sm:text-lg rounded-xl bg-[#19bf63] text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="" disabled selected>You're a</option>
              <option value="trader">Trader</option>
              <option value="investor">Investor</option>
              <option value="both">Both</option>
            </select>
            
            <button
              type="submit"
              class="w-full bg-black text-white py-4 sm:py-5 text-base sm:text-xl rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 mt-6 sm:mt-8"
            >
              <span>Get Demo</span>
              <span class="bg-[#FFD700] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg">IT'S FREE</span>
            </button>
          </form>

          <!-- Trust Indicator -->
          <div class="mt-8 sm:mt-10 text-center">
            <img src="/public/usersframe.png" alt="" class="mx-auto block" />
            <p class="text-white text-base sm:text-lg font-medium">
              Trusted by 7000+ Customer across the globe
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile/Tablet Button -->
    <button
      v-if="isSmallScreen"
      @click="openLoginForm"
      class="fixed bottom-4 left-4 right-4 bg-black text-white py-4 sm:py-5 text-base sm:text-xl rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 z-50"
    >
      <span>Get Demo</span>
      <span class="bg-[#FFD700] text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg">IT'S FREE</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const loginForm = ref(null)
const showLoginForm = ref(false)
const windowWidth = ref(window.innerWidth)

const formData = ref({
  name: '',
  mobile: '',
  email: '',
  role: ''
})

const isSmallScreen = computed(() => windowWidth.value < 1024)

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  closeLoginForm()
}

const openLoginForm = () => {
  showLoginForm.value = true
  document.body.classList.add('overflow-hidden')
}

const closeLoginForm = () => {
  showLoginForm.value = false
  document.body.classList.remove('overflow-hidden')
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  if (!isSmallScreen.value) {
    gsap.fromTo(loginForm.value, 
      { 
        x: '100%',
        opacity: 0 
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: loginForm.value,
          start: 'top bottom',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
:root {
  color-scheme: dark;
}

body {
  @apply bg-[#222222] text-white;
  margin: 0;
  padding: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

/* Prevent scrolling when login form is open */
body.overflow-hidden {
  overflow: hidden;
}
</style>

