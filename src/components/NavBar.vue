<template lang='pug'>
  #navbar
    .nav-container
      .links
        router-link(to='/') 回首頁
        router-link(to='/hahow') Hahow
        router-link(to='/tools') 小工具
        router-link(to='/projects') 參與專案
        router-link(to='/others') 其餘
</template>

<script>
export default {

}
</script>

<style lang='sass'>
@import '@/assets/style/_variables.sass'

/* For debug */
// *
//   +showOutline

#navbar
  .nav-container
    background-color: $colorBlack
    display: flex
    justify-content: flex-end
  
  .links
    padding: 1rem 3rem


  // style of router-links
  a
    // +showOutline($colorWhite)
    color: $colorWhite
    margin-right: 4rem
    cursor: pointer
    transition: 0.3s
    bottom: 0px
    left: 0
    padding: 3px 5px
    &::before
      position: absolute
      bottom: -2px
      left: 0
      content: ''
      display: block
      opacity: 0
      width: 0%
      height: 0px
      border: 1px solid $colorOrange
      transition-duration: 0.3s
    &:last-child
      margin-right: 0
  
  // a 的互動效果
  a  
    &:hover
      color: $colorOrange
      // bottom: 2px
      // left: 2px
      &::before
        opacity: 1
        width: 100%
</style>