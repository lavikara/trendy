<template>
  <div
    id="popup-modal"
    class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-h-screen tw-right-0"
    @click="$emit('close')"
  >
    <div class="container">
      <div class="card tw-h-[450px] tw-max-w-[450px] tw-px-2">
        <div @click.stop>
          <slot name="content">content</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#popup-modal {
  @include fadeIn;
  background-color: $modal-bg;
  overflow: scroll;

  .container {
    .card {
      max-width: 450px;
      margin: 10rem auto 0 auto;
    }
  }
}
</style>
