<template>
  <div class="wrapper">
    <div class="card-container">
      <h3>Lembar Berita</h3>
<!--      loop here -->
      <div v-for="(berita,idx) in lembarberita"  :key="idx" class="card-berita" >
        <div class="image-container">
          <img lazy :src="berita.img_banner" :alt="berita.title">
          <div class="side-container">
            <div class="profile-container">
              <img lazy :src="berita.img_profile" alt="profile pict">
              <div class="profile-info">
                <h5>{{berita.first_name}} {{berita.last_name}}</h5>
                <h6>{{berita.created_at}}</h6>
              </div>
            </div>
              <h5>{{berita.title}}</h5>
          </div>
        </div>
      </div>
      <div class="btn-container">
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
  display: grid;
  height: 6rem;
  grid-gap: 10px;
  grid-column: 1 / 3;
  img{
    width: 15.5rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 1rem;
  }
  .side-container {
    grid-column: 2 / 3;
    .profile-container{
    margin-bottom: 10px;
      display: flex;
      img{
        width: 2.5rem;
        height: 2.5rem;
      }
      .profile-info{
        margin-top: 10px;
      }
    }
  }
}

.btn-container{
  text-align: center;
}

body{
  background-color: #f3f4f6;
}
.card-berita {
  display: flex;
  height: 90%
;
}
.card-container{
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
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
  color: white;
  transition: 0.5s;

}
</style>
