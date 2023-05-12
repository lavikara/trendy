<template>
  <div id="sidebar-layout">
    <div
      class="tw-relative tw-w-[260px] lg:tw-w-[350px] xl:tw-w-full tw-h-screen tw-overflow-scroll tw-bg-gray-bg2 tw-px-4 xl:tw-px-8 tw-py-12 tw-z-50"
    >
      <DropDown header="Style Settings" />
      <DropDown header="Add Elements" />
    </div>
  </div>
</template>

<script setup>
import DropDown from '@/components/customize/DropDown.vue'
</script>

<style lang="scss" scoped>
#sidebar-layout {
  width: $side-bar-width;
  height: 100vh;
}
</style>
