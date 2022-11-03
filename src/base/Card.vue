<template lang='pug'>
  #card
    .img(:style='{"backgroundImage": "url("+ imgUrl +")"}')
    .info
      .links
        .icon.site(v-if='data.gitpagesUrl')
          a(:href='data.gitpagesUrl' target='_blank' )
        .icon.github(v-if='data.githubUrl')
          a(:href='data.githubUrl' target='_blank' )
    .cover 
    .title {{ data.title }}
</template>

<script>

export default {
  props: [ 'data', ],
  computed: {
    imgUrl(){
      return require(`@/assets/images/${this.data.imgUrl}`)
    },
  }
  

}
</script>

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

*

#card
  border: 5px solid rgba(#FFF,.8)
  margin-right: 40px
  margin-bottom: 40px
  width: 220px
  height: 220px
  cursor: pointer
  overflow: hidden

.info
  transition-duration: .5s
  transition-delay: 0
  position: absolute
  width: 100%
  height: 20%
  background-color: #666
  // info 的預設位置
  bottom: -20%
  z-index: 100

// 為什麼 img 預設位置怪怪的？
.img
  +showOutline()
  width: 100%
  height: 100%
  position: absolute
  top: 0
  transition: .3s
  background-size: 100% 100%
  background-position: 50% 50%
  // object-fit: contain

.cover
  width: 100%
  height: 100%
  background-color: #555
  transition: .3s .3s
  opacity: 0
  display: none

.title
  width: 100%
  position: absolute
  top: 50%
  left: 50%
  font-weight: bold
  transform: translate(-50%,-50%)
  text-align: center
  transition: .3s
  color: #FFF
  font-size: 22px
  opacity: 0



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

// 互動效果
#card
  &:hover
    .info
      bottom: 0
      transition-delay: .3s
    .img
      background-size: 110% 110%
    .cover
      display: block
      opacity: 0.6
    .title
      opacity: 1
    .cover, .title

</style>