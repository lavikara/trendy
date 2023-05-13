<template>
  <div id="color-pallet">
    <Sketch v-model="colors" />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { Sketch } from '@lk77/vue3-color'

const store = useStore()

const colors = ref({})

watchEffect(() => store.dispatch('changeElementColor', colors.value.hex))
</script>

<style lang="scss" scoped></style>
