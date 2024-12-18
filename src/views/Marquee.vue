<template>
  <div class="min-h-[200px] bg-[#222222] flex flex-col ml-16">
    <!-- Desktop Marquee -->
    <div class="hidden  lg:flex w-full md:w-1/2 items-center bg-[#222222]">
      <Vue3Marquee
        :gradient="true"
        :gradient-color="[26, 26, 26]"
        gradient-length="20%"
        :duration="30"
        :pause-on-hover="true"
      >
        <span
          v-for="(img, index) in imgArray"
          :key="index"
          class="inline-block mx-4 gsap-image"
        >
          <img :src="img" alt="Partner Logo" class="h-16 opacity-0" />
        </span>
      </Vue3Marquee>
    </div>

    <!-- Mobile Marquee -->
    <div class="lg:hidden w-full py-8 bg-[#222222]">
      <Vue3Marquee
        :gradient="true"
        :gradient-color="[26, 26, 26]"
        gradient-length="20%"
        :duration="30"
        :pause-on-hover="true"
      >
        <span
          v-for="(img, index) in imgArray"
          :key="index"
          class="inline-block mx-3 gsap-image"
        >
          <img :src="img" alt="Partner Logo" class="h-12 opacity-0" />
        </span>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imgArray = [
  "/src/assets/marquee/logo1.png",
  "/src/assets/marquee/logo2.png",
  "/src/assets/marquee/logo3.png",
  "/src/assets/marquee/logo4.png",
  "/src/assets/marquee/logo5.png",
  "/src/assets/marquee/logo6.png",
  "/src/assets/marquee/logo7.png",
  "/src/assets/marquee/logo8.png",
]

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".gsap-image",
    start: "top bottom-=100px",
    once: true,
    onEnter: () => {
      gsap.fromTo(
        ".gsap-image img",
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
</script>
