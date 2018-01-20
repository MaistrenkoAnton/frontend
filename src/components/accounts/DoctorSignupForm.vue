<template>
  <div class="tab-content" id="tab1">
    <div class="text-center"><h4>Doctor Signup</h4></div>
    </br>
    <form class="login">
      <p class="form-row form-row-wide">
        <label for="phone">
          <i class="fa fa-mobile"></i>
          <input type="text" class="input-text" name="phone" id="phone"
                 placeholder="1-541-754-3010" v-model="phone" v-focus>
        </label>
      </p>

      <p class="form-row form-row-wide">
        <label for="username2">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input type="text" class="input-text" name="username" placeholder="Full Name" id="username2"
                 value="Dr. ">
        </label>
      </p>

      <p class="form-row">
        <input type="submit" class="button border margin-top-10" name="login" value="Register">
      </p>
      <p class="backto_login">
        <router-link :to="{name: 'login'}">Go Back to login page</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '+91-'
    }
  }
}
</script>
