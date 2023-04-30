<template>
  <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
    <PriceComponent plan="free" price="Free" :btnStyle="freeBtnStyle" :features="features" />
    <PriceComponent plan="basic" price="$20" :btnStyle="basicBtnStyle" :features="features" />
    <PriceComponent plan="pro" price="$80" :btnStyle="proBtnStyle" :features="features" />
    <PriceComponent plan="advance" price="$120" :btnStyle="advanceBtnStyle" :features="features" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import PriceComponent from '@/components/pricing/PriceComponent.vue'

let features = ref([
  'Lorem ipsum',
  'Sed ut perspiciatis',
  'At vero eos',
  'Ut enim ad',
  'Duis aute irure',
  'Excepteur sint',
  'Et harum quidem',
  'Ut enim ad minima',
  'Neque porro',
  'Quis autem vel'
])

const freeBtnStyle = reactive({
  backgroundColor: '#CD4161',
  color: '#FFFFFF',
  border: '#CD4161',
  hoverColor: '#CD4161',
  hoverBgColor: '#FCE9E9'
})

const basicBtnStyle = reactive({
  backgroundColor: '#24419a',
  color: '#FFFFFF',
  border: '#24419a',
  hoverColor: '#24419a',
  hoverBgColor: '#dae1f7'
})

const proBtnStyle = reactive({
  backgroundColor: '#dbbe65',
  color: '#FFFFFF',
  border: '#dbbe65',
  hoverColor: '#dbbe65',
  hoverBgColor: '#fdfcf7'
})

const advanceBtnStyle = reactive({
  backgroundColor: '#C06C00',
  color: '#FFFFFF',
  border: '#C06C00',
  hoverColor: '#C06C00',
  hoverBgColor: '#ffedd6'
})
</script>

<style lang="scss" scoped></style>
