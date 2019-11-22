<template>
    <div id="app">
        <home-banner :isBanner="isBanner"></home-banner>
        <home-topnav @openTopMenu="openTopMenu"></home-topnav>
        <home-topmenu
            :isTopMenu="isTopMenu"
            :options="options"
            @closeTopMenu="closeTopMenu"
            @openLoginDialog="openLoginDialog"
        ></home-topmenu>
        <home-botnav @openConfessionWall="openConfessionWall" :isBotNav="isBotNav"></home-botnav>
        <home-mask :isMaskShow="isMaskShow"></home-mask>
        <home-logindialog
            :isLoginDialog="isLoginDialog"
            :options="options"
            @morefunLogin="morefunLogin"
        ></home-logindialog>
        <home-selectserverdialog
            :isSelectServerDialog="isSelectServerDialog"
            :options="options"
            @confirmSelectServer="confirmSelectServer"
            @cancelSelectServerDialog="cancelSelectServerDialog"
            @choseServer="choseServer"
            @closeSelectServerDialog="closeSelectServerDialog"
        ></home-selectserverdialog>

        <home-myaccountdialog
            :isMyAccountInfoDialog="isMyAccountInfoDialog"
            :options="options"
            @switchServer="switchServer"
            @accountOut="accountOut"
            @closeMyAccountInfoDialog="closeMyAccountInfoDialog"
        ></home-myaccountdialog>

        <home-confessionWall :isConfessionWall="isConfessionWall"></home-confessionWall>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import axios from "axios";
import HomeBanner from "./components/Banner";
import HomeTopnav from "./components/Topnav";
import HomeBotnav from "./components/Botnav";
import HomeTopmenu from "./components/Topmenu";
import HomeMask from "./components/Mask";
import HomeLogindialog from "./components/LoginDialog";
import HomeSelectserverdialog from "./components/SelectServer";
import HomeMyaccountdialog from "./components/Myaccountinfo";
import HomeConfessionWall from "./components/ConfessionWall";

export default {
    name: "App",
    components: {
        HomeBanner,
        HomeTopnav,
        HomeTopmenu,
        HomeBotnav,
        HomeMask,
        HomeLogindialog,
        HomeSelectserverdialog,
        HomeMyaccountdialog,
        HomeConfessionWall
    },
    data() {
        return {
            options: {
                account: "",
                password: "",
                myAccountInfo: "登錄賬號",
                roles: [],
                selected: "",
                serverId: "",
                userName: "",
                roleName: "",
                serverInfo: "",
                serverInfoSelected: "",
                ServerName: ""
            },
            isMaskShow: false,
            isBanner: true,
            isBotNav: true,
            isTopMenu: false,
            isLoginDialog: false,
            isSelectServerDialog: false,
            isMyAccountInfoDialog: false,
            isConfessionWall: false
        };
    },
    mounted() {
        
        var token = localStorage.getItem("token");
        var user_name = localStorage.getItem("userName");
        var role_name = localStorage.getItem("roleName");
        var server_id = localStorage.getItem("serverId");
        // console.log("刚开始的状态token", token);
        if (token == "" || token == null) {
            this.options.myAccountInfo = "登錄賬號";
        } else {
            this.options.myAccountInfo = "賬號信息";
            this.options.userName = user_name;
            this.options.roleName = role_name;
            this.options.serverId = server_id;

            this.options.serverInfo = localStorage.getItem("serverInfo");
            this.options.serverInfoSelected = localStorage.getItem(
                "serverInfoSelected"
            );
            this.options.roles = JSON.parse(this.options.serverInfo);
            this.options.selected = JSON.parse(this.options.serverInfoSelected);

            this.options.roles.ServerName = this.options.selected.ServerName;
            this.options.roles.ServerId = this.options.selected.ServerId;
        }
    },
    methods: {
        closeTopMenu() {
            this.isMaskShow = false;
            this.isTopMenu = false;
        },
        closeMyAccountInfoDialog() {
            this.isMaskShow = false;
            this.isMyAccountInfoDialog = false;
        },
        closeSelectServerDialog() {
            this.isMaskShow = false;
            this.isSelectServerDialog = false;
        },
        openTopMenu() {
            this.isTopMenu = true;
        },
        openLoginDialog() {
            this.isTopMenu = false;
            var myAccountInfo = this.options.myAccountInfo;
            // console.log("token", localStorage.getItem("token"));
            var token = localStorage.getItem("token");

            if (myAccountInfo == "賬號信息") {
                // 已登录状态———弹出我的账号信息弹出框
                this.isMaskShow = true;
                this.isMyAccountInfoDialog = true;
            } else if (myAccountInfo == "登錄賬號") {
                // 未登录状态{1.未登陆直接弹出登录框 2.已登录未选择区服}
                if (token == "" || token == null) {
                    // console.log("请您先进行登陆");
                    this.isMaskShow = true;
                    this.isLoginDialog = true;
                } else {
                    this.$layer.msg("您已经登陆过了");
                    this.isMaskShow = true;
                    this.isSelectServerDialog = true;
                }
            }
        },
        openConfessionWall() {
            this.isBanner = false;
            this.isConfessionWall = true;
        },
        morefunLogin() {
            if (!this.options.account) {
                this.$layer.msg("账号不能为空!");
            } else if (!this.options.password) {
                this.$layer.msg("密码不能为空!");
            } else {
                axios.defaults.headers.common["Authorization"] =
                    localStorage.token;
                var params = {
                    account: this.options.account,
                    password: this.options.password,
                    type: "MBean"
                };

                var that = this;
                axios
                    .post("http://luandou.gamemorefun.net/api/login", params)
                    .then(result => {
                        if (result.data.success == true) {
                            localStorage.token = result.data.data["token"];
                            localStorage.uuid = result.data.data["uuid"];

                            that.isLoginDialog = false;
                            that.isMaskShow = false;
                            that.$layer.msg("登录成功！");
                            that.isSelectServerDialog = true;
                            that.isMaskShow = true;

                            that.options.userName = result.data.data.user_name;
                            that.options.roles = result.data.data.role;

                            // console.log("用户名：", that.options.userName);

                            localStorage.setItem(
                                "userName",
                                that.options.userName
                            );
                        } else {
                            this.$layer.msg("您输入的信息不正确！");
                        }
                    });
            }
        },
        confirmSelectServer() {
            // 确认选择区服按钮
            this.isSelectServerDialog = false;
            this.isMaskShow = false;
            // 选择区服信息真正表示登陆成功后，改变状态
            this.options.myAccountInfo = "賬號信息";
        },
        cancelSelectServerDialog() {
            this.isSelectServerDialog = false;
            this.isMaskShow = false;
        },
        switchServer() {
            // 我的账号信息跳转到选择伺服器
            this.isMyAccountInfoDialog = false;
            this.isSelectServerDialog = true;
        },
        accountOut() {
            this.isMaskShow = false;
            this.isMyAccountInfoDialog = false;
            this.options.myAccountInfo = "登錄賬號";
            localStorage.clear();
        },
        choseServer(server_id, role_name) {
            this.options.serverId = server_id;
            this.options.roleName = role_name;
            // console.log(
            //     "我是从子组件获取到父组件的区服id",
            //     this.options.serverId,
            //     this.options.roleName
            // );
        }
    }
};
</script>

<style>
.vl-notify-content-div,
.vl-notify-msg {
    position: fixed;
    z-index: 99999999;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    background: bgra(0, 0, 0, 0.6);
}
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
    z-index: 0;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
}
</style>
