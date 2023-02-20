<template>
  <q-page padding>
    <section class="content">
      <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
        <div
          v-for="{ thumbnail, title, author, profileImage } in items"
          :key="title"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <article>
            <q-img :ratio="16 / 9" :src="thumbnail" />
            <div class="row q-col-gutter-x-sm q-mt-md">
              <div class="col-auto">
                <q-avatar size="md">
                  <q-img :src="profileImage" />
                </q-avatar>
              </div>
              <div class="col">
                <div
                  class="text-subtitle1 text-weight-bold"
                  :style="{ lineHeight: '1.1em' }"
                >
                  {{ title }}
                </div>
                <div class="text-caption text-grey-9 q-mt-xs">
                  {{ author }}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-white toolbar">
        <q-space />
        <q-btn
          v-for="title in filters"
          :key="title"
          outline
          rounded
          class="q-mx-xs"
          color="primary"
          size="12px"
          :label="title"
        />
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>
<script>
const items = [
  {
    thumbnail:
      'https://i.ytimg.com/vi/qspWEqvsJ5I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCliXPAUPsKEdPfrDze1NHDDG3m-g',
    title: '코딩이란 무엇인가? 우리는 왜 코딩을 해야 하는가!!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/Jg3FFBLyhK0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB55vUW_ROZbHf6gDtCoUrXGfU63g',
    title: 'API란 무엇인가? | 초보자를 위한 쉬운 개념 정리!!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/zmq2zu-UsRk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsL8-mux8xdhkX0WjHMfREbumWng',
    title: 'Vue3 완벽 마스터 : 기초부터 실전까지',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/C3dPzOmHea0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTaWmVCrWNakiQQ39Nt1ma2jNCQw',
    title:
      'Vuetify 강의 Ep01 - 강의소개 | Vuetify를 시작하기 전에 꼭 봐야 하는 영상',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/z_o638sr5s0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBesYitkO0xH_ZDA9bjq5J28PwilA',
    title: '왕초보를 위한, 최신 ES6+ 자바스크립트 강의 출시!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/7qVc4Ez0fnY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJKIfqenhQOh48rHqWeNYL3J0bHw',
    title:
      '자바스크립트 파일 효과적으로 가져오기 | script defer, async  | 웹 개발 입문자들을 위한 강좌!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/XB_UZYOPhWE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrTuz9BaDZZONdl4ZFJNEzHcYjvg',
    title: '서버리스란 무엇인가! | 스타트업에게 추천하는 서버리스아키텍처',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/o3Y-9-NCbE8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAArGTHHonKywH3CkjgmOExDkaMVw',
    title:
      'AWS Lambda - 람다란 무엇인가? | HTTP API 서버 만들기 튜토리얼 | 서버리스 아키텍처 핵심 Lambda 소개',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/Jg3FFBLyhK0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB55vUW_ROZbHf6gDtCoUrXGfU63g',
    title: 'API란 무엇인가? | 초보자를 위한 쉬운 개념 정리!!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/FmNWvd9FQ7o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwK_TSWPTc6GW5eYRtED62PzzogA',
    title: 'Teachable Machine을 활용하여 AI 칼로리 웹 서비스 만들기',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/BRC1JLkVEiY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYq9auVEV1nGt9DPna5at3H37diQ',
    title:
      '파이썬 크롤링 오픈소스 스크래피(Scrapy) 튜토리얼 - 영화정보 수집하기',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/aXi1H_4ncvs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHSBM5Kb-mO0LV5pUnk7y2WEsPzA',
    title:
      '프론트엔드 백엔드란 무엇인가? | 클라이언트 서버란 무엇인가? | 초보자를 위한 쉬운 개념 정리!',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/N_nVDZSAjq4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB0P09VxiN2i7xRFj9mg48Sv9QIg',
    title:
      'HTML&CSS 강의 Ep00 - 강의소개 | 웹 개발 입문 | 함께 웹 개발에 입문해 보는건 어떨까요?',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/6kQFotoh80Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1y6w56dHzofwnWKmOz7Fq_D0jAg',
    title:
      'Vue&Vuetify 강의 Ep00 - 실전편 강의소개 | Vuetify를 시작하기 전에 꼭 봐야 하는 영상',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/WdSQK72G7tw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQr3i2LRuRRVOF-oyzolHZMhhLxw',
    title:
      '자바스크립트 유용한 Array APIs | map, reduce, filter, some, every | 실무에서 자주 사용하는 API',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/0jtalJxrxhs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH7sgJexE15dvxW6FxjwOcnHGmPQ',
    title:
      '이벤트 버블링&캡쳐링 | 이벤트 전파 | stopPropagation() | preventDefault() | 웹개발 입문',
    author: '짐코딩 GYM CODING',
    profileImage: '/logo-haii.png',
  },
];
</script>
<script setup>
import { ref } from 'vue';
const filters = ref(['전체', '실시간', '게임', '음악', '요리']);
</script>

<style lang="scss" scoped>
.content {
  margin-top: 50px;
}
.toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
