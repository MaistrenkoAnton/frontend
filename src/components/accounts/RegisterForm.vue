<template>
  <div class="tab-content" id="tab2">
    <form class="register">

      <p class="form-row form-row-wide">
          <label for="registerPhone">
            <country-phone-input :phone="phone"></country-phone-input>
          </label>
        </p>

      <p class="form-row form-row-wide">
        <label for="username2">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input type="text" class="input-text" name="username" placeholder="Full Name"
                 id="username2">
        </label>
      </p>

      <p class="form-row">
        <input type="submit" class="button border fw margin-top-10" name="register" value="Register">
      </p>

      <p class="doctor_user">
          <router-link :to="{name: 'doctor-signup'}">Are You a Doctor?</router-link>
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
