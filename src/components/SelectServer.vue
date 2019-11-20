<template>
  <section class="login selectServer" v-show="isServerDialog">
    <i @click="closeLoginDialog"></i>
    <img src="./images/select_qufu.png" alt />
    <form action>
      <ul>
        <li>
          <input type="text" placeholder="請選擇區服" class="serverName" v-model="serverName" />
        </li>
        <!-- <li>
          <select>
            <option>123</option>
          </select>
          <span>请选择：{{ selected }}</span>
        </li>
        <li>
          <select>
            <option>123</option>
          </select>
        </li>-->
        <li>
          <input type="text" placeholder="一區小霸王" class="roleName" v-model="roleName" />
        </li>
      </ul>
      <a href="javascript:;" class="btn_confirm" @click="confirm()"></a>
      <a href="javascript:;" class="btn_cancel" @click="cancel()">fb</a>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeSelectserverdialog",
  props: ["isLoginDialog"],
  data: function() {
    return {};
  },
  methods: {
    confirm() {},
    cancel() {}
  }
};
</script>

<style lang="stylus" scoped></style>
