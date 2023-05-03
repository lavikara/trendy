<template>
  <div id="dropdown">
    <div
      @click="toggleSidebar = !toggleSidebar"
      class="question tw-flex tw-justify-between tw-items-center tw-bg-red tw-rounded-lg tw-cursor-pointer tw-px-8 tw-py-3"
    >
      <span class="tw-text-white tw-text-sm tw-font-bold">{{ header }}</span>
      <img src="@/assets/img/chevron-down.svg" alt="chevron" :class="{ open: toggleSidebar }" />
    </div>
    <div class="space"></div>
    <div class="space"></div>
    <transition name="dropdown" @enter="enter" @after-enter="afterEnter" @leave="leave">
      <p class="tw-px-4" v-show="toggleSidebar">
        <ColorPallet v-if="header === 'Style Settings'" />
      </p>
    </transition>
    <div class="space"></div>
    <div class="space"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorPallet from './ColorPallet.vue'

defineProps({
  header: String
})

const toggleSidebar = ref(false)

const enter = (element) => {
  element.style.height = 'auto'
  let height = getComputedStyle(element).height
  element.style.height = 0
  getComputedStyle(element)
  setTimeout(() => {
    element.style.height = height
  })
}

const afterEnter = (element) => {
  element.style.height = 'auto'
}

const leave = (element) => {
  element.style.height = getComputedStyle(element).height
  getComputedStyle(element)
  setTimeout(() => {
    element.style.height = 0
  })
}
</script>

<style lang="scss" scoped>
#dropdown {
  img {
    transition: transform 0.5s ease;

    &.open {
      transform: rotateZ(180deg);
    }
  }
  .space {
    height: 1px;
    margin-top: 0.5rem;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
