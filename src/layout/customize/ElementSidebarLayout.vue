<template>
  <div id="element-sidebar">
    <div class="sidebar tw-w-full tw-h-screen tw-overflow-scroll tw-px-4 xl:tw-px-8 tw-py-12">
      <AddElement title="Text" action="addText" />
      <AddElement title="Button" action="addButton" class="tw-mt-4" />
      <AddElement title="Image" action="addImage" class="tw-mt-4" />
    </div>
  </div>
</template>

<script setup>
import AddElement from '@/components/customize/AddElement.vue'
</script>

<style lang="scss" scoped>
#element-sidebar {
  width: $element-side-bar-width;
  height: 100vh;

  .sidebar {
    background-color: $opaque-bg2;
  }
}
</style>
