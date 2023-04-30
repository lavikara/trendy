<template>
  <div>
    <h1
      class="tw-text-center tw-font-bold tw-text-blue tw-text-4xl tw-leading-normal xxs:tw-text-4xl xxs:tw-leading-normal xs:tw-text-5xl xs:tw-leading-normal sm:tw-text-6xl sm:tw-leading-normal lg:tw-text-8xl lg:tw-leading-normal"
    >
      Trendy is your one stop shop for stunning popups
    </h1>
    <!-- <img src="@/assets/img/template1.png" class="tw-cursor-pointer" :class="style" alt="trendy" /> -->
    <img src="@/assets/img/template2.png" class="tw-mt-6" alt="template" />
    <div class="md:tw-flex tw-mt-12">
      <ButtonComponent
        title="Get Started"
        :btnStyle="getStartedBtnStyle"
        class="tw-mt-4 md:tw-mt-0 md:tw-mr-8"
        @click="router.push({ name: 'PricingView' })"
      />
      <ButtonComponent
        title="Book Demo"
        :btnStyle="bookDemoBtnStyle"
        class="tw-mt-4 md:tw-mt-0 md:tw-ml-8"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/general/ButtonComponent.vue'

const router = useRouter()

const getStartedBtnStyle = reactive({
  backgroundColor: '#CD4161',
  color: '#FFFFFF',
  border: '#CD4161',
  hoverColor: '#CD4161',
  hoverBgColor: '#FCE9E9'
})

const bookDemoBtnStyle = reactive({
  backgroundColor: '#24419a',
  color: '#FFFFFF',
  border: '#24419a',
  hoverColor: '#24419a',
  hoverBgColor: '#dae1f7'
})
</script>

<style lang="scss" scoped></style>
