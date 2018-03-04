<template>
  <div class="tab-content" id="tab1">
    <div class="text-center"><h4>Doctor Signup</h4></div>
    </br>
    <form class="login">

      <p class="non-field-error" v-if="nonFieldErrors">{{ nonFieldErrors }}</p>
      <p class="form-row form-row-wide">
        <label for="phone">
          <country-phone-input :phone="phone" :phoneErrors="phoneErrors"></country-phone-input>
        </label>
      </p>
      <div class="errors" v-if="phoneErrors">{{ phoneErrors }}</div>

      <p class="form-row form-row-wide">
        <label for="username2">
          <div class="doctor-prefix">Dr.</div>
          <input type="text" class="input-text" name="username" placeholder="Full Name" id="username2"
          v-model="full_name" @keyup.enter="doctor_signup"
          v-bind:class="{'danger': fullNameErrors}">
        </label>
      </p>
      <div class="errors" v-if="fullNameErrors">{{ fullNameErrors }}</div>

      <p class="form-row">
        <input type="button" class="button border margin-top-10" name="login" value="Register"
        v-on:click="doctor_signup">
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
      },
      full_name: ''
    }
  },
  methods: {
    doctor_signup () {
      this.$store.dispatch('CLEAR_ERRORS')
      this.$store.dispatch('DOCTOR_SIGNUP',
        {
          phone: this.phone.number,
          first_name: this.getFirstName(),
          last_name: this.getLastName(),
          callback: this.$toast.top
        })
    },
    getFirstName () {
      return this.full_name.split(' ')[0]
    },
    getLastName () {
      return this.full_name.split(' ')[1]
    }
  },
  created () {
    this.$store.dispatch('CLEAR_ERRORS')
  },
  computed: {
    nonFieldErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.non_field_errors) {
        return this.$store.getters.getErrors.non_field_errors.join('\n')
      }
    },
    phoneErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.mobile_phone) {
        return this.$store.getters.getErrors.mobile_phone.join('\n')
      }
    },
    fullNameErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.first_name) {
        return this.$store.getters.getErrors.first_name.join('\n')
      }
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.last_name) {
        return this.$store.getters.getErrors.last_name.join('\n')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .doctor-prefix {
    position: absolute;
    color: black;
    top: 50%;
    left: 13px;
    transform: translateY(-50%);
  }
</style>
