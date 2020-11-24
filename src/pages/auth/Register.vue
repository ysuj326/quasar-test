<template>
  <q-page padding class="register row">
    <!-- content -->
    <div class="fit self-center q-pa-md">
      <q-card class="q-pa-md col q-mx-auto text-center" >
        <q-card-section>
          <h3>회원가입</h3>
          <q-form
            @submit="onSubmit"
            class="q-gutter-md q-mx-auto"
            :disabled="progress"
          >
            <q-input
              color="primary"
              outlined
              required
              type="text"
              v-model="ivo.name"
              label="이름을 입력하새요."
            >
              <template v-slot:prepend>
                <q-icon name="assignment_ind" />
              </template>
            </q-input>

            <q-input
              color="primary"
              outlined
              required
              type="email"
              v-model="ivo.email"
              label="이메일을 입력하세요">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              color="primary"
              outlined
              required
              type="password"
              v-model="ivo.password"
              label="비밀번호를 입력하세요"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
            </q-input>

            <q-input
              color="primary"
              outlined
              required
              type="password"
              v-model="ivo.password"
              label="비밀번호를 다시 입력하세요"
            >
              <template v-slot:prepend>
                <q-icon name="check_circle" />
              </template>
            </q-input>

            <q-input
              color="primary"
              outlined
              required
              type="tel"
              v-model="ivo.telno"
              label="연락처를 입력하세요."
              mask="###-####-####"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>

            <q-input
              v-model="ivo.birth"
              outlined
              required
              type="date"
            >
              <template v-slot:prepend>
                <q-icon name="calendar_today" />
              </template>
            </q-input>

            <q-btn
              type="Submit"
              align="around"
              class="q-my-lg btn-fixed-width"
              color="primary"
              label="회원가입"
              icon="done_outline"
              :loading="progress"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <!--    회원가입 알림창    -->
    <q-dialog
      v-model="dialogOv.isOpen"
      persistent
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">{{dialogOv.title}}</div>
        </q-card-section>
        <q-card-section>
          <div class="col q-pt-none">{{dialogOv.message}}</div>
        </q-card-section>
        <q-card-section align="center" class="text-teal">
          <div class="bg-white text-teal">
            <q-btn label="OK" v-close-popup />
          </div>
        </q-card-section>
      </q-card>

    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Register',
  components: {}
})

export default class Register extends Vue {
  private ivo = {
    email: '',
    password: '',
    password_cheked: '',
    name: '',
    telno: '',
    birth: '',
  };
  private progress = true;
  private dialogOv = {
    isOpen: false,
    title: '',
    message: '',
  };

  protected mounted():void {
    this.progress = false
  }

  private onSubmit(): void {
    this.progress = false;
    let response = true;
      if(response) {
        this.dialogOv.isOpen = true;
        this.dialogOv.title = '성공';
        this.dialogOv.message = '회원가입에 성공했습니다.';
      } else {
        this.dialogOv.isOpen = false;
        this.dialogOv.title = '오류';
        this.dialogOv.message = '회원가입에 실패했습니다.';
    }
    console.log(this.ivo);
  }

}
</script>
<style lang="scss">
.register {
  .q-form {
    max-width: 500px;
  }
}

</style>
