<template>
  <q-page>
    <div class="row window-height">
      <div class="col" :class="leftColStyle">
        <q-img height="100vh" src="/sign-in-bg.png" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">로그인</div>
            <div class="text-subtitle2 text-grey">
              이메일과 비밀번호를 입력해주세요.
            </div>
          </q-card-section>
          <q-card-section>
            <q-form ref="myForm" class="q-gutter-y-md q-mt-lg" autofocus greedy>
              <div class="q-gutter-y-lg">
                <q-input
                  autofocus
                  v-model="form.email"
                  filled
                  type="email"
                  label="이메일"
                  :rules="[
                    val => !!val || '필수 항목입니다',
                    (val, rules) =>
                      rules.email(val) || '유효한 이메일 형식을 입력해주세요.',
                  ]"
                ></q-input>
                <q-input
                  v-model="form.password"
                  filled
                  type="password"
                  label="비밀번호"
                  :rules="[
                    val => !!val || '필수 항목입니다',
                    val => val.length >= 7 || '최소 8자 이내로 입력하세요',
                    val => val.length <= 16 || '최대 15자 이내로 입력하세요',
                  ]"
                ></q-input>
              </div>
              <q-btn
                class="full-width q-mt-lg"
                unelevated
                color="primary"
                size="lg"
                label="로그인"
                @click="validate"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const router = useRouter();

const myForm = ref(null);
const form = ref({
  email: '',
  password: '',
});

const validate = () => {
  myForm.value.validate().then(success => {
    $q.loading.show();
    if (success) {
      $q.loading.hide();
      $q.notify('메인 페이지로 이동합니다.');
      console.log(form.value);
      router.push({
        name: 'index',
      });
    } else {
      $q.loading.hide();
      $q.notify('올바른 정보를 입력해주세요.');
      reset();
      onReset();
    }
  });
};

const reset = () => {
  myForm.value.resetValidation();
  onReset();
};

const onReset = () => {
  form.value.email = '';
  form.value.password = '';
};

const leftColStyle = computed(() => ({ hidden: $q.screen.lt.md }));
</script>
