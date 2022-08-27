<template lang='pug'>
  #container
    Description(:data='hahow')
    .cards
      Card 
      Card 
      Card 
      Card 
      Card 
      Card 
</template>

<script>

export default {
  props: { 
    hahow: {
      type: Object,
    }
  },
}
</script>

<style lang='sass'>
  @import '@/assets/style/_variables.sass'

</style>