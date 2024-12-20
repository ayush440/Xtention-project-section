<template>
  <div class="min-h-[200px] w-full bg-[#222222] flex items-center px-5 2xl:px-16">
    <div class="w-full mt-20 sm:mt-20 xl:mt-0 2xl:mt-0 sm:p-0 md:p-6 2xl:p-6 xl:p-6">
      <div class="mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-4 sm:gap-4 md:gap-0 lg:gap-0   mb-14 lg:mb-20 opacity-0">
  <div class="w-24 lg:w-40">
    <img :src="giveloveLogo" alt="Love icon" class=" xl:w-24 " />
  </div>
  <h2 class="text-2xl -ml-0 sm:ml-0 md:ml-5 lg:ml-8 2xl:-ml-2 lg:text-[39.2px] font-bold text-white font-CabinetGrotesk leading-relaxed">
    We are loved by people from all parts of India
  </h2>
</div>


        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-4 lg:gap-12 mb-8 lg:mb-16">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            :ref="el => { if (el) statRefs[index] = el }"
            class="opacity-0"
          >
            <div class="text-2xl lg:text-[39.2px] font-bold text-white mb-2 lg:mb-4 font-CabinetGrotesk">
              {{ stat.displayValue }}{{ stat.suffix }}
            </div>
            <div class="text-gray-400 text-sm lg:text-[22.2px] font-['Open Sans']">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Testimonials Carousel -->
        <div class="relative overflow-hidden" ref="carouselContainer">
          <div class="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-[#222222] to-transparent z-10"></div>
          <div class="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-[#222222] to-transparent z-10"></div>
          <div
            class="flex whitespace-nowrap"
            ref="carousel"
          >
            <div
              v-for="(testimonial, index) in duplicatedTestimonials"
              :key="`${index}-${testimonial.name}`"
              class="inline-block w-full lg:w-[400px] h-[250px] lg:h-[300px] p-4 lg:p-8 bg-[#2a2a2a] rounded-xl mr-4 lg:mr-8 shrink-0 testimonial-card"
            >
              <div class="h-full flex flex-col justify-between">
                <p class="text-gray-300 mb-4 lg:mb-6 text-base lg:text-[19.2px] leading-relaxed whitespace-normal line-clamp-4 font-['Open Sans']">
                  {{ testimonial.quote }}
                </p>
                <div class="flex items-center gap-3 lg:gap-4">
                  <img
                    :src="testimonial.avatar"
                    alt="User Avatar"
                    class="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                  />
                  <div>
                    <div class="text-white font-medium text-lg lg:text-[22.2px] font-CabinetGrotesk">
                      {{ testimonial.name }}
                    </div>
                    <div class="text-gray-400 text-sm lg:text-[19.2px] font-['Open Sans']">{{ testimonial.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images
import giveloveLogo from '/public/give-love.webp';
import user1Avatar from '/public/user1.jpg';
import user2Avatar from '/public/user2.jpg';
import user4Avatar from '/public/user4.jpg';

gsap.registerPlugin(ScrollTrigger);

const header = ref(null);
const statRefs = ref([]);
const carousel = ref(null);
const carouselContainer = ref(null);

const stats = ref([
  {
    displayValue: 0,
    endValue: 5,
    suffix: '+',
    label: "years of experience",
  },
  {
    displayValue: 0,
    endValue: 7000,
    suffix: '+',
    label: "Happy Traders",
  },
  {
    displayValue: 0,
    endValue: 12,
    suffix: '+',
    label: "Broker Support",
  },
]);

const testimonials = [
  {
    quote:
      "I've got good returns in just 3 months thanks to this bot. It's a game-changer for intraday traders!",
    name: "Rahul M.",
    role: "Business Owner",
    avatar: user1Avatar,
  },
  {
    quote:
      "The support team is incredibly responsive. They've helped me optimize my trading strategy.",
    name: "Pooja K.",
    role: "Working Professional",
    avatar: user2Avatar,
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. Highly recommended!",
    name: "Priya R.",
    role: "Investor",
    avatar: user4Avatar,
  },
];

const duplicatedTestimonials = computed(() => [...testimonials, ...testimonials]);

const animateValue = (obj) => {
  const duration = 2000;
  const startValue = 0;
  const endValue = obj.endValue;
  
  gsap.to(obj, {
    displayValue: endValue,
    duration: duration / 1000,
    ease: "power1.out",
    roundProps: "displayValue"
  });
};

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
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top bottom-=50",
          end: "bottom center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            animateValue(stats.value[index]);
          },
        },
        delay: index * 0.2,
      }
    );
  });

  // Initialize infinite scroll for carousel
  const carouselWidth = carousel.value.offsetWidth;
  const testimonialWidth = carouselWidth / testimonials.length;

  gsap.to(carousel.value, {
  x: -carouselWidth,  // Move the carousel to the left by the width of the entire carousel
  duration: testimonials.length * 3, // Speed of scrolling
  ease: "none",
  repeat: -1,  // Keep repeating the animation infinitely
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % carouselWidth)  // This ensures a seamless, infinite loop
  }
});
});
</script>

<style scoped>
.testimonial-card {
  min-width: 300px;
  max-width: 300px;
}

@media (min-width: 1024px) {
  .testimonial-card {
    min-width: 400px;
    max-width: 400px;
  }
}
</style>