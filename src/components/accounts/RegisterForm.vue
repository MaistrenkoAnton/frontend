<template>
  <div class="tab-content" id="tab2">
    <form class="register">

      <p class="non-field-error" v-if="nonFieldErrors">{{ nonFieldErrors }}</p>

      <p class="form-row form-row-wide">
          <label for="phone">
            <country-phone-input :phone="phone" :phoneErrors="phoneErrors"></country-phone-input>
          </label>
      </p>
      <div class="errors" v-if="phoneErrors">{{ phoneErrors }}</div>

      <p class="form-row form-row-wide">
        <label for="username2">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input type="text" class="input-text" name="username" placeholder="Full Name"
                 id="username2" v-model="full_name" v-bind:class="{'danger': password1Errors}">
        </label>
      </p>
      <div v-bind:class="{'errors': password1Errors}">{{ password1Errors }}</div>

      <p class="form-row">
        <input type="button" class="button border fw margin-top-10" name="register" value="Register"
               v-on:click="register">
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
      },
      full_name: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('CLEAR_ERRORS')
      this.$store.dispatch('REGISTER', {phone: this.phone.number, full_name: this.full_name})
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
    password1Errors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.password1) {
        return this.$store.getters.getErrors.password1.join('\n')
      }
    },
    phoneErrors () {
      if (this.$store.getters.getErrors && this.$store.getters.getErrors.email) {
        return this.$store.getters.getErrors.email.join('\n')
      }
    }
  }
}
</script>
