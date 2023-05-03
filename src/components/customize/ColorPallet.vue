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

watchEffect(() => store.dispatch('changeTemplateBg', colors.value.hex))
</script>

<style lang="scss" scoped>
.color-values {
  background: rgb(234, 226, 255);
  padding: 4px;
  max-width: $side-bar-width;
  margin: 0 0 30px 0;
  border: 1px solid rgb(76, 0, 255);
  min-height: 180px;
}

.np-mb {
  margin-bottom: 20px;
}

.color-values p {
  font-size: 14px;
}
</style>
