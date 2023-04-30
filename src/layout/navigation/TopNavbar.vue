<template>
  <nav
    class="tw-fixed tw-w-full tw-flex tw-justify-between tw-items-center tw-bg-red-bg1 tw-py-4 tw-px-4 lg:tw-px-12"
  >
    <div class="tw-flex tw-items-center">
      <LogoComponent :logoStyle="logoStyle" @click="router.push({ name: 'HomeView' })" />
      <ul class="tw-hidden lg:tw-flex tw-text-blue tw-ml-20">
        <li class="tw-cursor-pointer">Resource</li>
        <li class="tw-cursor-pointer tw-ml-8">Category</li>
        <li class="tw-cursor-pointer tw-mx-8">Community</li>
        <li class="tw-cursor-pointer">Pricing</li>
      </ul>
    </div>
    <ul class="tw-hidden lg:tw-flex tw-items-center">
      <li
        class="tw-bg-red tw-text-white tw-font-bold tw-rounded-lg tw-cursor-pointer tw-mr-8 tw-px-8 tw-py-4"
        @click="router.push({ name: 'PricingView' })"
      >
        Get Started
      </li>
      <li class="tw-font-medium tw-cursor-pointer tw-text-blue">Login</li>
    </ul>
    <HamburgerIcon class="lg:tw-hidden" />
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import LogoComponent from '@/components/icons/LogoComponent.vue'
import HamburgerIcon from '@/components/icons/HamburgerIcon.vue'

const router = useRouter()

const logoStyle = reactive({
  width: '6rem'
})
</script>

<style lang="scss" scoped></style>
