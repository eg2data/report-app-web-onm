<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn flat no-caps no-wrap to="/">
          <q-toolbar-title> {{ $t('productName') }} </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn-dropdown stretch flat label="레이아웃">
          <q-list>
            <q-item clickable v-close-popup to="/youtube">
              <q-item-section>
                <q-item-label>Youtube</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/sub">
              <q-item-section>
                <q-item-label>Sub</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown stretch flat label="언어">
          <q-list>
            <q-item
              v-for="(item, index) in langOptions"
              :key="index"
              clickable
              v-close-popup
              tabindex="0"
              @click="updateLanguage(item.value)"
            >
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!-- dark_mode -->
        <q-btn flat round dense :icon="darkModeIcon" @click="toggleDarkMode" />
        <q-btn round size="sm" class="q-ml-md">
          <q-avatar size="md">
            <img src="/logo.png" />
          </q-avatar>
          <q-menu :offset="[0, 10]">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup to="/auth/sign-in">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-avatar class="q-mr-sm" size="lg">
            <img src="/logo.png" />
          </q-avatar>
          <span>Quasar v{{ $q.version }}</span>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: 'Typography',
    localeTitle: 'title.typography',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/typography',
  },
  {
    title: 'Colors',
    localeTitle: 'title.colors',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/colors',
  },
  {
    title: 'Spacing',
    localeTitle: 'title.spacing',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/spacing',
  },
  {
    title: 'Breakpoints',
    localeTitle: 'title.breakpoints',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/breakpoints',
  },
  {
    title: 'Classes & Variables',
    localeTitle: 'title.classes_variables',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/classes-variables',
  },
  {
    title: 'Flex Grid 1',
    localeTitle: 'title.flexgrid',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/flex-grid-1',
  },
  // {
  //   title: 'Flex Grid 2',
  //   caption: 'quasar.dev',
  //   icon: 'school',
  //   to: '/flex-grid-2',
  // },
  {
    title: 'Form Handling',
    localeTitle: 'title.form_handling',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/form-handling',
  },
  {
    title: 'Quasar Utils',
    localeTitle: 'title.quasar_utils',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/quasar-utils',
  },
  {
    title: 'Quasar Language Packs',
    localeTitle: 'title.quasar_language_packs',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/quasar-language-packs',
  },
];
</script>

<script setup>
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useLanguage } from 'src/composables/language';
import EssentialLink from 'components/EssentialLink.vue';

const $q = useQuasar();
const { langOptions, updateLanguage } = useLanguage();

const leftDrawerOpen = ref(false);
const essentialLinks = linksList;
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);
// const init = () => {
//   const darkMode = $q.localStorage.getItem('darkMode');
//   console.log('darkMode: ', darkMode);
//   console.log('darkMode typeof: ', typeof darkMode);
//   $q.dark.set(darkMode);
// };
// init();
const toggleDarkMode = () => {
  $q.dark.toggle();
  $q.localStorage.set('darkMode', $q.dark.isActive);
};
</script>
