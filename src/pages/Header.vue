<template>
  <q-header elevated>
    <q-toolbar>
      <!--        <q-btn-->
      <!--          flat-->
      <!--          dense-->
      <!--          round-->
      <!--          icon="menu"-->
      <!--          aria-label="Menu"-->
      <!--          @click="toggleLeftDrawer"-->
      <!--        />-->
      <q-btn flat no-caps no-wrap to="/">
        <q-toolbar-title> RSPDf </q-toolbar-title>
      </q-btn>
      <q-space />
      <!--        <q-btn-dropdown stretch flat label="레이아웃">-->
      <!--          <q-list>-->
      <!--            <q-item clickable v-close-popup to="/youtube">-->
      <!--              <q-item-section>-->
      <!--                <q-item-label>Youtube</q-item-label>-->
      <!--              </q-item-section>-->
      <!--            </q-item>-->
      <!--            <q-item clickable v-close-popup to="/sub">-->
      <!--              <q-item-section>-->
      <!--                <q-item-label>Sub</q-item-label>-->
      <!--              </q-item-section>-->
      <!--            </q-item>-->
      <!--          </q-list>-->
      <!--        </q-btn-dropdown>-->
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
      <!--        <q-btn round size="sm" class="q-ml-md">-->
      <!--          <q-avatar size="md">-->
      <!--            <img src="/logo-haii.png" />-->
      <!--          </q-avatar>-->
      <!--          <q-menu :offset="[0, 10]">-->
      <!--            <q-list style="min-width: 100px">-->
      <!--              <q-item clickable v-close-popup to="/profile">-->
      <!--                <q-item-section>프로필</q-item-section>-->
      <!--              </q-item>-->
      <!--              <q-separator />-->
      <!--              <q-item clickable v-close-popup to="/auth/sign-in">-->
      <!--                <q-item-section>로그아웃</q-item-section>-->
      <!--              </q-item>-->
      <!--            </q-list>-->
      <!--          </q-menu>-->
      <!--        </q-btn>-->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useLanguage } from 'src/composables/language';

const $q = useQuasar();
const { langOptions, updateLanguage } = useLanguage();

const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);
const toggleDarkMode = () => {
  $q.dark.toggle();
  $q.localStorage.set('darkMode', $q.dark.isActive);
};
</script>

<style scoped>

</style>
