<template lang='pug'>
  #card
    .info
      .links
        .icon.site
          a(href='https://www.google.com.tw/?client=safari')
        .icon.github
          a(href='https://www.google.com.tw/?client=safari')
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

*

#card
  +showOutline()
  margin-right: 40px
  margin-bottom: 40px
  width: 220px
  height: 220px
  cursor: pointer
  overflow: hidden

.info
  transition-duration: 0.5s 
  position: absolute
  width: 100%
  height: 30%
  background-color: rgba(#999,1)
  // info 的預設位置
  bottom: -30%

.links
  // +showOutline($colorWhite)
  padding: 0.5rem 0.5rem
  position: absolute
  display: flex
  justify-content: flex-end
  bottom: 0
  right: 0

.icon
  width: 25px
  height: 25px
  border-radius: 50%
  background-color: $colorWhite
  margin-right: 0.5rem
  background-size: cover
  background-position: 50% 50%
  transition-duration: 0.3s
  &:last-child
    margin-right: 0
  &.github
    background-size: 115%
    background-image: url("https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png")
  &.site
    background-size: 80%
    background-image: url("https://cdn-icons-png.flaticon.com/512/6567/6567668.png")

  &:hover
    box-shadow: -2px 2px rgba(#333,.3)
    transform: translate(2px,-2px)
    background-color: $colorOrange
  a
    display: block
    width: 100%
    height: 100%

#card
  &:hover
    .info
      bottom: 0

</style>