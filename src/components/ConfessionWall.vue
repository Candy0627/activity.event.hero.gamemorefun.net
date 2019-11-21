<template>
        <div class="confessionWall" v-show="isConfessionWall">
            <img src="/static/images/wall.jpg" alt="">
            <a href="javascript:;" class="backIndex">首页</a>
            <div class="wall">
                <section class="video">
                    <video width="100%" height="100%" id="video1"></video>
                    <!-- <video id="video">
                        <source src="/images/video.mp4" type="video/mp4">
                    </video>
                    <em v-on:click = "openVideo()" v-show="isOpen"></em> -->
                </section>

                <div class="sendMessage">
                    <input type="text" placeholder="輸入內容發送評論彈幕">
                    <input type="submit" value="發送" class="send">
                </div>

                <div class="winnerList">
                    <li>
                        <span>11月28日</span>
                        <span>一區小霸王</span>
                    </li>
                    <li>
                        <span>11月28日</span>
                        <span>一區小霸王</span>
                    </li>
                    <li>
                        <span>11月28日</span>
                        <span>一區小霸王</span>
                    </li>
                    <li>
                        <span>11月28日</span>
                        <span>一區小霸王</span>
                    </li>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "HomeConfessionWall",
  props:["isConfessionWall"],
  methods:{
    confessionWall(){
      this.$emit('openConfessionWall');
    }
  }
};
</script>

<style lang="stylus" scoped>
.confessionWall
    position: relative
    z-index: -1
    .backIndex
        display: block
        position: absolute
        width: 1.2rem
        height: 0.6rem
        top: 1.56rem
        right: 0
        text-indent: -9999px
    .wall
        width: 6.48rem
        position: absolute
        top: 2.58rem
        left: 50%
        margin-left: -3.24rem
        .video
            width: 6.3rem
            height: 3.54rem
            position: absolute
            left: 50%
            margin-left: -3.15rem
            top: 0
            em
                width: .63rem
                height: .63rem
                position: absolute
                left: 50%
                margin-left: -.315rem
                top: 50%
                margin-top: -.315rem
                background: url('/static/images/btn_video.png') no-repeat
                background-size: 100% 100%
                cursor: pointer
            video
                position: absolute
                width: 100%
                height: 100%
                top: 0
        img
            width: 6.5rem
            height: 3.89rem
            margin: 0 auto
        .sendMessage
            width: 100%
            height: 0.51rem
            position: absolute
            top: 4rem
            input
                font-size: 0.24rem
                color: #444444
                width: 4.589rem
                height: 0.38rem
                padding-left: 0.2rem
                &.send
                    width: 1.58rem
                    height: .51rem
                    background: none
                    border: none
                    text-indent: -9999px
        .winnerList
            width: 4.52rem
            height: 1.54rem
            position: absolute
            top: 6.65rem
            left: 50%
            margin-left: -2.26rem
            li
                display: flex
                justify-content: center
                align-items: center
                width: 100%
                height: .39rem
                line-height: .39rem
                span
                    font-size: 0.01rem
                    color: #ecbc53
                    flex: 1
                    display: inline-block
                    &:nth-child(1)
                        padding-left: .3rem
                        flex: .96
</style>
