<template>
  <div class="min-h-[200px] w-full bg-[#222222] flex items-center px-5 2xl:px-16 mt-0 sm:mt-0 lg:mt-10 ">
    <div class="w-full mt-20 sm:mt-20  xl:mt-0 2xl:mt-0 sm:p-0 md:p-6 2xl:p-6 xl:p-6">
      <div class="mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-4 lg:gap-6 mb-12 lg:mb-16 opacity-0">
          <div class="w-16 h-16 lg:w-20 lg:h-20">
            <img src="../assets/images/image9.png" alt="How It Works" class="w-full h-full object-contain" />
          </div>
          <h2 class="text-2xl lg:text-[39.2px] font-bold text-white font-CabinetGrotesk">
            How It Works Section?
          </h2>
        </div>

        <!-- Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            :ref="el => { if (el) stepRefs[index] = el }"
            class="relative p-6 lg:p-8 bg-[#2a2a2a] rounded-lg border-2 border-transparent transition-all duration-300 min-h-[240px] 2xl:min-h-[320px] lg:min-h-[380px] flex flex-col justify-center opacity-0"
          >
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-6xl lg:text-[120px] mt-10 sm:mt-10 md:-mt-0  2xl:mt-0 font-bold text-[#373737] leading-none select-none">
  {{ index + 1 }}
</div>



            <div class="relative z-10 text-center">
              <h3 class="text-white text-lg lg:text-[22.2px] font-semibold mb-3 lg:mb-4 font-CabinetGrotesk">
                {{ step.title }}
              </h3>
              <p class="text-gray-400 text-base lg:text-[19.2px] font-['Open Sans']">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div ref="contactSection" class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 py-5 bg-[#2a2a2a] rounded-xl opacity-0">
          <div class="w-24 h-24 lg:w-32 lg:h-32">
  <img src="/public/call-1.png" alt="Phone Icon" class="w-full h-full object-contain" />
</div>
          <div class="flex-1 text-center lg:text-left">
            <p class="text-white text-lg lg:text-[22.2px] mb-4 font-CabinetGrotesk mx-6 sm:mx-6 2xl:mx-0 lg:mx-0">If still facing problem contact us directly at</p>
            <button 
              @click="handleCall"
              class="bg-[#00b852] text-white py-1  lg:py-4  lg:px-5 text-base lg:text-[19.2px] rounded-lg hover:bg-[#00B33C] transition-colors flex items-center justify-center lg:justify-start gap-3 font-['Open Sans'] w-[80%] mx-auto lg:mx-0 2xl:mx-0 sm:mx-auto lg:w-auto"
            >
              <Phone class="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Call Us now +919109302789</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Phone } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Sign Up in 2 Minutes',
    description: 'Fill out the form to access your free trial.'
  },
  {
    title: 'Integrate with Your Broker',
    description: 'Connect and trade with your broker.'
  },
  {
    title: 'Sit Back and Watch the Algo Work',
    description: 'Connect and trade with your broker.'
  }
]

const header = ref(null)
const stepRefs = ref([])
const contactSection = ref(null)

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
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header.value,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Animate steps and implement scroll-triggered border color change
  stepRefs.value.forEach((step, index) => {
    // Initial animation for opacity and position
    gsap.fromTo(
      step,
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
          trigger: step,
          start: 'top bottom-=50',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        delay: index * 0.2
      }
    )

    // Scroll-triggered border color change
    gsap.fromTo(
      step,
      { borderColor: 'transparent' },
      {
        borderColor: '#00D647',
        duration: 0.3,
        scrollTrigger: {
          trigger: step,
          start: 'top center+=100',
          end: 'bottom center-=100',
          toggleActions: 'play reverse play reverse',
          scrub: true
        }
      }
    )
  })

  // Animate contact section
  gsap.fromTo(
    contactSection.value,
    { 
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactSection.value,
        start: 'top bottom-=50',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )
})

const handleCall = () => {
  window.location.href = 'tel:+919009566516'
}
</script>