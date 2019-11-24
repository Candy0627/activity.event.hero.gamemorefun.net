<template>
  <div class="celebration">
    <img src="/static/images/celebration_bg.png" alt width="100%" height="100%" />
    <router-link to="/" class="backIndex">首页</router-link>
    <div class="heroShare">
        <ul>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
            <li>
                <img src="/static/images/dc.png" alt="">
            </li>
        </ul>
        <a href="javascript:;" class="fb_share"></a>
        <a href="javascript:;" class="get_reward"></a>
    </div>
    <div class="signIn">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <a href="javascript:;" class="get_sign"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCelebration",
  props: ["options", "isCelebration"],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.celebration
    position relative;
    .signIn
        width: 6rem;
        height: 9.05rem;
        position: absolute;
        top: 15.9rem;
        left: 50%;
        margin-left: -3rem;
        ul
            display flex
            flex-wrap wrap
            justify-content space-between
            li
                width 1.6rem
                height 1.6rem
                border-radius:100%
                margin-bottom: .13rem;
        a
            display: inline-block;
            position: absolute;
            width: 3.68rem;
            height: 0.72rem;
            bottom: .8rem;
            left: 50%;
            margin-left: -1.84rem;
            cursor: pointer
    .heroShare
        width: 6rem;
        height: 9.05rem;
        position: absolute;
        top: 3.17rem;
        left: 50%;
        margin-left: -3rem;
        a
            display: inline-block;
            position: absolute;
            width :2.76rem;
            height :.72rem;
            bottom: 0;
            &.fb_share
                left: 0
                background:url('/static/images/btn_share.png') no-repeat
                background-size:100% 100%
                cursor: pointer
            &.get_reward
                right: 0
                background:url('/static/images/btn_get_record.png') no-repeat
                background-size:100% 100%
                cursor: pointer
        ul
            li
                position absolute
                width :1.02rem;
                height :1.02rem;
                cursor: pointer;
                &:nth-child(1){
                    left:2.47rem
                }
                &:nth-child(2){
                    left:.33rem
                    top:1.15rem
                }
                &:nth-child(3){
                    left:1.4rem
                    top:1.15rem
                }
                &:nth-child(4){
                    left:2.47rem
                    top:1.15rem
                }
                &:nth-child(5){
                    left:2.47rem
                    top:2.36rem
                }
                &:nth-child(6){
                    left:2.47rem
                    top:3.53rem
                }
                &:nth-child(7){
                    left:2.47rem
                    top:4.7rem
                }
                &:nth-child(8){
                    left:.33rem
                    top:5.85rem
                }
                &:nth-child(9){
                    left:1.4rem
                    top:5.85rem
                }
                &:nth-child(10){
                    left:2.47rem
                    top:5.85rem
                }
                &:nth-child(11){
                    left:3.64rem
                    top:5.85rem
                }
                &:nth-child(12){
                    left:4.77rem
                    top:5.85rem
                }
                img
                    width :100%
                    
            
</style>
