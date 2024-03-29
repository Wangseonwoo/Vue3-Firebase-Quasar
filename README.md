# Vue3 Firebase App (vue3-firebase-app)

Vue3 Quasar Firebase TypeScript Lecture  
[1.Auto Page](#1-auto-page)  
[2.Auto Layout](#2-auto-layout)

## 1. Auto Page

### 1. unplugin-vue-router 설치

```bash
npm i -D unplugin-vue-router
```

<br>

### 2. 설정

> quasar.config.js 파일에서 vitePlugins 활성화 후 아래 코드 세팅

```js
vitePlugins: [['unplugin-vue-router/vite', {}]],
```

> router 폴더안 index.js 파일

```js
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto'; // /auto 변경
```

#### 위의 세팅을 하면 pages 폴더에 파일 명으로 자동으로 경로가 지정됨

<br>

### 3. 경로안 불필요한 폴더 경로 제외

> quasar.config.js 파일에서 vitePlugins 활성화 후 아래 코드 세팅

```js
vitePlugins: [
        [
          'unplugin-vue-router/vite',
          {
            exclude: ['**/components/**'],
             // 기본으로 pages 안의 .vue 파일을 라우트로 자동 설정하는데 pages 안의 컴포넌트 용의 폴더도 자동으로 라우트 설정 되는것을 방지 하기 위함
          },
        ]
      ],
```

<br>

### 4. 같은 명의 파일을 라우트로 겹침 방지

```js
vitePlugins: [
        [
          'unplugin-vue-router/vite',
          {
            routesFolder: [
              {
                src: 'src/pages',
              },
              {
                src: 'src/docs',
                path: 'docs/', // 같은 명의 파일을 라우트로 겹칠수 있기 때문에 폴더 경로 설정
              },
            ],
            exclude: ['**/components/**'], // 기본으로 pages 안의 .vue 파일을 라우트로 자동 설정하는데 pages 안의 컴포넌트 용의 폴더도 자동으로 라우트 설정 되는것을 방지 하기 위함
          },
        ]
      ],
```

<br>

### 5. 404 페이지 경로 설정

> 파일 명 [...path].vue 로 생성

<br><br>

## 2. Auto Layout

### 1. vite-plugin-vue-layouts 설치

```bash
npm i -D vite-plugin-vue-layouts
```

<br>

### 2. 설정

> quasar.config.js 파일에서 vitePlugins 활성화 후 아래 코드 세팅

```js
vitePlugins: [['vite-plugin-vue-layouts', {}]],

```

> router 폴더안 index.js 파일 세팅

```js
import { setupLayouts } from 'virtual:generated-layouts';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
    extendRoutes: routes => {
      return setupLayouts(routes);
    },
  });

  return Router;
});
```

<br>

### 3. 하위 페이지에서 사용

```js
<route lang="yaml">meta: layout: admin</route>
```

> 하지만 루트 레벨의 라우트 설정에 대해서만 지원 하기 때문에 중첩 라우터 또는 ExtensdRoute사용

<br>

### 4-1. 중첩 라우터 사용법

> 해당 컴포넌트 이름과 일치하는 디렉터리를 생성 하여 라우터 뷰를 통해 설정  
> ex) admin.vue와 admin page 살펴보기

```js
<route lang="yaml">meta: layout: admin</route> // admin.vue 파일에 설정
```

### 4-2. ExtensdRoute사용법

> 컴포넌트 파일 이름 앞에 \_적용 -> \_admin.vue  
> router폴더 index.js파일 수정

```js
const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // routes,

  history: createHistory(process.env.VUE_ROUTER_BASE),
  extendRoutes: routes => {
    return setupLayouts(
      routes.map(route => {
        if (route.path.includes('admin')) {
          route = {
            ...route,
            meta: {
              ...route.meta,
              layout: 'admin',
            },
          };
        }
        return route;
      }),
    );
  },
});
```

<br>

### 5. params id 값을 넘겨 id값의 경로 진입법

> 폴더명 [id]로 생성 후 컴포넌트 페이지 등록  
> ex) posts 폴더 확인

<br><br>

## 3. Alert Component

### 1. outline 클래스 관련

```html
<q-input outlined />
```

```html
<q-btn outline />
```

> 버튼 요소는 outline 인풋 요소는 outlined

<br>

### 2. Dynamic Component

```html
<component :is="authViewComponents[viewMode]" @change-view="changeViewMode" />
```

```js
const authViewComponents = {
  SignInForm,
  SignUpForm,
  FindPasswordForm,
};
```

<br>

### 3. Define Async Component

> lazy load (불필요한 컴포넌트들 까지 로드를 하는걸 발지)를 통하여 네트워크 통신 속도 증가

```js
import { defineAsyncComponent } from 'vue';

const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
```

<br><br>

## 4. Event 실행

<br><br>

## 5. Firebase 프로젝트 생성

> https://console.firebase.google.com/?hl=ko

#### 웹 등록 진행을 위해 프로젝트 생성후 앱 등록 아이콘 클릭

#### 웹 등록 후 설치 진행

```bash
npm install firebase
```

#### quasar new boot [파일명] 으로 부트파일 생성 후 스크립트 파일 복붙

#### quasar.config.js 파일에서 boot 검색 후 등록

#### 빌드 클릭 후 원하는 빌드 클릭 활성화 시키기

#### 해당 공식문서로 이동하여 추가해야 하는 코드들 찾아서 추가

<br><br>

## 6. Firebase 템플릿 변경

#### templates 접속 후 수정 진행

<br><br>

## 7. Vue Use

#### 다양한 컴포저블 함수가 있는 유틸리티성 라이브러리

### 설치

```bash
npm i @vueuse/core
```

#### store 폴더

```js
import { useLocalStorage } from '@vueuse/core';

// const user = ref(null);
const user = useLocalStorage('auth/user', null, {
  serializer: StorageSerializers.object, // serializer: 옵션 값으로  데이터 값을 변환해 주는 기능 StorageSerializers.object: 오브젝트형 스트링으로 변환
});
```
