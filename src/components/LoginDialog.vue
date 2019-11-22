<template>
    <section class="login" v-show="isLoginDialog">
        <i @click="closeLoginDialog"></i>
        <img src="../../static/images/login_bg.png" alt />
        <form action>
            <ul>
                <li>
                    <label for="賬號">賬號</label>
                    <input type="text" v-model="options.account" />
                </li>
                <li>
                    <label for="密碼">密碼</label>
                    <input type="password" v-model="options.password" />
                </li>
                <li>
                    <a href="javascript:;">忘記密碼</a>
                </li>
            </ul>
            <a href="javascript:;" class="btn_login" @click="morefunLogin">登入</a>
            <a href="javascript:;" class="btn_fb" @click="login('facebook')">fb</a>
            <a href="javascript:;" class="btn_gp" @click="login('google')">gp</a>
        </form>
    </section>
</template>

<script>
import hello from "hellojs/dist/hello.all";
export default {
    name: "HomeLogindialog",
    props: ["isLoginDialog", "options"],
    data: function() {
        return {};
    },
    mounted() {
        // fb/谷歌第三方登录初始化
        hello.init(
            {
                facebook: "2189015318014723",
                google:
                    "200655537487-ujbtlg3t26q3t4dodj0negkq7ehaj49i.apps.googleusercontent.com"
            },
            {
                redirect_uri: "http://localhost:8080/redirect"
            }
        );
    },
    methods: {
        morefunLogin() {
            // 父组件传过来的是对象，在子组件可以修改值
            this.$emit("morefunLogin");
        },
        login(network) {
            let provider = hello(network);
            let type='';
            let typeId = '';
            provider.login().then(
                response => {
                    console.log(response, response.id);
                    // 在这里利用第三方登录返回的数据
                    if(network == "facebook"){
                        type = 'FaceBook';
                        typeId = 'response.id';
                    } else if(network == "facebook") {
                        type = 'Google';
                        typeId = 'response.id';
                    }
                    axios
                        .post("http://luandou.gamemorefun.net/api/login",{
                            account: response.id,
                            password: '',
                            type: type
                        })
                        .then(result => {
                            console.log(result.data);
                            //接口请求成功后将重要的参数持久化保存起来
                            localStorage.token = result.data.data["token"];
                            localStorage.uuid = result.data.data["uuid"];
                        });
                },
                e => {
                    console.log(e);
                }
            );
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
