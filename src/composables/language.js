import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import languages from 'quasar/lang/index.json';

const appLanguages = languages.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);
const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

export const useLanguage = () => {
  const $q = useQuasar();
  const { t, locale } = useI18n();
  const lang = ref($q.lang.isoName);
  const updateLanguage = value => (lang.value = value);

  watch(lang, val => {
    console.log('val: ', val);
    import(`../../node_modules/quasar/lang/${val}.mjs`).then(lang => {
      $q.lang.set(lang.default);
      locale.value = val;
      $q.localStorage.set('lang', val);
    });
  });

  return {
    lang,
    langOptions,
    updateLanguage,
  };
};
