<template>
  <div id="galary-menu" class="tw-flex tw-justify-between tw-bg-red tw-px-1 tw-pt-1">
    <div class="tw-flex">
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
    <IconBtn :btnStyle="backBtnStyle" :icon="closeicon" alt="close" @click="close" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PictureIcon from '@/components/icons/PictureIcon.vue'
import UploadIcon from '@/components/icons/UploadIcon.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import closeicon from '@/assets/img/close.png'

const emit = defineEmits(['selectMenu', 'close'])

let menu = ref('upload')

const backBtnStyle = reactive({
  backgroundColor: '#FAF9F6',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6',
  width: '30px',
  height: '30px',
  padding: '8px'
})

const close = () => {
  emit('close')
}

const setBgColor = (menuOption) => {
  menu.value = menuOption
  emit('selectMenu', menu.value)
}
</script>

<style lang="scss" scoped></style>
