<template>
  <section class="login" v-show="isLoginDialog">
    <i @click="closeLoginDialog"></i>
    <img src="../../static/images/login_bg.png" alt />
    <form action>
      <ul>
        <li>
          <label for="賬號">賬號</label>
          <input type="text" v-model="account" />
        </li>
        <li>
          <label for="密碼">密碼</label>
          <input type="text" v-model="password" />
        </li>
        <li>
          <a href="javascript:;">忘記密碼</a>
        </li>
      </ul>
      <a href="javascript:;" class="btn_login" @click="morefunLogin">登入</a>
      <a href="javascript:;" class="btn_fb" @click="fb">fb</a>
      <!-- <a href="javascript:;" class="btn_gp" @click="onSignIn">gp</a> -->
      <a href="javascript:;" class="g-signin2 btn_gp" data-onsuccess="onSignIn" data-theme="dark">gp</a>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeLogindialog",
  props: ["isLoginDialog"],
  data: function() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    morefunLogin() {
      // this.$emit('morefunLogin');
      if (!this.account) {
        alert("账户名不能为空!");
      }
      if (!this.password) {
        alert("密码不能为空!");
	  }
      axios.defaults.headers.common["Authorization"] = localStorage.token;
      var params = {
        account: this.account,
        password: this.password,
        type: "MBean"
      };
      var that = this;
      axios.post("http://luandou.gamemorefun.net/api/login", params)
        .then(result => {
          if (result.data.success == true) {

            localStorage.token = result.data.data["token"];
            localStorage.uuid = result.data.data["uuid"];

            that.isLoginDialog = false;
            that.isMaskShow = true;
             alert("登录成功！");

          } else {
            alert("您输入的信息不正确！");
          }
        })
        .catch(error => {
        });
    },
    fb() {

    },
    closeLoginDialog() {}
  }
};
</script>

<style lang="stylus" scoped>
.login {
  position: absolute;
  z-index: 999999;
  top: 25%;
}

i {
  display: inline-block;
  width: 0.64rem;
  height: 0.64rem;
  position: absolute;
  z-index: 7;
  right: 0;
  background: url('/static/images/close.png') no-repeat;
  background-size: 100% 100%;
}

form {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  a {
    width: 1.3rem;
    height: 0.4rem;
    display: block;
    text-indent: -9999px;
    position: absolute;
    left: 3.5rem;
    top: 4.9rem;

    &.btn_login {
      width: 2.8rem;
      height: 0.6rem;
      top: 3.69rem;
      left: 50%;
      margin-left: -1.4rem;
    }

    &.btn_fb {
      width: 0.6rem;
      height: 0.7rem;
      left: 2.5rem;
      top: 4.9rem;
    }

    &.btn_gp {
      width: 0.65rem;
      height: 0.7rem;
      left: 4.3rem;
      top: 4.9rem;
    }
  }

  ul {
    position: absolute;
    width: 4.6rem;
    height: 1.3rem;
    left: 50%;
    margin-left: -2.3rem;
    top: 1.7rem;

    li {
      display: flex;

      &:nth-child(1) {
        margin-top: 0.05rem;
      }

      &:nth-child(2) {
        margin-top: 0.3rem;
      }

      &:nth-child(3) {
        float: right;
        text-indent: -9999px;
      }

      label {
        display: block;
        text-indent: -9999px;
        width: 1rem;
        height: 0.47rem;
      }

      input {
        padding-left: 0.2rem;
        background: none;
        border: none;
      }

      a {
        display: inline-block;
        width: 1.3rem;
        height: 0.4rem;
        display: block;
        text-indent: -9999px;
        margin-top: 0.05rem;
        right: 0;
      }
    }
  }
}
</style>
