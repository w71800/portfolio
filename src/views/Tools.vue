<template lang='pug'>
  #container
    Description(:data='tools')
    .cards
      Card
</template>

<script>

export default {
  props: {
    // 傳參數
    tools: {
      type: Object,
    }
  }
}
</script>

<style lang='sass'>
@import '@/assets/style/_variables.sass'

.cards
  padding: 2.5rem 1.5rem

</style>