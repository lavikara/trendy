<template>
  <div id="add-element">
    <div
      class="tw-w-24 tw-h-24 tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-full tw-shadow-md tw-cursor-pointer tw-mx-auto"
      @click="state++"
    >
      <img :src="image" class="tw-w-12" alt="template" />
      <p class="tw-text-sm">{{ title }}</p>
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
