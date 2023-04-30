<template>
  <div :id="props.id">
    <input
      class="tw-w-full tw-bg-white tw-rounded tw-p-4"
      :class="{
        'tw-text-black-light tw-cursor-not-allowed': disabled
      }"
      :type="type"
      :placeholder="placeHolder"
      @input="setInput"
      @keyup.enter="validate"
      @blur="validate"
      :disabled="disabled"
      :required="required"
      :name="name"
      :id="id"
      v-model="textData"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  placeHolder: String,
  type: String,
  name: String,
  label: String,
  showLabel: Boolean,
  disabled: Boolean,
  required: Boolean
})

let textData = ref('')
</script>

<style lang="scss" scoped></style>
