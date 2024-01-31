<template>
  <aside class="sticku-side-bar">
    <slot></slot>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sticku-side-bar {
  position: sticky;
  top: 60px;
  z-index: 2;
  height: fit-content !important;
}
</style>
