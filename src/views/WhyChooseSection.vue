<template>
  <div class="md:min-h-[200px] min-h-screen w-full bg-[#222222] flex items-center px-5 sm:px-0 xs:px-0 md:px-5 2xl:px-16">
    <div class="w-full mt-20 sm:mt-20 xl:mt-0 2xl:mt-0 sm:p-0 md:p-6 2xl:p-6 xl:p-6">
      <div class="mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-6 mb-14 lg:mb-20 opacity-0">
          <div class="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
            <img src="/public/lit.png" alt="Flame icon" class="w-full h-full object-contain" />
          </div>
          <h2 class="text-2xl lg:text-[39.2px] font-bold text-white font-CabinetGrotesk leading-relaxed">
            Why Choose Matrix Trading Tech?
          </h2>
        </div>

        <!-- Features Grid -->
        <div class="space-y-6 lg:space-y-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            :ref="el => { if (el) featureRefs[index] = el }"
            :class="[ 
              'p-4 lg:p-6 rounded-xl transition-all hover:transform hover:translate-x-2 border-2 opacity-0', 
              index === 0 ? 'bg-[#2F2A1B] border-[#4A3F2C]' : 'bg-[#2a2a2a] border-transparent hover:border-[#00D647]'
            ]"
          >
            <div class="flex items-start gap-4 lg:gap-6">
              <div class="pt-1">
                <!-- Ensure all icons are same size -->
                <img 
                  src="/public/vectorr.png" 
                  alt="Green check icon" 
                  class="w-6 h-6 lg:w-6 lg:h-6 object-contain "
                />
              </div>
              <div>
                <h3 
                  class="text-lg lg:text-[22.2px] font-semibold mb-2 lg:mb-3 font-CabinetGrotesk"
                  :class="index === 0 ? 'text-[#FFB800]' : 'text-white'"
                >
                  {{ feature.title }}
                </h3>
                <p 
                  v-if="feature.description" 
                  class="text-gray-400 text-base lg:text-[19.2px] font-['Open Sans']"
                >
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

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const featureRefs = ref([])

const features = [
  {
    title: "We're SEBI Registered-INH000019035",
    description: null
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
  },
  {
    title: 'Scalable and Customizable',
    description: 'Tailor strategies that suit your trading style.'
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
        delay: index * 0.1
      }
    )

    // Border color animation for non-first items
    if (index !== 0) {
      gsap.fromTo(
        feature,
        { 
          borderColor: 'transparent'
        },
        {
          borderColor: '#00D647',
          duration: 0.3,
          paused: true,
          scrollTrigger: {
            trigger: feature,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    }
  })
})
</script>

<style scoped>
.feature-card {
  background: linear-gradient(145deg, #2a2a2a 0%, #222222 100%);
}
</style>