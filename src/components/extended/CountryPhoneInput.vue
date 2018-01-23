<template>
  <div class="intl-phone-input allow-dropdown" v-on:mouseleave="hideList" >
    <div class="flag-container" v-on:click.stop="toggeList">

      <div class="selected-flag">
        <div v-bind:class="`iti-flag ${countryCode}`"></div>
        <div v-bind:class="`iti-arrow${isVisiblePanel ? ' up' : ''}`"></div>
      </div>

      <ul class="country-list" v-if="isVisiblePanel">
        <li
          v-for="item in itemsData.frontItems"
          v-bind:class="`country${item.code === countryCode ? ' highlight' : ''}`"
          v-on:click.stop="setCode(item.code)">
          <div class="flag-box">
            <div v-bind:class="`iti-flag ${item.code}`"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
        <li class="divider" v-if="itemsData.needSeparator"></li>
        <li
          v-for="item in itemsData.otherItems"
          v-bind:class="`country${item.code === countryCode ? ' highlight' : ''}`"
          v-on:click.stop="setCode(item.code)">
          <div class="flag-box">
            <div v-bind:class="`iti-flag ${item.code}`"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
      </ul>
    </div>
    <input type="text"
      class="input-text"
      placeholder="Phone"
      v-focus
      autocomplete="off"
      v-bind:name="name"
      v-model="phone.number"
      v-bind:placeholder="'Phone'"
    />
  </div>
</template>

<script>
  import PhoneInput from 'vue2-phone-input'
  export default {
    extends: PhoneInput,
    mounted () {
      this.setCode(this.defaultCode)
    },
    props: {
      defaultCode: {type: String, default: 'in'}
    },
    watch: {
      'intlData.dialCode': function (val) {
        this.phone.number = `+${val}-`
      }
    }
  }
</script>

<style scoped>
  .intl-phone-input.allow-dropdown input.input-text {
    height: 53px;
    padding-left: 45px;
    line-height: 1em;
    transition: box-shadow 0.2s;
    text-transform: none;
    outline: none;
    font-size: 15px;
    margin-top: 8px !important;
    box-sizing: border-box;
    display: block;
    background-color: #fcfcfc;
    font-weight: 500;
    border: 1px solid #e0e0e0;
    opacity: 1;
    border-radius: 3px;
    color: black;
    box-shadow: none;
  }
  .intl-phone-input.allow-dropdown input.input-text:focus {
    transition: box-shadow 0.2s !important;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
  }
  .intl-phone-input {
    width:100%;
  }
  div.flag-container {
    top: 8px;
  }
  >>> div.iti-flag {
    left: 12px;
  }
  >>> div.iti-arrow {
    left: 35px;
  }
</style>
