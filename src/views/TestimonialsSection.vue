<template>
  <div class="min-h-screen w-full bg-[#222222] flex items-center">
    <div class="w-full lg:w-1/2 p-6 lg:p-16">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div ref="header" class="flex items-center gap-6 mb-16 opacity-0">
          <div class="w-40">
            <img :src="giveloveLogo" alt="Love icon" />
          </div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
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

        <!-- Testimonials Carousel -->
        <div class="relative" ref="carouselContainer">
          <div
            class="overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
            ref="carousel"
            @mousedown="startDrag"
            @mousemove="drag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
            @touchstart="startDrag"
            @touchmove="drag"
            @touchend="endDrag"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :id="`testimonial-${index}`"
              class="inline-block w-full md:w-[calc(50%-1rem)] p-8 bg-[#2a2a2a] rounded-xl mr-8 last:mr-0 transition-opacity duration-300 ease-in-out"
              :class="{ 'opacity-50 hover:opacity-100 transition-opacity duration-300': currentSlide !== index }"
              @mouseenter="handleHover(index)"
              @mouseleave="handleHoverExit(index)"
            >
              <div class="h-full flex flex-col justify-between">
                <p class="text-gray-300 mb-6 text-lg leading-relaxed whitespace-normal">
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
          <button
            @click="prevSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
          >
            <ChevronLeftIcon class="w-6 h-6 text-white" />
          </button>
          <button
            @click="nextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
          >
            <ChevronRightIcon class="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';

// Import images
import giveloveLogo from '/public/givelove.png';
import user1Avatar from '/public/user1.jpg';
import user2Avatar from '/public/user2.jpg';
import user4Avatar from '/public/user4.jpg';

gsap.registerPlugin(ScrollTrigger);

const header = ref(null);
const statRefs = ref([]);
const carousel = ref(null);
const carouselContainer = ref(null);
const currentSlide = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

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

const totalSlides = computed(() => testimonials.length);

const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.type === "mousedown" ? e.pageX : e.touches[0].pageX;
  scrollLeft.value = carousel.value.scrollLeft;
  document.body.style.overflowY = "hidden";
};

const drag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
  const dist = x - startX.value;
  carousel.value.scrollLeft = scrollLeft.value - dist;
};

const endDrag = () => {
  isDragging.value = false;
  document.body.style.overflowY = "auto";
  snapToSlide();
};

const snapToSlide = () => {
  const slideWidth = carousel.value.offsetWidth;
  const scrollPosition = carousel.value.scrollLeft;
  const targetSlide = Math.round(scrollPosition / slideWidth);
  scrollToSlide(targetSlide);
};

const scrollToSlide = (slideIndex) => {
  const slideWidth = carousel.value.offsetWidth;
  gsap.to(carousel.value, {
    scrollLeft: slideWidth * slideIndex,
    duration: 0.5,
    ease: "power2.out",
  });
  currentSlide.value = slideIndex;
};

const nextSlide = () => {
  scrollToSlide((currentSlide.value + 1) % totalSlides.value);
};

const prevSlide = () => {
  scrollToSlide((currentSlide.value - 1 + totalSlides.value) % totalSlides.value);
};

const handleHover = (index) => {
  if (currentSlide.value !== index) {
    gsap.to(`#testimonial-${index}`, { opacity: 1, duration: 0.3 });
  }
};

const handleHoverExit = (index) => {
  if (currentSlide.value !== index) {
    gsap.to(`#testimonial-${index}`, { opacity: 0.5, duration: 0.3 });
  }
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
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top bottom-=50",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2,
      }
    );
  });

  // Initialize carousel
  scrollToSlide(0);
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>