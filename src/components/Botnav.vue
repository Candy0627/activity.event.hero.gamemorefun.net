<template>
  <ul class="bottom" v-show="isBotNav">
    <li>
        <router-link to="/confessionWall">表白墻</router-link>
    </li>
    <li>
        <router-link to="/billboard">亂世風雲榜</router-link>
    </li>
    <li>
        <router-link to="/celebration">週年慶典</router-link>
    </li>
    <li>
        <!-- <router-link to="/goldShare" @click="tips()">金將來襲</router-link> -->
        <a @click="tips()">金將來襲</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeBotnav",
  props:["isBotNav"],
  methods:{
    openConfessionWall(){
      this.$emit('openConfessionWall');
    },
    tips() {
        // this.$toast('暂未开放,敬请期待...');
        this.$layer.msg('暂未开放,敬请期待...');
        // alert("敬请期待...");
    }
  }
};
</script>

<style lang="stylus" scoped>
ul {
  position: fixed;
  z-index :1;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.44rem;
  background: url('/static/images/bot-nav.png') no-repeat;
  background-size: 100% 100%;

  li {
    flex: 1;
    text-align: center;
    font-family: '黑体';
    font-size: 0.36rem;
    color: #444444;

    &:nth-child(1) {
      flex: 0.88;
    }
  }
}
</style>
