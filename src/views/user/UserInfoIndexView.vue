<template>
  <content-field >
    <div class="row" style="height: 80vh;">
      <div class="col-3" >
        <div class="card-body">
          <img :src="now_user.avatar" style="width: 100%;" alt="" />
        </div>
        <div   style="text-align: center;">
          <div class="input-group mb-3">
            <input class="form-control" accept=".png,.jpg,.jpeg" @change="handleFileUpload" type="file" id="formFile">
            <button @click="updateAvatar()" class="btn btn-outline-secondary" type="button" id="formFile">更新头像</button>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1">个人信息</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">修改密码</a>
        </div>
      </div>
      <div class="col-7">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
          <h3 id="list-item-1">个人信息</h3>
          <div class="mb-3 row">
            <label for="Email" class="col-sm-2 col-form-label">邮箱</label>
            <div class="col-sm-10" style="margin-bottom: 10px;">
              <input type="text" readonly class="form-control-plaintext" id="Email" :value=now_user.email>
            </div>
            <label for="Username" class="col-sm-2 col-form-label">用户名</label>
            <div class="col-sm-10" style="margin-bottom: 10px;">
              <input v-model="now_user.username" type="text" class="form-control" id="Username">
            </div>
            <label for="Introduction" class="col-sm-2 col-form-label">个性签名</label>
            <div class="col-sm-10" style="margin-bottom: 10px;">
              <input v-model="now_user.introduction" type="text" class="form-control" id="Introduction">
            </div>
          </div>
          <button @click="updateUserInfo()" class="btn btn-success" style="margin-bottom: 30px;" >更新个人信息</button>
          <h3 id="list-item-2">修改密码</h3>
          <div class="mb-3 row">
            <label for="oldPwd" class="col-sm-2 col-form-label" >原密码</label>
            <div class="col-sm-10">
              <input v-model="pwd.oldPwd" type="password" class="form-control" id="oldPwd" style="margin-bottom: 10px;">
            </div>
            <label for="newPwd" class="col-sm-2 col-form-label" style="margin-bottom: 10px;">新密码</label>
            <div class="col-sm-10">
              <input v-model="pwd.newPwd" type="password" class="form-control" id="newPwd">
            </div>
            <label for="rePwd" class="col-sm-2 col-form-label" style="margin-bottom: 10px;">确认密码</label>
            <div class="col-sm-10">
              <input v-model="pwd.rePwd" type="password" class="form-control" id="rePwd">
            </div>
          </div>
          <button @click="updateUserPwd()" class="btn btn-success" style="margin-bottom: 30px;" >修改密码</button>
        </div>
      </div>
</div>
  </content-field>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import commonUtil from '@/utils/alertUtil';
import { useUserInfoStore } from '@/stores/userInfo.js'
import { useTokenStore } from '@/stores/token.js'
import {userInfoUpdateService, userPwdUpdateService, userAvatarUpdateService} from '@/api/user.js'

export default {
    components: { ContentField },
    created() {
      const userInfoStore = useUserInfoStore()
      this.now_user = userInfoStore.info
    },
    data() {
      return {
        now_user: {},
        pwd:{
          oldPwd: "",
          newPwd: "",
          rePwd: "",
        },
        file: null,
      }
    },
    methods:{
      updateUserInfo(){
        let result = userInfoUpdateService(this.now_user.username, this.now_user.introduction)
        if(result.code === 1){
          commonUtil.message(result.message, "danger");
        }
        if(result.code === 0){
          commonUtil.message(result.message, "success");
        }
      },
      updateUserPwd(){
        let result = userPwdUpdateService(this.pwd)
        if(result.code === 1){
          commonUtil.message(result.message, "danger");
        }
        if(result.code === 0){
          commonUtil.message(result.message, "success");
          const tokenStore = useTokenStore()
          tokenStore.removeToken();
          location.reload()
        }
      },
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      updateAvatar(){
        let formData = new FormData();
        formData.append('file', this.file);
        
        let result = userAvatarUpdateService(formData)
        if(result.code === 1){
          commonUtil.message(result.message, "danger");
        }
        if(result.code === 0){
          commonUtil.message(result.message, "success");
          location.reload()
        }
      }
    }
}
</script>

<style>

</style>