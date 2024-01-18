<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>
      <div class="text-h4">{{ $route.params }}</div>
      <!-- [...path] 로 시작하는 페이지명은 모든 요청을 담을 수 있는 패스 파람으로 매핑이 된다. -->

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
