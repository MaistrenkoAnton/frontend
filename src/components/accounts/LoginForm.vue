<template>
  <div class="tab-content" id="tab1">
    <form class="login">

      <p class="form-row form-row-wide">
        <label for="loginPhone">
          <i class="fa fa-mobile"></i>
          <input type="text" class="input-text" v-model="phone" placeholder="Phone" id="loginPhone" v-focus>
        </label>
      </p>

      <p class="form-row form-row-wide">
        <label for="password">
          <i class="fa fa-lock"></i>
          <input class="input-text" type="password" name="password" placeholder ="Password" id="password">
        </label>
      </p>

      <p class="form-row">
        <input type="submit" class="button border margin-top-10" name="login" value="Login">
      </p>

      <p class="lost_password">
        <router-link :to="{name: 'pass-recovery'}">Forgot Password?</router-link>
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
