<template>
  <div>
    <div class="text-h4">Home</div>
    <div>
      {{ $route.name }} <br />
      {{ $route.meta }}
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<!-- route 관련 정보 수정 -->
<route lang="yaml">
name: home-page
meta:
  requireAuth: true
</route>
