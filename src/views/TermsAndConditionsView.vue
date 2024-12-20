<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import TermsAndConditionSection from "@/components/TermsAndConditionSection.vue";
import PrivacyPolicySection from "@/components/PrivacyPolicySection.vue";

// Use Vue Router composables
const route = useRoute();
const router = useRouter();

// Reactive variable for the active content
const activeContent = ref(route.query.tab || 'security');

// Watch for changes in the route query to update active content
watch(() => route.query.tab, (newTab) => {
  activeContent.value = newTab || 'security';
});
</script>

<template>
  <main>
    <section class="p-8 md:p-16 xl:p-20 3xl:max-w-[85%] mx-auto">
      <div class="flex flex-col xl:grid grid-cols-8 gap-10 md:gap-20 w-full">
        <div class="col-span-2">
          <div
            class="w-full flex xl:flex-col items-center justify-start font-dm-sans text-[18px] sticky top-40 overflow-x-auto"
            >
            <router-link
              :to="{ query: { tab: 'terms' } }"
              class="w-full text-left md:text-center xl:text-left  p-4 rounded-md whitespace-nowrap"
              :class="{
                'bg-[#00B852] text-white': activeContent === 'terms',
                'text-white': activeContent !== 'terms',
              }"
            >
              Terms and Conditions
            </router-link>

            <router-link
              :to="{ query: { tab: 'privacy' } }"
              class="w-full text-left md:text-center xl:text-left p-4 rounded-md whitespace-nowrap"
              :class="{
                'bg-[#00B852] text-white': activeContent === 'privacy',
                'text-white': activeContent !== 'privacy',
              }"
            >
              Privacy Policy
            </router-link>

          </div>
        </div>

        <div class="col-span-6">
          <PrivacyPolicySection v-if="activeContent === 'privacy'" id="privacyid" />
          <TermsAndConditionSection v-if="activeContent === 'terms'" id="termsid" />
        </div>
      </div>
    </section>
  </main>
</template>
