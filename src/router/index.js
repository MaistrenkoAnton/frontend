import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import DoctorSignupPage from '@/pages/DoctorSignupPage'
import PassRecoveryPage from '@/pages/PassRecoveryPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'home', redirect: {name: 'login'}
    },
    {
      path: '/login', name: 'login', component: LoginPage
    },
    {
      path: '/register', name: 'register', component: RegisterPage
    },
    {
      path: '/doctor-signup', name: 'doctor-signup', component: DoctorSignupPage
    },
    {
      path: '/pass-recovery', name: 'pass-recovery', component: PassRecoveryPage
    }
  ]
})
