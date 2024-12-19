<template>
    <div class="sticky top-0 z-50 ">
      <!-- Login Form Modal -->
      <transition name="modal">
        <div v-if="showLoginForm" class="fixed inset-0 z-50  " aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeLoginForm"></div>
  
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
            <div 
              class="inline-block align-bottom bg-[#00b852] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full"
              :class="{ 'sm:max-w-xl': !isSmallScreen }"
            >
              <div class="bg-[#00b852] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div class="flex justify-between items-center mb-4">
                      <h2 class="text-[33.2px] font-bold text-white font-CabinetGrotesk" id="modal-title">
                        We're SEBI Registered
                      </h2>
                      <button @click="closeLoginForm" class="text-white hover:text-gray-200">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p class="text-white text-[22.2px] text-center mb-6 sm:mb-8 font-OpenSans">Fill the form</p>
                    
                    <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
                      <input
                        type="text"
                        v-model="formData.name"
                        placeholder="Your name"
                        class="w-full p-2 sm:p-5 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                        required
                      />
                      
                      <input
                        type="tel"
                        v-model="formData.mobile"
                        placeholder="Your Mobile number"
                        class="w-full p-2 sm:p-5 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                        required
                      />
                      
                      <input
                        type="email"
                        v-model="formData.email"
                        placeholder="Email Id (Optional)"
                        class="w-full p-2 sm:p-5 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                      />
                      
                      <select
                        v-model="formData.role"
                        class="w-full p-2 sm:p-5 text-[14.2px] rounded-xl bg-[#19bf63] text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                        required
                      >
                        <option value="" disabled selected>You're a</option>
                        <option value="trader">Trader</option>
                        <option value="investor">Investor</option>
                        <option value="both">Both</option>
                      </select>
                      
                      <button
                        type="submit"
                        class="w-full bg-[#FFD700] text-black sm:py-2 text-[22.2px] rounded-full font-semibold hover:bg-[#e6c200] transition-colors flex items-center justify-center gap-3 mt-6 sm:mt-8 font-CabinetGrotesk"
                        :disabled="isSubmitting"
                      >
                        <span>{{ isSubmitting ? 'Submitting...' : 'Get Demo' }}</span>
                        <span class="bg-black text-white text-[14.2px] px-2 sm:px-3  rounded-lg">IT'S FREE</span>
                      </button>
                    </form>
  
                    <!-- Success/Error Message -->
                    <div v-if="message" :class="['mt-4 p-3 rounded-lg text-[14.2px] font-[\'Proxima_Nova\']', messageClass]">
                      {{ message }}
                    </div>
  
                    <!-- Trust Indicator -->
                    <div class="mt-8 sm:mt-10 text-center">
                      <img src="/public/usersframe.png" alt="" class="mx-auto block" />
                      <p class="text-white text-[18.2px] font-medium font-OpenSans">
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
        class="sticky-form"
      >
        <div class="min-h-screen flex items-center justify-center ">
          <div class="w-full bg-[#00b852] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl">
            <h2 class="text-[30.2px] font-bold text-white mb-2 sm:mb-3 text-center font-CabinetGrotesk">
              We're SEBI Registered
            </h2>
            <p class="text-white text-lg lg:text-xl text-center mb-6 sm:mb-8 font-OpenSans">Fill the form</p>
            
            <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
              <input
                type="text"
                v-model="formData.name"
                placeholder="Your name"
                class="w-full px-4 py-2 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                required
              />
              
              
              <input
                type="tel"
                v-model="formData.mobile"
                placeholder="Your Mobile number"
                class="w-full px-4 py-2 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                required
              />
              
              <input
                type="email"
                v-model="formData.email"
                placeholder="Email Id (Optional)"
                class="w-full px-4 py-2 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
              />

              <input
                type="tel"
                v-model="formData.mobile"
                placeholder="City"
                class="w-full px-4 py-2 text-[14.2px] rounded-xl bg-[#19bf63] placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                required
              />
              
              
              
              <button
                type="submit"
                class="w-full bg-[#FFD700] text-black sm:py-2 text-[22.2px] rounded-full   font-semibold hover:bg-[#e6c200] transition-colors flex items-center justify-center gap-3 mt-6 sm:mt-8 font-CabinetGrotesk"
                :disabled="isSubmitting"
              >
                <span>{{ isSubmitting ? 'Submitting...' : 'Get Demo' }}</span>
                <span class="bg-black text-white text-[14.2px] px-2 sm:px-3 py-1 rounded-lg">IT'S FREE</span>
              </button>
            </form>
  
            <!-- Success/Error Message -->
            <div v-if="message" :class="['mt-4 p-3 rounded-lg text-[14.2px] font-[\'Proxima_Nova\']', messageClass]">
              {{ message }}
            </div>
  
            <!-- Trust Indicator -->
            <div class="mt-8 sm:mt-10 text-center">
              <img src="/public/usersframe.png" alt="" class="mx-auto block" />
              <p class="text-white text-[16px] font-medium font-OpenSans mt-4">
                Trusted by 7000+ Customer across the globe
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile/Tablet Button -->
      <button
        v-if="isSmallScreen && !showLoginForm"
        @click="openLoginForm"
        class="fixed bottom-10 left-4 right-4 bg-[#FFD700]  text-black sm:py-2  w-[60%] md:w-[40%]  mx-auto text-[20.2px] rounded-full font-semibold hover:bg-[#e6c200] transition-colors flex items-center justify-center gap-3 z-50 font-CabinetGrotesk"
      >
        <span>Get Demo</span>
        <span class="bg-black text-white text-[14.2px] px-2 sm:px-3 rounded-lg">IT'S FREE</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import axios from 'axios'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const loginForm = ref(null)
  const showLoginForm = ref(false)
  const windowWidth = ref(window.innerWidth)
  const isSubmitting = ref(false)
  const message = ref('')
  const messageClass = ref('')
  
  const formData = ref({
    name: '',
    mobile: '',
    email: '',
    role: ''
  })
  
  const isSmallScreen = computed(() => windowWidth.value < 1024)
  
  const handleSubmit = async () => {
    isSubmitting.value = true
    message.value = ''
    messageClass.value = ''
  
    try {
      const response = await axios.post('/contact-us', formData.value)
      console.log('Form submitted successfully:', response.data)
      message.value = 'Form submitted successfully! We will contact you soon.'
      messageClass.value = 'bg-green-500 text-white'
      resetForm()
    } catch (error) {
      console.error('Error submitting form:', error)
      message.value = 'An error occurred. Please try again later.'
      messageClass.value = 'bg-red-500 text-white'
    } finally {
      isSubmitting.value = false
    }
  }
  
  const resetForm = () => {
    formData.value = {
      name: '',
      mobile: '',
      email: '',
      role: ''
    }
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
  
  <style scoped>
  .submit-form-container {
    position: relative;
  }
  
  .sticky-form {
    position: sticky;
    top: 0;
    right: 0;

    height: 100vh;
    
    z-index: 40;
    padding: 1rem 1.5rem 3rem;
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
  
  /* Hide the form when footer is in view */
  .footer-in-view .sticky-form {
    display: none;
  }
  </style>