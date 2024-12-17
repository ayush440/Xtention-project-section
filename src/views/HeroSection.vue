<template>
  <div class="min-h-screen w-full relative">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
      style="background-image: url('/public/background.png')"
    ></div>

    <!-- Navigation Bar -->
    <nav class="relative z-20 w-full px-6 lg:px-16 py-6">
      <img 
        src="/public/matrix.png" 
        alt="Matrix Trading Tech" 
        class="h-12 w-auto"
      />
    </nav>

    <!-- Content Container -->
    <div ref="contentContainer" class="relative z-10 w-full h-[calc(100vh-88px)] flex items-center">
      <div class="w-full px-6 lg:px-16">
        <div class="w-full lg:w-1/2 max-w-2xl">
          <!-- SEBI Registration Badge -->
          <div class="inline-block bg-[#FFD700]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span class="text-[#FFD700] font-semibold">SEBI REGISTRATION</span>
            <span class="ml-3 bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm">INH000019035</span>
          </div>

          <!-- Main Content -->
          <h1 class="text-3xl lg:text-4xl font-bold leading-tight mb-8 text-white">
            Unlock Consistent Profits with Our SEBI Registered Algo Trading Platform
          </h1>
          <p class="text-lg lg:text-xl mb-8 text-gray-200">
            Automate your Nifty & Bank Nifty trades and watch profits grow effortlessly.
          </p>
          <p class="text-2xl lg:text-2xl font-handwriting text-[#00D647] italic">
            Say goodbye to emotional trading. Let our smart algorithms handle it all while you focus on what matters!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contentContainer = ref(null)

onMounted(() => {
  gsap.fromTo(
    contentContainer.value.children,
    { 
      y: 100, 
      opacity: 0 
    },
    {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentContainer.value,
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<style scoped>
@font-face {
  font-family: 'Handwriting';
  src: url('/fonts/Geist-Regular.ttf') format('truetype');
}

.font-handwriting {
  font-family: 'Handwriting', cursive;
}
</style>