<template>
  <div id="sidebar-layout">
    <div class="sidebar tw-overflow-scroll tw-px-8 tw-py-12">
      <DropDown header="Style Settings" />
      <DropDown header="Add Elements" />
      <DropDown header="Input Fields" />
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
