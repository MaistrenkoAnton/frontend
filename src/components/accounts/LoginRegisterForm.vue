<template>
  <div id="wrapper" class="login-page-wrapper">
    <div class="clearfix"></div>
    <div class="container">
      <div class="row">
      <div class="col-md-4 col-md-offset-4">
      <!--Tab -->
      <div class="my-account style-2 margin-bottom-40">
        <div class="logo-wrapper text-center">
          <router-link :to="{name: 'home'}"><img src="/static/images/HealthRay.svg" alt="HealthRay" class="logo"></router-link>
        </div>
        <ul class="tabs-nav">
          <li v-bind:class="{'active': page == 'login'}"><router-link :to="{name: 'login'}"><h4>Log In</h4></router-link></li>
          <li v-bind:class="{'active': page == 'register'}"><router-link :to="{name: 'register'}"><h4>Register</h4></router-link></li>
        </ul>

        <div class="tabs-container alt">
          <!-- Login -->
          <login-form v-if="page == 'login'"></login-form>
          <!-- Register -->
          <register-form v-if="page == 'register'"></register-form>
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

export default {
  components: {
    loginForm,
    registerForm
  },
  props: {
    page: String
  }
}
</script>

<style>
</style>
