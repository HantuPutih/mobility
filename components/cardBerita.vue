<template>
  <div>
    <div>image</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CardBerita',
  head: {

  },
  computed: {
    ...mapState(['lembarberita'])
  },
  mounted() {
    this.getLembarBerita()
  },

  methods: {
    ...mapActions([
      'getLembarBerita'
    ])

  }
}
</script>

<style>
body{
  background-color: #f3f4f6;
}
</style>
