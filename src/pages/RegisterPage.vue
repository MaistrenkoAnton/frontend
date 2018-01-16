<template>
  <div>
    <login-register-form :page="'register'"></login-register-form>
  </div>
</template>
<script>
import loginRegisterForm from '@/components/accounts/LoginRegisterForm'

export default {
  components: {
    loginRegisterForm
  }
}
</script>
