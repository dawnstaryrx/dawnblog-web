<template>
    <login-register-content-field>
        <div style="text-align: center;">
                登录
        </div>
        <hr>
        <div class="row justify-content-md-center">
            <div  class="col-7">
                <form v-if="login_way === -1"  target="iframe">
                    <div class="mb-3">
                        <label for="email" class="form-label">邮箱</label>
                        <input  v-model="loginByCodeData.email" type="text"  class="form-control" id="email" placeholder="请输入邮箱">
                    </div>
                    <label for="code" class="form-label">验证码</label>
                    <div class="mb-3 input-group">
                        <input  v-model="loginByCodeData.code" type="text" class="form-control" placeholder="请输入验证码" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button @click="sendLoginCode()" class="btn btn-outline-secondary" type="button" id="button-addon2">发送</button>
                    </div>
                    <button @click="loginByCode()" type="submit" class="btn btn-primary submit-button">提交</button>
                </form>

                <form v-if="login_way === 1"  target="iframe">
                    <div class="mb-3">
                        <label for="email" class="form-label">邮箱</label>
                        <input v-model="loginByPasswordData.email" type="text"  class="form-control" id="email" placeholder="请输入邮箱">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="loginByPasswordData.password" type="password" class="form-control" placeholder="请输入密码" aria-label="Recipient's username" aria-describedby="button-addon2">
                    </div>
                    <div class="mb-3">
                        <span class="login-by-code-word">
                            <label for="password" class="form-label" style="margin-right: 10px;">验证码</label>
                        </span>
                        <span class="login-by-code-code" >
                            <img src="http://127.0.0.1:8080/createImageCode" 
                            onclick="this.src='http://127.0.0.1:8080/createImageCode?d='+new Date()+1">
                        </span>
                        <input v-model="loginByPasswordData.code" type="text" class="form-control" placeholder="请输入验证码" aria-label="Recipient's username" aria-describedby="button-addon2">
                    </div>
                    <button type="submit" class="btn btn-primary submit-button" 
                    @click="loginByPassword()"
                    >提交</button>
                </form>

                <iframe id="frame" name="iframe" style="display:none;"></iframe>
                <div class="pass-info">
                    <span class="pass-info-password-login" style="color:darkcyan; cursor: pointer;" @click="changeLoginWay">
                        <span v-if="login_way === 1">邮箱验证码登录</span>
                        <span v-if="login_way === -1">密码登录</span>
                    </span>
                    <span class="pass-info-register" >
                        <router-link style="text-decoration: none;" :to="{name: 'user_register'}">
                            没有账号，注册>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </login-register-content-field>
</template>

<script>
import LoginRegisterContentField from "@/components/LoginRegisterContentField.vue"
import commonUtil from '@/utils/alertUtil';
import router from "@/router";
import { useTokenStore } from '@/stores/token.js'
import { useUserInfoStore } from '@/stores/userInfo.js'
import {userLoginByCodeService , userSendLoginCodeService, userGetLoginImgCodeService, userLoginByPasswordService} from "@/api/user.js"
import {userInfoService} from "@/api/user.js"

export default {
    
    components: { LoginRegisterContentField },
    data() {
        return {
            login_way: -1,
            loginByCodeData:{
                email: "",
                code: "",
            },
            loginByPasswordData:{
                email: "",
                password: "",
                code: "",
            },
            loginByPasswordImg:""
        }
    },
    created(){
        this.getLoginImgCode()
    },
    methods:{
        changeLoginWay(){
            this.login_way = -this.login_way;
        },

        sendLoginCode(){
            if(this.loginByCode.email === null){
                commonUtil.message("请输入邮箱", "danger");
                return;
            }
            let result = userSendLoginCodeService(this.loginByCodeData.email)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                
            }
            
        },
        
        loginByCode(){
            let result = userLoginByCodeService(this.loginByCodeData.email, this.loginByCodeData.code)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                // 把得到的token存储到pinia中
                const tokenStore = useTokenStore()
                tokenStore.setToken(result.data)
                // 获取用户信息
                var userInformation = userInfoService().data
                // 把用户的信息也存到pinia中
                const userInfoStore = useUserInfoStore()
                userInfoStore.setInfo(userInformation)
                router.push('/')
            }
        },
        loginByPassword(){
            let result = userLoginByPasswordService(this.loginByPasswordData.email, this.loginByPasswordData.password,this.loginByPasswordData.code)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                // 把得到的token存储到pinia中
                const tokenStore = useTokenStore()
                tokenStore.setToken(result.data)
                // 获取用户信息
                var userInformation = userInfoService().data
                // 把用户的信息也存到pinia中
                const userInfoStore = useUserInfoStore()
                userInfoStore.setInfo(userInformation)
                router.push('/')
            }
        },
        getLoginImgCode(){
            let result = userGetLoginImgCodeService()
            this.loginByPasswordImg = result
        } 
    }
    
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

.login-bu-code-word{
    float: left;
}
.login-by-code-code{
    float: right;
}
</style>