<template>
    <section class="login selectServer" v-show="isSelectServerDialog">
        <i @click="closeSelectServerDialog"></i>
        <img src="/static/images/select_qufu.png" alt />
        <form action>
            <select name="server" @change="choose($event)" class="server">
                <option>请选择区服</option>
                <template v-for="(item,key) in options.roles">
                    <option :value="item.ServerId" :key="item.ServerId" :selected="options.serverId == item.ServerId">{{item.ServerName}}</option>
                </template>
            </select>
            <select name="role" class="role">
                <option>请选择角色</option>
                <option v-if="options.selected" selected>{{options.selected.RoleName}}</option>
            </select>

            <a href="javascript:;" class="btn_confirm" @click="confirm()"></a>
            <a href="javascript:;" class="btn_cancel" @click="cancel()">fb</a>
        </form>
    </section>
</template>

<script>
export default {
    name: "HomeSelectserverdialog",
    props: ["isSelectServerDialog","options"],
    data: function() {
        return {
            server_id:'',
        }
    },
    methods: {
        confirm() {
            this.$emit("confirmSelectServer");
        },
        cancel() {
            this.$emit("cancelSelectServerDialog");
        },
        closeSelectServerDialog() {
            this.$emit("closeSelectServerDialog");
        },
        choose(e) {
            var server_id = e.target.value;
            this.server_id = server_id;

            console.log('当前选中的server_id',server_id);
            //根据server_id循环查找到用户选择的项
            this.options.selected = this.options.roles.find(item => {
                return item.ServerId == server_id ? item : false;
            });

            if(!this.options.selected){
                
            } else {
                console.log('this.options.selected.length',this.options.selected.lengt);
                // localStorage.serverInfo = this.options.selected;

                var serverInfo = JSON.stringify(this.options.roles);
                localStorage.setItem("serverInfo",serverInfo);

                var serverInfoSelected = JSON.stringify(this.options.selected);
                localStorage.setItem("serverInfoSelected",serverInfoSelected);
            }

            console.log("当前选中的角色名是",this.options.selected.RoleName);
            this.options.roleName = this.options.selected.RoleName;
            this.$emit('choseServer',this.server_id,this.options.roleName);
            localStorage.setItem("serverId",this.server_id);
            localStorage.setItem("roleName",this.options.roleName);
        }
    }
};
</script>

<style lang="stylus" scoped>
.selectServer {
    position: absolute;
    top: 25%;
    z-index: 9999;

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

        .server {
            position: absolute;
            top: 1.98rem;
            left: 1.5rem;
            height: 0.55rem;
            width: 4.6rem;
            background: none;
        }

        .role {
            position: absolute;
            top: 3.62rem;
            left: 1.5rem;
            height: 0.55rem;
            width: 4.6rem;
            background: none;
        }
    }

    a {
        width: 1.3rem;
        height: 0.4rem;
        display: block;
        text-indent: -9999px;
        position: absolute;
        left: 3.5rem;
        top: 4.9rem;

        &.btn_confirm {
            width: 2.1rem;
            height: 0.6rem;
            top: 4.48rem;
            left: 50%;
            margin-left: -2.4rem;
        }

        &.btn_cancel {
            width: 2.1rem;
            height: 0.6rem;
            top: 4.8rem;
            margin-left: 0.54rem;
        }
    }

    ul {
        position: absolute;
        width: 4.8rem;
        height: 2.2rem;
        left: 50%;
        margin-left: -2.4rem;
        top: 1.98rem;

        li {
            &.nth-child(2) {
                margin-top: 1rem !important;
            }

            span {
                position: absolute;
                left: 0.2rem;
                top: 0.6rem;
                font-size: 0.3rem;
            }

            select {
                width: 100%;
                height: 0.55rem;
                background: none;
                border: none;
                padding-left: 0.2rem;
                text-align: center;
                font-size: 0.3rem;
                font-family: '微软雅黑';
            }

            input {
                position: absolute;
                top: 1.65rem;
                height: 0.56rem;
                padding-left: 0.3rem;
                width: 85%;
                background: none;
                border: none;
            }
        }
    }
}
</style>
