<template>
  <div class="tab-content" id="tab1">
    <div class="text-center"><h4>Reset password</h4></div>
  </br>
    <form class="login">
      <p class="form-row form-row-wide">
        <label for="phone">
          <country-phone-input :phone="phone"></country-phone-input>
          <i class="fa fa-mobile"></i>
        </label>
      </p>
      <p class="form-row">
        <input type="submit" class="button border margin-top-10" name="login" value="Reset" />
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
