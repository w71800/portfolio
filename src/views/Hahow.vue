<template lang='pug'>
  #container
    Description(:data='hahow')
    .cards
      Card
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