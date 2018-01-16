<template>
  <div>
    <accounts-component :page="'login'"></accounts-component>
  </div>
</template>
<script>
import accountsComponent from '@/components/accounts/AccountsComponent'

export default {
  components: {
    accountsComponent
  }
}
</script>
