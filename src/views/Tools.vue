<template lang='pug'>
  #container
    Description(:data='tools')
    .cards
      Card(v-for='data in cardData')
</template>

<script>

export default {
  props: {
    // 傳參數
    tools: {
      type: Object,
    }
  },
  inject: [ "works" ],
  computed: {
    // 根據 type 篩選出要做出卡片的資料
    cardData(){
      let r = this.works.filter( work => work.type == 'tools')

      return r
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

</style>