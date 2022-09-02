<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import description from '@/assets/data/description.json/'
import works from '@/assets/data/works.json/'
import scripts from '@/utils/commonScripts.js'

console.log(scripts)

export default {
  // 放出資料給各個 view 元件去處理
  provide(){
    return { works }
  },
  data(){
    return {
      works
    }
  },
  components: { NavBar, Footer },
  name: 'App'
}
</script>

<style lang="sass">
// import the main sass
@import '@/assets/style/index.sass'
</style>
