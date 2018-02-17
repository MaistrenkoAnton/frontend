import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        console.log('response', response)
        store.commit('success', response)
        localStorage.setItem('token', response.token)
      }).catch((err) => {
        console.log('err', err.response.data)
        store.commit('error', err.response.data)
      })
    },
    REGISTER: function (commit, data) {
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
      state.responseState.errors = data
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
