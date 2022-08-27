<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import description from '@/assets/data/description.json/'

export default {
  components: { NavBar, Footer },
  name: 'App'
}
</script>

<style lang="sass">
// import the main sass
@import '@/assets/style/index.sass'
</style>
