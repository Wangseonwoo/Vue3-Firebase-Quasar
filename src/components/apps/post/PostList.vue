<template>
  <div>
    <q-list bordered separator>
      <PostItem v-for="item in items" :key="item.id" v-bind="item" />
    </q-list>
  </div>
</template>

<script setup>
import PostItem from './PostItem.vue';
defineProps({
  items: Array,
  default: () => [],
});
</script>

<style lang="scss" scoped></style>
