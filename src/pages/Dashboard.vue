<template>
  <q-page>
    <q-form class="row flex items-center q-pl-xl no-wrap">
      <q-select
        class="col-auto q-py-lg select"
        transition-show="scale"
        transition-hide="scale"
        rounded outlined clearable dense
        v-model="form.tags"
        :options="tagOptions"
        label="프로젝트"
        emit-value
        :rules="[val => val.length > 0 || '필수 항목입니다']"
      />
      <q-btn class="col-auto" icon="event" size="xl" flat color="black" >
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date outlined v-model="form.date" default-year-month="2022/01" title="" subtitle="" range>
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Close" color="primary" flat v-close-popup />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>
<!--      <q-toggle-->
<!--        v-model="form.isSuccess"-->
<!--        label="정상처리"-->
<!--        color="primary"-->
<!--      />-->
      <q-input
        class="col-auto search q-mr-sm"
        outlined
        dense
        v-model="form.reserveNumber"
        placeholder="Reservation Number"
      />
      <q-btn outlined class="col-auto search-btn" label="검색" @click="getDate"/>
    </q-form>
    <q-separator />
    <section class="q-mt-lg">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="verified"
          to="/table/success"
          label="정상처리 건"
          exact
        />
        <q-separator class="q-mx-xl" vertical inset />
        <q-route-tab
          :ripple="false"
          icon="sms_failed"
          to="/table/failure"
          label="에러발생 건"
          exact
        />
      </q-tabs>
      <q-separator />
      <router-view />
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar, date, format } from 'quasar';

const tab = ref('');


const $q = useQuasar();
const { formatDate } = date;

const FORMAT = 'YYYY/MM/DD';

const form = ref({
  tags: [],
  date: {
    from: formatDate(new Date(), FORMAT),
    to: formatDate(new Date(), FORMAT),
  },
  isSuccess: false,
  reserveNumber: '',
});

const tagOptions = ref([
  { label: '전체', value: 'all' },
  { label: 'TESS 개인', value: 'tess/p' },
  { label: 'TESS 기업', value: 'tess/b' },
]);

const getDate = () => {
  console.log(form.value)
  // console.log('test')
}

</script>

<style lang="scss" scoped>
.select {
  width: 150px;
}
.search {
  width: 200px;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
