<template>
  <section class="login" v-show="isGetRewardLogDialog">
    <i @click="closeGetRewardLogDialog"></i>
    <img src="../../static/images/get_reword_bg.png" alt />
    <form action>
      <ul class="recordList">
        <li v-for="item in options.recordList" :key="item.id">
            <span>{{item.create_at | dateStr('YYYY-MM-DD') }}</span>
            <span>{{item.role_name}}</span>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  name: "HomeGetrewardlogdialog",
  props: ["options","isGetRewardLogDialog"],
  data () {
    return {
    }
  },
  mounted () {
      
  },
  methods: {
    closeGetRewardLogDialog () {
        this.$emit('closeGetRewardLogDialog');
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
    position: absolute
    z-index: 999999
    top: 25%
    i
        display: inline-block
        width: 0.64rem
        height: 0.64rem
        position: absolute
        z-index: 7
        right: 0
        background: url('/static/images/close.png') no-repeat
        background-size: 100% 100%
    ul
        position: absolute;
        top: 2rem;
        width: 6rem;
        height: 3rem;
        left: 50%;
        margin-left: -3rem;
        li
            width: 100%
            color: #000
            font-size:.3rem
</style>
