<template>
    <login-register-content-field>
        <div style="text-align: center;">
                注册
        </div>
        <hr>
        <div class="row justify-content-md-center">
            <div  class="col-7">
                <form target="iframe">
                    <div class="mb-1">
                        <label for="email" class="form-label">邮箱</label>
                        <input v-model="registerData.email" type="text"  class="form-control" id="email" placeholder="请输入邮箱">
                    </div>
                    <label for="code" class="form-label">验证码</label>
                    <div class="mb-1 input-group">
                        <input v-model="registerData.code" type="text" class="form-control" placeholder="请输入验证码" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button @click="sendRegisterCode()" class="btn btn-outline-secondary" type="button" id="code">发送</button>
                    </div>
                    <div class="mb-1">
                        <label for="password" class="form-label">密码</label>
                        <input autocomplete="on" v-model="registerData.pwd" type="password"  class="form-control" id="password" placeholder="请输入密码">
                    </div>
                    <div class="mb-1">
                        <label for="repassword" class="form-label">确认密码</label>
                        <input autocomplete="on" v-model="registerData.repwd" type="password"  class="form-control" id="repassword" placeholder="请再次输入密码">
                    </div>
                    <button @click="register()" @keyup.enter="register()"
                    type="submit" class="btn btn-primary submit-button">提交</button>
                    
                </form>

                <iframe id="frame" name="iframe" style="display:none;"></iframe>

                
                <div class="pass-info">
                    <span class="pass-info-register">
                        <router-link style="text-decoration: none;" :to="{name: 'user_login'}">
                            已有账号，登录>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </login-register-content-field>



</template>

<script>
import LoginRegisterContentField from "@/components/LoginRegisterContentField.vue"
import {userSendRegisterCodeService, userRegisterService} from "@/api/user.js"
import commonUtil from '@/utils/alertUtil';
import router from '@/router';

export default {
    components: { LoginRegisterContentField },

    data() {
        return {
            registerData:{
                email: "",
                code: "",
                pwd: "",
                repwd: ""
            }
        }
    },
    setup() {
    
    },
    methods:{
        sendRegisterCode(){
            let result = userSendRegisterCodeService(this.registerData.email)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
            }
        },
        register(){
            // 两次密码要一致
            if(this.registerData.pwd != this.registerData.repwd){
                commonUtil.message("两次密码不一致", "danger");
                return;
            }
            let transRegisterData = {
                "email": this.registerData.email,
                "code": this.registerData.code,
                "password": this.registerData.pwd
            }

            let result = userRegisterService(transRegisterData)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                router.push('/user/login')
            }
        },
    },

};

</script>

<style scoped>
.submit-button{
    width: 100%;
}
.pass-info{
    margin-top: 10px;
}
.pass-info-password-login{
    float: left;
}
.pass-info-register{
    float: right;
}
</style>