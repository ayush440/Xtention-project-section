<template>
  <div class="min-h-screen w-full bg-[#222222] flex items-center">
    <div class="w-full lg:w-1/2 p-6 lg:p-16">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-6 mb-16 opacity-0">
          <div class="w-40">
            <img src="/public/givelove.png" alt="Love icon" />
          </div>
          <h2 class="text-2xl  md:text-3xl lg:text-4xl font-bold text-white">
            We are loved by people from all parts of India
          </h2>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-12 mb-16">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            :ref="el => {
              if (el) statRefs[index] = el;
            }"
            class="opacity-0"
          >
            <div class="text-3xl font-bold text-white mb-4">
              {{ stat.value }}
            </div>
            <div class="text-gray-400 text-xl">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :ref="el => {
              if (el) testimonialRefs[index] = el;
            }"
            class="p-8 bg-[#2a2a2a] rounded-xl opacity-0"
          >
            <p class="text-gray-300 mb-6 text-lg leading-relaxed">
              {{ testimonial.quote }}
            </p>
            <div class="flex items-center gap-4">
              <img
                :src="testimonial.avatar"
                alt="User Avatar"
                class="w-16 h-16 rounded-full"
              />
              <div>
                <div class="text-white font-medium text-xl">
                  {{ testimonial.name }}
                </div>
                <div class="text-gray-400 text-lg">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = ref(null);
const statRefs = ref([]);
const testimonialRefs = ref([]);

const stats = [
  {
    value: "5+",
    label: "years of experience",
  },
  {
    value: "7000+",
    label: "Happy Traders",
  },
  {
    value: "12+",
    label: "Broker Support",
  },
];

const testimonials = [
  {
    quote:
      "I've got good returns in just 3 months thanks to this bot. It's a game-changer for intraday traders!",
    name: "Rahul M.",
    role: "Business Owner",
    avatar: "/public/user1.jpg", // Image for Rahul
  },
  {
    quote:
      "Finally, a system that actually works! No more sleepless nights over trades.",
    name: "Pooja K.",
    role: "Working Professional",
    avatar: "/public/user2.jpg", // Image for Pooja
  },
];

onMounted(() => {
  // Animate header
  gsap.fromTo(
    header.value,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header.value,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Animate stats
  statRefs.value.forEach((stat, index) => {
    gsap.fromTo(
      stat,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top bottom-=50",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2, // Stagger effect
      }
    );
  });

  // Animate testimonials
  testimonialRefs.value.forEach((testimonial, index) => {
    gsap.fromTo(
      testimonial,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonial,
          start: "top bottom-=50",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.3, // Stagger effect
      }
    );
  });
});
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
