<template>
  <div id="color-pallet">
    <Sketch v-model="colors" />
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { Sketch } from '@lk77/vue3-color'

const store = useStore()

const colors = ref({})

const activeElement = computed(() => {
  return store.state.activeElement
})

watchEffect(() => store.dispatch('changeElementColor', colors.value.hex))

watch(activeElement, (newVal, oldVal) => {
  if (newVal !== oldVal) colors.value = {}
})
</script>

<style lang="scss" scoped></style>
