<template>
  <div class="min-h-screen w-full bg-[#222222] flex items-center">
    <div class="w-full lg:w-1/2 p-6 lg:p-16">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-6 mb-16 opacity-0">
          <div class="w-20 h-20">
            <img src="../assets/images/image9.png" alt="How It Works" class="w-full h-full object-contain" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-white">
            How It Works?
          </h2>
        </div>

        <!-- Steps Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            :ref="el => { if (el) stepRefs[index] = el }"
            class="relative p-4 bg-[#2a2a2a] rounded-xl border-2 border-transparent transition-all duration-300 h-[260px] flex flex-col justify-center opacity-0"
          >
            <div class="absolute top-8 left-8 text-[120px] font-bold text-gray-600/10 select-none">
              {{ index + 1 }}
            </div>
            <div class="relative z-10">
              <h3 class="text-white text-xl font-semibold mb-4">
                {{ step.title }}
              </h3>
              <p class="text-gray-400 text-base">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div ref="contactSection" class="flex items-center gap-8 py-5 bg-[#2a2a2a] rounded-xl opacity-0">
          <div class="w-20 h-20">
            <img src="/public/call.png" alt="Phone Icon" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1">
            <p class="text-white text-xl mb-4">If still facing problem contact us directly at</p>
            <button 
              @click="handleCall"
              class="bg-[#00b852] text-white py-4 px-5 text-xl rounded-lg hover:bg-[#00B33C] transition-colors flex items-center gap-3"
            >
              <Phone class="w-6 h-6" />
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
    description: 'Let our algorithms handle your trades efficiently.'
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
        delay: index * 0.2 // Stagger effect
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

