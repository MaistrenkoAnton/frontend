<template>
  <div class="tab-content" id="tab1">
    <form class="login">

      <p class="non-field-error" v-if="nonFieldErrors">{{ nonFieldErrors }}</p>

      <p class="form-row form-row-wide">
        <label for="phone">
          <country-phone-input :phone="phone" :phoneErrors="phoneErrors"></country-phone-input>
        </label>
      </p>
      <div class="errors" v-if="phoneErrors">{{ phoneErrors }}</div>

      <p class="form-row form-row-wide">
        <label for="password">
          <i class="fa fa-lock"></i>
          <input class="input-text" type="password" name="password" placeholder ="Password"
                 id="password" v-model="password" v-bind:class="{'danger': passwordErrors}">
        </label>
      </p>
      <div v-bind:class="{'errors': passwordErrors}">{{ passwordErrors }}</div>

      <p class="form-row">
        <input type="button" class="button border margin-top-10" name="login" value="Login"
               v-on:click="login">
      </p>

      <p class="lost_password">
        <router-link :to="{name: 'pass-recovery'}">Forgot Password?</router-link>
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
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('CLEAR_ERRORS')
      this.$store.dispatch('LOGIN',
        {
          phone: this.phone.number,
          password: this.password,
          callback: this.$toast.top
        }
      )
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
    passwordErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.password) {
        return this.$store.getters.getErrors.password.join('\n')
      }
    },
    phoneErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.mobile_phone) {
        return this.$store.getters.getErrors.mobile_phone.join('\n')
      }
    }
  }
}
</script>

