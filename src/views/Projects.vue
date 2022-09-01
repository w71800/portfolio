<template lang='pug'>
  #container
    Description(:data='projects')
    .cards
      Card(v-for='card in cardDatas' :keys='card.title' :data='card')
</template>

<script>
export default {
  // 從路由那邊接來資料
  props: {
    projects: {
      type: Object,
    }
  },
  inject: [ 'works' ],
  computed: {
    cardDatas(){
      let r = this.works.filter( work => work.type == 'projects' )

      return r
    }
  }
}
</script>

<style lang='sass'>

</style>