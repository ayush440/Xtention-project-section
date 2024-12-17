<template>
  <div class="w-full bg-[#222222] flex items-center py-24">
    <div class="w-full lg:w-1/2 p-6 lg:p-16">
      <div class="max-w-3xl">
        <h2 ref="header" class="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-8 opacity-0">
          Tired of Losing Money to Market Volatility?
        </h2>
        <p ref="paragraph" class="text-xl lg:text-2xl text-gray-300 opacity-0">
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

