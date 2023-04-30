<template>
  <button
    ref="btnEl"
    type="submit"
    class="tw-w-full tw-flex tw-justify-center tw-rounded-lg tw-font-semibold tw-text-white tw-border tw-p-4"
    :style="btnStyle"
    @mouseover="setHoverStyle"
    @mouseleave="resetStyle"
  >
    <span>{{ props.title }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  btnStyle: { type: Object, required: true }
})

const btnEl = ref()

const setHoverStyle = () => {
  btnEl.value.style.color = props.btnStyle.hoverColor
  btnEl.value.style.backgroundColor = props.btnStyle.hoverBgColor
}

const resetStyle = () => {
  btnEl.value.style.color = props.btnStyle.color
  btnEl.value.style.backgroundColor = props.btnStyle.backgroundColor
}
</script>

<style lang="scss" scoped></style>
