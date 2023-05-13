<template>
  <div id="styles-sidebar">
    <div
      class="sidebar tw-relative tw-w-full tw-h-screen tw-overflow-scroll tw-text-white tw-px-4 xl:tw-px-8 tw-py-12 tw-z-30"
    >
      <DropDown header="Background Style" />
      <DropDown header="Element Style" />
    </div>
  </div>
</template>

<script setup>
import DropDown from '@/components/customize/DropDown.vue'
// import ColorPallet from '@/components/customize/ColorPallet.vue'
</script>

<style lang="scss" scoped>
#styles-sidebar {
  width: $side-bar-width;
  height: 100vh;

  .sidebar {
    background-color: $opaque-bg2;
  }
}
</style>
