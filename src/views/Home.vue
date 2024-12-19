<template>
  <div class="flex justify-between gap-6   w-full">
    <div class="flex flex-col w-full xl:w-[60%]">
      <HeroSection />
      <DashboardSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <Marquee />
      <TestimonialsSection />
      <MarketingSection />
    </div>
    <div class=" xl:w-[40%] 2xl:max-w-[30%] mx-auto ">
      <SubmitForm :showLoginForm="showLoginForm" :toggleLogin="toggleLogin" />
    </div>
    <!-- <FooterSection class="footer-section" /> -->
  </div>
</template>

<script setup>
import HeroSection from "./HeroSection.vue";
import DashboardSection from "./DashboardSection.vue";
import WhyChooseSection from "./WhyChooseSection.vue";
import HowItWorksSection from "./HowltWorksSection.vue";
import TestimonialsSection from "./TestimonialsSection.vue";
import MarketingSection from "./MarketingSection.vue";
import FooterSection from "./FooterSection.vue";
import Marquee from "./Marquee.vue";
import SubmitForm from "./SubmitForm.vue";
import { ref } from "vue";

const showLoginForm = ref(false);
const toggleLogin = () => {
  showLoginForm.value = !showLoginForm.value
}
</script>
