<template>
  <div id="homeview">
    <main class="container tw-px-4 tw-py-28 lg:tw-py-44">
      <HeroSection />
    </main>
  </div>
</template>

<script setup>
import HeroSection from '@/layout/homePage/HeroSection.vue'
</script>

<style lang="scss" scoped>
#homeview {
  @include fadeIn;

  .container {
    @media (min-width: 1024px) {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
