<template>
  <!-- Wrapper -->
  <div id="wrapper" class="login-page-wrapper">

    <!-- Header Container
    ================================================== -->
    <div class="clearfix"></div>

    <!-- Contact
    ================================================== -->

    <!-- Container -->
    <div class="container">

      <div class="row">
        <div class="col-md-4 col-md-offset-4">

          <!--Tab -->
          <div class="my-account style-2 margin-bottom-40">
            <div class="logo-wrapper text-center">
              <router-link :to="{name: 'home'}"><img src="static/images/HealthRay.svg" alt="HealthRay" class="logo"></router-link>
            </div>
            <div class="tabs-container alt">
              <!-- Recovery pass -->
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
            </div>
          </div>

        </div>
      </div>

    </div>
    <!-- Container / End -->
  </div>
</template>

<!--<script>-->
//  export default {
//    methods: {
//      init (event) {
//        var value = event.target.value
//        this.value = ''
//        this.value = value
//        console.log('value', value, 'this.value', this.value)
//        return value
//      },
//      focusFix (target) {
//        console.log('target', target)
//        var value = event.target.value
//        var placeholder = target.placeholder
//        target.placeholder = ''
//        target.value = ''
//        console.log('target.value', target.value, 'value', value)
//        setTimeout(function () {
//          target.value = value
//          target.placeholder = placeholder
//        }, 0)
//        return value
//      }
//    }
//  }
<!--</script>-->
<script>
export default {
  data () {
    return {
      phone: '+91-'
    }
  }
}
</script>
