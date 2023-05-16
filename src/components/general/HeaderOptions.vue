<template>
  <div id="header-options" class="tw-relative">
    <div class="tw-hidden sm:tw-block">
      <ul class="tw-flex tw-overflow-auto">
        <li
          class="tw-text-gray tw-cursor-pointer tw-transition-all tw-duration-300 tw-p-1"
          :class="[tab === option ? 'tw-text-gray w-border-b tw-border-b-4 tw-border-white' : '']"
          v-for="(option, index) in options"
          :key="index"
          @click="updateTab"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const emit = defineEmits(['emitOption'])

let selected = ref()
let tab = ref('')

const props = defineProps({
  options: { type: Array, default: () => [], required: true }
  //   label: { type: String, default: () => '', required: true },
  //   hasBorder: {
  //     type: Boolean,
  //     required: false,
  //     default: () => {
  //       return true
  //     }
  //   }
})

onMounted(() => {
  selected.value = props.options[0]
})

const updateTab = (event) => {
  selected.value = event.target.innerText
  tab.value = event.target.innerText
}

const emitOption = (option) => {
  emit('emitOption', option)
}

watch(selected, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    tab.value = newVal
    emitOption(newVal)
  }
})
</script>

<style lang="scss" scoped></style>
