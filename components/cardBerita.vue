<template>
  <div class="image-container">
    <img lazy :src="berita.img_banner" :alt="berita.title"/>
    <div class="side-container">
      <div class="profile-container">
        <img lazy :src="berita.img_profile" alt="pict"/>
        <div class="profile-info">
          <h5>{{berita.first_name}} {{berita.last_name}}</h5>
          <h6>{{parseDate(berita.created_at)}}</h6>
        </div>
      </div>
      <h3>{{berita.title}}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardBerita',
  props: {
    berita: {
      type: Object,
      default() {return {}}
    }
  },
  methods: {
    parseDate(date) {
      // const d = new Date(date)
      // console.log(d.toISOString().split('T')[0]);
      // console.log( new Date().toLocaleString('id-ID'));
      // console.log( d);
      return date
    },
  },

}
</script>

