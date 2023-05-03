<template>
  <div id="back-btn">
    <button
      ref="backBtnEl"
      @click="$router.go(-1)"
      class="tw-w-9 tw-h-9 tw-rounded-full tw-flex tw-items-center"
      :style="btnStyle"
      @mouseover="setHoverStyle"
      @mouseleave="resetStyle"
    >
      <img src="@/assets/img/arrow-back.svg" alt="arrow" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const backBtnEl = ref()

const props = defineProps({
  title: String,
  btnStyle: { type: Object, required: true }
})

const setHoverStyle = () => {
  backBtnEl.value.style.color = props.btnStyle.hoverColor
  backBtnEl.value.style.backgroundColor = props.btnStyle.hoverBgColor
}

const resetStyle = () => {
  backBtnEl.value.style.color = props.btnStyle.color
  backBtnEl.value.style.backgroundColor = props.btnStyle.backgroundColor
}
</script>

<style lang="scss" scoped></style>
