<template lang='pug'>
  #footer
    h1(v-for="work in works") {{ work.title }}
</template>

<script>

export default {
  inject: [ 'works' ]
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