<template lang='pug'>
  #landing(:style='{ "backgroundImage": "url(" + imgUrl + ")" }')
    .filter
    .text
      svg.title
        text(x="50%" y="50%") 威利的作品集
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
@keyframes showText
  0%, 10%
    fill: transparent
    stroke-dasharray: 0% 100%
  70%
    stroke-dasharray: 100% 0%
    stroke-opacity: 1
    fill: transparent
  100%
    stroke-opacity: 1
    fill: #fff

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


svg.title
  width: 100%
  // fill: #fff
  font-size: 5rem
  font-weight: bold
  text-anchor: middle
  dominant-baseline: middle
  stroke: #fff
  stroke-width: 2
  // stroke-dasharray: 10% 10%
  animation: showText 3s 1 forwards
.text
  color: #FFF
h1
  font-size: 72px
hr
  position: absolute
  right: 0
  border: none
  background-color: $colorOrange
  height: 5px
  margin: 0
  width: 0rem
  transition: .5s
h5
  margin-top: 1.3rem
  font-size: 24px
  span 
    &.orange
      color: $colorOrange

h1:hover
  &+hr
    width: 13rem
</style>