<template>
  <q-form>
    <q-card-section class="q-gutter-y-sm">
      <q-input v-model="titleModel" outlined placeholder="제목" />
      <q-select
        outlined
        v-model="categoryModel"
        :options="categories"
        emit-value
        map-options
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 입력하세요</span>
        </template>
      </q-select>
      <q-input
        v-model="contentModel"
        type="textarea"
        outlined
        placeholder="내용을 작성해주세요"
      />
      <q-input
        v-model="tagField"
        outlined
        placeholder="태그를 입력해주세요"
        prefix="#"
      />
      <q-chip outline dense color="teal" removable @remove="removeTag"
        >vuejs</q-chip
      >
    </q-card-section>
    <q-separator />
    <q-card-actions align="right">
      <slot name="actions">
        <q-btn flat label="취소하기" v-close-popup />
        <q-btn type="submit" flat label="저장하기" color="primary" />
      </slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getCategories } from 'src/services/category';

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
]);

const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});
const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

const tagField = ref('');
const removeTag = () => {};
const categories = getCategories();
</script>

<style lang="scss" scoped></style>
