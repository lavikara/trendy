<template>
  <div id="galary-menu" class="tw-flex tw-bg-red tw-px-1 tw-pt-1">
    <div
      class="tw-bg-red tw-cursor-pointer tw-rounded-t-lg tw-px-2 tw-py-1"
      :class="{ 'tw-bg-[#FAF9F6]': menu === 'upload' }"
      @click="setBgColor('upload')"
    >
      <UploadIcon />
    </div>
    <div
      class="tw-bg-red tw-cursor-pointer tw-rounded-t-lg tw-px-2 tw-py-1"
      :class="{ 'tw-bg-[#FAF9F6]': menu === 'picture' }"
      @click="setBgColor('picture')"
    >
      <PictureIcon />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PictureIcon from '@/components/icons/PictureIcon.vue'
import UploadIcon from '@/components/icons/UploadIcon.vue'

const emit = defineEmits(['selectMenu'])

let menu = ref('upload')

const setBgColor = (menuOption) => {
  menu.value = menuOption
  emit('selectMenu', menu.value)
}
</script>

<style lang="scss" scoped></style>
