<template lang='pug'>
  #container
    Description(:data='hahow')
</template>

<script>

export default {
  props: { 
    hahow: {
      type: Object,
    }
  },
}
</script>

<style>

</style>