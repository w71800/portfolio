<template lang='pug'>
  #container
    Description(:data='projects')
</template>

<script>
export default {
  props: {
    projects: {
      type: Object,
    }
  }
}
</script>

<style lang='sass'>

</style>