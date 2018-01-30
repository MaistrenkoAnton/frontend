<template>
  <div class="tab-content" id="tab1">
    <div class="text-center"><h4>Doctor Signup</h4></div>
    </br>
    <form class="login">
      <p class="form-row form-row-wide">
        <label for="phone">
          <country-phone-input :phone="phone"></country-phone-input>
        </label>
      </p>

      <p class="form-row form-row-wide">
        <label for="username2">
          <div class="doctor-prefix">Dr.</div>
          <input type="text" class="input-text" name="username" placeholder="Full Name" id="username2">
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
import CountryPhoneInput from '@/components/extended/CountryPhoneInput'
export default {
  components: {
    CountryPhoneInput
  },
  data () {
    return {
      phone: {
        code: '',
        number: ''
      }
    }
  }
}
</script>

<style scoped>
  .doctor-prefix {
    position: absolute;
    color: black;
    top: 13px;
    left: 15px;
  }
</style>
