<template>
  <section class="login myAccountInfo" v-show="isMyAccountInfoDialog">
    <i @click="closeMyAccountInfoDialog"></i>
    <img src="/static/images/server_bg.png" alt />
    <form action>
      <ul>
        <li>
        	<input type="text" class="serverName" v-model="options.userName" readonly />
        </li>
        <li>
        	<input type="text" class="roleName" v-model="options.roleName" readonly />
        </li>
      </ul>
      <a href="javascript:;" class="btn_confirm" @click="switchServer()">切换伺服器</a>
      <a href="javascript:;" class="btn_cancel" @click="accountOut()">账号登出</a>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeMyaccountdialog",
  props: ["isMyAccountInfoDialog", "options"],
  data: function() {
    return {}
  },
  methods: {
    closeMyAccountInfoDialog() {
        this.$emit('closeMyAccountInfoDialog');
    },
    switchServer() {
      this.$emit("switchServer");
    },
    accountOut() {
      this.$emit("accountOut");
    }
  }
};
</script>

<style lang="stylus" scoped>
.myAccountInfo
  position: absolute
  top: 25%
  z-index: 9999
  i
    display: inline-block
    width: 0.64rem
    height: 0.64rem
    position: absolute
    z-index: 7
    right: 0
    background: url('/static/images/close.png') no-repeat
    background-size: 100% 100%
  form
    position: absolute
    width: 100%
    height: 100%
    top: 0
  ul
    position: absolute
    top: 1.7rem !important
    margin-left: 2.5rem !important
    width: 3.9rem !important
    height: 1.9rem !important
    li
        margin-top: 0 !important
        input
            width: 98%
            height: .6rem
            text-align: center
            font-size: .3rem
            color: #888888
            background :none
        &:nth-child(2)
            margin-top: .75rem !important
  .btn_confirm
    width: 2.1rem
    height: .6rem;
    top: 4.4rem
    left: 50%
    margin-left: -2.4rem
    display: inline-block
    z-index: 9999999
    position: absolute
    text-indent :-9999px
  .btn_cancel
    width: 2.1rem
    height: 0.6rem
    top: 4.4rem
    margin-left: 0.54rem
    display: inline-block
    position: absolute
    left: 3.5rem
    text-indent :-9999px
</style>
