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
import image3 from '@/assets/img/image3.jpeg'
import image4 from '@/assets/img/image4.jpeg'
import image5 from '@/assets/img/image5.jpeg'
import image6 from '@/assets/img/image6.jpeg'
import image7 from '@/assets/img/image7.jpeg'
import image8 from '@/assets/img/image8.jpeg'
import image9 from '@/assets/img/image9.jpeg'
import image10 from '@/assets/img/image10.jpeg'
import image11 from '@/assets/img/image11.jpeg'
import image12 from '@/assets/img/image12.jpeg'
import image13 from '@/assets/img/image13.jpeg'
import image14 from '@/assets/img/image14.jpeg'
import image15 from '@/assets/img/image15.jpeg'
import image16 from '@/assets/img/image16.jpeg'
import image17 from '@/assets/img/image17.jpeg'
import image18 from '@/assets/img/image18.jpeg'
import image19 from '@/assets/img/image19.jpeg'
import image20 from '@/assets/img/image20.jpeg'
import image21 from '@/assets/img/image21.jpeg'

const emit = defineEmits(['imageSelected'])

let images = reactive([
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21
])

const imageSelected = (image) => {
  emit('imageSelected', image)
}
</script>

<style lang="scss" scoped></style>
