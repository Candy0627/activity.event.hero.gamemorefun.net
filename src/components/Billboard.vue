<template>
  <div class="billboard">
    <img src="/static/images/billboard_bg.png" alt width="100%" height="100%" />
    <router-link to="/" class="backIndex">首页</router-link>
    <div class="singleRank">
        <input type="text" placeholder="輸入暱稱查詢戰力">
        <div class="list">
            <span>一區小霸王</span>
            <span>4396.7萬</span>
        </div>
    </div>

    <ul class="moreRank">
        <li>
            <span><img src="/static/images/one.png" alt=""></span>
            <span>1</span>
            <span>一區小霸王</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span><img src="/static/images/two.png" alt=""></span>
            <span>2</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span><img src="/static/images/three.png" alt=""></span>
            <span>3</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>4</span>
            <span>4</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>5</span>
            <span>5</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>6</span>
            <span>6</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>7</span>
            <span>7</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>8</span>
            <span>8</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>9</span>
            <span>9</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
        <li>
            <span>10</span>
            <span>10</span>
            <span>一區小霸王2</span>
            <span>4396.7萬</span>
        </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "HomeBillboard",
  props: ["options", "isBillboard"],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.billboard
    position relative;
    .moreRank
        width: 5.8rem;
        height: 5.58rem;
        position: absolute;
        top: 6.08rem;
        left: 50%;
        margin-left: -2.9rem;
        li
            display:flex
            width 100%
            height .5rem
            line-height .5rem
            font-size .3rem
            color :#ab2a2a
            &:nth-child(1)
                height .7rem
                line-height .7rem
                background:url('/static/images/one_bg.png') no-repeat
                background-size:100% 100%
            &:nth-child(2)
                height .7rem
                line-height .7rem
                background:url('/static/images/two_bg.png') no-repeat
                background-size:100% 100%
            &:nth-child(3)
                height .7rem
                line-height .7rem
                background:url('/static/images/three_bg.png') no-repeat
                background-size:100% 100%
            
            span
                text-align center
                img
                    width .47rem
                    height .67rem
                    padding-left: .2rem;
                &:nth-child(1)
                    flex:.5
                &:nth-child(2)
                    flex:.5
                &:nth-child(3)
                    flex:1
                &:nth-child(4)
                    flex:1
    .singleRank
        width: 4.64rem;
        height: 1.36rem;
        position: absolute;
        top: 2.73rem;
        left: 50%;
        margin-left: -2.32rem;
        input
            width 100%
            height .45rem
            padding-left .1rem
            font-weight 700
            font-size .24rem
            color #444444
            background: none
            border:none
        .list
            display: flex;
            width :100%;
            position: absolute;
            top: 0.95rem;
            height: .45rem;
            line-height: .45rem;
            span
                flex:1
                text-align center
                font-size .3rem
                color #ecbc53
</style>
