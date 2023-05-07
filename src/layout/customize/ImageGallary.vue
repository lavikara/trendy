<template>
  <div id="image-galary" class="tw-h-full">
    <ImageGalaryMenu @selectMenu="updateComponent" />
    <component :is="currentComponent" @imageSelected="imageSelected" />
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import StockImage from '@/components/customize/StockImage.vue'
import ImageUpload from '@/components/customize/ImageUpload.vue'
import ImageGalaryMenu from '@/components/customize/ImageGalaryMenu.vue'

const emit = defineEmits(['imageSelected'])

let currentComponent = shallowRef(ImageUpload)

const imageSelected = (image) => {
  emit('imageSelected', image)
}

const updateComponent = (menu) => {
  switch (menu) {
    case 'picture':
      currentComponent.value = StockImage
      break

    case 'upload':
      currentComponent.value = ImageUpload
      break

    default:
      break
  }
}
</script>

<style lang="scss" scoped></style>
