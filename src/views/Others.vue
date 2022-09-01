<template lang='pug'>
  #container
    Description(:data='others')
    .cards
      Card(v-for='card in cardDatas' :keys='card.title' :data='card')
</template>

<script>

export default {
  props: {
    // 傳參數
    others: {
      type: Object,
    }
  },
  inject: [ "works" ],
  computed: {
    // 根據 type 篩選出要做出卡片的資料
    cardDatas(){
      let r = this.works.filter( work => work.type == 'others' )

      return r
    }
  }
}
</script>

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

</style>