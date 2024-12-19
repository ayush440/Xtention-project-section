<template>
  <div class="w-full bg-[#222222] flex items-center min-h-screen relative overflow-hidden" ref="pageContainer">
    <div class="w-full p-6">
      <div class=" mx-auto">
        <!-- Dashboard Image with animation -->
        <div ref="dashboardContainer" class="overflow-hidden rounded-lg">
          <img 
            ref="dashboardImage"
            src="/public/TradingDashboardd.png" 
            alt="Trading Dashboard"
            class="w-full transform-gpu" 
          />
        </div>
      </div>
    </div>
    <!-- Text content with z-index to ensure it's above the image -->
   
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pageContainer = ref(null)
const dashboardContainer = ref(null)
const dashboardImage = ref(null)
const textContent = ref(null)

onMounted(() => {
  // Initial state
  gsap.set(dashboardImage.value, {
    scale: 1.2,
    opacity: 1
  })
  
  gsap.set(textContent.value, {
    opacity: 0,
    x: 50
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pageContainer.value,
      start: 'top top',
      end: '+=100%',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    }
  })

  // Animation sequence
  tl
    // First, animate the dashboard image
    .to(dashboardImage.value, {
      scale: 0.8,
      opacity: 0.3,
      duration: 1.5,
      ease: 'power2.inOut'
    })
    // Then bring in the text content
    .to(textContent.value, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5') // Slight overlap with previous animation
    // Add a pause at the end
    .to({}, { duration: 0.5 })
    // Fade out everything when scrolling to next section
    .to([dashboardImage.value, textContent.value], {
      opacity: 0,
      y: -30,
      duration: 0.5,
      stagger: 0.1
    })

  // Optional: Add hover effect when image is visible
  dashboardContainer.value.addEventListener('mouseenter', () => {
    if (ScrollTrigger.isInViewport(dashboardContainer.value)) {
      gsap.to(dashboardImage.value, {
        scale: gsap.getProperty(dashboardImage.value, 'scale') + 0.05,
        duration: 0.3
      })
    }
  })

  dashboardContainer.value.addEventListener('mouseleave', () => {
    if (ScrollTrigger.isInViewport(dashboardContainer.value)) {
      gsap.to(dashboardImage.value, {
        scale: gsap.getProperty(dashboardImage.value, 'scale') - 0.05,
        duration: 0.3
      })
    }
  })
})
</script>

<style scoped>
/* Add smooth transition for hover effects */
img {
  transition: transform 0.3s ease-out;
}
</style>