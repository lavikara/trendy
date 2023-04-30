<template>
  <div
    class="tw-border tw-rounded-lg tw-py-6 tw-px-8"
    :class="{
      'tw-border-red': props.plan === 'free',
      'tw-border-blue': props.plan === 'basic',
      'tw-border-yellow': props.plan === 'pro',
      'tw-border-orange': props.plan === 'advance'
    }"
  >
    <h1
      class="tw-text-center tw-font-bold tw-text-xl tw-capitalize tw-mb-6"
      :class="{
        'tw-text-red': props.plan === 'free',
        'tw-text-blue': props.plan === 'basic',
        'tw-text-yellow': props.plan === 'pro',
        'tw-text-orange': props.plan === 'advance'
      }"
    >
      {{ props.plan }}
    </h1>
    <h3 class="tw-text-gray tw-text-3xl tw-text-center tw-font-bold">
      {{ props.price }}
    </h3>
    <ul class="tw-mt-12">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="tw-font-bold tw-text-gray tw-text-sm tw-mt-6"
      >
        {{ feature }}
      </li>
    </ul>
    <ButtonComponent
      title="Select Plan"
      :btnStyle="btnStyle"
      class="tw-mt-12"
      @click="router.push({ name: 'TemplateView' })"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/general/ButtonComponent.vue'

const router = useRouter()
const props = defineProps({
  plan: String,
  price: String,
  features: Array,
  btnStyle: Object
})
</script>

<style lang="scss" scoped></style>
