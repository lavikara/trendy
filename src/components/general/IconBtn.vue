<template>
  <div id="iconBtn">
    <button
      ref="iconBtnEl"
      class="tw-rounded-full tw-flex tw-items-center tw-shadow-md"
      :style="btnStyle"
      @mouseover="setHoverStyle"
      @mouseleave="resetStyle"
    >
      <img :src="icon" :alt="alt" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const iconBtnEl = ref()

const props = defineProps({
  alt: String,
  icon: { type: String, required: true },
  btnStyle: { type: Object, required: true }
})

const setHoverStyle = () => {
  iconBtnEl.value.style.color = props.btnStyle.hoverColor
  iconBtnEl.value.style.backgroundColor = props.btnStyle.hoverBgColor
}

const resetStyle = () => {
  iconBtnEl.value.style.color = props.btnStyle.color
  iconBtnEl.value.style.backgroundColor = props.btnStyle.backgroundColor
}
</script>

<style lang="scss" scoped></style>
