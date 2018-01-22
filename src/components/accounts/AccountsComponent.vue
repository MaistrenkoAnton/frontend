<template>
  <div id="wrapper" class="login-page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="my-account style-2 margin-bottom-40">
            <div class="logo-wrapper text-center">
              <router-link :to="{name: 'home'}"><svgicon class="logo" icon="HealthRay" width="169" height="39"></svgicon></router-link>
            </div>
            <ul class="tabs-nav" v-if="page == 'login' || page == 'register'">
              <li v-bind:class="{'active': page == 'login'}"><router-link :to="{name: 'login'}"><h4>Log In</h4></router-link></li>
              <li v-bind:class="{'active': page == 'register'}"><router-link :to="{name: 'register'}"><h4>Register</h4></router-link></li>
            </ul>
            <div class="tabs-container alt">
              <!-- Login -->
              <login-form v-if="page == 'login'"></login-form>
              <!-- Register -->
              <register-form v-if="page == 'register'"></register-form>
              <!-- PassRecovery -->
              <pass-recovery-form v-if="page == 'pass-recovery'"></pass-recovery-form>
              <!-- DoctorSignup -->
              <doctor-signup-form v-if="page == 'doctor-signup'"></doctor-signup-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginForm from '@/components/accounts/LoginForm'
import registerForm from '@/components/accounts/RegisterForm'
import passRecoveryForm from '@/components/accounts/PassRecoveryForm'
import doctorSignupForm from '@/components/accounts/DoctorSignupForm'
import '@/compiled-icons/HealthRay'

export default {
  components: {
    loginForm,
    registerForm,
    passRecoveryForm,
    doctorSignupForm
  },
  props: {
    page: String
  }
}
</script>

<style scoped>
  .logo {
    margin-bottom: 11px;
  }
</style>
