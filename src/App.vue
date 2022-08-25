<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import description from '@/assets/data/description.json/'

export default {
  components: { NavBar },
  name: 'App'
}
</script>

<style lang="sass">
// import the main sass
@import '@/assets/style/index.sass'
</style>
