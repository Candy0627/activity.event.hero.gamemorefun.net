<template>
    <div class="confessionWall" v-show="isConfessionWall">
        <img src="/static/images/wall.jpg" alt />
        <a href="javascript:;" class="backIndex">首页</a>
        <div class="wall">
            <!-- 弹幕 -->

            <div id="container">
                <video id="video" src="/static/videos/demo.mp4" controls></video>
            </div>

            <div class="danmaku-editor">
                <div id="avatar-selector"></div>
                <input type="text" id="danmaku_input" placeholder="輸入內容發送評論彈幕" />
                <button id="danmaku_submit" @click="sendBarrage(e)">發送</button>
            </div>
            <p id="msg_box"></p>

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
import axios from "axios";
import Barrage from "barrage-ui";
// import example from "barrage-ui/example.json";

export default {
    name: "HomeConfessionWall",
    props: ["isConfessionWall"],
    data() {
        return {
            barrageData: []
        };
    },
    mounted() {
        this.set_barrage();
    },
    methods: {
        confessionWall() {
            this.$emit("openConfessionWall");
        },
        get_barrage() {
            let that = this;
            axios.defaults.headers.common["Authorization"] = localStorage.token;
            axios
                .get("http://luandou.gamemorefun.net/api/barrage/get")
                .then(function(res) {
                    var data = res.data;
                    var newData = data.map((item, i) => {
                        return {
                            key: item.id,
                            time: 100 * (i + Math.random()),
                            text: item.msg,
                            fontSize: 16,
                            color: "#fff"
                        };
                    });
                    that.barrageData = newData;
                    console.log("新数据", that.barrageData);
                });
        },
        set_barrage() {
            var that = this;
            const container = document.getElementById("container");
            const barrage = new Barrage({
                container: container,
                config: {
                    duration: -1,
                    duration: 20000,
                    fontFamily: "Microsoft Yahei",
                    defaultColor: "#fff",
                    fontSize: 16
                }
            });

            axios.defaults.headers.common["Authorization"] = localStorage.token;
            axios
                .get("http://luandou.gamemorefun.net/api/barrage/get")
                .then(function(res) {
                    var data = res.data;
                    var newData = data.map((item, i) => {
                        return {
                            key: item.id,
                            time: 100 * (i + Math.random()),
                            text: item.msg,
                            fontSize: 16,
                            color: "#fff"
                        };
                    });
                    that.barrageData = newData;
                    console.log("新数据", that.barrageData);
                    barrage.setData(that.barrageData);
                    barrage.canvas.height = container.clientHeight - 30;
                });

            // 绑定播放事件
            video.addEventListener(
                "play",
                () => {
                    barrage.play();
                },
                false
            );

            // 绑定暂停事件
            video.addEventListener(
                "pause",
                () => {
                    barrage.pause();
                },
                false
            );

            // 播放进度事件
            video.addEventListener(
                "seeked",
                () => {
                    barrage.goto(video.currentTime * 1000);
                },
                false
            );
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../assets/style.css';

.confessionWall {
    position: relative;
    z-index: -1;

    .backIndex {
        display: block;
        position: absolute;
        width: 1.2rem;
        height: 0.6rem;
        top: 1.56rem;
        right: 0;
        text-indent: -9999px;
    }

    .wall {
        width: 6.48rem;
        position: absolute;
        top: 2.58rem;
        left: 50%;
        margin-left: -3.24rem;

        .danmaku-editor {
            position: relative;

            #danmaku_input {
                position: absolute;
                top: 0.1rem;
                padding-left: 0.3rem;
                width: 68%;
                height: 0.5rem;
                border: none;
                background: none;
            }

            #danmaku_submit {
                position: absolute;
                right: 0;
                width: 1.6rem;
                height: 0.6rem;
                top: 0.1rem;
            }
        }

        #container, .video {
            width: 6.3rem;
            height: 3.54rem;
            position: absolute;
            left: 50%;
            margin-left: -3.15rem;
            top: 0;

            em {
                width: 0.63rem;
                height: 0.63rem;
                position: absolute;
                left: 50%;
                margin-left: -0.315rem;
                top: 50%;
                margin-top: -0.315rem;
                background: url('/static/images/btn_video.png') no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }

            video {
                position: absolute;
                width: 6.3rem;
                height: 3.56rem;
                top: 0;
            }
        }

        img {
            width: 6.5rem;
            height: 3.89rem;
            margin: 0 auto;
        }

        .sendMessage {
            width: 100%;
            height: 0.51rem;
            position: absolute;
            top: 4rem;

            input {
                font-size: 0.24rem;
                color: #444444;
                width: 4.589rem;
                height: 0.38rem;
                padding-left: 0.2rem;

                &.send {
                    width: 1.58rem;
                    height: 0.51rem;
                    background: none;
                    border: none;
                    text-indent: -9999px;
                }
            }
        }

        .winnerList {
            width: 4.52rem;
            height: 1.54rem;
            position: absolute;
            top: 6.65rem;
            left: 50%;
            margin-left: -2.26rem;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 0.39rem;
                line-height: 0.39rem;

                span {
                    font-size: 0.01rem;
                    color: #ecbc53;
                    flex: 1;
                    display: inline-block;

                    &:nth-child(1) {
                        padding-left: 0.3rem;
                        flex: 0.96;
                    }
                }
            }
        }
    }
}
</style>
