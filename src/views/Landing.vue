<template lang='pug'>
  #landing(:style='{ "backgroundImage": "url(" + imgUrl + ")" }')
    .filter
    .text
      h1 威利的作品集
      hr
      h5 
        span.orange Portfolio 
        span of IKA
</template>

<script>
export default {
  computed: {
    imgUrl(){
      return require("@/assets/images/header.png")
    }
  }
}
</script>

<style lang='sass' scoped>
@import src/assets/style/_variables.sass

*

#landing
  // 53px 是 navbar 的高度，但我想要用直接動態取得該高度該怎麼做呢？
  height: calc(100vh - 53px)
  background-size: cover
  background-position: center center

  display: flex
  justify-content: center
  align-items: center
.filter
  position: absolute
  width: 100%
  height: 100%
  background-color: rgba(#222,.7)

.text
  color: #FFF
h1
  font-size: 72px
hr
  position: absolute
  right: 0
  border: 2.5px solid $colorOrange
  margin: 0
  width: 13rem
h5
  margin-top: 1.3rem
  font-size: 24px
  span 
    &.orange
      color: $colorOrange
</style>