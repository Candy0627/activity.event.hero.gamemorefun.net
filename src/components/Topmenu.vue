<template>
  <section class="comWidth fixedMenu" v-show="isTopMenu">
    <em @click="closeTopMenu"></em>
    <ul>
      <li>
        <a href="javascript:;" class="app_logo" @click="openLoginDialog">{{options.myAccountInfo}}</a>
      </li>
      <li>
        <a href="javascript:;" class="app_logo" @click="openGetRewardlogDialog">領取記錄</a>
      </li>
      <li>
        <a href="javascript:;" class="app_logo">Facebook粉絲專頁</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "HomeTopmenu",
  props: ["isTopMenu","options"],
  methods: {
    closeTopMenu() {
      this.$emit("closeTopMenu");
    },
    openLoginDialog() {
      this.$emit('openLoginDialog');
    },
    openGetRewardlogDialog() {
        this.$emit('openGetRewardlogDialog');
    }
  }
};
</script>

<style lang="stylus" scoped>
.fixedMenu {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  z-index: 99999;
  top: 0;

  em {
    position: absolute;
    background: url('/static/images/menu-close.png') no-repeat;
    background-size: 100% 100%;
    width: 0.52rem;
    height: 0.53rem;
    right: 0.3rem;
    top: 0.22rem;
  }

  ul {
    width: 100%;

    li {
      width: 100%;
    }
  }
}

a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0.4798rem;
  color: #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: bottom;
  padding-top: 1.9rem;
  padding-bottom: 0.42rem;
  cursor: pointer;
}
</style>
