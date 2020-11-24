<template>
  <q-page padding class="row">
    <!-- content -->
    <div class="fit self-center">
      <q-card class="q-pa-md col q-mx-auto text-center" style="width:450px;">
        <q-card-section>
          <h3>LOGIN</h3>
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
            :disabled="progress"
          >
            <q-input
              v-model="ivo.email"
              class=""
              :placeholder="`이메일을 입력하세요`"
              aria-required="true"
              type="email"
            />
            <q-input
              v-model="ivo.password"
              class=""
              aria-required="true"
              :placeholder="`비밀번호 입력하세요`"
              type="password"
            />
            <q-btn
              type="Submit"
              align="around"
              class="q-my-md btn-fixed-width"
              color="primary"
              label="Login"
              icon="login"
              :loading="progress"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Login',
  components: {}
})

export default class Login extends Vue {
  private ivo = {
    email: '',
    password: ''
  };

  private progress = true;

  protected mounted():void {
    this.progress = false
  }

  private onSubmit(): void {
    this.progress = false;
    console.log(this.ivo);
  }

}
</script>
