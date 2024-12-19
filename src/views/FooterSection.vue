<template>
  <footer class="relative w-full bg-black px-6 lg:px-16 py-24 z-50 min-h-[900px]">
    <div class="max-w-[90rem] mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
        <!-- Company Info -->
        <div ref="companyInfo" class="opacity-0 lg:col-span-5">
          <img 
            src="/public/matrix.png" 
            alt="Matrix Trading Tech" 
            class="h-16 mb-8"
          />
          <p class="text-gray-300 text-lg leading-relaxed">
            Our platform offers you an opportunity to fully automate any of our strategies in your trading account and experience its accomplishment in the live market. We also provide the opportunity to automate your own strategy in your trading account by using our platform.
          </p>
        </div>

        <!-- Quick Links -->
        <div ref="quickLinks" class="opacity-0 lg:col-span-2">
          <h3 class="text-white text-2xl font-semibold mb-8">Quick Links</h3>
          <ul class="space-y-4">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-lg">Terms & condition</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-lg">privacy policy</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-lg">Disclaimer</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div ref="contactInfo" class="opacity-0 lg:col-span-3">
          <h3 class="text-white text-2xl font-semibold mb-8">Get in touch with us</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <Phone class="text-[#00D647] w-7 h-7" />
              <a href="tel:+918962336003" class="text-gray-300 hover:text-white transition-colors text-lg">
                +91 8962336003
              </a>
            </div>
            <div class="flex items-start gap-4">
              <MapPin class="text-[#00D647] w-7 h-7 flex-shrink-0" />
              <p class="text-gray-300 text-lg">
                Matrix Trading Technologies, Vidhan Sabha Road, Dubey Colony, Raipur (C.G) 492007
              </p>
            </div>
            <div class="flex items-center gap-4">
              <Mail class="text-[#00D647] w-7 h-7" />
              <a href="mailto:support@matrixtradingtech.com" class="text-gray-300 hover:text-white transition-colors text-lg">
                support@matrixtradingtech.com
              </a>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div ref="socialLinks" class="opacity-0 lg:col-span-2">
          <h3 class="text-white text-2xl font-semibold mb-8">Follow Us on</h3>
          <div class="flex gap-6">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <Linkedin class="w-8 h-8" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <Instagram class="w-8 h-8" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <Facebook class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

    
      <!-- Disclaimer Text -->
      <div ref="disclaimer" class="text-gray-400 text-base leading-relaxed space-y-6 opacity-0">
        <p>
          Message From Regulator: No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account...
        </p>
        <p>
          1) Message from Exchange(s): Prevent Unauthorised transactions in your account --> Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. 2) Message from Depositories: a) Prevent Unauthorized Transactions in your demat account --> Update your mobile number with your Depository Participant. Receive alerts on your registered mobile for all debit and other important transactions in your demat account directly from NSDL on the same day issued in the interest of investors. b) KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
        </p>
        <p>
          Company Registration Number (CIN): Sharekhan Ltd: U99999MH1995PLC087498; Sharekhan Commodities Pvt. Ltd: U67120MH2000PTC127261; SHAREKHAN BNP PARIBAS FINANCIAL SERVICES LIMITED: U65920MH2004PLC149518; Sharekhan.com India Pvt Ltd: U80904MH2000PTC126954; Sharekhan Consultants Pvt. Ltd: U67190MH2000PTC127257
        </p>
        <p>
          Disclaimer: Investment in securities market are subject to market risks, read all the related documents carefully before investing.Brokerage will not exceed SEBI prescribed limit.Please refer the Risk Disclosure Document issued by SEBI and go through the Rights and Obligations and Do's and Dont's issued by Stock Exchanges and Depositories before trading on the Stock Exchanges. For commodities derivatives please note that Commodities Derivatives are highly leveraged instruments. PMS is not offered in Commodity Derivative Segment by Sharekhan Limited. Before investing in the asset class consider your investment objectives, level of experience and risk appetite carefully.
        </p>
        <p>
          Mutual funds disclaimer: Mutual Fund investment are subject to market risk. Read all the scheme related documents carefully before investing. For more details, click here. Quantities, amounts, figures, graphs and rates shown / displayed are exemplary and not recommendatory or actual. For scheme-related information, please refer to the Scheme Information Document available on the relevant AMC's website for detailed Risk Factors, assets allocation, investment strategy, etc.
        </p>
        <p>
          Click here to check out the Shareshop near you.
        </p>
      </div>

      <!-- Credits -->
      <div ref="credits" class="text-center text-gray-400 text-lg mt-12 opacity-0">
        Proudly designed and made by 
        <a href="#" class="text-[#00D647] hover:underline">X-tention crew technologies</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Mail, Linkedin, Instagram, Facebook } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const companyInfo = ref(null)
const quickLinks = ref(null)
const contactInfo = ref(null)
const disclaimer = ref(null)
const credits = ref(null)
const socialLinks = ref(null)

onMounted(() => {
  // Animate main content sections
  const sections = [companyInfo.value, quickLinks.value, contactInfo.value, socialLinks.value]
  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
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
          trigger: section,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        delay: index * 0.2 // Stagger effect
      }
    )
  })

  // Animate disclaimer
  gsap.fromTo(
    disclaimer.value,
    { 
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: disclaimer.value,
        start: 'top bottom-=50',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Animate credits
  gsap.fromTo(
    credits.value,
    { 
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: credits.value,
        start: 'top bottom-=30',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>

