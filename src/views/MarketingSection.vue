<template>
  <div class="w-full bg-[#222222] flex items-center py-12 lg:py-24 px-5  2xl:px-16">
    <div class="w-full p-6">
      <div>
        <h2 ref="header" class="text-2xl lg:text-[39.2px] font-bold text-white mb-4 lg:mb-8 opacity-0 font-CabinetGrotesk">
          Tired of Losing Money to Market <br>
          <h2 class="mt-5">Volatility?</h2>
        </h2>
        <p ref="paragraph" class="text-base lg:text-[22.2px]  text-gray-300 opacity-0 font-['Open Sans']">
          Our software eliminates emotional decisions and gives you a competitive edge with data-driven trades.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const paragraph = ref(null)

onMounted(() => {
  // Animate header
  gsap.fromTo(
    header.value,
    { 
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header.value,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Animate paragraph
  gsap.fromTo(
    paragraph.value,
    { 
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: paragraph.value,
        start: 'top bottom-=50',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      },
      delay: 0.2 // Slight delay after header animation
    }
  )
})
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>