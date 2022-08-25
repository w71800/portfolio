<template lang='pug'>
  #description
    h1 {{ data.title }}
    p {{ data.text }}
    hr
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    }
  }
}
</script>

<style lang='sass'>
@import '@/assets/style/_variables.sass'

*
  // +showOutline()

#description
  // +showOutline($colorOrange)
  padding: 2.5rem 1.5rem
h1
  font-size: 4rem
  margin-bottom: 1.5rem
p 
  font-size: 1.2rem
  margin-bottom: 1rem


</style>