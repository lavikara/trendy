<template>
  <nav>
    <TopNavbar />
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TopNavbar from '@/layout/navigation/TopNavbar.vue'
</script>

<style scoped></style>
