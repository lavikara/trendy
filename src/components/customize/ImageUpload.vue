<template>
  <div id="uploadImage" class="tw-h-5/6">
    <div class="tw-flex tw-justify-center tw-items-center tw-h-full tw-p-4">
      <label
        for="fileInput"
        class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-2/4 tw-text-blue-bg4 tw-rounded-lg tw-cursor-pointer"
      >
        Select Image
        <input ref="fileInput" id="fileInput" type="file" accept="image/*" @change="previewImage" />

        <UploadIcon color="#4d84ff" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UploadIcon from '@/components/icons/UploadIcon.vue'

const fileInput = ref()
let currentImage = ref('')

const emit = defineEmits(['imageSelected'])

const previewImage = () => {
  const [file] = fileInput.value.files
  if (file) currentImage.value = URL.createObjectURL(file)
  emit('imageSelected', currentImage.value)
}
</script>

<style lang="scss" scoped>
label {
  width: 100%;
  border: 1px dashed #4d84ff;
}
input[type='file'] {
  display: none;
}
</style>
