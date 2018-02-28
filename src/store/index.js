import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const SERVER_URL = 'https://healthray-backend.herokuapp.com/'

const store = new Vuex.Store({
  state: {
    responseState: {
      success: null, errors: null
    }
  },
  actions: {
    LOGIN: function (commit, data) {
      axios.post(`${SERVER_URL}api-token-auth/`, {
        mobile_phone: data.phone,
        password: data.password
      }, { headers: { 'Content-Type': 'application/json' } }
      ).then((response) => {
        store.commit('success', response)
        localStorage.setItem('token', response.data.token)
        data.callback('Login is successful')
        router.push({name: 'login'})
      }).catch((err) => {
        store.commit('error', err.response.data)
      })
    },
    REGISTER: function (commit, data) {
      axios.post(`${SERVER_URL}api/patients/`, {
        user: {
          mobile_phone: data.phone,
          password: data.phone.split('-')[1],
          country: {name: 'india'},
          first_name: data.first_name,
          last_name: data.last_name
        }
      }, { headers: { 'Content-Type': 'application/json' } }
      ).then((response) => {
        store.commit('success', response.data)
        localStorage.setItem('token', response.data.token)
        data.callback('Patient is successfully registered')
        router.push({name: 'login'})
      }).catch((err) => {
        store.commit('error', err.response.data)
      })
    },
    DOCTOR_SIGNUP: function (commit, data) {
      axios.post(`${SERVER_URL}signup`, {
        email: data.phone,
        password1: data.full_name,
        password2: data.full_name
      }).then((response) => {
        store.commit('success', response.data)
        localStorage.setItem('token', response.data.token)
      }).catch((err) => {
        store.commit('error', err.response.data)
      })
    },
    CLEAR_ERRORS: function (commit) {
      store.commit('clear_errors')
    }
  },
  mutations: {
    success (state, data) {
      state.responseState.success = data
    },
    error (state, data) {
      state.responseState.errors = data.user || data
    },
    clear_errors (state) {
      state.responseState.errors = null
    }
  },
  getters: {
    getSuccess: state => {
      return state.responseState.success
    },
    getErrors: state => {
      return state.responseState.errors
    }
  }
})

export default store
