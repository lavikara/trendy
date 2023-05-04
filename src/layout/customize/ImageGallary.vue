<template>
  <div id="image-galary">
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
      <div v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          :alt="'image' + index"
          class="tw-w-full tw-h-[100px] tw-object-cover tw-rounded-lg tw-cursor-pointer"
          @click="imageSelected(image)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import image1 from '@/assets/img/image1.jpeg'
import image2 from '@/assets/img/image2.jpeg'

const emit = defineEmits(['imageSelected'])

let images = reactive([image1, image2])

const imageSelected = (image) => {
  emit('imageSelected', image)
}
</script>

<style lang="scss" scoped></style>
