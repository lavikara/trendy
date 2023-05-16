<template>
  <div id="empty-state">
    <div class="tw-flex tw-flex-col tw-items-center tw-rounded-lg tw-border tw-border-solid tw-p-4">
      <img class="" src="@/assets/img/emptystate.svg" alt="empty file" loading="lazy" />
      <slot name="message">Nothing to show</slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
