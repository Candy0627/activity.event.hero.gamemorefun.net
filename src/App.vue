<template>
  <div id="app">
    <home-banner></home-banner>
    <home-topnav @openTopMenu="openTopMenu"></home-topnav>
    <home-topmenu :isTopMenu="isTopMenu" @closeTopMenu="closeTopMenu"></home-topmenu>
    <home-botnav></home-botnav>
    <home-logindialog :isLoginDialog="isLoginDialog"></home-logindialog>
    <home-selectserverdialog></home-selectserverdialog>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HomeBanner from "./components/Banner";
import HomeTopnav from "./components/Topnav";
import HomeBotnav from "./components/Botnav";
import HomeTopmenu from "./components/Topmenu";
import HomeLogindialog from "./components/LoginDialog"
import HomeSelectserverdialog from "./components/SelectServer"

export default {
  name: "App",
  components: {
    HomeBanner,
    HomeTopnav,
    HomeTopmenu,
    HomeBotnav,
    HomeLogindialog,
    HomeSelectserverdialog
  },
  data () {
    return {
      isTopMenu: false,
      isLoginDialog:true,
      isSelectServerDialog:true
    }
  },
  methods: {
    openTopMenu () {
      this.isTopMenu = true;
    },
    closeTopMenu () {
      this.isTopMenu = false;
    }
    // morefunLogin () {
    //   console.log(this.account);
    // }
  },
  mounted() {}
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
}
</style>
