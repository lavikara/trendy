<template>
  <div id="homeview">
    <nav>
      <TopNavbar />
    </nav>
    <main class="container tw-px-4 tw-py-28 lg:tw-py-44">
      <PriceSection />
    </main>
  </div>
</template>

<script setup>
import TopNavbar from '@/layout/navigation/TopNavbar.vue'
import PriceSection from '@/layout/pricing/PriceSection.vue'
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
