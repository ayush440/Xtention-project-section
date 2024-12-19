<template>
  <div class=" bg-[#222222] w-full  flex flex-col px-5 2xl:px-16">
    <div class="relative w-full p-6 mx-auto">
      <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#222222] to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#222222] to-transparent z-10"></div>
      
      <!-- Desktop Marquee -->
      <div class="hidden lg:block w-full bg-[#222222] overflow-hidden">
        <div class="relative" ref="desktopScrollContainer">
          <div class="flex whitespace-nowrap" :style="desktopMarqueeStyle">
            <div v-for="(image, index) in duplicatedImages" :key="`desktop-image-${index}`" 
                 class="inline-flex items-center justify-center shrink-0 mx-4">
              <img 
                :src="image" 
                alt="Partner Logo" 
                class="h-16 opacity-0 gsap-image"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile and Tablet Marquee -->
      <div class="lg:hidden w-full py-8 bg-[#222222] overflow-hidden flex justify-center items-center">
        <div class="relative w-4/5" ref="mobileScrollContainer">
          <div class="flex whitespace-nowrap" :style="mobileMarqueeStyle">
            <div v-for="(image, index) in duplicatedImages" :key="`mobile-image-${index}`" 
                 class="inline-flex items-center justify-center shrink-0 mx-3">
              <img 
                :src="image" 
                alt="Partner Logo" 
                class="h-10 sm:h-12 opacity-0 gsap-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import all images
import logo1 from '@/assets/marquee/logo1.png'
import logo2 from '@/assets/marquee/logo2.png'
import logo3 from '@/assets/marquee/logo3.png'
import logo4 from '@/assets/marquee/logo4.png'
import logo5 from '@/assets/marquee/logo5.png'
import logo6 from '@/assets/marquee/logo6.png'
import logo7 from '@/assets/marquee/logo7.png'
import logo8 from '@/assets/marquee/logo8.png'

const imgArray = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8
];

const desktopScrollContainer = ref(null);
const mobileScrollContainer = ref(null);
const desktopScrollPosition = ref(0);
const mobileScrollPosition = ref(0);
const scrollSpeed = 50; // Adjust this value to change the scroll speed

const duplicatedImages = computed(() => {
  const desktopMinWidth = desktopScrollContainer.value?.offsetWidth || 0;
  const mobileMinWidth = mobileScrollContainer.value?.offsetWidth || 0;
  const imageSetWidth = imgArray.length * (64 + 32); // Assuming 16px height and 4px margin on each side
  const repeatCount = Math.ceil(Math.max(desktopMinWidth, mobileMinWidth) / imageSetWidth) + 1;
  return Array(repeatCount).fill(imgArray).flat();
});

const totalWidth = computed(() => {
  return imgArray.length * (64 + 32); // width + left margin + right margin
});

const desktopMarqueeStyle = computed(() => {
  return {
    transform: `translateX(${-desktopScrollPosition.value}px)`,
  };
});

const mobileMarqueeStyle = computed(() => {
  return {
    transform: `translateX(${-mobileScrollPosition.value}px)`,
  };
});

let desktopAnimationFrame;
let mobileAnimationFrame;

const updateDesktopScroll = () => {
  desktopScrollPosition.value += 1;
  if (desktopScrollPosition.value >= totalWidth.value) {
    desktopScrollPosition.value = 0;
  }
  desktopAnimationFrame = requestAnimationFrame(updateDesktopScroll);
};

const updateMobileScroll = () => {
  mobileScrollPosition.value += 1;
  if (mobileScrollPosition.value >= totalWidth.value) {
    mobileScrollPosition.value = 0;
  }
  mobileAnimationFrame = requestAnimationFrame(updateMobileScroll);
};

onMounted(() => {
  // Start the animations
  desktopAnimationFrame = requestAnimationFrame(updateDesktopScroll);
  mobileAnimationFrame = requestAnimationFrame(updateMobileScroll);

  // GSAP animation
  ScrollTrigger.create({
    trigger: ".gsap-image",
    start: "top bottom-=100px",
    once: true,
    onEnter: () => {
      gsap.fromTo(
        ".gsap-image",
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    },
  });
});

onUnmounted(() => {
  if (desktopAnimationFrame) {
    cancelAnimationFrame(desktopAnimationFrame);
  }
  if (mobileAnimationFrame) {
    cancelAnimationFrame(mobileAnimationFrame);
  }
});
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

.whitespace-nowrap {
  white-space: nowrap;
}

img {
  background: transparent;
  max-width: none;
}
</style>