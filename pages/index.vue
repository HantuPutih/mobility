<template>
  <div class="wrapper">
    <div class="card-container">
      <h3>Lembar Berita</h3>
      <div v-for="(berita,idx) in lembarberita"  :key="idx" class="card-berita" >
        <card-berita :berita="berita"></card-berita>
      </div>
      <div class="btn-container">
        <button class="lihat-lainnya-btn" @click="onLihatlainnya" >
          Lihat Lainnya <img lazy src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/16/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-12.png"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import cardBerita from "~/components/cardBerita";

export default {
  name: 'IndexPage',
  components: cardBerita,
  data: () => ({
    limit: 5
  }),
  computed: {
    ...mapState([
      'lembarberita'
    ])
  },
  mounted() {
    this.getLembarBerita(this.limit)
  },

  methods: {
    ...mapActions([
      'getLembarBerita'
    ]),
    onLihatlainnya(){
      this.limit += 5
      this.getLembarBerita(this.limit)
    }

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
    h3{
      color: #485066;
      font-weight: normal;
    }
    .profile-container{
      margin-bottom: 10px;
      display: flex;

      img{
        width: 2.4rem;
        height: 2.4rem;
      }
      .profile-info{
        margin-top: 10px;

        h5{
          font-weight: normal;
          color: #65748a;
        }
        h6{
          font-weight: normal;
          color: #9da0b1;
        }
      }
    }
  }
}

.btn-container{
  text-align: center;
}

body{
  background-color: #f3f4f6;
  font-family: "Roboto",sans-serif!important;
}
.card-berita {
  display: flex;
  height: 95%;
  margin-bottom: 15px;
}
.card-container{
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3{
    font-weight: normal;
    margin-bottom: 12px;
  }
}

.wrapper{
  border-radius: 10px ;
  margin: 5rem 27rem 0 27rem;
  display: flex;
  flex-basis: 100%;
  height: 85vh;
  background-color: white;

}

.lihat-lainnya-btn{
  padding: 9px 25px;
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

@media only screen and (max-width: 1280px) {
  .wrapper {
    margin:5rem 0 0 0;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    margin:5rem 0 0 0;
  }
  .image-container {
    display: block;
  }
  .card-berita {
    margin-bottom: 30%;
  }
}


</style>
