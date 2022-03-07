<template>
  <div class="wrapper">
    <div class="card-container">
      <h3>this is a text</h3>
<!--      loop here -->
      <div class="card-berita">
        <div class="image-container">
          <img src="../static/modoclogo.png" alt="news picture">
        </div>
      </div>
      <div>
        <button class="lihat-lainnya-btn">
          Lihat Lainnya
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexPage',
  head: {

  },
  computed: {
    ...mapState([
      'lembarberita'
    ])
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

<style lang="scss">
.image-container{
  height: 20rem;
  width: 100%;
  background-color: red;
  img{
    width: 20%;
    height: 10%;
    object-fit: cover;
  }
}
body{
  background-color: #f3f4f6;
}
.card-berita {
  display: flex;
}
.card-container{
  padding: 15px;
}

.wrapper{
  border-radius: 10px ;
  margin: 5em 25em 5em 25em;
  display: flex;
  flex-basis: 100%;
  height: 80vh;
  /*justify-content: center;*/
  /*align-items: center;*/
  background-color: white;
}

.lihat-lainnya-btn{
  padding: 9px 19px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid lightgrey;
}

.lihat-lainnya-btn:hover{
  background-color: #767676;
  border: 1px solid #767676;

}
</style>
