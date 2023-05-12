<template>
  <div id="add-element" class="tw-relative tw-flex tw-justify-end tw-items-center">
    <div
      v-show="title === 'Text'"
      id="cloneable"
      draggable="true"
      class="tw-absolute tw-top-2 tw-left-0 tw-bg-transparent tw-z-50"
    >
      <div class="tw-relative tw-h-full tw-w-[175px] lg:tw-w-full">
        <div
          id="cloneableNewElement"
          contentEditable="false"
          class="tw-relative tw-h-full tw-text-black tw-text-lg xs:tw-text-lg lg:tw-text-xl tw-font-bold tw-text-center"
        >
          Drag to add text
        </div>
        <div
          id="cloneableNewDrag"
          class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]"
        >
          <div
            class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move"
          >
            <svg
              class="tw-m-auto"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z"
                fill="#222222"
              />
              <path
                d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z"
                fill="#222222"
              />
              <path
                d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z"
                fill="#222222"
              />
              <path
                d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z"
                fill="#222222"
              />
            </svg>
          </div>
        </div>
        <div
          id="cloneableNewToolbar"
          class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2"
        >
          <div id="delete" class="tw-relative tw-flex tw-justify-center">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12V17"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 12V17"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 7H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="cloneableOverlay"
        class="tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-grab"
      ></div>
    </div>
    <div class="tw-bg-white tw-rounded-full tw-shadow-md tw-cursor-pointer tw-p-1" @click="state++">
      <svg
        v-if="title !== 'Image'"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div v-if="title === 'Image'">
        <img :src="image" class="tw-w-12" alt="template" />
        <p class="tw-text-sm">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  title: String,
  image: String,
  action: String
})

const state = ref(0)

watchEffect(() => store.dispatch(props.action, state.value))
</script>

<style lang="scss" scoped></style>
