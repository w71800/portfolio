<template lang='pug'>
  #container
    Description(:data='tools')
    .cards
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

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

</style>