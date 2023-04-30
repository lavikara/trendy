<template>
  <div>
    <img src="@/assets/img/logo.png" class="tw-cursor-pointer" :style="logoStyle" alt="trendy" />
  </div>
</template>

<script setup>
defineProps({
  logoStyle: Object
})
</script>

<style lang="scss" scoped></style>
