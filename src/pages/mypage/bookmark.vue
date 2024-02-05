<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: 'a' + index,
  title: 'Vue3 Firebase 강의 ' + index,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sunt ipsam cumque sapiente repellat. Ab ea voluptates harum laboriosam aliquam? Consequuntur temporibus placeat laborum quo optio maiores perspiciatis, voluptatibus ad!',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));
</script>

<style lang="scss" scoped></style>
