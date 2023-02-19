<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md" />
      <div>
        {{ $q.lang }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md" />
      <div>locale - {{ locale }}</div>
      <div>hello - {{ $t('hello') }}</div>
      <div>productName - {{ $t('productName') }}</div>
    </section>
  </q-page>
</template>

<script>
// 재사용성을 위해 src/composables/language.js 로 분리
// import languages from 'quasar/lang/index.json';
// console.log('languages: ', languages);

// const appLanguages = languages.filter(lang =>
//   ['ko-KR', 'en-US'].includes(lang.isoName),
// );
// console.log('appLanguages: ', appLanguages);
// const langOptions = appLanguages.map(lang => ({
//   label: lang.nativeName,
//   value: lang.isoName,
// }));
// console.log('langOptions: ', langOptions);
</script>

<script setup>
import { useLanguage } from 'src/composables/language';

const { langOptions, lang, locale } = useLanguage();
</script>

<style lang="scss" scoped></style>
