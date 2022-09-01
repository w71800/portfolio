<template lang='pug'>
  #container
    Description(:data='hahow')
    .cards
      Card(v-for='card in cardDatas' :data='card' :key='card.title')
</template>

<script>

export default {
  // 接入從路由端傳來的 title 等文本資料
  props: { 
    hahow: {
      type: Object,
    }
  },
  // 接入從 App provide 的 works 資料
  inject: [ "works" ],
  computed: {
    // 根據 type 篩選出要做出卡片的資料 cardDatas
    cardDatas(){
      let r = this.works.filter( work => work.type == 'hahow')

      return r
    }
  },
}
</script>

<style lang='sass'>
  @import '@/assets/style/_variables.sass'

</style>