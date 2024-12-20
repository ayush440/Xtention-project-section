<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center p-8 rounded-lg">
        <h1 class="text-[34px] font-bold text-green-600 mb-4">Thank You!</h1>
        <p class="text-gray-700 mb-6">
          Thank you for Showing Interest In <span class="font-bold">Matrix Algo Trading Panel</span>. <br>
          Our Representative Will Connect With You Within 24 Working Hours 
        </p>
        <div class="flex items-center justify-center mb-0">
          <img src="../assets/images/thankyou.png" alt="">
        </div>
        <p class="text-2xl text-gray-800 font-semibold">Wait For Our Call</p>
        <p class="text-sm text-gray-600 mt-2">
          If you didn't receive any call/mail, contact
          <a href="mailto:support@matrixtradingtech.com" class="text-blue-500 underline">
            support@matrixtradingtech.com
          </a>
        </p>
        <div class="mt-6">
          <p class="text-gray-700 mb-2">Redirecting to the homepage in {{ timer }} seconds...</p>
          <button @click="goHome" class="px-4 py-2 bg-[#00A551] text-white rounded hover:bg-green-600">
            Go to Home Now
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const timer = ref(10);
  
  const goHome = () => {
    router.push('/');
  };
  
  onMounted(() => {
    const countdown = setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        clearInterval(countdown);
        goHome();
      }
    }, 1000);
  });
  </script>
  
  
  <style scoped>
  /* You can add additional styles here if needed */
  </style>
  