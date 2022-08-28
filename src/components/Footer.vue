<template lang='pug'>
  #footer
    h1 {{ test2 }}
</template>

<script>
export default {
  inject: [ "test", "test2" ]
}
</script>

<style lang='sass'>
@import '@/assets/style/_variables.sass'

#footer
  // position: fixed
  bottom: 0
  height: 300px
  width: 100%
  background-color: #888
</style>