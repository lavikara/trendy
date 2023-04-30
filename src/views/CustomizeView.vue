<template>
  <div id="customizeview">
    <main class="container tw-px-4 tw-py-28 lg:tw-pb-44 lg:tw-pt-32">
      <h1>Hello from customize view</h1>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#customizeview {
  @include fadeIn;

  .container {
    @media (min-width: 1024px) {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
