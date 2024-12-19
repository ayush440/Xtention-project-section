<template>
  <div class="min-h-screen bg-[#222222]" :class="{ 'footer-in-view': isFooterInView }">
    <!-- Main Content -->
    <div class="w-full">
      <router-view></router-view>
    </div>
    
    <FooterSection/>

    <!-- Sticky button to open form -->


   
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from './views/FooterSection.vue';
import LoginForm from './components/LoginForm.vue';

const isFooterInView = ref(false)
const showLoginForm = ref(false)

const checkFooterVisibility = () => {
  const footer = document.querySelector('.footer-section')
  if (footer) {
    const rect = footer.getBoundingClientRect()
    isFooterInView.value = rect.top <= window.innerHeight
  }
}

const openLoginForm = () => {
  showLoginForm.value = true
  document.body.classList.add('overflow-hidden')
}

const closeLoginForm = () => {
  showLoginForm.value = false
  document.body.classList.remove('overflow-hidden')
}

onMounted(() => {
  window.addEventListener('scroll', checkFooterVisibility)
  checkFooterVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkFooterVisibility)
})
</script>

<style>
:root {
  color-scheme: dark;
}

body {
  @apply bg-[#222222] text-white;
  margin: 0;
  padding: 0;
}

body.overflow-hidden {
  overflow: hidden;
}
</style>

