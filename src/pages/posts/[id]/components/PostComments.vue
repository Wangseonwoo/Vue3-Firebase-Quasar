<template>
  <div>
    <div class="text-subtitle text-weight-bold q-mb-lg">댓글 6</div>
    <div v-if="isActive">
      <q-input type="textarea" class="bg-white" outlined></q-input>
      <div class="flex justify-end q-gutter-x-sm">
        <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
        <q-btn label="등록" color="primary" unelevated />
      </div>
    </div>

    <BaseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 입력하세요</div>
      </q-card-section>
    </BaseCard>
    <CommentList :items="comments" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';

const isActive = ref(false);
const toggleActive = () => (isActive.value = !isActive.value);
const comments = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
</script>

<style lang="scss" scoped></style>
