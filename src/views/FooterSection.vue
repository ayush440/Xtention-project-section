<template>
  <footer>
    <div class="bg-gradient-to-b from-[#0A0A0A] to-[#222426] px-8 md:px-10 pt-10 xl:px-20 xl:pt-20 pb-10 mx-auto">
      <div class="text-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-start justify-items-start md:justify-items-center desktop:max-w-[85%] mx-auto">
        <div class="text-[12px] md:text-[14px] space-y-4 col-span-2 md:col-span-1">
          <img src="/public/matrix.png" alt="" @click="goToHome" class="cursor-pointer"/>
          <p>
            Our platform offers you an opportunity to fully automate any of our
            strategies in your trading account and experience its accomplishment
            in the live market. We also provide the opportunity to automate your
            own strategy in your trading account by using our platform.
          </p>
        </div>
        <div class="text-[16px] space-y-4 mt-6 xl:mt-0">
          <p class="font-CabinetGrotesk font-extrabold text-[20px]">Quick Links</p>
          <div class="font-ProximaNova space-y-2 flex flex-col">
            <router-link to="terms-and-conditions?tab=terms">Terms & Conditions</router-link>
            <router-link to="terms-and-conditions?tab=privacy">Privacy Policy</router-link>
          </div>
        </div>
        <div class="text-[16px] space-y-4 md:order-last mt-6 col-span-2 xl:order-none xl:col-span-1 xl:mt-0">
          <p class="font-CabinetGrotesk font-extrabold text-[20px]">Get in touch with us</p>
          <ul class="font-ProximaNova space-y-4">
            <li class="flex items-center gap-3">
              <Phone class="w-6 h-6" />
              <a
                :href="generatePhoneCallLink('9244911494')"
                class="font-ProximaNovaThin tracking-wider text-[16px]"
              >
                (+91) 9244911494
              </a>
            </li>
            <li class="flex items-center gap-3">
              <MapPin class="w-6 h-6" />
              <p>
                Matrix Trading Technologies, Vidhan Sabha Road, Dubey Colony,
                Raipur (C.G) 492007
              </p>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-6 h-6" />
              <a
                :href="
                  generateMailToLink(
                    'Matrixalgo01@gmail.com',
                    'cc@example.com',
                    'Subject of the email',
                    'Body of the email'
                  )
                "
              >
                Matrixalgo01@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div class="text-[16px] space-y-4 mt-6 xl:mt-0 ">
          <p class="font-CabinetGrotesk font-extrabold text-[20px]">Follow Us on</p>
          <ul class="flex gap-5">
           <li>
            <a href="https://www.instagram.com/matrixtradingtech/" target="_blank">
              <Instagram class="w-7 h-7" />
            </a>
           </li>
           <li>
            <a href="https://www.facebook.com/matrixtradingtech?mibextid=ZbWKwL" target="_blank">
              <Facebook class="w-7 h-7" />
            </a>
           </li>
          </ul>
        </div>
      </div>
      <hr class="mt-10 md:mt-16 opacity-25 desktop:max-w-[85%] mx-auto">
      <div class="text-white text-center font-ProximaNova w-full md:w-[90%] mx-auto mt-8 space-y-4 desktop:max-w-[85%]">
        <p class="font-CabinetGrotesk font-bold text-[18px] md:text-[22px]">Disclaimer</p>
        <p class="text-[12px] md:text-[14px]">Matrix Trading Tech is a sophisticated algotrading platform, uniquely integrated with TradingView and custom strategies, offering a seamless API connection to your broker. Tailored for retail traders and investors, our platform is dedicated to elevating wealth management practices. While we strive to ensure flawless operation, we recommend consulting a financial advisor before trading or investing through our platform. Please be aware that Matrix Trading Tech cannot be held accountable for any losses resulting from market volatility or any platform-related issues.</p>
        <p class="text-[14px] md:text-[16px]">Proudly designed and developed by <span class="text-[#00B852]">Xtention crew technologies</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-vue-next';

const goToHome = () => {
  // Implement your navigation logic here
};

const generatePhoneCallLink = (phoneNumber) => {
  return `tel:${phoneNumber}`;
};

const generateMailToLink = (to, cc, subject, body) => {
  let mailtoLink = `mailto:${to}`;
  const params = [];
  if (cc) params.push(`cc=${encodeURIComponent(cc)}`);
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length > 0) {
    mailtoLink += `?${params.join('&')}`;
  }
  return mailtoLink;
};
</script>

