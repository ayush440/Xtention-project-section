<template>
  <div class="min-h-screen w-full bg-[#222222] flex items-center">
    <div class="w-full lg:w-1/2 p-6 lg:p-16">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-6 mb-12 opacity-0">
          <div class="w-20 h-20 flex items-center justify-center">
            <img src="/public/lit.png" alt="Flame icon" class="w-full h-full object-contain" />
          </div>
          <h2 class="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            Why Choose<br />Matrix Trading Tech?
          </h2>
        </div>

        <!-- Features Grid -->
        <div class="space-y-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            :ref="el => { if (el) featureRefs[index] = el }"
            class="p-4 bg-[#2a2a2a] rounded-xl transition-all hover:transform hover:translate-x-2 border-2 border-transparent hover:border-[#00D647] opacity-0"
          >
            <div class="flex items-start gap-6">
              <CheckCircle2 class="w-10 h-10 text-[#00D647] flex-shrink-0 mt-1" />
              <div>
                <h3 class="text-white text-2xl font-semibold mb-3">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-400 text-lg">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const featureRefs = ref([])

const features = [
  {
    title: "We're SEBI Registered-INH000019035",
    description: 'SEBI registered algo trading platform for secure trading.'
  },
  {
    title: 'Nifty & BankNifty Options Trading',
    description: 'Optimize profits with specialized algorithms for options trading.'
  },
  {
    title: '100% Automated Trading',
    description: 'Eliminate manual errors and trade round the clock.'
  },
  {
    title: '11+ High Accuracy Strategies',
    description: 'Proven performance with precision-backed strategies.'
  },
  {
    title: 'Paper Trading Feature',
    description: 'Test and refine your strategies risk-free before trading live.'
  },
  {
    title: 'Compatible with All Major Brokers',
    description: 'Easy integration with TradingView & your broker.'
  }
]

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

  // Animate feature cards
  featureRefs.value.forEach((feature, index) => {
    gsap.fromTo(
      feature,
      { 
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: feature,
          start: 'top bottom-=50',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        delay: index * 0.1 // Stagger effect
      }
    )
  })
})
</script>

<style scoped>
.feature-card {
  background: linear-gradient(145deg, #2a2a2a 0%, #222222 100%);
}
</style>

