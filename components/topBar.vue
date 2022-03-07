<template>
  <div class="top-bar" >
    <img height="22" src="../static/modoclogo.png" class="image"/>
  </div>
</template>

<script>

export default {
  name: 'TopBar',
}
</script>
<style>
.top-bar{
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 3rem;
  background-color: white;
  box-shadow: 1px -1px 76px -22px rgba(0,0,0,0.87);
  -webkit-box-shadow: 1px -1px 76px -22px rgba(0,0,0,0.87);
  -moz-box-shadow: 1px -1px 76px -22px rgba(0,0,0,0.87);
}
</style>
