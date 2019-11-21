<template>
  <div class="mask" v-show="isMaskShow"></div>
</template>

<script>
export default {
  name: "HomeMask",
  props:['isMaskShow']
};
</script>

<style lang="stylus" scoped>
.mask
  position: fixed
  z-index :2
  left: 0
  bottom: 0
  width :100%
  height :100%
  background :rgba(0,0,0,.6)
</style>
