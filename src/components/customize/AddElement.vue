<template>
  <div class="tw-relative tw-flex tw-justify-center tw-items-center">
    <div
      id="add-element"
      class="tw-bg-black tw-rounded-full tw-shadow-md tw-cursor-grab tw-p-2"
      @dblclick="state++"
    >
      <div id="cloneText" draggable="true">
        <TextIcon v-show="title === 'Text'" />
      </div>
      <div id="cloneButton" draggable="true">
        <ButtonIcon v-show="title === 'Button'" />
      </div>
      <div id="cloneImage" draggable="true">
        <ImageIcon v-show="title === 'Image'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import ButtonIcon from '@/components/icons/ButtonIcon.vue'
import TextIcon from '@/components/icons/TextIcon.vue'
import ImageIcon from '@/components/icons/ImageIcon.vue'

const store = useStore()

const props = defineProps({
  title: String,
  action: String
})

const state = ref(0)

watchEffect(() => store.dispatch(props.action, state.value))
</script>

<style lang="scss" scoped></style>
