<template lang='pug'>
  #card
    .info
      .links
        .icon.site
          //- a(href='')
        .icon.github
          //- a(href='')
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
@import '@/assets/style/_variables.sass'

*
  +showOutline()

#card
  // margin-right: 25px
  width: 250px
  height: 250px
  cursor: pointer
  overflow: hidden

.info
  transition-duration: 0.5s 
  position: absolute
  bottom: -30%
  width: 100%
  height: 30%
  background-color: #000

.links
  position: absolute
  +showOutline($colorWhite)
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


#card
  &:hover
    .info
      bottom: 0

</style>