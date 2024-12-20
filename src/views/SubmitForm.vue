<template>
  <div class="sticky top-0 z-50">
    <!-- Login Form Modal -->
    <transition name="modal">
      <div v-if="showLoginForm" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 mt-10 sm:mt-10 md:mt-36">
          <!-- Overlay -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeLoginForm"></div>

          <!-- Modal Container -->
          <div class="inline-block w-full transform text-left align-bottom transition-all sm:my-8 sm:align-middle sm:max-w-lg">
            <!-- Form Container -->
            <div class="relative mx-auto w-full max-w-md rounded-2xl bg-[#00b852] shadow-xl">
              <!-- Badge Container - Simplified -->
              <div class="absolute left-1/2 -top-16 -translate-x-1/2">
                <img
                  src="/public/webpsebi.webp"
                  alt="SEBI Badge"
                  class="w-[130px] object-contain"
                />
              </div>

              <!-- Close Button -->
              <button 
                @click="closeLoginForm" 
                class="absolute right-4 top-4 text-white hover:text-gray-200 focus:outline-none"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Form Content -->
              <div class="px-6 pb-8 pt-16">
                <div class="mt-3 text-center sm:mt-5">
                  <h2 class="text-[25.2px] font-bold text-white font-CabinetGrotesk">
                    We're SEBI Registered
                  </h2>
                  <p class="mt-2 text-[22.2px] text-white font-OpenSans">Fill the form</p>
                </div>

                <form @submit.prevent="handleSubmit" class="mt-8 space-y-4">
                  <input
                    type="text"
                    v-model="formData.name"
                    placeholder="Your name"
                    class="w-full rounded-xl bg-[#19bf63] p-4 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                    required
                  />
                  
                  <input
                    type="tel"
                    v-model="formData.mobile"
                    placeholder="Your Mobile number"
                    class="w-full rounded-xl bg-[#19bf63] p-4 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                    required
                  />
                  
                  <input
                    type="email"
                    v-model="formData.email"
                    placeholder="Email Id (Optional)"
                    class="w-full rounded-xl bg-[#19bf63] p-4 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                  />
                  
                  <input
                    type="text"
                    v-model="formData.city"
                    placeholder="City"
                    class="w-full rounded-xl bg-[#19bf63] p-4 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
                    required
                  />

                  <button
                    type="submit"
                    class="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#FFD700] py-3 text-[18px] font-semibold text-black transition-colors hover:bg-[#e6c200] font-CabinetGrotesk"
                    :disabled="isSubmitting"
                  >
                    <span>{{ isSubmitting ? 'Submitting...' : 'Get Demo' }}</span>
                    <span class="rounded-lg bg-black px-3 py-1 text-[14.2px] text-white">IT'S FREE</span>
                  </button>
                </form>

                <!-- Success/Error Message -->
                <div v-if="message" :class="['mt-4 rounded-lg p-3 text-[14.2px]', messageClass]">
                  {{ message }}
                </div>

                <!-- Trust Indicator -->
                <div class="mt-8 text-center">
                  <img src="/public/webpframe.webp" alt="" class="mx-auto block w-[170px] " />
                  <p class="mt-4 text-[16px] font-medium text-white font-OpenSans">
                    Trusted by 7000+ Customer across the globe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Desktop Sticky Form -->
    <div 
      v-if="!isSmallScreen"
      ref="loginForm"
      class="sticky-form"
    >
      <div class="flex min-h-screen items-center justify-center">
        <div class="relative w-full max-w-md rounded-2xl bg-[#00b852] p-8 shadow-2xl">
          <!-- Badge Logo for Desktop - Simplified -->
          <div class="absolute left-1/2 -top-16 -translate-x-1/2">
            <img
              src="/public/webpsebi.webp"
              alt="SEBI Badge"
              class="w-[130px] object-contain"
            />
          </div>

          <h2 class="mt-8 text-center text-[30.2px] font-bold text-white font-CabinetGrotesk">
            We're SEBI Registered
          </h2>
          <p class="mt-2 text-center text-lg text-white lg:text-xl font-OpenSans">Fill the form</p>
          
          <form @submit.prevent="handleSubmit" class="mt-8 space-y-4">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Your name"
              class="w-full rounded-xl bg-[#19bf63] px-4 py-3 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
              required
            />
            
            <input
              type="tel"
              v-model="formData.mobile"
              placeholder="Your Mobile number"
              class="w-full rounded-xl bg-[#19bf63] px-4 py-3 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
              required
            />
            
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email Id (Optional)"
              class="w-full rounded-xl bg-[#19bf63] px-4 py-3 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
            />
            
            <input
              type="text"
              v-model="formData.city"
              placeholder="City"
              class="w-full rounded-xl bg-[#19bf63] px-4 py-3 text-[14.2px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-OpenSans"
              required
            />
            
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#FFD700] py-3 text-[18px] font-semibold text-black transition-colors hover:bg-[#e6c200] font-CabinetGrotesk"
              :disabled="isSubmitting"
            >
              <span>{{ isSubmitting ? 'Submitting...' : 'Get Demo' }}</span>
              <span class="rounded-lg bg-black px-3 py-1 text-[14.2px] text-white">IT'S FREE</span>
            </button>
          </form>

          <!-- Success/Error Message -->
          <div v-if="message" :class="['mt-4 rounded-lg p-3 text-[14.2px]', messageClass]">
            {{ message }}
          </div>

          <!-- Trust Indicator -->
          <div class="mt-8 text-center">
            <img src="/public/webpframe.webp" alt="" class="mx-auto block w-[170px]" />
            <p class="mt-4 text-[16px] font-medium text-white font-OpenSans">
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
      class="fixed bottom-10 left-1/2 z-50 flex w-[60%] -translate-x-1/2 items-center justify-center gap-3 rounded-full bg-[#FFD700] py-3 text-[18px] font-semibold text-black transition-colors hover:bg-[#e6c200] md:w-[40%] font-CabinetGrotesk"
    >
      <span>Get Demo</span>
      <span class="rounded-lg bg-black px-3 py-1 text-[14.2px] text-white">IT'S FREE</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger)

const loginForm = ref(null)
const showLoginForm = ref(false)
const windowWidth = ref(window.innerWidth)
const isSubmitting = ref(false)
const message = ref('')
const messageClass = ref('')
const router = useRouter('')

const formData = ref({
  name: '',
  mobile: '',
  email: '',
  city: '',
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
    router.push('/ThankYou')
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
    city: ''
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
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sticky-form {
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 40;
  padding: 2rem 1.5rem 3rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Prevent scrolling when login form is open */
body.overflow-hidden {
  overflow: hidden;
}

/* Mobile-specific styles */
@media (max-width: 640px) {
  .sticky-form {
    padding: 1rem;
  }
}

/* Ensure proper modal positioning on mobile */
@media (max-width: 640px) {
  .modal-content {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1023px) {
  .sticky-form {
    padding: 1.5rem;
  }
}
</style>